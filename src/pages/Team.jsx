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
      <motion.div className="w-full py-10 px-4 lg:px-8 bg-gray-50" initial="hidden" animate="visible">
         <TransitionEffect />

         {/* Section Title */}
         <motion.div className="text-center py-6" variants={fadeIn}>
            <h3 className="text-4xl font-extrabold text-gray-900">
               <span className="text-primary">Corporate </span> Management Team
            </h3>
         </motion.div>

         {/* Team Members */}
         <motion.div className="flex flex-wrap justify-center gap-8" variants={fadeIn}>
            {[teamMembersPartOne, teamMembersPartSecond].map((team, index) => (
               <div key={index} className="flex justify-center gap-8 w-full">
                  {team.map((member, idx) => (
                     <motion.div 
                        key={idx} 
                        className="w-[280px] bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-200/50 cursor-pointer"
                        onClick={() => setSelectedMember(member)}
                        whileHover={{ scale: 1.05 }}>

                        {/* Profile Image (Rounded Rectangle) */}
                        <div className="w-40 h-48 rounded-xl overflow-hidden border-4 border-gray-200 shadow-md">
                           <img 
                              className="w-full h-full object-cover" 
                              src={member.imageUrl} 
                              alt={member.name} 
                           />
                        </div>

                        {/* Member Info */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">{member.name}</h3>
                        <p className="text-sm text-gray-500 mt-1 text-center">{member.designation}</p>
                     </motion.div>
                  ))}
               </div>
            ))}
         </motion.div>

         {/* Technical Advisory Group Section */}
         <motion.div className="text-center py-10 mt-6" variants={fadeIn}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
               Technical and Advisory <span className="text-primary">Committee</span>
            </h3>
         </motion.div>

         {/* Advisory Members */}
         <motion.div className="flex flex-wrap justify-center gap-8" variants={fadeIn}>
            {advisoryMembers.map((member, idx) => (
               <motion.div 
                  key={idx} 
                  className="w-[280px] bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-200/50 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ scale: 1.05 }}>

                  {/* Profile Image (Rounded Rectangle) */}
                  <div className="w-40 h-48 rounded-xl overflow-hidden border-4 border-gray-200 shadow-md">
                     <img 
                        className="w-full h-full object-cover" 
                        src={member.imageUrl} 
                        alt={member.name} 
                     />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-4 text-center">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 text-center">{member.designation}</p>
               </motion.div>
            ))}
         </motion.div>

         {/* Popup Modal */}
         {selectedMember && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
               <div className="bg-white p-6 rounded-xl max-w-md relative shadow-2xl w-full">
                  <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={() => setSelectedMember(null)}>✖</button>
                  <div className="w-40 h-48 mx-auto rounded-xl overflow-hidden border-4 border-gray-200 shadow-md">
                     <img className="w-full h-full object-cover" src={selectedMember.imageUrl} alt={selectedMember.name} />
                  </div>
                  <h2 className="text-xl font-bold mt-4 text-center">{selectedMember.name}</h2>
                  <p className="text-gray-700 text-sm text-center">{selectedMember.designation}</p>
                  <p className="mt-3 text-sm text-gray-600 whitespace-pre-line text-center">{selectedMember.bio}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm w-full" onClick={() => setSelectedMember(null)}>Close</button>
               </div>
            </div>
         )}
      </motion.div>
   );
};

export default Team;
