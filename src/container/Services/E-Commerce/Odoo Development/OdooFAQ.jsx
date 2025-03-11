"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";

const faqs = [
  { question: "What is Odoo Development?", answer: "Odoo Development involves customizing and extending the Odoo ERP system to meet specific business needs. It includes module development, API integrations, and UI enhancements." },
  { question: "Is Odoo free to use?", answer: "Odoo offers both a free Community version and a paid Enterprise version. The Community version provides essential ERP functionalities, while the Enterprise version includes advanced features and official support." },
  { question: "Can I integrate Odoo with third-party apps?", answer: "Yes! Odoo supports integrations with third-party apps such as payment gateways, eCommerce platforms, and accounting software through APIs and custom connectors." },
  { question: "What industries benefit from Odoo?", answer: "Odoo is used across industries including Retail, Manufacturing, Healthcare, Wholesale, Logistics, and Finance due to its modular and customizable structure." },
  { question: "How secure is Odoo for business data?", answer: "Odoo ensures data security through encryption, access control, and regular updates. Additional security measures such as SSL, two-factor authentication, and firewalls can be implemented." },
];

const OdooFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <section className="w-full bg-white text-gray-900 py-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h3 className="text-3xl font-extrabold text-blue-600 mb-7">Odoo Development FAQ</h3>
          <p className="text-lg text-gray-600 mb-10">
            Find answers to common questions about Odoo development, customization, and integration.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              {/* Question */}
              <button
                className="w-full flex justify-between items-center text-left py-4 px-6 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-semibold text-blue-600">{faq.question}</h4>
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {/* Answer (Collapsible) */}
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

export default OdooFAQ;
