import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

const Home = ({ home }) => {
  const { subHeading } = home;
  const canvasRef = useRef(null);
  const threeContainer = useRef(null);

  useEffect(() => {
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
        ></div>

        {/* Soft Lighting Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#13ADC7] blur-[120px] opacity-20 rounded-full z-10 animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#945DD6] blur-[180px] opacity-20 rounded-full z-10 animate-float" />
        <div className="absolute top-[10%] right-[20%] w-[200px] h-[200px] bg-[#00ccff] blur-[100px] opacity-30 rounded-full z-10 animate-spin-slow" />
        <div className="absolute bottom-[5%] left-[10%] w-[300px] h-[300px] bg-[#1fa2ff] blur-[160px] opacity-20 rounded-full z-10 animate-float" />

        {/* Liquid Blob Animation (SVG Morphing) */}
        <svg
          className="absolute z-10 w-[600px] h-[600px] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-10 animate-blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#1fa2ff">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M44.8,-77.4C56.4,-66.6,64.2,-56.5,69.5,-45.1C74.8,-33.6,77.7,-20.8,78.4,-7.6C79.2,5.6,77.7,18.2,72.8,29.9C67.8,41.6,59.5,52.5,48.5,61.4C37.5,70.3,23.8,77.3,9.6,75.7C-4.6,74.2,-18.4,64.2,-33.1,56.9C-47.8,49.5,-63.5,44.7,-70.3,34.2C-77.1,23.7,-74.9,7.5,-70.6,-6.7C-66.3,-20.9,-60,-33.1,-52,-45.6C-44.1,-58.1,-34.6,-70.8,-22.1,-79C-9.5,-87.1,6.1,-90.6,20.9,-86.9C35.7,-83.2,49.6,-72.5,44.8,-77.4Z;
                M37.8,-64.5C49.8,-57.6,61.7,-49.5,65.3,-38.8C68.9,-28.2,64.2,-14.1,61.9,-1.1C59.7,11.9,59.9,23.7,56.1,35.7C52.3,47.7,44.5,59.8,33.5,63.8C22.5,67.9,8.2,63.9,-4.6,61.4C-17.5,59,-29,58.1,-41.3,52.7C-53.7,47.2,-66.9,37.3,-72.5,24.7C-78.2,12.1,-76.3,-3.2,-71.5,-16.6C-66.8,-30,-59.1,-41.5,-48.8,-48.9C-38.6,-56.3,-25.9,-59.5,-13.5,-66.1C-1.2,-72.7,10.8,-82.7,22.5,-81.3C34.1,-79.9,45.3,-67.7,37.8,-64.5Z;
                M44.8,-77.4C56.4,-66.6,64.2,-56.5,69.5,-45.1C74.8,-33.6,77.7,-20.8,78.4,-7.6C79.2,5.6,77.7,18.2,72.8,29.9C67.8,41.6,59.5,52.5,48.5,61.4C37.5,70.3,23.8,77.3,9.6,75.7C-4.6,74.2,-18.4,64.2,-33.1,56.9C-47.8,49.5,-63.5,44.7,-70.3,34.2C-77.1,23.7,-74.9,7.5,-70.6,-6.7C-66.3,-20.9,-60,-33.1,-52,-45.6C-44.1,-58.1,-34.6,-70.8,-22.1,-79C-9.5,-87.1,6.1,-90.6,20.9,-86.9C35.7,-83.2,49.6,-72.5,44.8,-77.4Z;
              "
            />
          </path>
        </svg>

        <TransitionEffect />

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
              <Button title="See Medicines" className="border-white text-white bg-transparent hover:bg-white hover:text-black" />
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
