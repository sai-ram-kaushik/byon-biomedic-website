import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";

const Home = ({ home }) => {
   const { subHeading } = home;
   const [showContent, setShowContent] = useState(false);

   // Delay animations until TransitionEffect completes
   useEffect(() => {
      const timer = setTimeout(() => {
         setShowContent(true);
      }, 800); // Adjust delay (800ms) based on TransitionEffect duration

      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         <div className="w-full px-5 md:px-10 py-5 md:py-10">
            <TransitionEffect />

            {showContent && ( // Show animations only after delay
               <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
                  <div className="flex flex-col items-start gap-3 max-w-[800px]">
                     {/* Animated Heading */}
                     <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-3xl lg:text-4xl font-bold font-heading max-w-[1100px]"
                     >
                        Harnessing the Inherent Potential of{" "}
                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 1.2, delay: 0.5 }}
                           className="text-secondary" // Use correct theme color
                        >
                           Natural Botanical
                        </motion.span>{" "}
                        Resources to Advance Groundbreaking Phytomedical Innovations
                     </motion.h2>

                     {/* Animated Paragraph */}
                     <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                     >
                        {subHeading}
                     </motion.p>

                     {/* Button */}
                     <Link to={`/medicines`}>
                        <Button title="See Medicines" />
                     </Link>
                  </div>

                  {/* Image */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1, delay: 1 }}
                  >
                     <img src="/medicine.svg" width={600} height={600} />
                  </motion.div>
               </div>
            )}
         </div>

         <Faq />
      </>
   );
};

export default Home;
