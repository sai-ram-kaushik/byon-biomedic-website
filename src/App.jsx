import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import data from "./data/landing-page.json";
import About from "./pages/About";

const App = () => {
   return (
      <BrowserRouter>
         <Layout>
            <Routes>
               <Route path="/" element={<Home home={data.home} />} />
               <Route path="/about" element={<About about={data.about} />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
};

export default App;
