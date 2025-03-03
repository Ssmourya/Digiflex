import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
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
        <Subheading>{question}</Subheading>
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

const Unity3DGameFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is the typical timeline for developing a Unity3D game?",
      answer: "The development timeline varies based on the game's complexity. Simple games might take 3-6 months, while complex games can take 12+ months. Factors affecting the timeline include game features, art style, multiplayer functionality, and platform requirements. We provide detailed timeline estimates during the initial consultation."
    },
    {
      question: "How much does it cost to develop a Unity3D game?",
      answer: "Unity3D game development costs typically range from $30,000 to $500,000+. The final cost depends on factors like game complexity, graphics quality, features, platforms (iOS/Android), and monetization strategy. We offer flexible pricing models and can work within different budget ranges while maintaining quality."
    },
    {
      question: "Do you develop for both iOS and Android platforms using Unity3D?",
      answer: "Yes, we develop Unity3D games for both iOS and Android platforms. We use cross-platform development frameworks like Unity to ensure consistent quality across platforms while optimizing development time and costs. We can also develop native games for specific platforms if required."
    },
    {
      question: "What game engines do you use for Unity3D game development?",
      answer: "We primarily use Unity3D for mobile game development. Unity is excellent for 2D and 3D games with lower system requirements, and it supports both iOS and Android. We choose the engine based on your game's specific needs and requirements."
    },
    {
      question: "How do you handle game monetization in Unity3D games?",
      answer: "We implement various monetization strategies including in-app purchases, advertisements, premium versions, and subscription models. Our team analyzes market trends and your target audience to recommend the most effective monetization strategy. We also ensure seamless integration with popular payment gateways and ad networks."
    },
    {
      question: "What support do you provide after launching a Unity3D game?",
      answer: "We provide comprehensive post-launch support including bug fixes, performance optimization, feature updates, and server maintenance. Our team monitors game performance, user feedback, and analytics to make necessary improvements. We also offer different maintenance packages to suit your ongoing support needs."
    },
    {
      question: "Can you help with Unity3D game marketing and distribution?",
      answer: "Yes, we provide assistance with App Store Optimization (ASO), creating promotional materials, and implementing analytics tools. We can help optimize your game's store listing, integrate social features, and implement user acquisition strategies. We also guide you through the app store submission process."
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
      <div className="mx-auto">
        <div className="text-center mb-12">
          <Heading>Unity3D Game Development FAQ</Heading>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about the Unity3D game development process, 
            timeline, costs, and more.
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

export default Unity3DGameFAQ;
