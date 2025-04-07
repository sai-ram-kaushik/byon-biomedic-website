import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/landing-page.json';

const Layout = ({ children }) => {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar navbar={data.navbar} />
         
         {/* Spacer div to offset fixed navbar (80px = h-20 = pt-20) */}
         <div className="pt-20 flex-grow">
            {children}
         </div>

         <Footer />
      </div>
   );
};

export default Layout;
