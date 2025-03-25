import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";

const Team = ({ about }) => {
   const { teamMembersPartOne, teamMembersPartSecond, advisoryGroupPartOne, advisoryGroupPartSecond } = about;
   const [selectedMember, setSelectedMember] = useState(null);

   const teamMembers = [...teamMembersPartOne, ...teamMembersPartSecond];
   const advisoryMembers = [...advisoryGroupPartOne, ...advisoryGroupPartSecond];

   const fadeIn = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
   };

   return (
      <motion.div className="w-full py-10 px-4 lg:px-8" initial="hidden" animate="visible">
         <TransitionEffect />

         {/* Our Team Section */}
         <motion.div className="flex items-center justify-center w-full py-4" variants={fadeIn}>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold">
               Core <span className="text-primary">Team</span>
            </h3>
         </motion.div>

         {/* 2 Members (Above) */}
         <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={fadeIn}>
            {teamMembers.slice(0, 2).map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center max-w-[280px] bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center mx-auto"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mb-3 w-20 h-20 rounded-full border-4 border-gray-300" src={member.imageUrl} alt={member.name} />
                  <h3 className="text-md font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* 3 Members (Below) */}
         <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" variants={fadeIn}>
            {teamMembers.slice(2, 5).map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center max-w-[280px] bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center mx-auto"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mb-3 w-20 h-20 rounded-full border-4 border-gray-300" src={member.imageUrl} alt={member.name} />
                  <h3 className="text-md font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Technical Advisory Group Section */}
         <motion.div id="technical-advisory-group" className="flex items-center justify-center w-full py-4 mt-6" variants={fadeIn}>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold">
               Technical Advisory <span className="text-primary">Group</span>
            </h3>
         </motion.div>

         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" variants={fadeIn}>
            {advisoryMembers.map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center max-w-[280px] bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center mx-auto"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mb-3 w-20 h-20 rounded-full border-4 border-gray-300" src={member.imageUrl} alt={member.name} />
                  <h3 className="text-md font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Popup Modal */}
         {selectedMember && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-5 rounded-xl max-w-sm relative shadow-xl">
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setSelectedMember(null)}>✖</button>
                  <img className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300" src={selectedMember.imageUrl} alt={selectedMember.name} />
                  <h2 className="text-md font-bold mt-2">{selectedMember.name}</h2>
                  <p className="text-gray-700 text-xs">{selectedMember.designation}</p>
                  <p className="mt-2 text-xs">{selectedMember.bio}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs" onClick={() => setSelectedMember(null)}>Close</button>
               </div>
            </div>
         )}
      </motion.div>
   );
};

export default Team;
