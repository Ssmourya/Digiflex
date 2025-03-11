"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const faqs = [
  {
    question: "What services do you offer in Bootstrap development?",
    answer:
      "We specialize in creating responsive, mobile-first websites and web applications using Bootstrap. Our services include UI/UX design, theme customization, component development, and performance optimization.",
  },
  {
    question: "Why should I choose Bootstrap for my project?",
    answer:
      "Bootstrap provides a fast, responsive, and customizable framework that ensures consistency across devices. It includes a powerful grid system, reusable components, and extensive documentation, making development efficient.",
  },
  {
    question: "Can you customize Bootstrap themes?",
    answer:
      "Yes, we offer full customization of Bootstrap themes, including modifying styles, adding custom components, and integrating third-party plugins to match your brand identity and business needs.",
  },
  {
    question: "Do you provide support and maintenance?",
    answer:
      "Absolutely! We offer ongoing support and maintenance, ensuring that your Bootstrap-based website stays up-to-date with the latest technologies, security patches, and performance enhancements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <WrapperContainer>
       <div className="mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
<Heading>
Bootstrap Development FAQ
</Heading>
    <Paragraph>
    Common questions about Bootstrap development answered
    </Paragraph>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 mb-20"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <motion.button
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleFAQ(index)}
              whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg font-semibold text-gray-800 pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-5 h-5 text-blue-500" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                        ease: "easeOut",
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: "easeIn",
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </WrapperContainer>
  );
};

export default FAQ;
