import React, { useState } from 'react';
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
      question: "What is Website Development?",
      answer:
        "Website Development involves creating websites and web applications, focusing on both front-end and back-end processes to deliver engaging user experiences.",
    },
    {
      question: "Which technologies are used in Website Development?",
      answer:
        "We use a combination of HTML5, CSS3, and JavaScript, along with frameworks such as React, Angular, or Vue for the front-end, and Node.js, PHP, or Ruby on Rails for the back-end.",
    },
    {
      question: "How do you ensure responsive design?",
      answer:
        "We employ responsive design principles using flexible grids, media queries, and adaptive layouts to ensure that your website looks and works great on all devices.",
    },
    {
      question: "What is your website development process?",
      answer:
        "Our process includes planning, design, development, testing, and deployment. We follow agile methodologies to ensure iterative improvements and timely delivery.",
    },
    {
      question: "How do you handle website maintenance?",
      answer:
        "We offer ongoing maintenance services including security updates, performance optimization, and regular content updates to keep your website current and secure.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[90%] md:max-w-5xl mx-auto px-4 fade-in">
        <div className="text-center mb-8">
          <h3 className="text-5xl font-extrabold text-center text-blue-600">
            ❓ Frequently Asked Questions (FAQs)
          </h3>
          <p className="text-blue-900 text-lg mt-4">
            Got questions? We're here to help.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
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
