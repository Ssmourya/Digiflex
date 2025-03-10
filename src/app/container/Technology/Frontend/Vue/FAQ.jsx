"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const faqData = [
  {
    question: "What Vue.js services do you offer?",
    answer:
      "We offer end-to-end Vue.js development services, including custom web app development, UI/UX design, performance optimization, API integration, and ongoing maintenance and support.",
  },
  {
    question: "Why choose Vue.js for web development?",
    answer:
      "Vue.js is a lightweight, progressive framework that offers high performance, component-based architecture, reactive data binding, and easy integration with existing projects, making it an excellent choice for modern web applications.",
  },
  {
    question: "How experienced is your Vue.js development team?",
    answer:
      "Our team consists of skilled Vue.js developers with years of experience in building scalable, high-performance applications. We follow best practices and leverage the latest tools and libraries in the Vue.js ecosystem.",
  },
  {
    question: "Do you build Vue.js applications from scratch?",
    answer:
      "Yes, we specialize in building Vue.js applications from the ground up. We ensure the project is structured efficiently, follows best coding practices, and is optimized for performance and scalability.",
  },
  {
    question: "Can you integrate Vue.js with existing applications?",
    answer:
      "Absolutely! Vue.js is highly adaptable and can be integrated into existing projects, whether it's a partial migration or adding interactive components to a legacy system.",
  },
  {
    question: "Do you provide Vue.js consulting services?",
    answer:
      "Yes, we offer Vue.js consulting to help businesses choose the right architecture, optimize their Vue applications, and ensure best practices in development and deployment.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto "
      >
        <div className="text-center mb-12">
          <Heading>Frequently Asked Questions</Heading>
          <Paragraph>
            Have questions about our Vue.js development services? Here are some
            of the most common inquiries we receive.
          </Paragraph>
        </div>

        <div className="space-y-4 mb-20">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
            >
              <motion.div
                onClick={() => toggleFAQ(index)}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      className={`text-green-500 transition-colors ${
                        activeIndex === index ? "text-green-700" : ""
                      }`}
                    />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: {
                        duration: 0.3,
                        height: { duration: 0.3 },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        duration: 0.3,
                        height: { duration: 0.3 },
                      },
                    }}
                    className="bg-green-50 p-6 rounded-b-lg"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </WrapperContainer>
  );
};

export default FAQ;
