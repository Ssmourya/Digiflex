import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <h4 
          className="text-xl font-bold text-black mb-2 pb-1 cursor-pointer"
          onClick={toggleAnswer}
        >
          {question}
        </h4>
        <div className="cursor-pointer" onClick={toggleAnswer}>
          {isOpen ? (
            <FiChevronUp className="text-blue-600 text-2xl" />
          ) : (
            <FiChevronDown className="text-blue-600 text-2xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <p className="text-lg text-blue-400 mt-4">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What is NativeScript?',
      answer:
        'NativeScript is an open-source framework for building native mobile applications using JavaScript, TypeScript, or frameworks like Angular and Vue.',
    },
    {
      question: 'Which languages can I use with NativeScript?',
      answer:
        'You can build NativeScript apps using JavaScript, TypeScript, Angular, or Vue, making it a versatile choice for developers.',
    },
    {
      question: 'How does NativeScript work?',
      answer:
        'NativeScript bridges your JavaScript code with native platform APIs, allowing you to write a single codebase that accesses native features on both iOS and Android.',
    },
    {
      question: 'Can I share code between iOS and Android with NativeScript?',
      answer:
        'Yes, NativeScript enables you to share a significant portion of your codebase between iOS and Android, reducing development time and effort.',
    },
    {
      question: 'What are some common use cases for NativeScript?',
      answer:
        'NativeScript is often used for building enterprise mobile applications, rapid prototyping, and apps that require deep integration with native device features.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-10">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          NativeScript FAQ
        </h3>
      </header>
      <div className="max-w-6xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
