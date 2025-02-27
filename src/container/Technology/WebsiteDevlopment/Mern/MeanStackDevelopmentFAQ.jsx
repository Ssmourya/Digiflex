import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MeanStackDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is MEAN Stack Development?",
      answer:
        "MEAN Stack Development involves using MongoDB, Express.js, Angular, and Node.js to build robust, scalable web applications with a single language—JavaScript—across the stack."
    },
    {
      question: "What are the benefits of using the MEAN stack?",
      answer:
        "The MEAN stack provides a unified development environment, which simplifies development and maintenance, offers high performance, scalability, and leverages the power of JavaScript for both client and server-side development."
    },
    {
      question: "How does MongoDB support MEAN Stack applications?",
      answer:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for applications that require high performance, scalability, and ease of integration with JavaScript-based technologies."
    },
    {
      question: "What role does Angular play in the MEAN stack?",
      answer:
        "Angular is a robust front-end framework that allows developers to create dynamic single-page applications (SPAs) with rich user interfaces, two-way data binding, and powerful tooling."
    },
    {
      question: "How do Express.js and Node.js contribute to the MEAN stack?",
      answer:
        "Express.js is a minimalist web framework that runs on Node.js, providing robust features for building APIs and handling server-side logic, while Node.js offers a non-blocking, event-driven architecture for scalable network applications."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - MEAN Stack Development
        </h3>
        <p className="text-blue-900 text-lg mt-4">
          Got questions? We're here to help.
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

export default MeanStackDevelopmentFAQ;
