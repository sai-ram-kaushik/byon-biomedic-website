import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";

const About = ({ about }) => {
   const { imageUrl, vision, mission, teamMembersPartOne, teamMembersPartSecond } = about;
   const [selectedMember, setSelectedMember] = useState(null);

   const teamMembers = [...teamMembersPartOne, ...teamMembersPartSecond];

   return (
      <div className="w-full py-10 px-5 lg:px-10">
         <TransitionEffect />

         <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-5 mt-5">
            <img src={imageUrl} className="rounded-xl" />
            <div className="flex flex-col items-start gap-2 max-w-[446px]">
               <h3 className="text-3xl font-bold text-secondary">Vision</h3>
               <p className="text-xl">{vision}</p>
               <h3 className="text-3xl font-bold text-secondary">Mission</h3>
               <p className="text-xl">{mission}</p>
            </div>
         </div>

         <div className="flex items-center justify-center w-full py-10">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold">
               Our <span>Team</span>
            </h3>
         </div>

         {/* Team Members Grid */}
         <div className="flex flex-col items-center w-full gap-10">
            {/* First Row - First 2 Members */}
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

                     {/* Social Icons */}
                     <ul className="flex justify-center mt-4 space-x-4">
                        {member.socials?.facebook && (
                           <li>
                              <a href={member.socials.facebook} target="_blank" className="text-[#39569c] hover:text-gray-900">
                                 <i className="fab fa-facebook-f text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.twitter && (
                           <li>
                              <a href={member.socials.twitter} target="_blank" className="text-[#00acee] hover:text-gray-900">
                                 <i className="fab fa-twitter text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.github && (
                           <li>
                              <a href={member.socials.github} target="_blank" className="text-gray-900 hover:text-gray-700">
                                 <i className="fab fa-github text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.dribbble && (
                           <li>
                              <a href={member.socials.dribbble} target="_blank" className="text-[#ea4c89] hover:text-gray-900">
                                 <i className="fab fa-dribbble text-xl"></i>
                              </a>
                           </li>
                        )}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Second Row - Remaining Members */}
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

                     {/* Social Icons */}
                     <ul className="flex justify-center mt-4 space-x-4">
                        {member.socials?.facebook && (
                           <li>
                              <a href={member.socials.facebook} target="_blank" className="text-[#39569c] hover:text-gray-900">
                                 <i className="fab fa-facebook-f text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.twitter && (
                           <li>
                              <a href={member.socials.twitter} target="_blank" className="text-[#00acee] hover:text-gray-900">
                                 <i className="fab fa-twitter text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.github && (
                           <li>
                              <a href={member.socials.github} target="_blank" className="text-gray-900 hover:text-gray-700">
                                 <i className="fab fa-github text-xl"></i>
                              </a>
                           </li>
                        )}
                        {member.socials?.dribbble && (
                           <li>
                              <a href={member.socials.dribbble} target="_blank" className="text-[#ea4c89] hover:text-gray-900">
                                 <i className="fab fa-dribbble text-xl"></i>
                              </a>
                           </li>
                        )}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Popup Modal */}
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

                  {/* Social Icons in Modal */}
                  <ul className="flex justify-center mt-4 space-x-4">
                     {selectedMember.socials?.facebook && (
                        <li>
                           <a href={selectedMember.socials.facebook} target="_blank" className="text-[#39569c] hover:text-gray-900">
                              <i className="fab fa-facebook-f text-xl"></i>
                           </a>
                        </li>
                     )}
                  </ul>

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

export default About;
