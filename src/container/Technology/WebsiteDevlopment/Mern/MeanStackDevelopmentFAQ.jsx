"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MernStackDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is MERN Stack Development?",
      answer:
        "MERN Stack Development involves using MongoDB, Express.js, React.js, and Node.js to build dynamic and efficient web applications using JavaScript throughout the stack."
    },
    {
      question: "What are the advantages of using the MERN stack?",
      answer:
        "The MERN stack enables full-stack JavaScript development, provides a seamless development experience, supports high performance, and is widely adopted for modern web applications."
    },
    {
      question: "How does MongoDB enhance MERN Stack applications?",
      answer:
        "MongoDB, a NoSQL database, provides flexibility with JSON-like document storage, high scalability, and easy integration with JavaScript-based applications."
    },
    {
      question: "What role does React play in the MERN stack?",
      answer:
        "React is a powerful front-end library that allows developers to build interactive, component-based UIs with a virtual DOM for optimized performance."
    },
    {
      question: "How do Express.js and Node.js contribute to the MERN stack?",
      answer:
        "Express.js is a minimalist web framework that runs on Node.js, providing API development capabilities, while Node.js offers an event-driven, non-blocking runtime for handling backend logic efficiently."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - MERN Stack Development by Quest Digiflex
        </h3>
        <p className="text-blue-900 text-lg mt-4">
          Got questions? Quest Digiflex is here to help.
        </p>
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openFaq === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openFaq === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MernStackDevelopmentFAQ;
