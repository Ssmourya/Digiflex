import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
  {
    question: "What is an NFT Marketplace?",
    answer: "An NFT marketplace is an online platform where users can buy, sell, and trade Non-Fungible Tokens (NFTs) using cryptocurrency.",
  },
  {
    question: "How does an NFT Marketplace work?",
    answer: "NFT marketplaces allow creators to mint, list, and sell NFTs, while buyers can purchase these NFTs through bids or fixed prices using cryptocurrencies.",
  },
  {
    question: "What blockchain is used for NFTs?",
    answer: "The most commonly used blockchain for NFTs is Ethereum, though other blockchains like Binance Smart Chain, Solana, and Flow also support NFTs.",
  },
  {
    question: "How do I create an NFT Marketplace?",
    answer: "To create an NFT marketplace, you need to integrate blockchain technology, smart contracts, and a platform for users to mint, list, and buy NFTs.",
  },
  {
    question: "What are smart contracts in an NFT Marketplace?",
    answer: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code, enabling secure transactions on the marketplace without intermediaries.",
  },
  {
    question: "What are the key features of an NFT Marketplace?",
    answer: "Key features include a user-friendly interface, wallet integration, NFT listing and minting, secure payment systems, and a bidding or fixed-price option for transactions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <div>
        <div className="max-w-5xl mx-auto text-center">

        <h3 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Nft Development :- Frequently Asked Questions
       </h3>
          <Paragraph>
          <span>
              Get answers to the most common questions about NFT Marketplace development.
          </span>       
          </Paragraph>

        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl p-5 mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <h4>
                <div className="text-lg font-semibold text-gray-800">{faq.question}</div>
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

                <div className="px-6 pb-2 text-gray-700 text-md">{faq.answer}</div>
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
