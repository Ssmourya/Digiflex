import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework that enables server-side rendering, static site generation, and API routes. It enhances performance and SEO while simplifying development.",
  },
  {
    question: "How does Next.js improve SEO?",
    answer:
      "Next.js improves SEO by enabling server-side rendering (SSR) and static site generation (SSG), ensuring that pages are pre-rendered and indexed effectively by search engines.",
  },
  {
    question: "What is the difference between SSR and SSG?",
    answer:
      "SSR (Server-Side Rendering) generates pages dynamically on request, whereas SSG (Static Site Generation) pre-renders pages at build time for faster performance.",
  },
  {
    question: "How do API routes work in Next.js?",
    answer:
      "Next.js API routes allow you to create server-side functions inside the /pages/api directory. These routes handle backend logic and return JSON responses.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <div className=" mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading>Next.js Development FAQ</Heading>
          <Paragraph>
            Common questions about Next.js development answered
          </Paragraph>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <motion.button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default FAQ;
