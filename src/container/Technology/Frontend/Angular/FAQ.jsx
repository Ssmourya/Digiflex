import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const faqs = [
  {
    question: "What is Angular?",
    answer:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It provides powerful features like two-way data binding, dependency injection, and component-based architecture.",
  },
  {
    question: "How does data binding work in Angular?",
    answer:
      "Angular provides two-way data binding using [(ngModel)] and one-way data binding using interpolation {{ }} and property binding [property]. This enables automatic synchronization of data between the model and view, making it easier to build dynamic applications.",
  },
  {
    question: "What are Angular directives?",
    answer:
      "Directives are special markers in HTML that tell Angular how to behave. There are three types: structural directives like *ngIf and *ngFor that modify DOM layout, attribute directives like ngClass that change element appearance or behavior, and component directives that create custom elements.",
  },
  {
    question: "What is Angular CLI?",
    answer:
      "Angular CLI (Command Line Interface) is a powerful development tool that helps in creating, developing, and managing Angular applications. It provides commands for generating components, services, pipes, and other features, along with built-in development server and build optimization tools.",
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Heading>Angular Development FAQ</Heading>
        <Paragraph>
          Common questions about Angular development answered
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
    </WrapperContainer>
  );
};

export default FAQ;
