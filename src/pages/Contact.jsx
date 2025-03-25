import React from "react";
import { useForm } from "@formspree/react";
import TransitionEffect from "../utils/TransitionEffect";

const Contact = () => {
   const [state, handleSubmit] = useForm("xeoqovok");

   return (
      <div className="w-full px-5 lg:px-10 py-16 bg-gray-50">
         <TransitionEffect />
         <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-secondary">Contact Us</h2>
            <p className="text-gray-600 mt-2">
               We'd love to hear from you! Send us a message and we'll get back as soon as possible.
            </p>
         </div>

         {state.succeeded ? (
            <div className="text-center text-lg text-green-600 font-semibold">
               Thanks for submitting your message!
            </div>
         ) : (
            <div className="flex justify-center">
               <form
                  className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
                  onSubmit={handleSubmit}
               >
                  <div className="flex flex-col gap-5">
                     <div>
                        <label htmlFor="name" className="text-gray-700 font-medium">
                           Full Name
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                           required
                        />
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                           <label htmlFor="email" className="text-gray-700 font-medium">
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="tel" className="text-gray-700 font-medium">
                              Phone Number
                           </label>
                           <input
                              type="tel"
                              id="tel"
                              name="tel"
                              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="message" className="text-gray-700 font-medium">
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm h-32 resize-none focus:ring-2 focus:ring-secondary focus:outline-none"
                           required
                        />
                     </div>

                     <button
                        className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ease-out hover:bg-primary hover:shadow-md"
                        type="submit"
                        disabled={state.submitting}
                     >
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         )}
      </div>
   );
};

export default Contact;
