import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from '../data/landing-page.json'

const Layout = ({ children }) => {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar navbar={data.navbar}/>
         <main className="flex-grow">{children}</main>
         <Footer />
      </div>
   );
};

export default Layout;
