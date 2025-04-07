import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../utils/TransitionEffect";
import { FaVirus, FaLungs, FaLeaf, FaBolt, FaShieldAlt } from "react-icons/fa";

const Medicines = ({ medicines }) => {
   const { heading, products } = medicines;
   const [selectedProduct, setSelectedProduct] = useState(null);

   const openPopup = (product) => setSelectedProduct(product);
   const closePopup = () => setSelectedProduct(null);

   const damoxin = products.find((p) => p.name === "Damoxin");

   return (
      <div className="w-full bg-gradient-to-br from-[#f3f4f6] to-[#e0ecf7] text-gray-900 overflow-x-hidden">
         <TransitionEffect />

         {/* Hero Section */}
         <div
            className="relative text-center py-28 px-6 md:px-20 bg-cover bg-center"
            style={{ backgroundImage: 'url(/product-bg.jpg)' }}
         >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)]" />
            </div>

            <motion.div
               className="relative z-10"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
            >
               <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  {heading}
               </h1>
               <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] italic">
                  Nature remembered. Science reimagined.
               </p>
            </motion.div>
         </div>

         {/* Mission Section - Moved Up */}
         <section className="bg-[#e9f3fc] py-24 px-6 md:px-28 text-center md:text-left">
            <motion.div
               className="max-w-5xl mx-auto"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
            >
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Harnessing Nature’s Healing Power for Modern Medicine
               </h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We merge ancient botanical wisdom with cutting-edge science to unlock plant-derived therapies for today’s health challenges. By analyzing plants at the molecular level and deploying AI-driven research and precision extraction, we isolate bioactive compounds with proven therapeutic value. These discoveries are rigorously tested and transformed into safe, standardized treatments for chronic conditions and unmet medical needs.
               </p>
               <p className="text-lg text-gray-700 leading-relaxed">
                  Committed to sustainability and efficacy, we bridge traditional remedies with modern healthcare standards—ensuring quality, safety, and trust.
               </p>
               <p className="mt-6 text-xl italic text-gray-500">
                  “Science Meets Nature. Innovation Meets Trust.”
               </p>
            </motion.div>
         </section>

         {/* Featured Damoxin Section */}
         <div className="relative bg-white py-20 px-6 md:px-28 rounded-t-3xl shadow-inner z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
               <motion.img
                  src={damoxin.productPackage}
                  alt="Damoxin"
                  className="max-h-[400px] object-contain rounded-2xl drop-shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               />

               <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
               >
                  <h2 className="text-3xl font-bold text-gray-900">Damoxin™</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                     A revolutionary phytomedicine designed to target COVID-19 through multi-layered mechanisms — offering safety, precision, and sustainability.
                  </p>
                  <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4">
                     “An evolution in herbal science for pandemic-era healthcare.”
                  </blockquote>
               </motion.div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center md:text-left md:pl-4">
               Image shown is a conceptual representation and may not reflect the final product packaging or design.
            </p>

            {/* Damoxin Details */}
            <div className="mt-16 grid md:grid-cols-3 gap-12">
               <motion.div className="space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                     <FaBolt className="text-blue-600" /> Mechanism of Action
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                     <li><strong>Antiviral:</strong> Inhibits replication by blocking 3CL protease and viral attachment.</li>
                     <li><strong>Immunomodulation:</strong> Balances cytokine storms by regulating IL-6, TNF-α, and IFN levels.</li>
                     <li><strong>Cellular Protection:</strong> Shields lung and endothelial cells from oxidative stress.</li>
                  </ul>
               </motion.div>

               <motion.div className="space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                     <FaShieldAlt className="text-green-600" /> Clinical Benefits
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                     <li>Speeds up recovery from fever, fatigue, and other symptoms.</li>
                     <li>Reduces risk of pneumonia and clotting.</li>
                     <li>Shortens viral shedding period.</li>
                     <li>Minimal side effects even in severe cases.</li>
                  </ul>
               </motion.div>

               <motion.div className="space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                     <FaLeaf className="text-teal-600" /> Sustainability & Ethics
                  </h3>
                  <p className="text-gray-600">
                     Damoxin is crafted through eco-friendly wildcrafting and regenerative agriculture. Every dose supports a healthier planet and a fairer future.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Other Products Grid */}
         <div className="bg-gradient-to-b from-white to-gray-100 pt-24 pb-16 px-6 md:px-20">
            <h3 className="text-center text-3xl font-bold text-gray-800 mb-12">
               Explore Other Products
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
               {products.filter((p) => p.name !== "Damoxin").map((product, idx) => (
                  <motion.div
                     key={idx}
                     onClick={() => openPopup(product)}
                     className="bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
                     whileHover={{ scale: 1.05 }}
                  >
                     <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-60 object-contain p-6"
                     />
                     <div className="p-4 text-center">
                        <h4 className="text-lg font-semibold text-gray-800">
                           {product.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                           {product.tagline || "Click to learn more"}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Coming Soon Card */}
         <div className="py-24 px-6 md:px-0 flex justify-center bg-gradient-to-b from-[#e9f3fc] to-[#f9fafc]">
            <motion.div
               className="backdrop-blur-md bg-white/40 border border-gray-300 shadow-2xl rounded-2xl px-10 py-10 text-center max-w-lg"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                  🧪 A new formulation is under classified research.
               </h4>
               <p className="text-sm text-gray-600 mt-2">
                  Coming Soon — stay tuned for what's next.
               </p>
            </motion.div>
         </div>

         {/* Popup Modal */}
         {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
               <div className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-6">
                  <button
                     onClick={closePopup}
                     className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-600 transition duration-200"
                     aria-label="Close"
                  >
                     &times;
                  </button>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                     {selectedProduct.name}
                  </h2>

                  <div className="text-gray-700 text-base leading-relaxed">
                     <img
                        src={selectedProduct.productPackage}
                        alt={`${selectedProduct.name} Package`}
                        className="rounded-lg mx-auto max-w-full max-h-64 object-contain mb-4"
                     />
                     <p>{selectedProduct.description}</p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Medicines;
