import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="w-full mt-10 p-6 px-5 lg:px-10 bg-[#182A40] text-white">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-16">
               <div className="flex flex-col items-start gap-3">
                  <Link to="/">
                     <img src="/Byonlogowhite.png" className="w-40 md:w-52 lg:w-60 h-auto" />
                  </Link>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold">Quick Links</p>
                  <div className="flex flex-col items-start gap-2">
                     <Link to="/"><p className="hover:text-gray-300 cursor-pointer">Home</p></Link>
                     <Link to="/about"><p className="hover:text-gray-300 cursor-pointer">About Us</p></Link>
                     <Link to="/medicines"><p className="hover:text-gray-300 cursor-pointer">Medicines</p></Link>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold">Contact Us</p>
                  <div className="flex flex-col items-start gap-2">
                     <div className="flex items-center gap-2">
                        <IoMdMail size={15} className="text-primary" />
                        <a href="mailto:byonbiomedic@gmail.com">
                           <p className="hover:text-gray-300">info@byonbiomedic.com</p>
                        </a>
                     </div>

                     <div className="flex items-start gap-2">
                        <FaPhoneAlt size={15} className="text-primary" />
                        <p>+603 62422746</p>
                     </div>

                     <div className="flex items-start gap-2">
                        <FaLocationDot size={20} className="text-primary" />
                        <p>
                           Suite 10-03, Mutiara Office Suites, 568, Jalan Sultan
                           Azlan Shah, Kuala Lumpur, Malaysia
                        </p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold">Privacy</p>
                  <div className="flex flex-col items-start gap-2">
                     <p className="hover:text-gray-300">FAQs</p>
                     <Link to={`/terms-and-conditions`}><p className="hover:text-gray-300">Terms</p></Link>
                     <Link to={`/privacy-policy`}><p className="hover:text-gray-300">Privacy</p></Link>
                  </div>
               </div>
            </div>

            <hr className="mt-5 border-gray-500" />

            <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
               <p>2025 - All Rights Reserved</p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
