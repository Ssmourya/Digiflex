import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const JavaDevelopmentFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Java Development?",
      answer:
        "Java Development involves creating applications using the Java programming language. It is widely used for building enterprise-level applications, mobile apps, and web applications."
    },
    {
      question: "What are the benefits of using Java?",
      answer:
        "Java offers platform independence, robustness, security, and scalability, making it an ideal choice for large-scale applications and cross-platform development."
    },
    {
      question: "Which tools and frameworks are commonly used in Java Development?",
      answer:
        "Developers commonly use tools like Eclipse, IntelliJ IDEA, or NetBeans along with frameworks such as Spring, Hibernate, and JavaServer Faces (JSF) for efficient development."
    },
    {
      question: "How does Java ensure cross-platform compatibility?",
      answer:
        "Java achieves cross-platform compatibility through the Java Virtual Machine (JVM), which allows compiled Java code to run on any device or operating system that has a compatible JVM."
    },
    {
      question: "What types of applications can be built with Java?",
      answer:
        "Java can be used to build a wide range of applications, including web applications, enterprise software, mobile applications, and even desktop applications."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-5xl font-extrabold text-center text-blue-600">
          FAQs - Java Development
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

export default JavaDevelopmentFAQ;
