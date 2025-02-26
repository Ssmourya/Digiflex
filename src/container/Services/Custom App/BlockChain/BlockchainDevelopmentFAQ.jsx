import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const BlockchainDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Blockchain Development?",
      answer:
        "Blockchain Development involves creating decentralized applications and smart contracts using blockchain technology. It leverages distributed ledger systems to enhance transparency, security, and trust in digital transactions."
    },
    {
      question: "Which platforms are used for Blockchain Development?",
      answer:
        "Common platforms include Ethereum, Hyperledger Fabric, Binance Smart Chain, and Solana. Each platform offers unique features and tools for developing decentralized solutions."
    },
    {
      question: "What programming languages are commonly used?",
      answer:
        "Developers often use Solidity for Ethereum smart contracts, as well as JavaScript, Go, and Python for building blockchain applications and integrating with blockchain networks."
    },
    {
      question: "How do smart contracts work?",
      answer:
        "Smart contracts are self-executing agreements with the terms directly written into code. They automatically enforce and execute contractual agreements once predefined conditions are met, without the need for intermediaries."
    },
    {
      question: "What are the benefits of Blockchain Development?",
      answer:
        "Blockchain technology offers enhanced security, transparency, and immutability. It reduces reliance on intermediaries, streamlines processes, and provides a robust framework for decentralized applications."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - Blockchain Development
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

export default BlockchainDevelopmentFAQ;
