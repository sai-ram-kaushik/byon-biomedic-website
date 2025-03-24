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
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

         <motion.div className="flex flex-col items-center w-full gap-10" variants={fadeIn}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
               {teamMembers.map((member, idx) => (
                  <motion.div key={idx} className="text-center text-gray-500 cursor-pointer" onClick={() => setSelectedMember(member)} whileHover={{ scale: 1.05 }}>
                     <motion.img className="mx-auto mb-4 w-44 h-44 rounded-full transition-transform" src={member.imageUrl} alt={member.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
                     <motion.h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{member.name}</motion.h3>
                     <motion.p>{member.designation}</motion.p>
                  </motion.div>
               ))}
            </div>
         </motion.div>

         {/* Technical Advisory Group Section */}
         <motion.div className="flex items-center justify-center w-full py-10" variants={fadeIn}>
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
               Technical Advisory <span>Group</span>
            </h3>
         </motion.div>

         <motion.div className="flex flex-col items-center w-full gap-10" variants={fadeIn}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
               {advisoryMembers.map((member, idx) => (
                  <motion.div key={idx} className="text-center text-gray-500 cursor-pointer" onClick={() => setSelectedMember(member)} whileHover={{ scale: 1.05 }}>
                     <motion.img className="mx-auto mb-4 w-44 h-44 rounded-full transition-transform" src={member.imageUrl} alt={member.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
                     <motion.h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">{member.name}</motion.h3>
                     <motion.p>{member.designation}</motion.p>
                  </motion.div>
               ))}
            </div>
         </motion.div>

         {/* Popup Modal */}
         {selectedMember && (
            <motion.div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
               <motion.div className="bg-white p-6 rounded-lg max-w-md relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setSelectedMember(null)}>✖</button>
                  <img className="w-32 h-32 mx-auto rounded-full" src={selectedMember.imageUrl} alt={selectedMember.name} />
                  <h2 className="text-xl font-bold mt-3">{selectedMember.name}</h2>
                  <p className="text-gray-700">{selectedMember.designation}</p>
                  <p className="mt-2">{selectedMember.bio}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setSelectedMember(null)}>Close</button>
               </motion.div>
            </motion.div>
         )}
      </motion.div>
   );
};

export default Team;
