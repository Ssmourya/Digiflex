import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
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
            <p className="p-6 pt-0 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResourceAugmentationFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      question: "What is resource augmentation in game development?",
      answer:
        "Resource augmentation involves supplementing your existing game development team with external skilled professionals to meet project demands. This can include programmers, artists, designers, QA testers, or other specialists. It provides flexibility to scale your team quickly without the overhead of permanent hires.",
    },
    {
      question: "How does resource augmentation benefit game development?",
      answer:
        "Resource augmentation accelerates development timelines, fills skill gaps, and reduces costs compared to full-time hiring. It allows you to access specialized expertise (e.g., Unreal Engine developers or 3D animators) on-demand, ensuring high-quality output while maintaining project momentum and budget control.",
    },
    {
      question: "What types of roles can be augmented for game projects?",
      answer:
        "We provide augmentation for a wide range of roles including game programmers (Unity, Unreal Engine), 3D/2D artists, animators, UI/UX designers, sound engineers, QA testers, and project managers. We tailor the team composition based on your project's specific needs and technology stack.",
    },
    {
      question: "How do you ensure quality with augmented resources?",
      answer:
        "Our augmented resources are vetted professionals with proven expertise in game development. We align them with your workflows, provide onboarding, and maintain regular quality checks. Our team uses industry-standard tools and collaborates seamlessly with your in-house staff to ensure consistent quality.",
    },
    {
      question: "How quickly can augmented resources be onboarded?",
      answer:
        "We can onboard augmented resources within days to weeks, depending on the role and project requirements. After understanding your needs, we match you with pre-screened professionals from our talent pool, ensuring a fast and efficient integration into your development pipeline.",
    },
    {
      question: "What support do you provide for managing augmented teams?",
      answer:
        "We offer project management support, communication tools, and progress tracking to ensure smooth collaboration. Our coordinators facilitate integration, handle scheduling, and provide regular updates. We also offer flexible engagement models to adapt to your project’s evolving needs.",
    },
    {
      question: "Can augmented resources assist with game launches?",
      answer:
        "Yes, our augmented teams can support pre-launch optimization, bug fixing, testing, and post-launch updates. We also assist with marketing tasks like creating promotional assets and integrating analytics tools, ensuring a successful launch on platforms like Steam or Epic Games Store.",
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
          <Heading>Resource Augmentation in Game Development FAQ</Heading>

          <p className="text-gray-600 mb-8">
            Find answers to common questions about resource augmentation for game development, its benefits, process, and more.
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

export default ResourceAugmentationFAQ;