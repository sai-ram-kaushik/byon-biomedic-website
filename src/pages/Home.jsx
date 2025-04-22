import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";
import { motion } from "framer-motion";

const Home = ({ home }) => {
   const { subHeading } = home;

   return (
      <>
         <div className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
            {/* Background layers */}
            <div
               className="absolute inset-0 bg-gradient-to-br from-[#0f1115] via-[#0c131b] to-[#0b0f17] z-0"
               style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}
            ></div>

            {/* Glow ring background for sci-fi feel */}
            <div className="absolute top-1/2 left-1/2 w-[1500px] h-[1500px] bg-[#159EEC44] rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0" />

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[2px] z-10" />

            <TransitionEffect />

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-6 pt-24 pb-20 gap-12">

               {/* Left: Text Content */}
               <motion.div
                  className="flex-1 max-w-2xl flex flex-col gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <div className="uppercase tracking-widest text-[#159EEC] text-sm font-semibold">BYON BIOMEDIC</div>

                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-heading">
                     Leveraging <span className="text-[#159EEC]">Phyto-Scientific</span> Research<br /> to Explore the Pharmacological Potential of Plant-Derived Compounds
                  </h1>

                  <p className="text-gray-300 text-lg leading-relaxed">{subHeading}</p>

                  <div className="mt-4">
                     <Link to="/medicines">
                        <Button title="See Medicines" />
                     </Link>
                  </div>
               </motion.div>

               {/* Right: Custom Visual */}
               <motion.div
                  className="flex-1 flex items-center justify-center relative"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
               >
                  <div className="relative">
                     <img
                        src="/hero-visual.svg"
                        alt="Scientific Discovery Visual"
                        className="w-[520px] h-auto max-w-full drop-shadow-[0_15px_25px_rgba(21,158,236,0.3)]"
                     />
                     {/* Floating Orb Effect */}
                     <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#159EEC88] rounded-full blur-3xl animate-pulse opacity-30" />
                  </div>
               </motion.div>
            </div>
         </div>

         {/* FAQ Section */}
         <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full bg-[#0e1219] text-white py-16"
         >
            <Faq />
         </motion.div>
      </>
   );
};

export default Home;
