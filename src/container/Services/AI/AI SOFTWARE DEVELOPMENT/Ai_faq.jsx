import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
    {
      question: "How can AI benefit my business?",
      answer: "Automating repetitive tasks to improve efficiency and providing data-driven insights for better decision-making also enhancing customer experience through chatbots & personalization.",
    },
    {
      question: "Does Digiflex provide custom AI solutions?",
      answer: "Yes! Digiflex offers tailor-made AI software solutions based on your business needs. Our team will analyze your requirements and develop a custom AI-powered application that aligns with your goals.",
    },
    {
      question: "Does Digiflex offer AI consulting services?",
      answer: "Yes! We provide AI consulting services to help businesses understand how AI can be implemented for business automation, predictive analytics, and digital transformation.",
    },
    {
      question: "Can Digiflex integrate AI into my existing software?",
      answer: "Yes! Digiflex specializes in AI integration with existing business applications. Whether it's a website, mobile app, or enterprise software, we can integrate AI features such as automation, predictive analytics, and chatbots.",
    },
    {
      question: "What AI services does Digiflex offer?",
      answer: "At Digiflex, we provide a wide range of AI services, including: AI-powered application development ,Machine learning & deep learning solutions,Business automation with AI,Cloud-based AI solutions ,AI in blockchain & Web3 ",
    },
    
  ];

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




