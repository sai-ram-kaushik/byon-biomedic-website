import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
   return (
      <div className="w-full mt-10 p-3 px-5 lg:px-10">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-16">
               <div className="flex flex-col items-start gap-3">
                  <Link to="/">
                     <h2 className="text-3xl lg:text-4xl font-bold">
                        Byon <span className="text-secondary">Biomedic</span>
                     </h2>
                  </Link>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold text-primary">About Us</p>
                  <div className="flex flex-col items-start gap-2">
                     <Link to="/">
                        <p className="hover:text-primary cursor-pointer">
                           Home
                        </p>
                     </Link>
                     <Link to="/about">
                        <p className="hover:text-primary cursor-pointer">
                           About Us
                        </p>
                     </Link>
                     <Link to="/services">
                        <p className="hover:text-primary cursor-pointer">
                           Services
                        </p>
                     </Link>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold text-primary">Contact Us</p>
                  <div className="flex flex-col items-start gap-2">
                     <div className="flex items-center gap-2">
                        <IoMdMail size={15} className="text-secondary" />
                        <a href="mailto:byonbiomedic@gmail.com">
                           <p>info@byonbiomedic.com</p>
                        </a>
                     </div>

                     <div className="flex items-start gap-2">
                        <FaPhoneAlt size={15} className="text-secondary" />
                        <div className="flex flex-col items-start">
                           <p>+603 62422746</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-2">
                        <FaLocationDot size={20} className="text-secondary" />
                        <p>Suite 10-03, Mutiara Office Suites, 568, Jalan Sultan Azlan Shah, Kuala Lumpur, Malaysia</p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-5">
                  <p className="font-bold text-primary">Privacy</p>
                  <div className="flex flex-col items-start gap-2">
                     <p>FAQ</p>
                     <p>Terms</p>
                     <p>Privacy</p>
                  </div>
               </div>
            </div>

            <hr className="mt-5" />

            <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
               <p>2025 - All Rights Reserved</p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
