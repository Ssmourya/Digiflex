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
            <p className="p-6 pt-0 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Unity3DGameDevelopmentFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is Unity3D game development?",
      answer:
        "Unity3D is a powerful game development engine used to create 2D and 3D games across multiple platforms, including mobile, PC, consoles, and VR/AR. It offers a robust set of tools for rendering, physics, animation, and scripting (primarily in C#), making it ideal for both indie developers and large studios.",
    },
    {
      question: "What are the benefits of using Unity3D for game development?",
      answer:
        "Unity3D provides cross-platform support, a user-friendly interface, an extensive asset store, and a strong community. It enables rapid prototyping, high-quality graphics, and efficient workflows. Its versatility makes it suitable for projects of all sizes, from small indie games to AAA titles.",
    },
    {
      question: "What platforms can Unity3D games be deployed to?",
      answer:
        "Unity3D supports deployment to numerous platforms, including iOS, Android, Windows, macOS, Linux, PlayStation, Xbox, Nintendo Switch, and WebGL. This flexibility allows developers to reach a wide audience with a single codebase, optimized for each platform’s requirements.",
    },
    {
      question: "How do you ensure performance in Unity3D games?",
      answer:
        "We optimize Unity3D games through efficient coding practices, asset management, and profiling tools like Unity’s Profiler. Techniques include reducing draw calls, optimizing shaders, implementing LOD (Level of Detail) systems, and fine-tuning physics calculations to ensure smooth performance across target devices.",
    },
    {
      question: "How long does it take to develop a game with Unity3D?",
      answer:
        "Development timelines vary by project scope. Simple 2D Unity3D games can take 3-6 months, while complex 3D games might require 12-24 months. Factors like team size, feature set, and art requirements influence the schedule. We provide tailored estimates during project planning.",
    },
    {
      question: "What support do you offer for Unity3D game development?",
      answer:
        "We provide end-to-end support, including game design, programming, art creation, optimization, and deployment. Post-launch, we offer bug fixes, updates, and performance enhancements. Our team leverages Unity’s ecosystem to deliver robust solutions tailored to your vision.",
    },
    {
      question: "Can you integrate monetization and analytics in Unity3D games?",
      answer:
        "Yes, we integrate monetization features like in-app purchases, ads (e.g., Unity Ads), and DLCs, as well as analytics tools (e.g., Unity Analytics, Google Analytics) to track player behavior. We ensure seamless implementation to maximize revenue and provide actionable insights.",
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
          <h3 className="text-5xl font-bold text-center mb-6 text-blue-700">Unity3D Game Development FAQ</h3>


          <p className="text-gray-600 mb-8">
            Find answers to common questions about Unity3D game development, its benefits, process, and more.
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

export default Unity3DGameDevelopmentFAQ;