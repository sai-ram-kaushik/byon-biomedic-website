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
               At <span className="font-semibold text-primary">Byon Biomedic Malaysia Sdn. Bhd.</span>, we are committed to revolutionizing healthcare through the power of nature. 
               By merging traditional botanical wisdom with modern scientific rigor, we develop **innovative phytomedicines** that are both safe and effective.
               Our mission extends beyond medicine—we uphold ethical sourcing, sustainability, and a steadfast dedication to **improving global health**. 
               Through natural therapies, we aspire to shape a future where **healing is holistic, accessible, and transformative**.
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
               <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <strong>🚀 Innovation:</strong> Pioneering the future of phytomedicine through **cutting-edge research** and development.
               </motion.li>
               <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <strong>🛡️ Integrity:</strong> Upholding the **highest standards** of transparency, ethics, and scientific validation.
               </motion.li>
               <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <strong>🌱 Sustainability:</strong> Committed to **ethical wildcrafting** and sustainable agriculture for a greener future.
               </motion.li>
               <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <strong>🤝 Collaboration:</strong> Partnering with **leading researchers** and industry experts to merge tradition with science.
               </motion.li>
               <motion.li whileHover={{ scale: 1.05 }} className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <strong>🏆 Excellence:</strong> Striving for **superior quality** in every formulation, every breakthrough, and every outcome.
               </motion.li>
            </ul>
         </motion.div>

         {/* Vision and Mission Section */}
         <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-16">
            <motion.img
               src={imageUrl}
               className="rounded-xl max-w-xs md:max-w-sm lg:max-w-md shadow-2xl border-4 border-primary"
               whileInView={{ opacity: 1, scale: 1 }}
               initial={{ opacity: 0, scale: 0.8 }}
               transition={{ duration: 0.8 }}
            />
            <motion.div
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 50 }}
               transition={{ duration: 0.8 }}
               className="flex flex-col items-start gap-10 max-w-xl"
            >
               <div className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <h3 className="text-3xl font-bold text-primary mb-2">🌍 Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
               </div>
               <div className="p-6 bg-white shadow-xl rounded-xl border-l-4 border-primary">
                  <h3 className="text-3xl font-bold text-primary mb-2">🎯 Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
               </div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default About;
