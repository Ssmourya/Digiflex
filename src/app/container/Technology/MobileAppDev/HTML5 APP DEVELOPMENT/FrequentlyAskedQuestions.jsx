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
      question: "What is HTML5 App Development?",
      answer: "HTML5 App Development refers to building web and mobile applications using HTML5, CSS3, and JavaScript. These apps run on any platform with a modern web browser.",
    },
    {
      question: "What are the benefits of HTML5 apps?",
      answer: "HTML5 apps offer cross-platform compatibility, ease of deployment, and the ability to leverage web standards for a consistent experience across devices.",
    },
    {
      question: "Can HTML5 apps work offline?",
      answer: "Yes, HTML5 provides features like local storage and service workers, which enable offline functionality and caching for web apps.",
    },
    {
      question: "How does HTML5 improve mobile app performance?",
      answer: "HTML5 improves mobile app performance by utilizing native browser optimizations and providing rich multimedia support without requiring additional plugins.",
    },
    {
      question: "What tools are commonly used for HTML5 app development?",
      answer: "Popular tools include frameworks like Ionic, Apache Cordova, and PhoneGap, which help you build, test, and deploy HTML5 apps across multiple platforms.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90%] md:max-w-6xl mx-auto px-4 fade-in">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h3 className="text-5xl font-extrabold text-center text-blue-600" >
            ❓ Frequently Asked Questions at Digiflex.ai (FAQs)
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
