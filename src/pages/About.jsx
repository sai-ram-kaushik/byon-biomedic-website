import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";

const About = ({ about }) => {
  const { imageUrl,imageUrl2, vision, mission } = about;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full px-6 py-20 md:px-16 lg:px-28 bg-gray-50 text-gray-900"
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

      {/* Core Values */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-20 px-2"
      >
        <h3 className="text-4xl font-extrabold text-primary mb-10 text-center tracking-tight">Core Values</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
          <motion.li whileHover={{ scale: 1.03 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🚀 Innovation:</strong> Pioneering the future of phytomedicine through <span className="font-bold text-gray-900">cutting-edge research</span> and development.
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🛡️ Integrity:</strong> Upholding the <span className="font-bold text-gray-900">highest standards</span> of transparency, ethics, and scientific validation.
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🌱 Sustainability:</strong> Committed to <span className="font-bold text-gray-900">ethical wildcrafting</span> and sustainable agriculture for a greener future.
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🤝 Collaboration:</strong> Partnering with <span className="font-bold text-gray-900">leading researchers</span> and industry experts to merge tradition with science.
          </motion.li>
          <motion.li whileHover={{ scale: 1.03 }} className="p-6 bg-white shadow-xl rounded-xl">
            <strong className="text-gray-900">🏆 Excellence:</strong> Striving for <span className="font-bold text-gray-900">superior quality</span> in every formulation, every breakthrough, and every outcome.
          </motion.li>
        </ul>
      </motion.div>

      {/* Vision + Mission Section */}
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
