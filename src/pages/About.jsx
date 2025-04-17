import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";

const About = ({ about }) => {
  const { imageUrl, vision, mission } = about;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-24 px-6 lg:px-28 bg-gray-50 text-gray-900"
    >
      <TransitionEffect />

      {/* About Us Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto mb-20"
      >
        <h3 className="text-5xl font-extrabold text-primary mb-6 tracking-tight">About Us</h3>
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

      {/* Core Values Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h3 className="text-4xl font-extrabold text-primary mb-8 text-center tracking-tight">Core Values</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-700">
          <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🚀 Innovation:</strong> Pioneering the future of phytomedicine through{" "}
            <span className="font-bold text-gray-900">cutting-edge research</span> and development.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🛡️ Integrity:</strong> Upholding the{" "}
            <span className="font-bold text-gray-900">highest standards</span> of transparency, ethics, and scientific
            validation.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🌱 Sustainability:</strong> Committed to{" "}
            <span className="font-bold text-gray-900">ethical wildcrafting</span> and sustainable agriculture for a
            greener future.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🤝 Collaboration:</strong> Partnering with{" "}
            <span className="font-bold text-gray-900">leading researchers</span> and industry experts to merge tradition
            with science.
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🏆 Excellence:</strong> Striving for{" "}
            <span className="font-bold text-gray-900">superior quality</span> in every formulation, every breakthrough,
            and every outcome.
          </motion.li>
        </ul>
      </motion.div>

      {/* Vision + Mission Section – Elite & Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Left: Vision Card + Image */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-2">🌍 Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
          </motion.div>
          <motion.img
            src={imageUrl}
            alt="Vision"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right: Image + Mission Card */}
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <motion.img
            src={imageUrl}
            alt="Mission"
            className="w-full h-auto rounded-xl shadow-2xl object-cover"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-2">🎯 Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
