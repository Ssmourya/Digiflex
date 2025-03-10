"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
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
           Frequently Asked Questions
       </h3>
      
          <Paragraph>
          <div className="text-center">
          Privacy, security, transactions, fees, deposits, withdrawals, support, features, and accessibility.
          </div>
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


