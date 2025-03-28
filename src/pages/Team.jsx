import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";
import { motion } from "framer-motion";

const Team = ({ about }) => {
   const { teamMembersPartOne, teamMembersPartSecond, advisoryGroupPartOne, advisoryGroupPartSecond } = about;
   const [selectedMember, setSelectedMember] = useState(null);

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
               <span className="text-primary">Corporate </span> Management Team
            </h3>
         </motion.div>

         {/* Core Team Members */}
         <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeIn}>
            {/* First row */}
            <div className="flex justify-center gap-4 w-full">
               {teamMembersPartOne.map((member, idx) => (
                  <motion.div 
                     key={idx} 
                     className="text-center w-[220px] h-[300px] bg-white/80 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center justify-center"
                     onClick={() => setSelectedMember(member)}
                     whileHover={{ scale: 1.05 }}>
                     <img className="mb-3 w-24 h-24 rounded-full border-2 border-gray-300" src={member.imageUrl} alt={member.name} />
                     <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                     <p className="text-sm text-gray-600">{member.designation}</p>
                  </motion.div>
               ))}
            </div>

            {/* Second row */}
            <div className="flex justify-center gap-4 w-full mt-4">
               {teamMembersPartSecond.map((member, idx) => (
                  <motion.div 
                     key={idx} 
                     className="text-center w-[220px] h-[300px] bg-white/80 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center justify-center"
                     onClick={() => setSelectedMember(member)}
                     whileHover={{ scale: 1.05 }}>
                     <img className="mb-3 w-24 h-24 rounded-full border-2 border-gray-300" src={member.imageUrl} alt={member.name} />
                     <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                     <p className="text-sm text-gray-600">{member.designation}</p>
                  </motion.div>
               ))}
            </div>
         </motion.div>

         {/* Technical Advisory Group Section */}
         <motion.div id="technical-advisory-group" className="flex items-center justify-center w-full py-4 mt-6" variants={fadeIn}>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold">
               Technical and Advisory <span className="text-primary">Committee</span>
            </h3>
         </motion.div>

         <motion.div className="flex flex-wrap justify-center gap-4" variants={fadeIn}>
            {advisoryMembers.map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="text-center w-[220px] h-[300px] bg-white/80 p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 border border-gray-200/50 backdrop-blur-lg flex flex-col items-center justify-center"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>
                  <img className="mb-3 w-24 h-24 rounded-full border-2 border-gray-300" src={member.imageUrl} alt={member.name} />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Popup Modal */}
         {selectedMember && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-5 rounded-lg max-w-xs relative shadow-xl">
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setSelectedMember(null)}>✖</button>
                  <img className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300" src={selectedMember.imageUrl} alt={selectedMember.name} />
                  <h2 className="text-lg font-bold mt-3">{selectedMember.name}</h2>
                  <p className="text-gray-700 text-sm">{selectedMember.designation}</p>
                  <p className="mt-2 text-sm">{selectedMember.bio}</p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm" onClick={() => setSelectedMember(null)}>Close</button>
               </div>
            </div>
         )}
      </motion.div>
   );
};

export default Team;
