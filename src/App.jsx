import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import data from "./data/landing-page.json";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Medicines from "./pages/Medicines";
import News from "./pages/News";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home home={data.home} />} />
               <Route path="/about" element={<About about={data.about} />} />
               <Route
                  path="/services"
                  element={<Services ourServices={data.ourServices} />}
               />
               <Route path="/medicines" element={<Medicines medicines={data.medicines} />} />
               <Route path="/news" element={<News />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/privacy-policy" element={<PrivacyPolicy />} />
               <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
};

export default App;
