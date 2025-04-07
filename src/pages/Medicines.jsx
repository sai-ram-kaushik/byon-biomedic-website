import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionEffect from "../utils/TransitionEffect";

const Medicines = ({ medicines }) => {
  const { heading, products } = medicines;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  return (
    <div className="w-full bg-white py-20 px-4 md:px-10">
      <TransitionEffect />

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 font-heading tracking-tight">
          {heading}
        </h2>
        <p className="mt-4 text-neutral-600 text-lg">
          Explore our research-backed phytomedicines designed for modern healthcare.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => openPopup(product)}
            className="bg-white rounded-2xl shadow-md cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-60 object-contain p-4"
            />
            <div className="px-5 pb-5 pt-3 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {product.tagline || "Tap to learn more"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-red-500 transition"
                aria-label="Close"
              >
                &times;
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {selectedProduct.name}
              </h2>

              {selectedProduct.name === "Damoxin" ? (
                <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                  <img
                    src={selectedProduct.productPackage}
                    alt="Damoxin Packaging"
                    className="rounded-lg mx-auto max-w-full max-h-64 object-contain"
                  />

                  <p>
                    <strong>Damoxin</strong> is a groundbreaking phytomedicine formulated to target
                    COVID-19 using nature’s most potent bioactive compounds. It blends scientific
                    rigor with ancient wisdom to offer a multi-targeted, safe, and holistic remedy.
                  </p>

                  <section>
                    <h3 className="font-semibold text-lg">Mechanism of Action</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Antiviral:</strong> Inhibits replication by blocking 3CL protease
                        and viral attachment.
                      </li>
                      <li>
                        <strong>Immunomodulation:</strong> Balances cytokine storms by regulating
                        IL-6, TNF-α, and IFN levels.
                      </li>
                      <li>
                        <strong>Cellular Protection:</strong> Shields lung and endothelial cells
                        from oxidative stress.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg">Clinical Benefits</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Speeds up recovery from COVID-19 symptoms like fever and fatigue.</li>
                      <li>Reduces risk of complications such as pneumonia or clotting.</li>
                      <li>Shortens viral shedding period.</li>
                      <li>Minimal side effects, even in moderate-to-severe cases.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="font-semibold text-lg">Sustainability & Ethics</h3>
                    <p>
                      Damoxin is sourced through eco-friendly wildcrafting and sustainable
                      agriculture, ensuring both environmental balance and pharmaceutical efficacy.
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Medicines;
