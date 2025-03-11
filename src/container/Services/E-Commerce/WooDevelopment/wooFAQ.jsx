"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const faqs = [
  { question: "What is WooCommerce Development?", answer: "WooCommerce Development involves building, customizing, and optimizing eCommerce stores using the WooCommerce platform on WordPress." },
  { question: "Why should I use WooCommerce for my store?", answer: "WooCommerce is a flexible, open-source eCommerce solution that allows full customization and integrates seamlessly with WordPress." },
  { question: "Can I migrate my existing store to WooCommerce?", answer: "Yes! Our team provides smooth and secure migration services to WooCommerce, ensuring zero data loss." },
  { question: "Do you offer WooCommerce customization services?", answer: "Absolutely! We create custom themes, develop plugins, and optimize WooCommerce stores to meet your business needs." },
  { question: "Is WooCommerce SEO-friendly?", answer: "Yes, WooCommerce is highly SEO-friendly, and we can further optimize your store for better rankings and traffic growth." },
];

const WooFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <section className="w-full bg-white text-gray-900 py-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Updated Heading for WooCommerce FAQ */}
          <h3 className="text-3xl font-extrabold text-blue-600 mb-7">Frequently Asked Questions</h3>
          <Paragraph>Have questions about WooCommerce Development? Find answers to the most common inquiries below.</Paragraph>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Updated Question Color for WooCommerce Theme */}
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

export default WooFAQ;
