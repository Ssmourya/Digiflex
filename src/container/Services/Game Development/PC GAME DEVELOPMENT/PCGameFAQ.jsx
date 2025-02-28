import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";

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
        <h4 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          {question}
        </h4>

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
            <p className="p-6 pt-0 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PCGameFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is the typical timeline for developing a PC game?",
      answer:
        "The development timeline varies based on the game's complexity. Simple PC games might take 6-12 months, while complex AAA titles can take 2-5 years. Factors affecting timeline include game features, graphical complexity, multiplayer functionality, and hardware requirements. We provide detailed timeline estimates during the initial consultation.",
    },
    {
      question: "How much does it cost to develop a PC game?",
      answer:
        "PC game development costs typically range from $50,000 to several million dollars for AAA titles. The final cost depends on factors like game complexity, graphics quality, team size, development tools, and distribution platform requirements. We offer flexible pricing models and can work within different budget ranges while maintaining quality.",
    },
    {
      question: "Do you develop for multiple PC platforms?",
      answer:
        "Yes, we develop games for various PC platforms including Windows, macOS, and Linux. We use cross-platform development tools like Unity and Unreal Engine to ensure compatibility while optimizing for different operating systems. We can also create platform-specific optimizations based on your target audience.",
    },
    {
      question: "What game engines do you use for PC development?",
      answer:
        "We primarily use Unity and Unreal Engine for PC game development. Unity is versatile for both 2D and 3D games, while Unreal Engine excels in delivering high-fidelity graphics and performance for premium PC titles. We select the engine based on your game's specific technical and visual requirements.",
    },
    {
      question: "How do you handle game monetization for PC games?",
      answer:
        "We implement various monetization strategies including upfront purchases, DLCs (Downloadable Content), microtransactions, and subscription models. Our team analyzes market trends and your target audience to recommend the most effective monetization strategy, integrating seamlessly with platforms like Steam, Epic Games Store, or custom launchers.",
    },
    {
      question: "What support do you provide after game launch?",
      answer:
        "We provide comprehensive post-launch support including bug fixes, performance optimization, feature updates, and multiplayer server maintenance. Our team monitors game performance, player feedback, and analytics to make necessary improvements. We also offer different maintenance packages tailored to PC gaming needs.",
    },
    {
      question: "Can you help with game marketing and distribution?",
      answer:
        "Yes, we assist with Steam page optimization, creating promotional materials, and implementing analytics tools. We can help optimize your game's store presence, integrate community features, and implement user acquisition strategies. We also guide you through the distribution platform submission process (Steam, Epic Games Store, etc.).",
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <WrapperContainer>
      <div className="mx-auto mb-20">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-center mb-6 text-blue-700">
            PC Game Development FAQ
          </h3>

          <p className="text-gray-600 mb-8">
            Find answers to common questions about PC game development process,
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

export default PCGameFAQ;
