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
      question: 'What is Flutter?',
      answer:
        'Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    },
    {
      question: 'Which programming language is used with Flutter?',
      answer:
        'Flutter uses Dart, a modern programming language optimized for building fast and high-performance applications on multiple platforms.',
    },
    {
      question: 'How does Flutter render its UI?',
      answer:
        'Flutter renders its UI using its own high-performance rendering engine, which allows for a consistent look and feel across platforms.',
    },
    {
      question: 'Can I use Flutter for web development?',
      answer:
        'Yes, Flutter supports web development, allowing you to create responsive web applications using the same codebase as your mobile apps.',
    },
    {
      question: 'What are the benefits of using Flutter?',
      answer:
        'Some benefits of using Flutter include fast development with Hot Reload, expressive and flexible UI components, and a single codebase for multiple platforms.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-10">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          Flutter FAQ
        </h3>
      </header>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
