import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../utils/TransitionEffect";
import { FaBolt, FaShieldAlt, FaLeaf } from "react-icons/fa";

const Medicines = ({ medicines }) => {
   const { heading, products } = medicines;
   const [selectedProduct, setSelectedProduct] = useState(null);

   const openPopup = (product) => setSelectedProduct(product);
   const closePopup = () => setSelectedProduct(null);

   const damoxin = products.find((p) => p.name === "Damoxin");

   return (
      <div className="w-full bg-white text-gray-900 overflow-x-hidden">
         <TransitionEffect />

         {/* ✅ FIXED HERO SECTION (your clean original one) */}
         <section className="text-center py-20 bg-white px-6 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
               {heading}
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
               Explore our cutting-edge phytomedicines designed for the future of healing.
            </p>
         </section>

         {/* DAMOXIN FEATURED SECTION */}
         <section className="bg-gray-50 py-16 px-6 md:px-24 rounded-t-3xl shadow-inner">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.img
                  src={damoxin.productPackage}
                  alt="Damoxin"
                  className="max-h-[400px] object-contain rounded-2xl drop-shadow-lg"
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
                  <h2 className="text-3xl font-bold">Damoxin™</h2>
                  <p className="text-gray-700 text-lg">
                     A revolutionary phytomedicine targeting COVID-19 via multi-pronged action — safe, powerful, and plant-based.
                  </p>
                  <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4">
                     “An evolution in herbal science for pandemic-era healthcare.”
                  </blockquote>
               </motion.div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-12">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
               >
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                     <FaBolt className="text-blue-600" /> Mechanism
                  </h3>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                     <li>Blocks 3CL protease & viral entry</li>
                     <li>Regulates immune cytokines</li>
                     <li>Protects lung & vascular cells</li>
                  </ul>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
               >
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                     <FaShieldAlt className="text-green-600" /> Benefits
                  </h3>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                     <li>Faster recovery time</li>
                     <li>Reduced pneumonia risk</li>
                     <li>Minimal side effects</li>
                  </ul>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
               >
                  <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                     <FaLeaf className="text-emerald-600" /> Sustainability
                  </h3>
                  <p className="text-gray-600">
                     Ethically sourced botanicals, eco-conscious formulation, and fair trade practices.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* PRODUCTS GRID */}
         <section className="bg-white py-20 px-6 md:px-20">
            <h3 className="text-center text-3xl font-bold mb-12 text-gray-800">
               Explore Other Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
               {products
                  .filter((p) => p.name !== "Damoxin")
                  .map((product, idx) => (
                     <motion.div
                        key={idx}
                        onClick={() => openPopup(product)}
                        className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 group"
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

            {/* ✅ GLASSY "COMING SOON" CARD */}
            <div className="mt-24 flex justify-center">
               <motion.div
                  className="backdrop-blur-md bg-white/30 border border-gray-300 shadow-xl rounded-xl px-8 py-6 text-center max-w-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <p className="text-gray-800 font-medium text-lg">
                     🧪 A new formulation is under classified research.
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                     Coming Soon — stay tuned for what's next.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* PRODUCT POPUP */}
         {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
               <div className="relative bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-6">
                  <button
                     onClick={closePopup}
                     className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-600"
                  >
                     &times;
                  </button>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                     {selectedProduct.name}
                  </h2>
                  <img
                     src={selectedProduct.productPackage}
                     alt={selectedProduct.name}
                     className="rounded-md mx-auto max-w-full max-h-64 object-contain mb-4"
                  />
                  <p className="text-gray-700">{selectedProduct.description}</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default Medicines;
