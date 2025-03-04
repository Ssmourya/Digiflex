import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";


  const Ai_faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
   <WrapperContainer>
          <div className="bg-white  px-6 p-10">
        <div className="max-w-6xl mx-auto text-center">
          <Heading>
          <h2>
            Frequently Asked Questions
          </h2>
  
          </Heading>
          <Paragraph>
          <p>
            Get answers to the most common questions about **AI Software Development website.** and how it works.
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
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
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
                <div className="px-6 pb-4 text-gray-700 text-md">{faq.answer}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
   </WrapperContainer>
   
    );
  };
  

export default Ai_faq




