import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PythonDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Python Development?",
      answer:
        "Python Development involves using the Python programming language to build a wide range of applications including web, desktop, data science, and automation solutions."
    },
    {
      question: "What are the advantages of using Python?",
      answer:
        "Python is known for its simplicity, readability, and extensive library ecosystem, which makes rapid prototyping and development efficient and accessible for developers of all skill levels."
    },
    {
      question: "Which frameworks are popular for Python web development?",
      answer:
        "Popular frameworks include Django and Flask for web development, while libraries like Pandas, NumPy, and TensorFlow are widely used in data science and machine learning applications."
    },
    {
      question: "Can Python be used for both web and desktop applications?",
      answer:
        "Yes, Python is versatile and can be used to develop web applications with frameworks like Django or Flask, as well as desktop applications using tools such as Tkinter, PyQt, or Kivy."
    },
    {
      question: "How are dependencies managed in Python projects?",
      answer:
        "Dependencies in Python projects are typically managed using pip and virtual environments, or by using package managers like Poetry or Conda to handle more complex project requirements."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - Python Development
        </h3>
        <p className="text-blue-900 text-lg mt-4">
          Got questions? We're here to help.
        </p>
      </div>
      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              {openFaq === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openFaq === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PythonDevelopmentFAQ;
