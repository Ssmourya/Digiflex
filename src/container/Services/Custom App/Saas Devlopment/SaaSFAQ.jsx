"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SaaSFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'What are SaaS Application Development Services?',
      answer:
        'SaaS Application Development Services provide cloud-based software solutions that are accessible over the internet. These services include design, development, deployment, and maintenance of applications following the Software-as-a-Service model.'
    },
    {
      question: 'What are the key benefits of SaaS solutions?',
      answer:
        'SaaS solutions offer cost-effectiveness, automatic updates, scalability, remote accessibility, and seamless integration with other cloud services, helping businesses reduce infrastructure costs and streamline operations.'
    },
    {
      question: 'How does SaaS ensure data security?',
      answer:
        'SaaS applications implement robust security measures such as end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like GDPR, HIPAA, and SOC 2.'
    },
    {
      question: 'Can SaaS applications be customized?',
      answer:
        'Yes, SaaS applications can be customized to meet specific business needs, including configurable user interfaces, API integrations, workflow automation, and custom reporting capabilities.'
    },
    {
      question: 'What makes a SaaS application scalable?',
      answer:
        'A scalable SaaS application is designed to handle increased user demand without performance degradation by leveraging cloud infrastructure, microservices architecture, load balancing, and optimized database management.'
    },
    {
      question: 'What support and maintenance services are provided for SaaS applications?',
      answer:
        'SaaS applications come with ongoing support including bug fixes, performance monitoring, feature updates, security patches, and 24/7 customer support to ensure smooth operation and high user satisfaction.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - SaaS Application Development Services
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

export default SaaSFAQ;
