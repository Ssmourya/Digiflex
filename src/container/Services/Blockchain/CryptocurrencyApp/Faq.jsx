import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Heading from '../../../../Layout/Heading';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is cryptocurrency?',
      answer: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on decentralized networks based on blockchain technology.'
    },
    {
      question: 'How do I buy cryptocurrency?',
      answer: 'You can buy cryptocurrency through exchanges like Binance, Coinbase, or Kraken using fiat currency or other digital assets.'
    },
    {
      question: 'Is cryptocurrency legal?',
      answer: 'Cryptocurrency regulations vary by country. Please check your local laws to ensure compliance before investing or trading.'
    },
    {
      question: 'What is a blockchain?',
      answer: 'A blockchain is a decentralized digital ledger that records transactions across multiple computers securely and transparently.'
    },
    {
      question: 'How can I secure my cryptocurrency?',
      answer: 'Store your cryptocurrency in a secure wallet (hardware or software), enable two-factor authentication, and never share your private keys.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <WrapperContainer>
<div className="max-w-4xl mx-auto  to-gray-200 min-h-screen">
    <Heading>
      <h1>Frequently Asked Questions</h1>
    </Heading>
      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`bg-white rounded-lg shadow-md transition-all ${isOpen ? 'shadow-lg' : ''}`}> 
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center p-4 text-lg font-semibold transition-all ${isOpen ? 'text-blue-900' : 'text-gray-800'}`}
              >
                {faq.question}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>↓</span>
              </button>
              <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-96 p-4' : 'max-h-0 p-0'}`}>{faq.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
   </WrapperContainer>

  );
};

export default Faq;
