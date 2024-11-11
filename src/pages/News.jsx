import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const News = () => {
   return (
      <div className="w-full">
         <TransitionEffect />
         <div className="flex items-center justify-center w-full h-[80vh]">
            <h3>This page is under development</h3>
         </div>
      </div>
   );
};

export default News;
