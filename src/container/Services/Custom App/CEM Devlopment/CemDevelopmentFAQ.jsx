import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CemDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is CEM Development?",
      answer:
        "CEM Development focuses on building systems that enhance customer experiences by gathering feedback, analyzing data, and optimizing interactions across multiple channels."
    },
    {
      question: "Why is Customer Experience Management important?",
      answer:
        "Effective CEM improves customer satisfaction, drives loyalty, and can significantly increase revenue by ensuring that customer needs are met consistently."
    },
    {
      question: "What technologies are involved in CEM Development?",
      answer:
        "CEM systems often combine data analytics, CRM integration, cloud-based services, and modern web/mobile technologies to create a seamless customer experience."
    },
    {
      question: "How do you ensure data privacy and security in CEM solutions?",
      answer:
        "We implement robust security measures including encryption, compliance with data protection regulations, and regular security audits to safeguard customer data."
    },
    {
      question: "Can CEM solutions be customized for different business needs?",
      answer:
        "Yes, CEM solutions are highly customizable, allowing businesses to tailor customer engagement strategies and integrate with existing systems."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - CEM Development
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

export default CemDevelopmentFAQ;
