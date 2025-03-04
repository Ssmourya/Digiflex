import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is Salesforce Consulting?",
    answer:
      "Salesforce consulting helps businesses optimize their CRM strategies by providing implementation, customization, and integration services to enhance customer engagement and operational efficiency.",
  },
  {
    question: "How can Salesforce benefit my business?",
    answer:
      "Salesforce enables businesses to streamline sales, marketing, and customer service processes, offering data-driven insights, automation, and improved customer relationships.",
  },
  {
    question: "What services do Salesforce consultants provide?",
    answer:
      "Salesforce consultants offer services such as CRM implementation, workflow automation, third-party integrations, custom development, and ongoing support to maximize the platform's value.",
  },
  {
    question: "Is Salesforce suitable for small businesses?",
    answer:
      "Yes, Salesforce offers scalable solutions for businesses of all sizes, including small and medium enterprises, to manage their customer relationships effectively and drive growth.",
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
        <Heading>Salesforce Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about Salesforce consulting services answered
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
