import React, { useState } from 'react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is a cryptocurrency wallet?',
      answer: 'A cryptocurrency wallet is a digital tool that allows users to store, send, and receive cryptocurrencies securely.',
    },
    {
      question: 'How does a crypto wallet work?',
      answer: 'It works by generating private and public keys. The private key allows access to funds, while the public key serves as the address for receiving assets.',
    },
    {
      question: 'What are the different types of crypto wallets?',
      answer: 'There are hot wallets (connected to the internet) and cold wallets (offline storage). Examples include software, hardware, and paper wallets.',
    },
    {
      question: 'Is a cryptocurrency wallet safe?',
      answer: 'Yes, but security depends on the type of wallet. Hardware wallets and wallets with strong encryption provide the highest security.',
    },
    {
      question: 'What happens if I lose my private key?',
      answer: 'Losing your private key means you lose access to your wallet and funds. Always keep backups in a secure location.',
    },
    {
      question: 'Can I recover a lost crypto wallet?',
      answer: 'If you have a backup or a seed phrase, you can recover your wallet. Otherwise, lost wallets are generally not recoverable.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  
    <WrapperContainer>
         <div className="max-w-7xl mx-auto px-6  p-10">
        <Heading>
        <h1 >
      Frequently Asked Questions
      </h1>
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
