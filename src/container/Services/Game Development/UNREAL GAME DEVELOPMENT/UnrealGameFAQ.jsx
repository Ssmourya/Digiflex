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
      className="border-b border-gray-200 last:border-none bg-[#f3f4f6] rounded-lg mb-4"
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

const UnrealGameFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is the typical timeline for developing an Unreal Engine game?",
      answer: "The timeline depends on the game's complexity. Small projects take 3-6 months, while AAA games can take years. Factors like graphics, AI, multiplayer, and platform affect the timeline."
    },
    {
      question: "How much does it cost to develop an Unreal Engine game?",
      answer: "Costs range from $50,000 to several million dollars, depending on assets, mechanics, multiplayer, and customization. We provide detailed cost breakdowns based on project scope."
    },
    {
      question: "Do you develop Unreal Engine games for multiple platforms?",
      answer: "Yes, we develop for PC, consoles (PS5, Xbox), and mobile. Unreal Engine’s cross-platform support allows seamless development and optimization."
    },
    {
      question: "What are the advantages of using Unreal Engine for game development?",
      answer: "Unreal Engine offers high-fidelity graphics, a robust physics engine, Blueprint scripting, and real-time rendering, making it ideal for immersive experiences."
    },
    {
      question: "How do you handle monetization in Unreal Engine games?",
      answer: "We implement in-game purchases, ads, DLC, and subscriptions. We also optimize revenue models based on the target audience and platform."
    },
    {
      question: "What support do you provide after launching an Unreal Engine game?",
      answer: "We offer post-launch updates, bug fixes, performance optimizations, and new content development to ensure the game’s longevity."
    },
    {
      question: "Can you assist with Unreal Engine game publishing and marketing?",
      answer: "Yes, we help with store submissions, trailer creation, SEO optimization, and digital marketing strategies to maximize reach and downloads."
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
          <Heading>Unreal Engine Game Development FAQ</Heading>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about Unreal Engine game development, 
            costs, platforms, and more.
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

export default UnrealGameFAQ;
