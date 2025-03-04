import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is Testing Consulting?",
    answer:
      "Testing consulting services help businesses ensure the quality and reliability of their software by providing expert guidance on test strategy, automation, performance, and security testing.",
  },
  {
    question: "Why is software testing important?",
    answer:
      "Software testing helps identify defects, improve security, enhance user experience, and ensure compliance with industry standards, leading to a more stable and reliable product.",
  },
  {
    question: "What types of testing services are available?",
    answer:
      "Testing consultants offer various services, including functional testing, automation testing, performance testing, security testing, and user acceptance testing to meet different project needs.",
  },
  {
    question: "How can test automation benefit my business?",
    answer:
      "Test automation reduces manual effort, speeds up testing cycles, enhances accuracy, and ensures consistent test coverage, leading to faster and more efficient software releases.",
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
        <Heading>Testing Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about testing consulting services answered
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
