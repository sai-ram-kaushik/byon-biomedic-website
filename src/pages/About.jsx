import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const About = ({ about }) => {
   const { imageUrl, vision, mission } = about;

   return (
      <div className="w-full py-10 px-5 lg:px-10">
         <TransitionEffect />

         <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-5 mt-5">
            <img src={imageUrl} className="rounded-xl" />
            <div className="flex flex-col items-start gap-2 max-w-[446px]">
               <h3 className="text-3xl font-bold text-secondary">Vision</h3>
               <p className="text-xl">{vision}</p>
               <h3 className="text-3xl font-bold text-secondary">Mission</h3>
               <p className="text-xl">{mission}</p>
            </div>
         </div>
      </div>
   );
};

export default About;
