import { useEffect, useRef } from "react";
import * as twgl from "twgl.js";

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Resize helper
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Vertex shader
    const vs = `
      attribute vec4 position;
      void main() {
        gl_Position = position;
      }
    `;

    // Refined fragment shader: smoother noise and interpolation
    const fs = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_scroll;

      // 2D random
      float random(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // Interpolated noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        // smoothstep interpolation
        vec2 u = f * f * (3.0 - 2.0 * f);

        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      // Fractal Brownian Motion
      float fbm(vec2 p) {
        float v = 0.0;
        float amp = 0.6;
        for (int i = 0; i < 6; i++) {
          v += amp * noise(p);
          p = p * 2.0 + 0.5;
          amp *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        uv.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.015;
        float s = u_scroll * 0.0002;

        // swirling coordinates for nebula
        vec2 p = uv * 2.5;
        p += vec2(cos(t + uv.y), sin(t + uv.x)) * 0.2;

        // layered fbm for smooth clouds
        float n1 = fbm(p + t);
        float n2 = fbm(p * 1.5 - t * 0.5);
        float n = mix(n1, n2, 0.5);

        // shape and soften
        float intensity = smoothstep(0.35, 0.65, n);
        intensity = pow(intensity, 1.2);

        // color palette
        vec3 dark = vec3(0.003, 0.006, 0.015);
        vec3 mid  = vec3(0.01, 0.03, 0.08);
        vec3 glow = vec3(0.05, 0.18, 0.28);

        vec3 col = mix(dark, mid, intensity * 0.7);
        col = mix(col, glow, intensity * 0.4);

        gl_FragColor = vec4(col, intensity * 0.3);
      }
    `;

    const programInfo = twgl.createProgramInfo(gl, [vs, fs]);
    const bufferInfo = twgl.primitives.createXYQuadBufferInfo(gl);
    const uniforms = {
      u_time: 0,
      u_resolution: [canvas.width, canvas.height],
      u_scroll: 0,
    };

    // scroll listener
    const onScroll = () => {
      uniforms.u_scroll = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    // render loop
    const render = (time) => {
      uniforms.u_time = time * 0.001;
      twgl.resizeCanvasToDisplaySize(canvas);
      uniforms.u_resolution = [canvas.width, canvas.height];

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      twgl.setUniforms(programInfo, uniforms);
      twgl.drawBufferInfo(gl, bufferInfo);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default FluidBackground;
