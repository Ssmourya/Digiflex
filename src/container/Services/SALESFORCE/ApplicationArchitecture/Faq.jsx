// import React from 'react'

// const Faq = () => {
//   return (
//     <div>Faq</div>
//   )
// }

// export default Faq

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
  {
    question: "What is Salesforce Application Architecture?",
    answer: "Salesforce Application Architecture is a multi-layered structure designed to support scalable and customizable applications. It includes data, logic, UI, and integration layers to ensure seamless user experience, automation, and extensibility."
  },
  {
    question: "What are the key components of Salesforce Architecture?",
    answer: "The key components include Metadata-Driven Architecture, Multitenancy, API-First Development, Lightning UI, Apex for business logic, and the Data Model comprising Objects, Fields, and Relationships."
  },
  {
    question: "How does Salesforce handle data security?",
    answer: "Salesforce provides a robust security model that includes Object-Level Security (Profiles, Permission Sets), Field-Level Security, Record-Level Security (OWD, Role Hierarchy, Sharing Rules), and Authentication mechanisms like SSO and OAuth."
  },
  {
    question: "What is the role of Lightning Web Components (LWC) in Salesforce?",
    answer: "LWC is a modern web development framework for building fast, reusable, and lightweight UI components using HTML, JavaScript, and CSS. It enhances the performance of Salesforce applications with a reactive programming model."
  },
  {
    question: "What are best practices for designing scalable Salesforce applications?",
    answer: "Best practices include using a modular architecture, avoiding excessive triggers, leveraging Platform Events for asynchronous processing, optimizing SOQL queries, utilizing Custom Metadata for configurations, and ensuring proper governor limit management."
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
            Salesforce Application Architecture & Design - FAQs
          </h3>

          <Paragraph>
            <span>
              Get answers to the most common questions about Salesforce application architecture and design.
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
