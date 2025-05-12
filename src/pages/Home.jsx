import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";
import { motion } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import * as THREE from "three";

const Home = ({ home }) => {
  const { subHeading } = home;
  const canvasRef = useRef(null);
  const threeContainer = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    // Particle Canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 1.5 + 1,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff22";
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      requestAnimationFrame(drawParticles);
    };
    drawParticles();

    // Three.js animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeContainer.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      points.rotation.x += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Blue Wave Animation (CodePen)
    const path = waveRef.current.querySelector("path");
    gsap.to(path, {
      duration: 4,
      repeat: -1,
      ease: "sine.inOut",
      attr: {
        d: "M0 67 C 273,183 822,-40 1920.00,106 V 359 H 0 V 67 Z",
      },
      yoyo: true,
    });
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 lg:px-20 overflow-hidden">
        <div
          ref={threeContainer}
          className="absolute inset-0 z-10 pointer-events-none"
        />

        {/* Blue Wave Animation from CodePen */}
        <div
          className="absolute top-0 left-0 w-full overflow-hidden z-20 pointer-events-none"
          ref={waveRef}
        >
          <svg
            viewBox="0 0 1920 330"
            preserveAspectRatio="none"
            className="w-full h-[30vh]"
          >
            <path
              d="M0 77 C 473,283 1222,-40 1920.00,116 V 359 H 0 V 67 Z"
              fill="#0af"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#13ADC7] blur-[120px] opacity-20 rounded-full z-10 animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#945DD6] blur-[180px] opacity-20 rounded-full z-10 animate-float" />

        <TransitionEffect />

        {/* Hero Section */}
        <div className="relative z-30 w-full px-6 py-10 sm:py-6 lg:py-4 max-w-6xl mx-auto rounded-2xl bg-white/5 backdrop-blur-[5px] border border-white/10 shadow-md flex flex-col items-center justify-center text-center space-y-6">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <AnimatedHeadline />
          </motion.h2>

          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {subHeading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link to={`/medicines`}>
              <Button
                title="See Medicines"
                className="border-white text-white bg-transparent hover:bg-white hover:text-black"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Faq />
      </motion.div>
    </>
  );
};

const AnimatedHeadline = () => {
  const headline =
    "Leveraging Phyto-Scientific Research to Explore the Pharmacological Potential of Plant-Derived Compounds for Human Health and Nature";
  const words = headline.split(" ");

  return (
    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-white whitespace-pre-wrap break-words">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.35em] whitespace-nowrap !text-[#EEC]"
          style={{
            textShadow:
              "0 0 3px rgba(255,255,255,0.15), 0 0 8px rgba(148,93,214,0.2)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05 * i,
            duration: 0.4,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default Home;
