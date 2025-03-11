"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end React.js development services, including UI/UX design, frontend development, API integration, performance optimization, and ongoing maintenance.",
  },
  {
    question: "Why should I choose React.js for my project?",
    answer:
      "React.js offers component-based architecture, high performance, and strong community support. It ensures fast rendering, scalability, and maintainability, making it ideal for modern web applications.",
  },
  {
    question: "Do you work with Next.js as well?",
    answer:
      "Yes, we specialize in Next.js for server-side rendering, static site generation, and API handling. It enhances SEO and performance for React applications.",
  },
  {
    question: "Can you migrate my existing app to React?",
    answer:
      "Absolutely! We help businesses migrate from older technologies to React.js, ensuring smooth transitions with minimal downtime and improved performance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We have experience working with startups, enterprises, and businesses in fintech, e-commerce, healthcare, education, and SaaS platforms.",
  },
  {
    question: "How do you ensure the quality of your code?",
    answer:
      "We follow best coding practices, conduct rigorous code reviews, implement automated testing, and use TypeScript for type safety and maintainability.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity, but most React projects take between 4 to 12 weeks. We provide detailed schedules after requirement analysis.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance, bug fixes, performance optimization, and feature enhancements after the project is launched.",
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
        className="container mx-auto mb-20"
      >
        <div className="text-center mb-12">
          <Heading>Frequently Asked Questions</Heading>
          <Paragraph>
            Have questions? Here are some answers about our React.js development
            services.
          </Paragraph>
        </div>

        <div className="space-y-4">
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
                      className={`text-blue-500 transition-colors ${
                        activeIndex === index ? "text-blue-700" : ""
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
                    className="bg-blue-50 p-6 rounded-b-lg"
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
