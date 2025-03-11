"use client";

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
          className="text-xl font-bold text-black mb-2  pb-1 cursor-pointer"
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
      question: 'What is iOS Development?',
      answer:
        'iOS development involves creating mobile applications for Apple devices using programming languages like Swift or Objective-C.',
    },
    {
      question: 'Which IDE is used for iOS Development?',
      answer:
        'Xcode is the primary IDE for iOS development, offering tools like Interface Builder and simulators for testing.',
    },
    {
      question: 'How do I start learning Swift?',
      answer:
        'You can begin by exploring Apple’s official Swift documentation, tutorials, and building small projects to gain hands-on experience.',
    },
    {
      question: 'What is the role of SwiftUI in iOS development?',
      answer:
        'SwiftUI is a modern UI framework introduced by Apple for building user interfaces across all Apple platforms using Swift.',
    },
    {
      question: 'How can I test my iOS app on multiple devices?',
      answer:
        'You can use Xcode simulators and real device testing through TestFlight to ensure your app performs well on various devices.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto  bg-white p-8">
      <header className="mb-10">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          iOS Development FAQ
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
