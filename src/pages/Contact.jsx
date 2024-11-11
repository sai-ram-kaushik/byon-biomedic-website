import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import TransitionEffect from "../utils/TransitionEffect";

const Contact = () => {
   const [state, handleSubmit] = useForm("xeoqovok");
   if (state.succeeded) {
      return <p>Thanks for Submitting</p>;
   }
   return (
      <div className="w-full px-5 lg:px-10 py-10">
         <TransitionEffect />
         <div className="flex justify-center ">
            <h2 className="text-3xl font-heading">Contact Us</h2>
         </div>

         <div className="flex justify-center">
            <form
               className="flex flex-col gap-6 max-w-[900px]"
               onSubmit={handleSubmit}
            >
               <div className="flex flex-col gap-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     className="border border-secondary ring-current bg-transparent rounded-lg p-3"
                  />
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-3">
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="border border-secondary bg-transparent rounded-lg p-3"
                     />
                  </div>
                  <div className="flex flex-col gap-3">
                     <label htmlFor="tel">Phone Number</label>
                     <input
                        type="tel"
                        id="tel"
                        name="tel"
                        className="border border-secondary bg-transparent rounded-lg p-3"
                     />
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                     id="message"
                     name="message"
                     typeof="text"
                     className="border border-secondary  bg-transparent rounded-lg p-3 h-32  resize-none "
                  />
               </div>
               <div>
                  <button
                     className="bg-secondary py-3 px-6 text-background rounded-lg border border-secondary hover:text-heading duration-300 ease-out hover:bg-background"
                     type="submit"
                     disabled={state.submitting}
                  >
                     Send
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Contact;
