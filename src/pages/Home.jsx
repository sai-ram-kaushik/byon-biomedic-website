import React from "react";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import TransitionEffect from "../utils/TransitionEffect";
import Faq from "../components/Faq";

const Home = ({ home }) => {
   const { subHeading, imageUrl } = home;
   return (
      <>
         <div className="w-full px-5 md:px-10 py-5 md:py-10">
            <TransitionEffect />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
               <div className="flex flex-col items-start gap-3 max-w-[800px]">
                  <h2 className="text-3xl lg:text-4xl font-bold font-heading max-w-[1100px]">
                     Harnessing the Inherent Potential of
                     <span> Natural Botanical </span>
                     Resources to Advance Groundbreaking Phytomedical Innovations
                  </h2>

                  <p>{subHeading}</p>

                  <Link to={`/medicines`}>
                     <Button title="See Medicines" />
                  </Link>
               </div>

               <div>
                  <img src="/medicine.svg" width={600} height={600} />
               </div>
            </div>
         </div>

         <Faq />
      </>
   );
};

export default Home;

