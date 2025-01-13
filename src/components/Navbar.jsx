import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbar }) => {
   const { logo, navlinks } = navbar;
   const location = useLocation();
   const [nav, setNav] = useState(false);

   const toggleMenu = () => {
      setNav(!nav);
   };

   return (
      <div className="w-full h-20 border-b-2">
         <div className="flex items-center justify-between w-full h-full px-5 lg:px-10">
            <Link to="/">
               <div className="flex items-center gap-2">
                  <img src={logo} width={50} />
                  <h1 className="text-3xl lg:text-4xl font-bold">
                     Byon <span className="text-secondary">Biomedic</span>
                  </h1>
               </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 text-[18px] font-medium">
               {navlinks.map((navlink, idx) => (
                  <Link
                     key={idx}
                     to={navlink.path}
                     className={`${
                        location.pathname === navlink.path
                           ? "text-secondary"
                           : ""
                     }`}
                  >
                     {navlink.label}
                  </Link>
               ))}
            </div>

            <div
               className="block lg:hidden p-2 text-black"
               onClick={toggleMenu}
            >
               {nav ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
         </div>

         <div
            className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-primary bg-opacity-95 text-background flex flex-col justify-center items-center transition-transform duration-300 ${
               nav ? "translate-x-0" : "translate-x-full"
            }`}
         >
            {navlinks.map((navlink, idx) => (
               <Link
                  key={idx}
                  to={navlink.path}
                  onClick={() => setNav(false)}
                  className={`py-4 text-2xl font-semibold ${
                     location.pathname === navlink.path ? "text-accent" : ""
                  }`}
               >
                  {navlink.label}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Navbar;
