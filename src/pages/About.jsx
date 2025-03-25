import React from "react";
import TransitionEffect from "../utils/TransitionEffect";

const About = ({ about }) => {
   const { imageUrl, vision, mission } = about;

   return (
      <div className="w-full py-10 px-5 lg:px-10">
         <TransitionEffect />

         {/* About Us Section */}
         <div className="mb-6">
            <h3 className="text-3xl font-bold text-secondary">About Us</h3>
            <p className="text-xl mt-2">
               At Byon Biomedic Malaysia Sdn. Bhd., we are committed to revolutionizing healthcare through the power of nature. By merging traditional botanical wisdom with modern scientific rigor, we develop innovative phytomedicines that are both safe and effective. Our approach is rooted in ethical sourcing, sustainability, and a steadfast dedication to improving global health. We believe that natural therapies can pave the way for transformative healing—benefiting communities, preserving our planet, and inspiring wellness for generations to come.
            </p>
         </div>

         {/* Core Values Section */}
         <div className="mb-6">
            <h3 className="text-3xl font-bold text-secondary">Core Values</h3>
            <ul className="list-disc list-inside text-xl mt-2">
               <li><strong>Innovation:</strong> Constantly pushing the boundaries of phytomedicine through research and development.</li>
               <li><strong>Integrity:</strong> Upholding the highest standards of transparency, ethics, and scientific validation.</li>
               <li><strong>Sustainability:</strong> Committing to ethical wildcrafting and sustainable agricultural practices to protect our environment.</li>
               <li><strong>Collaboration:</strong> Partnering with global research institutions and industry experts to blend traditional wisdom with modern science.</li>
               <li><strong>Excellence:</strong> Striving for superior quality in every formulation and clinical outcome.</li>
            </ul>
         </div>

         {/* Vision and Mission Section */}
         <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-5 mt-5">
            <img src={imageUrl} className="rounded-xl max-w-lg" />
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
