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
      question: 'What is React Native?',
      answer:
        'React Native is a framework for building native mobile applications using JavaScript and React, allowing you to create cross-platform apps with native performance.',
    },
    {
      question: 'How does React Native differ from React?',
      answer:
        'While both use React, React Native is focused on mobile app development and renders using native components, unlike React which is used for web development.',
    },
    {
      question: 'Can I reuse code between React and React Native?',
      answer:
        'Yes, many business logic and state management concepts can be shared between React and React Native, though UI components often require platform-specific adjustments.',
    },
    {
      question: 'How do I debug a React Native app?',
      answer:
        'You can debug React Native apps using tools like React Native Debugger, Chrome DevTools, or Flipper, which allow you to inspect elements and monitor network requests.',
    },
    {
      question: 'What are some common libraries used with React Native?',
      answer:
        'Popular libraries include React Navigation for handling navigation, Redux for state management, and Axios or Fetch for networking and API calls.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <header className="mb-10">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          React Native FAQ
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
