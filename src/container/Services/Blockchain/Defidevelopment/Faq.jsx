import React, { useState } from 'react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <div>
        <Heading>
          <div>
            Frequently Asked Questions
          </div>
        </Heading>
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'border-2 border-blue-500' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-lg text-gray-800 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-600'} hover:transition-colors duration-300`}
                >
                  {faq.question}
                  <span className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}>
                    &#x25BC;
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Faq;
