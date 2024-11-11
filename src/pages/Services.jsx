import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const Services = ({ ourServices }) => {
   const { services } = ourServices;
   return (
      <div className="w-full px-5 lg:px-10">
         <TransitionEffect />
         <div className="flex flex-col lg:flex-row items-center py-10">
            {services.map((service, idx) => {
               return (
                  <div class="max-w-[720px] mx-auto">
                     <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                           <img
                              src={service.imageUrl}
                              alt="ui/ux review check"
                              className="w-full"
                           />
                        </div>
                        <div class="p-6">
                           <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                              {service.name}
                           </h4>
                           <p class="block mt-3 font-sans text-lg antialiased font-normal leading-relaxed text-gray-700">
                              {service.desc}
                           </p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Services;
