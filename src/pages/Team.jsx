import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";

const Team = ({ about }) => {
   const { teamMembersPartOne, teamMembersPartSecond } = about;
   const [selectedMember, setSelectedMember] = useState(null);
   const teamMembers = [...teamMembersPartOne, ...teamMembersPartSecond];

   return (
      <div className="w-full py-10 px-5 lg:px-10">
         <TransitionEffect />

         <div className="flex items-center justify-center w-full py-10">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
               Our <span>Team</span>
            </h3>
         </div>

         <div className="flex flex-col items-center w-full gap-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
               {teamMembers.slice(0, 2).map((member, idx) => (
                  <div
                     key={idx}
                     className="text-center text-gray-500 cursor-pointer"
                     onClick={() => setSelectedMember(member)}
                  >
                     <img className="mx-auto mb-4 w-44 h-44 rounded-full hover:scale-105 transition-transform"
                        src={member.imageUrl}
                        alt={member.name}
                     />
                     <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                        {member.name}
                     </h3>
                     <p>{member.designation}</p>
                  </div>
               ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
               {teamMembers.slice(2).map((member, idx) => (
                  <div
                     key={idx}
                     className="text-center text-gray-500 cursor-pointer"
                     onClick={() => setSelectedMember(member)}
                  >
                     <img className="mx-auto mb-4 w-44 h-44 rounded-full hover:scale-105 transition-transform"
                        src={member.imageUrl}
                        alt={member.name}
                     />
                     <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                        {member.name}
                     </h3>
                     <p>{member.designation}</p>
                  </div>
               ))}
            </div>
         </div>

         {selectedMember && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-6 rounded-lg max-w-md relative">
                  <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                     onClick={() => setSelectedMember(null)}
                  >
                     ✖
                  </button>
                  <img className="w-32 h-32 mx-auto rounded-full"
                     src={selectedMember.imageUrl}
                     alt={selectedMember.name}
                  />
                  <h2 className="text-xl font-bold mt-3">{selectedMember.name}</h2>
                  <p className="text-gray-700">{selectedMember.designation}</p>
                  <p className="mt-2">{selectedMember.bio}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                     onClick={() => setSelectedMember(null)}
                  >
                     Close
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Team;
