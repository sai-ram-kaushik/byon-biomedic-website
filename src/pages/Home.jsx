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
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0b0f19] px-6 md:px-12 pt-24 pb-20"
        style={{
           backgroundImage: "url('/hero-bg.jpg')",
           backgroundAttachment: "fixed",
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0b0f19]/70 to-[#0b0f19]/90 z-0" />

        {/* Page transition entry effect */}
        <TransitionEffect />
        
        {/* Animated ambient overlay */}
        <motion.div
          className="absolute inset-0 bg-no-repeat bg-cover opacity-5 z-0"
          style={{
            backgroundImage: "url('/molecule-bg.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0.03 }}
          animate={{ opacity: 0.05 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Subtle light beam effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[120%] bg-gradient-to-b from-[#159EEC55] via-transparent to-transparent opacity-10 blur-3xl pointer-events-none z-0" />


        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto w-full text-white text-center lg:text-left flex flex-col items-center lg:items-start gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight tracking-tight drop-shadow-xl">
            Leveraging{" "}
            <span
              className="text-[#159EEC] font-extrabold"
              style={{
                textShadow: "1px 1px 8px rgba(0, 0, 0, 0.9)",
              }}
            >
              Phyto-Scientific
            </span>{" "}
            Research to Explore the Pharmacological Potential of Plant-Derived Compounds
          </h2>

          <p className="text-gray-200 max-w-2xl text-lg">{subHeading}</p>

          <Link to="/medicines">
            <Button title="See Medicines" />
          </Link>
        </motion.div>
      </section>

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
