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
                  {/* <h3>
                     {product.name} <sup>{product.trademark}</sup>
                  </h3> */}
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
                        <img src={selectedProduct.productPackage} width={500}/>
                        <p>A Novel Phyto Medicine for COVID-19 Treatment</p>
                        <p>
                           Damoxin is a groundbreaking phytomedicine derived from a synergistic blend of bioactive plant compounds, specifically formulated target SARS-CoV-2 and mitigate COVID-19 symptoms. Leveraging nature's antiviral and anti-inflammatory properties, Damoxin offers a holistic, science-backed approach to reducing viral load, modulating hyperimmune responses, and accelerating recovery. Its unique multi-target mechanism positions it as a promising adjunct therapy in the global fight against COVID-19.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">
                           Detailed Description of Damoxin
                        </h3>
                        <p>
Damoxin is an innovative herbal formulation developed through advanced phytopharmaceutical research, combining traditional medicinal wisdom with modern scientific validation. Designed to address both the viral pathogenesis and inflammatory complications of COVID-19, Damoxin represents a paradigm shift in integrative antiviral therapy.
                        </p>
                        <h3 className="text-lg font-semibold mt-4">
                           Mechanism of Action
                        </h3>
                        <ul className="list-disc pl-5">
                           <li>
                              <strong>Antiviral Activity:</strong> Blocks viral
                              attachment and inhibits replication by targeting key viral enzymes (e.g., 3CL protease).
                           </li>
                           <li>
                              <strong>Immunomodulation:</strong> Downregulates pro-inflammatory cytokines (IL-6,TNF-α) while enhancing interferon production to balance immune responses.
                           </li>
                           <li>
                              <strong>Cellular Protection:</strong> Reduces
                              oxidative damage to lung tissue and endothelial cells, preventing acute respiratory distress syndrome (ARDS).
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
                           <li>Reduces risk of severe complications (e.g. pneumonia, thrombosis).</li>
                           <li>Shortens viral shedding duration, potentially reducing transmission.</li>
                           <li>Safe for use in mild-to-severe cases, with minimal side effects compared to synthetic drugs.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-4">
                           Safety Profile
                        </h3>
                        <p>
                           Damoxin's plant-based composition ensures high tolerability. Preclinical and early-phase trials report no significant adverse effects, making it suitable for long-term prophylactic or therapeutic use.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Complementary Role
                        </h3>
                        <p>
                           While not a replacement for vaccines or emergency antivirals, Damoxin bridges gaps in outpatient care and post-infection recovery. It synergizes with standard therapies to enhance efficacy and reduce dependency on immunosuppressive drugs.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Sustainability
                        </h3>
                        <p>
                           Sourced through ethical wildcrafting and sustainable agriculture, Damoxin emphasizes environmental stewardship and supports biodiversity conservation.
                        </p>

                        <h3 className="text-lg font-semibold mt-4">
                           Conclusion
                        </h3>
                        <p>
                           Damoxin exemplifies the convergence of traditional herbal medicine and cutting-edge virology, offering a safe, accessible, and multi-faceted tool against COVID-19. By addressing both the virus and its inflammatory aftermath, it embodies a holistic strategy for pandemic management, with potential applications in future coronavirus variants.
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
