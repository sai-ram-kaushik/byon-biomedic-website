import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ about }) => {
   const { imageUrl, vision, mission } = about;
   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

   return (
      <motion.section 
         initial={{ opacity: 0, y: 50 }} 
         animate={{ opacity: 1, y: 0 }} 
         transition={{ duration: 0.8 }}
         className="w-full py-16 px-6 lg:px-20 bg-gray-50"
      >
         <TransitionEffect />

         {/* About Us Section */}
         <motion.div 
            ref={ref} 
            initial={{ opacity: 0, x: -50 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto mb-12"
         >
            <h3 className="text-4xl font-extrabold text-secondary mb-4">About Us</h3>
            <p className="text-lg leading-relaxed text-gray-700">
               At Byon Biomedic Malaysia Sdn. Bhd., we are committed to revolutionizing healthcare through the power of nature. By merging traditional botanical wisdom with modern scientific rigor, we develop innovative phytomedicines that are both safe and effective. Our approach is rooted in ethical sourcing, sustainability, and a steadfast dedication to improving global health. We believe that natural therapies can pave the way for transformative healing—benefiting communities, preserving our planet, and inspiring wellness for generations to come.
            </p>
         </motion.div>

         {/* Core Values Section */}
         <motion.div 
            ref={ref} 
            initial={{ opacity: 0, x: 50 }} 
            animate={inView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto mb-12"
         >
            <h3 className="text-4xl font-extrabold text-secondary mb-6 text-center">Core Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
               <li><strong>Innovation:</strong> Constantly pushing the boundaries of phytomedicine through research and development.</li>
               <li><strong>Integrity:</strong> Upholding the highest standards of transparency, ethics, and scientific validation.</li>
               <li><strong>Sustainability:</strong> Committing to ethical wildcrafting and sustainable agricultural practices to protect our environment.</li>
               <li><strong>Collaboration:</strong> Partnering with global research institutions and industry experts to blend traditional wisdom with modern science.</li>
               <li><strong>Excellence:</strong> Striving for superior quality in every formulation and clinical outcome.</li>
            </ul>
         </motion.div>

         {/* Vision and Mission Section */}
         <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
            <motion.img 
               src={imageUrl} 
               className="rounded-xl max-w-sm shadow-xl"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={inView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.div 
               ref={ref} 
               initial={{ opacity: 0, y: 50 }} 
               animate={inView ? { opacity: 1, y: 0 } : {}} 
               transition={{ duration: 0.8, delay: 0.8 }}
               className="flex flex-col items-start gap-6 max-w-lg"
            >
               <div>
                  <h3 className="text-3xl font-bold text-secondary mb-2">Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
               </div>
               <div>
                  <h3 className="text-3xl font-bold text-secondary mb-2">Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
               </div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default About;
