import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";

const Medicines = ({ medicines }) => {
   const { heading, products } = medicines;
   const [selectedProduct, setSelectedProduct] = useState(null);

   const openPopup = (product) => setSelectedProduct(product);
   const closePopup = () => setSelectedProduct(null);

   return (
      <div className="w-full py-16 bg-gray-50">
         <TransitionEffect />
         
         {/* Heading */}
         <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
               {heading}
            </h2>
            <p className="mt-2 text-gray-500 text-lg">
               Explore our innovative phytomedicines
            </p>
         </div>

         {/* Product Grid */}
         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">
            {products.map((product, idx) => (
               <div
                  key={idx}
                  onClick={() => openPopup(product)}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
               >
                  <img
                     src={product.imageUrl}
                     alt={product.name}
                     className="w-full h-64 object-contain p-4"
                  />
                  <div className="p-4 text-center">
                     <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                     </h3>
                     <p className="text-sm text-gray-500 mt-1">
                        {product.tagline || "Click to learn more"}
                     </p>
                  </div>
               </div>
            ))}
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

                  {/* Damoxin Special Content */}
                  {selectedProduct.name === "Damoxin" ? (
                     <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                        <img
                           src={selectedProduct.productPackage}
                           alt="Damoxin Packaging"
                           className="rounded-lg mx-auto max-w-full max-h-64 object-contain"
                        />

                        <p>
                           <strong>Damoxin</strong> is a groundbreaking phytomedicine formulated to target COVID-19 using nature’s most potent bioactive compounds. It blends scientific rigor with ancient wisdom to offer a multi-targeted, safe, and holistic remedy.
                        </p>

                        <section>
                           <h3 className="font-semibold text-lg mt-4">Mechanism of Action</h3>
                           <ul className="list-disc list-inside space-y-2">
                              <li><strong>Antiviral:</strong> Inhibits replication by blocking 3CL protease and viral attachment.</li>
                              <li><strong>Immunomodulation:</strong> Balances cytokine storms by regulating IL-6, TNF-α, and IFN levels.</li>
                              <li><strong>Cellular Protection:</strong> Shields lung and endothelial cells from oxidative stress.</li>
                           </ul>
                        </section>

                        <section>
                           <h3 className="font-semibold text-lg mt-4">Clinical Benefits</h3>
                           <ul className="list-disc list-inside space-y-2">
                              <li>Speeds up recovery from COVID-19 symptoms like fever and fatigue.</li>
                              <li>Reduces risk of complications such as pneumonia or clotting.</li>
                              <li>Shortens viral shedding period.</li>
                              <li>Minimal side effects, even in moderate-to-severe cases.</li>
                           </ul>
                        </section>

                        <section>
                           <h3 className="font-semibold text-lg mt-4">Sustainability & Ethics</h3>
                           <p>
                              Damoxin is sourced through eco-friendly wildcrafting and sustainable agriculture, ensuring both environmental balance and pharmaceutical efficacy.
                           </p>
                        </section>

                        <p className="italic text-gray-600">
                           “An evolution in herbal science for pandemic-era healthcare.”
                        </p>
                     </div>
                  ) : (
                     <div className="text-gray-700 text-base leading-relaxed">
                        <img
                           src={selectedProduct.productPackage}
                           alt={`${selectedProduct.name} Package`}
                           className="rounded-lg mx-auto max-w-full max-h-64 object-contain mb-4"
                        />
                        <p>{selectedProduct.description}</p>
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default Medicines;
