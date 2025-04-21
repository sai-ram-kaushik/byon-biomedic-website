import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";
import { motion } from "framer-motion";

const Home = ({ home }) => {
   const { subHeading, imageUrl } = home;

   return (
      <>
         <div
            className="w-full px-5 md:px-10 pt-16 lg:pt-20 min-h-[80vh] flex flex-col justify-center items-center bg-cover bg-center relative"
            style={{
               backgroundImage: "url('/hero-bg.jpg')",
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            {/* Dark overlay to improve visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

            {/* 🌈 Animated Gradient Overlay (Softened for readability) */}
            <motion.div
               className="absolute inset-0 z-0 opacity-10 pointer-events-none"
               initial={{ scale: 1, x: "-10%", y: "-10%" }}
               animate={{ scale: 1.3, x: "10%", y: "10%" }}
               transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
               }}
               style={{
                  background:
                     "radial-gradient(circle at center, #FFD70011 0%, #1f2937 60%, transparent 100%)",
                  mixBlendMode: "overlay", // You can comment this out for even softer effect
               }}
            />

            {/* Transition Effect */}
            <TransitionEffect />

            <motion.div
               className="relative flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto flex-grow z-10"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
               {/* Hero Text Block with Optional Backdrop Blur */}
               <div className="flex flex-col items-start gap-4 max-w-[800px] text-center lg:text-left backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading max-w-[1100px] leading-tight text-white drop-shadow-lg">
                     Leveraging Phyto-Scientific Research to Explore the{" "}
                     <span
                        className="text-[#159EEC] font-extrabold"
                        style={{
                           textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8)",
                        }}
                     >
                        Pharmacological Potential
                     </span>{" "}
                     of Plant-Derived Compounds
                  </h2>

                  <p className="text-gray-200">{subHeading}</p>

                  <Link to={`/medicines`}>
                     <Button title="See Medicines" />
                  </Link>
               </div>

               {/* Right Side Image */}
               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
               >
                  <img
                     src="/microscope.png"
                     width={450}
                     height={450}
                     className="max-w-full h-auto drop-shadow-xl"
                     alt="Microscope"
                  />
               </motion.div>
            </motion.div>
         </div>

         {/* FAQ Section Animation */}
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

export default Home;
