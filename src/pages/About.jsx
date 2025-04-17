import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";

// Optional: Import a molecule-like SVG background or use a CSS pattern generator
import MoleculePattern from "/molecule-bg.jpg"; // ensure this file exists

const About = ({ about }) => {
  const { imageUrl, imageUrl2, vision, mission } = about;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full px-6 py-20 md:px-16 lg:px-28 bg-gray-50 text-gray-900 overflow-hidden"
    >
      <TransitionEffect />

      {/* 🎯 Hero Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto mb-20"
      >
        <h1 className="text-6xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
          Transforming Nature into Healing
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          At <span className="font-semibold text-primary">Byon Biomedic Malaysia Sdn. Bhd.</span>, we are committed to
          revolutionizing healthcare through the power of nature. By merging traditional botanical wisdom with modern
          scientific rigor, we develop <span className="font-bold text-gray-900">innovative phytomedicines</span> that
          are both safe and effective. Our mission extends beyond medicine—we uphold{" "}
          <span className="font-bold text-gray-900">ethical sourcing</span>,{" "}
          <span className="font-bold text-gray-900">sustainability</span>, and a steadfast dedication to{" "}
          <span className="font-bold text-gray-900">improving global health</span>. Through natural therapies, we aspire
          to shape a future where <span className="font-bold text-gray-900">healing is holistic, accessible, and transformative</span>.
        </p>
      </motion.div>

      {/* 🌿 Core Values Section with subtle background */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto mb-20 px-2"
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${MoleculePattern})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        <h3 className="text-4xl font-extrabold text-primary mb-10 text-center tracking-tight z-10 relative">
          Core Values
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700 relative z-10">
          {[
            {
              title: "🚀 Innovation",
              desc: "Pioneering the future of phytomedicine through cutting-edge research and development.",
            },
            {
              title: "🛡️ Integrity",
              desc: "Upholding the highest standards of transparency, ethics, and scientific validation.",
            },
            {
              title: "🌱 Sustainability",
              desc: "Committed to ethical wildcrafting and sustainable agriculture for a greener future.",
            },
            {
              title: "🤝 Collaboration",
              desc: "Partnering with leading researchers and industry experts to merge tradition with science.",
            },
            {
              title: "🏆 Excellence",
              desc: "Striving for superior quality in every formulation, breakthrough, and outcome.",
            },
          ].map((value, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white shadow-xl rounded-xl"
            >
              <strong className="text-gray-900">{value.title}</strong>{" "}
              <span className="text-gray-700">{value.desc}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* 🌐 Vision & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Vision */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-primary mb-3">🌍 Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <motion.img
              src={imageUrl2}
              alt="Vision"
              className="w-full h-[260px] md:h-[280px] lg:h-[300px] object-cover object-center rounded-xl shadow-md"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-xl">
            <motion.img
              src={imageUrl}
              alt="Mission"
              className="w-full h-[260px] md:h-[280px] lg:h-[300px] object-cover object-center rounded-xl shadow-md"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-3xl font-bold text-primary mb-3">🎯 Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
