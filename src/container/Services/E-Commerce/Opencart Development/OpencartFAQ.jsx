"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const faqs = [
  { question: "What is OpenCart Development?", answer: "OpenCart Development involves creating, customizing, and optimizing eCommerce stores using the OpenCart platform." },
  { question: "Why should I use OpenCart for my store?", answer: "OpenCart is an open-source, lightweight, and highly customizable eCommerce solution with a user-friendly interface." },
  { question: "Can I migrate my existing store to OpenCart?", answer: "Yes! Our team provides seamless migration services to transfer your data safely to OpenCart." },
  { question: "Do you offer OpenCart customization services?", answer: "Absolutely! We provide theme design, module development, and performance optimization tailored to your needs." },
  { question: "Is OpenCart SEO-friendly?", answer: "Yes, OpenCart comes with built-in SEO features, and we can further optimize it for better rankings." },
];

const OpenCartFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
    <section className="w-full bg-white text-gray-900 py-0 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Updated Heading in h3 */}
        <h3 className="text-3xl font-extrabold text-blue-600 mb-7">Frequently Asked Questions</h3>
        <p className="text-lg text-gray-600 mb-10">
          Have questions about OpenCart Development? Find answers to the most common inquiries below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Updated Question in h4 */}
            <button
              className="w-full flex justify-between items-center text-left py-4 px-6 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="text-lg font-semibold text-blue-600">{faq.question}</h4>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-6 py-4 text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
    </WrapperContainer>
  );
};

export default OpenCartFAQ;
