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
         <div className="w-full px-5 md:px-10 py-10 md:py-16 min-h-screen flex flex-col justify-center items-center">
            {/* Transition Effect */}
            <TransitionEffect />

            <motion.div 
               className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto flex-grow"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
               <div className="flex flex-col items-start gap-3 max-w-[800px] text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading max-w-[1100px]">
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
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
               >
                  <img src="/medicine.svg" width={500} height={500} className="max-w-full h-auto" />
               </motion.div>
            </motion.div>
         </div>

         {/* FAQ Section with Proper Animation */}
         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
         >
            <Faq />
         </motion.div>
      </>
   );
};

export default Home;
