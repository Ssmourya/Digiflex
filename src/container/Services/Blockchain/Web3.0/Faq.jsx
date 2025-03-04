import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
  {
          question: "What is Web Development 3.0?",
          answer: "Web Development 3.0 refers to the next generation of web technologies that incorporate decentralization, blockchain integration, AI-driven automation, and enhanced user experiences."
        },
        {
          question: "How does blockchain impact Web Development 3.0?",
          answer: "Blockchain enables decentralized applications (DApps), smart contracts, and secure, trustless interactions, making the web more transparent and resistant to censorship."
        },
        {
          question: "What technologies are commonly used in Web Development 3.0?",
          answer: "Technologies like blockchain (Ethereum, Solana), smart contracts (Solidity, Rust), decentralized storage (IPFS, Arweave), and AI-powered tools are integral to Web Development 3.0."
        },
        {
          question: "How is AI transforming Web Development 3.0?",
          answer: "AI enhances automation, personalization, and decision-making in Web 3.0 by enabling smart recommendations, AI-powered chatbots, and automated web development tools."
        },
        {
          question: "What role do smart contracts play in Web Development 3.0?",
          answer: "Smart contracts automate transactions and agreements without intermediaries, making web interactions more secure, transparent, and efficient."
        },
        {
          question: "What is the significance of decentralized identity in Web 3.0?",
          answer: "Decentralized identity allows users to control their personal data and authentication without relying on centralized authorities, enhancing privacy and security."
        }
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
          <span className="block text-center">
          Get answers to the most common questions about Web3.0 development.
          </span>
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



