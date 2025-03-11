"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const faqs = [
  {
    question: "What is Website Consulting?",
    answer:
      "Website consulting services help businesses optimize their online presence by providing expert guidance on design, development, performance, security, and SEO strategies.",
  },
  {
    question: "Why is website consulting important?",
    answer:
      "Website consulting ensures your website is user-friendly, fast, secure, and optimized for search engines, improving engagement and conversion rates.",
  },
  {
    question: "What services do website consultants offer?",
    answer:
      "Website consultants provide services such as UI/UX design, website development, SEO optimization, website audits, and performance enhancements.",
  },
  {
    question: "How can SEO consulting improve my website?",
    answer:
      "SEO consulting helps improve your website's visibility on search engines, driving more organic traffic, increasing rankings, and boosting online reach.",
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
        <Heading>Website Consulting Services FAQ</Heading>
        <Paragraph className="text-center">
          Common questions about website consulting services answered
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
