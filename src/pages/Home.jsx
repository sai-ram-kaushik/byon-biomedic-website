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
      {/* HERO: Immersive Cinematic Gradient-Driven Section */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden px-6 md:px-12 pt-28 pb-20 bg-black">
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1b] via-[#0f111f] to-[#0d0f1b] z-0" />

        {/* Organic gradient blob */}
        <motion.div
          className="absolute -top-20 -left-20 w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-[#159EEC] via-transparent to-transparent opacity-20 blur-[120px]"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* Grid Light Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:40px_40px] opacity-5 z-0" />

        {/* Transition Entry */}
        <TransitionEffect />

        {/* TEXT + CTA */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* TEXT BLOCK */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] max-w-4xl">
              Leveraging{" "}
              <span className="text-[#159EEC] font-extrabold drop-shadow-[0_0_20px_#159EEC88]">
                Phyto-Scientific
              </span>{" "}
              Research to Explore the Pharmacological Potential of Plant-Derived Compounds
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">{subHeading}</p>

            <Link to="/medicines">
              <Button title="See Medicines" />
            </Link>
          </div>

          {/* VISUAL EXPERIENCE (abstract science visual + blend) */}
          <motion.div
            className="flex-1 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Abstract animated blob + SVG lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/hero-visual.svg"
                alt="Scientific Visualization"
                className="w-full h-full object-contain opacity-80"
              />
            </div>

            {/* Glow ring (pulsing aura) */}
            <motion.div
              className="absolute w-60 h-60 rounded-full bg-[#159EEC33] blur-3xl opacity-40"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
