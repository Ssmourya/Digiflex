"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
  {
          question: 'What is DeFi development?',
          answer: 'DeFi development involves creating decentralized financial applications that operate without intermediaries using blockchain technology.',
        },
        {
          question: 'How does DeFi differ from traditional finance?',
          answer: 'DeFi eliminates intermediaries like banks by using smart contracts, providing financial services in a transparent and decentralized manner.',
        },
        {
          question: 'What are smart contracts in DeFi?',
          answer: 'Smart contracts are self-executing contracts with coded terms that facilitate decentralized transactions without third-party involvement.',
        },
        {
          question: 'Is DeFi development secure?',
          answer: 'Security in DeFi depends on smart contract audits, secure coding practices, and decentralized governance to minimize vulnerabilities.',
        },
        {
          question: 'What are the benefits of DeFi applications?',
          answer: 'DeFi applications provide global accessibility, transparency, lower fees, and financial inclusion without requiring traditional banking services.',
        },
        {
          question: 'Can DeFi replace traditional banking?',
          answer: 'While DeFi offers an alternative to traditional banking, widespread adoption and regulatory challenges must be addressed for full replacement.',
        },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <div className="pb-10">
        <div className="max-w-5xl mx-auto text-center">
        
        
       <h3 className="text-4xl font-bold text-center mb-6 text-blue-700">
           Frequently Asked Questions
       </h3>
      
          <Paragraph>
          <span className="block text-center">
          Get answers to the most common questions about Defi development.
          </span>
          </Paragraph>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <h4>
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>

                </h4>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
               <Paragraph>
               <div className="px-6 pb-4 text-gray-700 text-md">{faq.answer}</div>
               </Paragraph>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Faq;



