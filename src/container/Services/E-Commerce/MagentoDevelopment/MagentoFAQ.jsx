"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const faqs = [
  { question: "What is Magento Open Source?", answer: "Magento Open Source is a flexible eCommerce platform that allows businesses to build and customize their online stores with robust features." },
  { question: "Is Magento Open Source free?", answer: "Yes, Magento Open Source is free to download and use. However, costs may arise for hosting, extensions, and custom development." },
  { question: "What are the benefits of Magento Open Source?", answer: "Magento Open Source offers flexibility, scalability, and a rich set of features, making it ideal for growing businesses." },
  { question: "Can I customize Magento Open Source?", answer: "Absolutely! Magento Open Source allows extensive customization, including themes, extensions, and tailored functionalities." },
  { question: "Is Magento Open Source secure?", answer: "Yes, Magento provides security patches and updates regularly. Proper security configurations can further enhance protection." }
];

const MagentoFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <section className="w-full bg-white text-gray-900 py-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-blue-600 mb-7">Magento Open Source FAQ</h3>
          <p className="text-lg text-gray-600 mb-10">
            Have questions about Magento Open Source? Find answers to the most common inquiries below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full flex justify-between items-center text-left py-4 px-6 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-semibold text-indigo-600">{faq.question}</h4>
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

export default MagentoFAQ;
