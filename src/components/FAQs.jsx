import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs.json";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-syne mb-4 bg-gradient-to-r from-violet-400 to-blurple-color bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300/80">
            Everything you need to know about Sergio Bot
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-blurple-color/10 to-gray-800/20 backdrop-blur-md border border-gray-700/50 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-white/90">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <i className="fa-solid fa-chevron-down text-violet-400/80"></i>
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300/80">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
