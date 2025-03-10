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
      question: 'What is Android App Development?',
      answer:
        'Android App Development involves creating applications for devices running the Android OS, typically using languages like Java or Kotlin.',
    },
    {
      question: 'Which IDE is commonly used for Android development?',
      answer:
        'Android Studio is the official IDE for Android app development, providing a comprehensive suite of tools for building, testing, and debugging apps.',
    },
    {
      question: 'How do I start learning Android development?',
      answer:
        'To start learning Android development, begin with Java or Kotlin, and then explore Android fundamentals through tutorials, documentation, and small projects.',
    },
    {
      question: 'What role does XML play in Android development?',
      answer:
        'XML is primarily used for designing UI layouts and structuring app resources, enabling developers to define the visual elements of the application.',
    },
    {
      question: 'How can I test my Android applications?',
      answer:
        'You can test Android applications using Android Studio’s built-in emulator or by deploying your app on real devices for hands-on testing.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-10">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          Android App Development FAQ
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
