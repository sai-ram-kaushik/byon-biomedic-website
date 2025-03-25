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
         <div className="w-full px-5 md:px-10 pt-16 lg:pt-20 min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-300">
            {/* Transition Effect */}
            <TransitionEffect />

            <motion.div 
               className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto flex-grow"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
               <div className="flex flex-col items-start gap-4 max-w-[800px] text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading max-w-[1100px] leading-tight">
                     Harnessing the Inherent Potential of{" "}
                     <span className="text-secondary">Natural Botanical</span>{" "}
                     Resources to Advance Groundbreaking Phytomedical Innovations
                  </h2>

                  <p>{subHeading}</p>

                  <Link to={`/medicines`}>
                     <Button title="See Medicines" />
                  </Link>
               </div>

               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
               >
                  <img src="/microscope.png" width={450} height={450} className="max-w-full h-auto" />
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
