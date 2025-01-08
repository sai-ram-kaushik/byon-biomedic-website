import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const Medicines = ({ medicines }) => {
   const { heading, products } = medicines;
   return (
      <div className="w-full py-10">
         <TransitionEffect />
         <div className="flex justify-center">
            <h2 className="font-heading text-3xl">{heading}</h2>
         </div>

         <div className="flex flex-wrap items-start justify-center w-full py-10">
            {products.map((product, idx) => {
               return (
                  <div key={idx} className="flex flex-col items-center gap-2">
                     <img src={product.imageUrl} />
                     <h3>{product.name}</h3>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Medicines;
