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
         <div className="relative w-full px-5 md:px-10 pt-16 lg:pt-20 min-h-[80vh] flex flex-col justify-center items-center bg-[url('/hero-bg.webp')] bg-cover bg-center bg-gray-800">
            {/* Darker Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Transition Effect */}
            <TransitionEffect />

            <motion.div
               className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto flex-grow"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
               <div className="flex flex-col items-start gap-4 max-w-[800px] text-center lg:text-left text-white">
                  <h2 className="text-4xl lg:text-5xl font-bold font-heading max-w-[1100px] leading-tight drop-shadow-md">
                     Harnessing the Inherent Potential of{" "}
                     <span className="text-secondary">Natural Botanical</span>{" "}
                     Resources to Advance Groundbreaking Phytomedical Innovations
                  </h2>

                  <p className="text-lg text-gray-200 drop-shadow-md">{subHeading}</p>

                  <Link to={`/medicines`}>
                     <Button title="See Medicines" />
                  </Link>
               </div>

               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
               >
                  <img
                     src="/microscope.png"
                     width={450}
                     height={450}
                     className="max-w-full h-auto drop-shadow-2xl"
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
