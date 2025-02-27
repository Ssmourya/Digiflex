import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";


const faqs = [
  {
    question: "What is an Initial Coin Offering (ICO)?",
    answer: "An ICO is a fundraising method where new cryptocurrencies are sold to investors before launch to raise capital for blockchain projects.",
  },
  {
    question: "How does an ICO work?",
    answer: "Companies create a token, set a price, and investors buy it with cryptocurrency or fiat money, funding the project’s development.",
  },
  {
    question: "Is investing in an ICO safe?",
    answer: "ICO investments carry risks. It's important to research the project, team, and whitepaper before investing.",
  },
  {
    question: "How is an ICO different from an IPO?",
    answer: "Unlike IPOs, ICOs are typically unregulated and don’t grant ownership in a company, but offer tokens instead.",
  },
  {
    question: "What are the benefits of participating in an ICO?",
    answer: "Early investors can acquire tokens at a lower price, which may appreciate in value as the project grows.",
  },
  {
    question: "How do I participate in an ICO?",
    answer: "You need a cryptocurrency wallet that supports the project's token, funds in crypto (like ETH or BTC), and follow the ICO instructions.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 <WrapperContainer>
        <div className="bg-white  px-6 p-10">
      <div className="max-w-6xl mx-auto text-center">

      <h3 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Initial Coin Offering :- Frequently Asked Questions
       </h3>

        <Paragraph>
        <p>
          Get answers to the most common questions about **Initial Coin Offering (ICO)** and how it works.
        </p>
        </Paragraph>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-md bg-gray-100">
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
