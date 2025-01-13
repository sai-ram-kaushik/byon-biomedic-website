import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import TransitionEffect from "../utils/TransitionEffect";

const Home = ({ home }) => {
   const { subHeading, imageUrl } = home;
   return (
      <div className="w-full px-5 md:px-10 py-5 md:py-10">
         <TransitionEffect />
         <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center gap-2">
               <h2 className="text-3xl lg:text-6xl font-bold font-heading text-center">
                  Unlocking Nature's Potential <span>for</span> <br />{" "}
                  Transformative Phyto Innovations
               </h2>
               <p className="lg:max-w-[800px] text-center">{subHeading}</p>
               <Link to="/medicines">
                  <Button title="See Medicines" />
               </Link>
               {/* <img src={imageUrl} width={700} className="mt-10" /> */}
            </div>
         </div>
      </div>
   );
};

export default Home;
