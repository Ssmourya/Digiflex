"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WrapperContainer from '../../../../Layout/WrapperContainer';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-none bg-white rounded-lg mb-4"
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-100 transition-colors duration-200 rounded-lg"
      >
        <h4 className="text-xl font-semibold text-blue-600 mb-2 mt-4">{question}</h4>
      
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const VRXRSimulationFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is the typical timeline for developing a VR/XR simulation?",
      answer: "Timelines vary based on complexity. Basic simulations take 3-6 months, while complex projects can take a year or more. Factors like interactivity, graphics, and AI influence development time."
    },
    {
      question: "What platforms do you develop VR/XR simulations for?",
      answer: "We develop for Oculus, HTC Vive, PlayStation VR, Meta Quest, and enterprise AR devices like Microsoft HoloLens and Magic Leap."
    },
    {
      question: "How much does it cost to develop a VR/XR simulation?",
      answer: "Costs range from $50,000 to several hundred thousand dollars, depending on scope, level of detail, and required hardware compatibility."
    },
    {
      question: "What industries can benefit from VR/XR simulations?",
      answer: "Industries like healthcare, education, real estate, military training, and engineering benefit from immersive simulations for training and visualization."
    },
    {
      question: "What technologies do you use for VR/XR simulation development?",
      answer: "We utilize Unreal Engine, Unity, OpenXR, WebXR, and AI-driven interactivity tools to create high-fidelity and immersive experiences."
    },
    {
      question: "Do you provide post-launch support for VR/XR simulations?",
      answer: "Yes, we offer maintenance, updates, and optimizations to ensure smooth performance and user experience improvements."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WrapperContainer>
      <div className="mx-auto mb-20">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-center mb-6 text-blue-700">VR/XR Simulation Development FAQ</h3>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about VR/XR simulation development, costs, platforms, and more.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems[index]}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No matching questions found.</p>
          </div>
        )}
      </div>
    </WrapperContainer>
  );
};

export default VRXRSimulationFAQ;
