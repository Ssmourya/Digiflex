"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is DevOps Consulting?",
    answer:
      "DevOps consulting helps organizations streamline software development and IT operations by implementing automation, CI/CD pipelines, and infrastructure as code to improve efficiency, scalability, and reliability.",
  },
  {
    question: "How can DevOps benefit my business?",
    answer:
      "DevOps practices enhance collaboration between development and operations teams, reduce deployment times, improve system reliability, and accelerate time to market while ensuring continuous monitoring and feedback loops.",
  },
  {
    question: "What services do DevOps consultants provide?",
    answer:
      "DevOps consultants offer services such as cloud migration, CI/CD pipeline setup, infrastructure automation, containerization, security integration, and performance optimization to help businesses adopt DevOps effectively.",
  },
  {
    question: "Do I need to migrate to the cloud for DevOps?",
    answer:
      "No, while DevOps is often associated with cloud environments, it can also be implemented in on-premises infrastructure. DevOps consultants assess your needs and recommend the best approach for your business.",
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
        <Heading>DevOps Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about DevOps consulting services answered
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
