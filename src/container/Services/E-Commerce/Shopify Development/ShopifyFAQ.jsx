"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const faqs = [
  { question: "What is Shopify Development?", answer: "Shopify Development involves building, customizing, and optimizing eCommerce stores using the Shopify platform." },
  { question: "Why should I choose Shopify for my store?", answer: "Shopify is a powerful and scalable eCommerce solution with built-in hosting, security, and a user-friendly interface." },
  { question: "Can I migrate my existing store to Shopify?", answer: "Yes! Our team provides seamless migration services to transfer your data securely to Shopify without downtime." },
  { question: "Do you offer Shopify customization services?", answer: "Absolutely! We provide theme development, app integration, and performance optimization tailored to your business needs." },
  { question: "Is Shopify SEO-friendly?", answer: "Yes, Shopify includes SEO-friendly features, and we can further enhance it to improve your search rankings and online visibility." },
];

const ShopifyFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <section className="w-full bg-white text-gray-900 py-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Updated Heading for Shopify FAQ */}
          <h3 className="text-3xl font-extrabold text-blue-600 mb-7">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-600 mb-10">
            Have questions about Shopify Development? Find answers to the most common inquiries below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Updated Question Color for Shopify Theme */}
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

export default ShopifyFAQ;
