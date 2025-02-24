import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const faqs = [
  {
    question: "How does AI-powered knowledge management improve customer support?",
    answer:
      "AI automates the discovery of relevant articles, reduces resolution times, and ensures accurate responses by analyzing past interactions and queries.",
  },
  {
    question: "Can the knowledge base be customized for different industries?",
    answer:
      "Yes, our AI-powered knowledge management system is adaptable and can be tailored to meet industry-specific requirements.",
  },
  {
    question: "Does this system integrate with existing support tools?",
    answer:
      "Absolutely! Our knowledge management system seamlessly integrates with CRM platforms, chatbots, and other customer support tools.",
  },
];

const KnowledgeSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap items-start gap-8 p-8 bg-white font-sans">
      {/* Knowledge Left Section */}
      <div className="flex-1">
        <Heading>
          Empower Customer Support with AI-Driven Knowledge Management
        </Heading>
        <Subheading className="text-xl text-gray-600 mb-4">
          Deliver Instant, Intelligent Answers to Enhance Customer Experience
        </Subheading>
        <div className="mb-6">
          <Subheading className="text-lg font-semibold text-blue-600 mb-2">
            AI-Powered Knowledge Base
          </Subheading>
          <p className="text-base text-gray-600 mb-4">
            Provide instant access to relevant knowledge articles, FAQs, and troubleshooting 
            guides, enabling both customers and support agents to resolve issues efficiently. 
            Reduce service request volumes by offering self-service solutions through an 
            intelligent AI-driven knowledge management system.
          </p>
        </div>
        <ul className="list-none space-y-2">
          <li className="text-base text-blue-600">Real-Time AI Article Recommendations</li>
          <li className="text-base text-blue-600">Generative AI-Powered Search Insights</li>
          <li className="text-base text-blue-600">Seamless Integration with Chatbots & Support Portals</li>
          <li className="text-base text-blue-600">Automated Content Curation & Updates</li>
        </ul>
      </div>

      {/* Knowledge Right Section */}
      <div className="flex-1 flex flex-col items-end">
        <img
          src="https://blog.darwinbox.com/hubfs/HR%20Tech%20Implementation.jpg"
          alt="AI-Driven Knowledge Management"
          className="w-full max-w-md rounded-lg shadow-lg mb-4"
        />
       
      </div>
      
      {/* Frequently Asked Questions Section */}
      <div className="w-full mt-12">
        <Heading>Frequently Asked Questions</Heading>
        <Subheading className="text-gray-600 mb-6">
          Find quick answers to common queries.
        </Subheading>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <button
                className="flex justify-between items-center w-full text-left text-blue-600 font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white mt-2">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeSection;
