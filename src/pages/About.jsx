import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const About = ({ about }) => {
   const { imageUrl, vision, mission } = about;

   return (
      <div className="w-full py-10 px-5 lg:px-10">
         <TransitionEffect />

         <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 mt-5">
            <img src={imageUrl} className="rounded-xl max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" alt="About Us" />
            <div className="flex flex-col items-start gap-4 max-w-2xl">
               <h3 className="text-3xl font-bold text-secondary">Vision</h3>
               <p className="text-lg text-gray-700">{vision}</p>
               <h3 className="text-3xl font-bold text-secondary mt-4">Mission</h3>
               <p className="text-lg text-gray-700">{mission}</p>
            </div>
         </div>
      </div>
   );
};

export default About;
