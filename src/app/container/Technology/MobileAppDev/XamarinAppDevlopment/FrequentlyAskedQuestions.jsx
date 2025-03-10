"use client";

import React, { useState } from 'react';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-gray-300 bg-white rounded-xl shadow-md p-5 transition-all duration-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center focus:outline-none"
      >
        <h4 className="text-black text-xl font-medium">{question}</h4>
        <span
          className={`transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        >
          {isOpen ? (
            <FiChevronUp className="w-6 h-6 text-gray-700" />
          ) : (
            <FiChevronDown className="w-6 h-6 text-gray-700" />
          )}
        </span>
      </button>
      <div
        className={`mt-3 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-700 text-lg mt-2">{answer}</p>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: "What is Xamarin?",
      answer: "Xamarin is a cross-platform development framework from Microsoft that uses C# and .NET to build native mobile applications for iOS, Android, and Windows.",
    },
    {
      question: "Which languages can I use with Xamarin?",
      answer: "Xamarin primarily uses C#, allowing developers to share code across multiple platforms while still delivering native performance.",
    },
    {
      question: "What is Xamarin.Forms?",
      answer: "Xamarin.Forms is a UI toolkit within Xamarin that enables developers to build cross-platform user interfaces using a single, shared codebase.",
    },
    {
      question: "How does Xamarin integrate with Visual Studio?",
      answer: "Xamarin integrates seamlessly with Visual Studio, providing robust debugging, testing tools, and design support for developing mobile applications.",
    },
    {
      question: "Is Xamarin free to use?",
      answer: "Yes, Xamarin is available as part of Visual Studio Community Edition, making it free for individual developers and small teams.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90%] md:max-w-6xl mx-auto px-4 fade-in">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-5xl font-extrabold text-center text-blue-600">
            ❓ Frequently Asked Questions (FAQs)
          </h3>
          <Subheading>
            Got questions? We're here to help.
          </Subheading>
        </div>
        {/* FAQ Cards */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      {/* Fade-in Animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FrequentlyAskedQuestions;
