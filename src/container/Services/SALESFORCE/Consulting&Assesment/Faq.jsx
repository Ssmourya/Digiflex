import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
    {
        question: "What are Consulting & Assessment Services?",
        answer:
          "Consulting & Assessment is a professional service that helps businesses analyze and improve their IT infrastructure, applications, and workflows.",
      },
      {
        question: "How do your consulting services work?",
        answer:
          "We first understand your business requirements, then conduct a detailed assessment. After that, we provide personalized solutions and strategic recommendations to help your business grow.",
      },
      {
        question: "Which industries do you provide consulting services for?",
        answer:
          "We work with clients from multiple industries, such as Finance, Healthcare, E-commerce, IT, Real Estate, and Manufacturing.",
      },
      {
        question: "Do you provide customized solutions?",
        answer: "Yes, we offer tailored consulting solutions based on each client's specific requirements.",
      },
      {
        question: "Are your services available remotely or onsite?",
        answer: "Yes, our services are available in both remote and onsite formats.",
      },
      {
        question: "What is the cost of consulting services?",
        answer: "The cost depends on the complexity, duration, and requirements of the project. You can contact us for a free consultation.",
      },
      {
        question: "Do you provide Salesforce and Cloud-based consulting?",
        answer: "Yes, we offer Salesforce consulting and Cloud-based solutions that enhance business automation and scalability.",
      },
      {
        question: "How can we avail your consulting services?",
        answer: "You can fill out the Contact Us form on our website or reach out to us via email/call. We will get back to you shortly.",
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
          Security, fees, trading pairs, withdrawal limits, KYC, liquidity, and support.
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


