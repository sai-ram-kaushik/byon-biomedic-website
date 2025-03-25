import React from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import TransitionEffect from "../utils/TransitionEffect";

const Contact = () => {
   const [state, handleSubmit] = useForm("xeoqovok");

   return (
      <motion.div 
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1 }} 
         transition={{ duration: 1 }}
         className="w-full bg-gray-100 min-h-screen"
      >
         <TransitionEffect />

         {/* HERO SECTION */}
         <motion.div 
            className="relative bg-[url('/contact-bg.jpg')] bg-cover bg-center py-24 px-5 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
         >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
               <h2 className="text-5xl font-bold text-white">Get in Touch</h2>
               <p className="text-gray-200 mt-3 text-lg">
                  Have a question? Let's connect and make things happen.
               </p>
            </div>
         </motion.div>

         {/* CONTACT FORM SECTION */}
         <motion.div 
            className="container mx-auto px-5 py-16 flex flex-col md:flex-row gap-10 items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
         >
            {/* CONTACT FORM */}
            <motion.div 
               className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-all duration-500 hover:shadow-3xl"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h3 className="text-3xl font-semibold text-secondary text-center mb-6">Contact Us</h3>
               {state.succeeded ? (
                  <motion.p 
                     className="text-green-600 text-lg text-center font-semibold"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                  >
                     Thanks for your message!
                  </motion.p>
               ) : (
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                           required
                        />
                     </motion.div>

                     <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <div>
                           <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                              required
                           />
                        </div>

                        <div>
                           <label htmlFor="tel" className="text-gray-700 font-medium">Phone Number</label>
                           <input
                              type="tel"
                              id="tel"
                              name="tel"
                              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none"
                           />
                        </div>
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
                        <textarea
                           id="message"
                           name="message"
                           className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm h-32 resize-none focus:ring-2 focus:ring-secondary focus:outline-none"
                           required
                        />
                     </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <button
                           className="w-full bg-gradient-to-r from-secondary to-primary text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg"
                           type="submit"
                           disabled={state.submitting}
                        >
                           Send Message
                        </button>
                     </motion.div>
                  </form>
               )}
            </motion.div>

            {/* CONTACT DETAILS & SOCIAL MEDIA */}
            <motion.div 
               className="flex flex-col items-center gap-6 text-center"
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h3 className="text-3xl font-semibold text-secondary">Let's Connect</h3>
               <p className="text-gray-700 text-lg max-w-md">
                  Reach out via email, phone, or follow us on social media for updates and inquiries.
               </p>

               <div className="flex gap-5 mt-4">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                     <motion.a 
                        key={index} 
                        href="#" 
                        whileHover={{ scale: 1.2 }} 
                        transition={{ duration: 0.3 }} 
                        className="p-3 bg-secondary text-white rounded-full hover:bg-primary transition-all"
                     >
                        <Icon size={20} />
                     </motion.a>
                  ))}
               </div>

               {/* ADDRESS & CONTACT */}
               <div className="mt-4 text-gray-700">
                  <p className="font-semibold">Email: info@byonbiomedic.com</p>
                  <p className="font-semibold">Phone: +603 62422746</p>
                  <p>Suite 10-03, Mutiara Office Suites, 568, Jalan Sultan Azlan Shah, Kuala Lumpur, Malaysia</p>
               </div>
            </motion.div>
         </motion.div>

         {/* MAP EMBED */}
         <motion.div 
            className="w-full h-64"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <iframe
               className="w-full h-full border-none rounded-xl shadow-lg"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.15163525267!2d101.69389144999999!3d3.1448398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37fb6f7f7001%3A0xc1b4c41f9b4ea60!2sKuala%20Lumpur%20City%20Centre%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1644508477500!5m2!1sen!2smy"
               loading="lazy"
            ></iframe>
         </motion.div>
      </motion.div>
   );
};

export default Contact;
