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

const GameArtServicesFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What are game art services in game development?",
      answer:
        "Game art services encompass the creation of visual assets for games, including 2D/3D characters, environments, animations, UI designs, and concept art. These services enhance the game's aesthetic appeal and immersion, tailored to the project's style and platform requirements.",
    },
    {
      question: "How do game art services benefit game development?",
      answer:
        "Professional game art services elevate the player experience with high-quality visuals, improve brand identity, and ensure technical compatibility. They save time for development teams by outsourcing specialized tasks, allowing focus on gameplay and mechanics while delivering polished, market-ready graphics.",
    },
    {
      question: "What types of game art services do you provide?",
      answer:
        "We offer a wide range of services including 2D concept art, 3D modeling and texturing, character design, environment art, animation (rigging and keyframing), UI/UX design, and visual effects. We customize our deliverables to match your game’s art direction and engine (e.g., Unity, Unreal).",
    },
    {
      question: "How do you ensure quality in game art production?",
      answer:
        "Our team of experienced artists uses industry-standard tools like Blender, Maya, Photoshop, and Substance Painter. We follow iterative feedback loops, adhere to your style guide, and perform quality checks to ensure assets are optimized, visually consistent, and performance-ready for your game.",
    },
    {
      question: "How long does it take to create game art assets?",
      answer:
        "Timelines depend on asset complexity and volume. Simple 2D assets may take days, while detailed 3D models or animations can take weeks. We provide detailed schedules during planning, ensuring timely delivery aligned with your development milestones.",
    },
    {
      question: "What support do you offer for integrating game art?",
      answer:
        "We ensure seamless integration by delivering assets in compatible formats (e.g., FBX, PNG) and providing technical support for engines like Unity or Unreal. We also offer optimization guidance and revisions to ensure assets perform well in-game across target platforms.",
    },
    {
      question: "Can you create promotional art for game launches?",
      answer:
        "Yes, we produce promotional art including key visuals, trailers, splash screens, and store assets for platforms like Steam, App Store, or Epic Games Store. Our team crafts marketing materials that align with your game’s branding to attract players and boost visibility.",
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
          <h3 className="text-5xl font-bold text-center mb-6 text-blue-700">Game Art Services in Game Development FAQ</h3>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about game art services for game
            development, their benefits, process, and more.
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

export default GameArtServicesFAQ;
