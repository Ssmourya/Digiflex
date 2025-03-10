"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
  {
    question: 'How much does it cost to build a cryptocurrency exchange platform?',
    answer: 'The cost of building a cryptocurrency exchange platform can vary significantly based on features, complexity, and security requirements. Basic platforms typically start from $50,000, while more sophisticated exchanges can cost $150,000 or more. Factors affecting cost include trading engine complexity, security measures, user interface, and regulatory compliance requirements.'
  },
  {
    question: 'How long does white label crypto exchange development take?',
    answer: 'White label crypto exchange development typically takes 2-4 months. This timeline includes customization, branding, testing, and deployment. The exact duration depends on specific requirements, customizations needed, and the complexity of additional features requested.'
  },
  {
    question: 'How to create a cryptocurrency exchange?',
    answer: 'Creating a cryptocurrency exchange involves several key steps: 1) Define your target market and features 2) Choose between white-label solution or custom development 3) Ensure legal compliance and obtain necessary licenses 4) Implement robust security measures 5) Integrate payment systems and cryptocurrencies 6) Test thoroughly for security and performance 7) Launch and maintain the platform.'
  },
  {
    question: 'What are the benefits of hiring Appinventiv as your cryptocurrency exchange development company?',
    answer: 'Benefits include experienced blockchain developers, comprehensive security measures, scalable architecture, regulatory compliance expertise, ongoing technical support, and proven track record in crypto exchange development.'
  },
  {
    question: 'What are some of the top features of a cryptocurrency exchange platform?',
    answer: 'Key features include: Multi-currency support, secure wallet integration, real-time trading engine, advanced order types, KYC/AML compliance, two-factor authentication, liquidity aggregation, customer support system, and mobile accessibility.'
  }
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
          <div className="text-center">
          Security, fees, trading pairs, withdrawal limits, KYC, liquidity, and support.
          </div>
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


