import React, { useState } from "react";
import TransitionEffect from "../utils/TransitionEffect";

const Medicines = ({ medicines }) => {
   const { heading, products } = medicines;
   const [selectedProduct, setSelectedProduct] = useState(null);

   const openPopup = (product) => {
      setSelectedProduct(product);
   };

   const closePopup = () => {
      setSelectedProduct(null);
   };

   return (
      <div className="w-full py-10">
         <TransitionEffect />
         <div className="flex justify-center">
            <h2 className="font-heading text-3xl">{heading}</h2>
         </div>

         <div className="flex flex-wrap items-start justify-center w-full py-10">
            {products.map((product, idx) => (
               <div
                  key={idx}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  onClick={() => openPopup(product)}
               >
                  <img
                     src={product.imageUrl}
                     alt={product.name}
                     className="object-cover"
                  />
                  <h3>{product.name}</h3>
               </div>
            ))}
         </div>

         {/* Product Popup */}
         {selectedProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl relative max-h-[90vh] overflow-y-auto">
                  <button
                     className="absolute top-2 right-2 text-lg font-bold"
                     onClick={closePopup}
                  >
                     ✕
                  </button>

                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>

                  {/* Damoxin Content */}
                  {selectedProduct.name === "Damoxin" ? (
                     <div className="mt-4 text-gray-700 space-y-4">
                        <p>
                            A Novel Phyto
                           Medicine for COVID-19 Treatment
                        </p>
                        <p>
                           Damoxin is a groundbreaking phytomedicine derived
                           from a synergistic blend of bioactive plant
                           compounds, specifically formulated to target
                           SARS-CoV-2 and mitigate COVID-19 symptoms.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Mechanism of Action
                        </h3>
                        <ul className="list-disc pl-5">
                           <li>
                              <strong>Antiviral Activity:</strong> Blocks viral
                              attachment and inhibits replication.
                           </li>
                           <li>
                              <strong>Immunomodulation:</strong> Balances immune
                              responses by regulating cytokines.
                           </li>
                           <li>
                              <strong>Cellular Protection:</strong> Reduces
                              oxidative damage to lung tissue.
                           </li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-4">
                           Clinical Benefits
                        </h3>
                        <ul className="list-disc pl-5">
                           <li>
                              Speeds up symptom resolution (fever, cough,
                              fatigue).
                           </li>
                           <li>Reduces risk of severe complications.</li>
                           <li>Shortens viral shedding duration.</li>
                           <li>Safe with minimal side effects.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-4">
                           Safety Profile
                        </h3>
                        <p>
                           Damoxin’s plant-based composition ensures high
                           tolerability.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Sustainability
                        </h3>
                        <p>
                           Sourced through ethical wildcrafting and sustainable
                           agriculture.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Conclusion
                        </h3>
                        <p>
                           Damoxin is a safe, accessible, and multi-faceted tool
                           against COVID-19.
                        </p>
                     </div>
                  ) : (
                     <p className="mt-4 text-gray-600">
                        {selectedProduct.description}
                     </p>
                  )}
               </div>
            </div>
         )}
      </div>
   );
};

export default Medicines;
