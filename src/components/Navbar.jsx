import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ navbar }) => {
   const { logo, navlinks } = navbar;
   const location = useLocation();
   const [nav, setNav] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   const toggleMenu = () => {
      setNav(!nav);
   };

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <motion.div
         initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className={`w-full fixed top-0 z-50 transition-all duration-300 shadow-xl ${
            isScrolled
               ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
               : "bg-white/90 backdrop-blur-md border-b border-gray-200"
         }`}
         style={{ height: "80px" }} // Explicit height to fix overlap issues
      >
         <div className="flex items-center justify-between w-full h-full px-5 lg:px-10">
            {/* Logo + Brand Name */}
            <Link to="/">
               <div className="flex items-center gap-3">
                  <img src={logo} width={50} alt="Byon Biomedic Logo" />
                  <h1
                     className="text-3xl lg:text-4xl font-bold tracking-tight"
                     style={{ fontFamily: "Palatino Linotype, serif", color: "#182A40" }}
                  >
                     Byon Biomedic
                  </h1>
               </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 text-lg font-medium text-[#182A40]">
               {navlinks.map((navlink, idx) => {
                  const isActive = location.pathname === navlink.path;
                  return (
                     <Link
                        key={idx}
                        to={navlink.path}
                        className={`relative group transition duration-200 ${
                           isActive ? "text-[#159EEC]" : "hover:text-[#159EEC]"
                        }`}
                     >
                        <span className="relative z-10">{navlink.label}</span>
                        <span
                           className={`absolute left-0 bottom-0 h-[2px] w-full bg-[#159EEC] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 ${
                              isActive ? "scale-x-100" : ""
                           }`}
                        />
                     </Link>
                  );
               })}
            </div>

            {/* Mobile Menu Icon */}
            <div className="block lg:hidden p-2 text-[#182A40]" onClick={toggleMenu}>
               {nav ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
         </div>

         {/* Mobile Nav */}
         <AnimatePresence>
            {nav && (
               <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 text-xl font-semibold text-[#182A40]"
               >
                  {navlinks.map((navlink, idx) => (
                     <Link
                        key={idx}
                        to={navlink.path}
                        onClick={() => setNav(false)}
                        className={`transition-colors duration-200 ${
                           location.pathname === navlink.path ? "text-[#159EEC]" : "hover:text-[#159EEC]"
                        }`}
                     >
                        {navlink.label}
                     </Link>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
};

export default Navbar;
