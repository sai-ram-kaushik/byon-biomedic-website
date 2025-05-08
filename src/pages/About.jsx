import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";
import MoleculePattern from "/molecule-bg.jpg";

const About = ({ about }) => {
  const { imageUrl, imageUrl2, vision, mission } = about;

  const coreValues = [
    {
      title: "Innovation & Sustainability",
      desc: "Pioneering the future of phytomedicine through cutting-edge research, while committing to ethical wildcrafting and sustainable agriculture for a greener tomorrow.",
      image: "/sustainability.jpg",
    },
    {
      title: "Integrity",
      desc: "Upholding the highest standards of transparency, ethics, and scientific validation.",
      image: "/integrity.jpg",
    },
    {
      title: "Collaboration",
      desc: "Partnering with leading researchers and industry experts to merge tradition with science.",
      image: "/collaboration.jpg",
    },
    {
      title: "Excellence",
      desc: "Striving for superior quality in every formulation, breakthrough, and outcome.",
      image: "/excellence.jpg",
    },
  ];

  return (
    <>
      <TransitionEffect />

      {/* Hero Section */}
      <section
        className="relative text-center pt-28 pb-16 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)] z-0" />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            At <span className="font-semibold text-white">Byon Biomedic Malaysia Sdn. Bhd.</span>, we are committed to
            revolutionizing healthcare through the power of nature. By merging traditional botanical wisdom with modern
            scientific rigor, we develop <span className="font-bold text-white">innovative phytomedicines</span> that are
            both safe and effective.
            <br className="hidden md:block" />
            We uphold <span className="font-bold text-white">ethical sourcing</span>,
            <span className="font-bold text-white"> sustainability</span>, and a deep commitment to
            <span className="font-bold text-white"> improving global health</span>. Through natural therapies, we aspire to a
            future where <span className="font-bold text-white">healing is holistic, accessible, and transformative</span>.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="relative px-6 md:px-16 lg:px-28 bg-gray-50 text-gray-900">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${MoleculePattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="relative max-w-6xl mx-auto py-20 z-10">
          <motion.h3
            className="text-4xl font-extrabold text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core Values
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-700">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-16 lg:px-28 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Vision Block */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-3">Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">{vision}</p>
            </div>
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={imageUrl2}
                alt="Vision"
                className="w-full h-full object-cover object-center rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Mission Block */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={imageUrl}
                alt="Mission"
                className="w-full h-full object-cover object-center rounded-xl shadow-md"
                loading="lazy"
              />
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-3">Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">{mission}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
