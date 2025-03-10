"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is Mobile App Consulting?",
    answer:
      "Mobile app consulting helps businesses design, develop, and optimize mobile applications by providing expert guidance on strategy, technology stack, user experience, and performance optimization.",
  },
  {
    question: "How can Mobile App Consulting benefit my business?",
    answer:
      "Mobile app consultants help streamline app development, improve user engagement, enhance app performance, and ensure scalability while aligning with business objectives.",
  },
  {
    question: "What services do Mobile App Consultants provide?",
    answer:
      "Mobile app consultants offer services such as app strategy, UI/UX design, performance optimization, backend integration, security audits, and post-launch support to ensure a successful mobile application.",
  },
  {
    question: "Can you help with both iOS and Android apps?",
    answer:
      "Yes, mobile app consultants provide expertise in both iOS and Android development, whether it's native apps, cross-platform solutions, or progressive web applications (PWAs).",
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
        <Heading>Mobile App Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about Mobile App Consulting Services answered
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