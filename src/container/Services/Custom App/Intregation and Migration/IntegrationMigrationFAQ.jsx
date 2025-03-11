"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const IntegrationMigrationFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'What are Integration and Migration Services?',
      answer:
        'Integration and Migration Services involve connecting disparate systems, data, and applications to streamline processes, and migrating data from legacy systems to modern platforms.',
    },
    {
      question: 'Why are integration services important?',
      answer:
        'Integration services are crucial because they ensure seamless communication between systems, reduce manual data entry, and improve overall operational efficiency.',
    },
    {
      question: 'What is involved in a migration process?',
      answer:
        'The migration process typically involves assessing current systems, planning the data transfer, executing the migration, and validating the results to ensure data integrity and minimal downtime.',
    },
    {
      question: 'How do you ensure data security during migration?',
      answer:
        'We implement robust security measures during migration, including encryption, secure data transfer protocols, and thorough testing to prevent data loss or breaches.',
    },
    {
      question: 'Can integration and migration solutions be customized?',
      answer:
        'Yes, integration and migration solutions are tailored to meet the unique requirements of different industries, ensuring compatibility with industry-specific standards and regulations.',
    },
    {
      question: 'What are the benefits of successful integration and migration?',
      answer:
        'Successful integration and migration result in streamlined operations, reduced IT complexity, improved data accessibility, and a solid foundation for future digital transformation.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - Integration and Migration Services
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

export default IntegrationMigrationFAQ;
