import React, { useState, useEffect } from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion, useAnimation } from "framer-motion";

const Team = ({ about }) => {
   const { teamMembersPartOne, teamMembersPartSecond, advisoryGroupPartOne, advisoryGroupPartSecond } = about;
   const [selectedMember, setSelectedMember] = useState(null);
   const controls = useAnimation();

   const teamMembers = [...teamMembersPartOne, ...teamMembersPartSecond];
   const advisoryMembers = [...advisoryGroupPartOne, ...advisoryGroupPartSecond];

   useEffect(() => {
      const handleScroll = () => {
         const section = document.getElementById("technical-advisory-group");
         if (section && window.scrollY + window.innerHeight >= section.offsetTop + 100) {
            controls.start("visible");
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [controls]);

   const fadeIn = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
   };

   return (
      <motion.div className="w-full py-10 px-5 lg:px-10" initial="hidden" animate="visible">
         <TransitionEffect />

         {/* Our Team Section */}
         <motion.div className="flex items-center justify-center w-full py-10" variants={fadeIn}>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
               Our <span>Team</span>
            </h3>
         </motion.div>

         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" variants={fadeIn}>
            {teamMembers.map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mx-auto mb-4 w-44 h-44 rounded-full transition-transform" src={member.imageUrl} alt={member.name} />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{member.name}</h3>
                  <p>{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Technical Advisory Group Section */}
         <motion.div id="technical-advisory-group" className="flex items-center justify-center w-full py-10" initial="hidden" animate={controls} variants={fadeIn}>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
               Technical Advisory <span>Group</span>
            </h3>
         </motion.div>

         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" initial="hidden" animate={controls} variants={fadeIn}>
            {advisoryMembers.map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mx-auto mb-4 w-44 h-44 rounded-full transition-transform" src={member.imageUrl} alt={member.name} />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{member.name}</h3>
                  <p>{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Popup Modal */}
         {selectedMember && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-6 rounded-lg max-w-md relative">
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setSelectedMember(null)}>✖</button>
                  <img className="w-32 h-32 mx-auto rounded-full" src={selectedMember.imageUrl} alt={selectedMember.name} />
                  <h2 className="text-xl font-bold mt-3">{selectedMember.name}</h2>
                  <p className="text-gray-700">{selectedMember.designation}</p>
                  <p className="mt-2">{selectedMember.bio}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setSelectedMember(null)}>Close</button>
               </div>
            </div>
         )}
      </motion.div>
   );
};

export default Team;