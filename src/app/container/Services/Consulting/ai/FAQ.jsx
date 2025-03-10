"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is AI Consulting?",
    answer:
      "AI consulting involves helping businesses implement artificial intelligence solutions to optimize processes, enhance decision-making, and improve overall efficiency. Consultants provide expertise in AI strategy, development, and deployment tailored to specific business needs.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI can automate repetitive tasks, analyze large datasets for insights, enhance customer experiences through chatbots, and optimize decision-making with predictive analytics. It helps businesses improve efficiency, reduce costs, and gain a competitive edge.",
  },
  {
    question: "What industries can benefit from AI consulting?",
    answer:
      "AI consulting benefits a wide range of industries, including healthcare, finance, e-commerce, manufacturing, and logistics. Any business looking to leverage AI for automation, data analysis, or enhanced customer interactions can benefit.",
  },
  {
    question: "Do I need technical expertise to implement AI solutions?",
    answer:
      "No, AI consultants guide businesses through the entire process, from strategy to implementation. They provide expertise in selecting the right AI tools, training models, and integrating solutions without requiring extensive technical knowledge.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Heading>AI Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about AI consulting services answered
        </Paragraph>
      </motion.div>

      <div className="space-y-4 mb-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleFAQ(index)}
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
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default FAQ;
