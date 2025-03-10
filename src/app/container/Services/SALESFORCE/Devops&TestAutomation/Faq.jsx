"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const faqs = [
    {
        question: "What is DevOps?",
        answer:
          "DevOps is a software development methodology that integrates development (Dev) and operations (Ops) teams to improve collaboration, automate processes, and ensure faster, more reliable software delivery.",
      },
      {
        question: "What is Automation Testing in DevOps?",
        answer:
          "Automation Testing in DevOps involves using software tools to execute test cases automatically, reducing manual effort and speeding up testing in CI/CD pipelines.",
      },
      {
        question: "Why is Automation Testing Important in DevOps?",
        answer:
          "It ensures Continuous Testing, reduces manual errors, speeds up release cycles, and improves software quality.",
      },
      {
        question: "What are the most used DevOps tools?",
        answer:
          "Common DevOps tools include Jenkins, GitHub Actions, Docker, Kubernetes, Terraform, and Prometheus.",
      },
      {
        question: "Which tools are used for Automation Testing in DevOps?",
        answer:
          "Popular tools include Jest, Cypress, Selenium, Postman, JMeter, and SonarQube.",
      },
      {
        question: "How do you integrate Automation Testing in a DevOps Pipeline?",
        answer:
          "Write automated test scripts, configure test execution in CI/CD pipelines, run tests on every commit, and deploy only if all tests pass.",
      },
      {
        question: "What is Shift-Left Testing in DevOps?",
        answer:
          "Shift-left testing means testing earlier in the software development cycle to detect and fix bugs sooner.",
      },
      {
        question: "What are common challenges in Automation Testing?",
        answer:
          "Challenges include test flakiness, high maintenance, and slow execution of large test suites.",
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


