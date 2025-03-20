"use client";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

export default function AIExpertise() {
  const expertiseAreas = [
    {
      title: "Machine Learning",
      description:
        "Building predictive models and intelligent systems using AI algorithms.",
      icon: "📊",
    },
    {
      title: "Natural Language Processing",
      description:
        "Developing AI that understands and processes human language.",
      icon: "📖",
    },
    {
      title: "Computer Vision",
      description:
        "Enabling AI to interpret and make decisions based on visual data.",
      icon: "📷",
    },
    {
      title: "AI Chatbots",
      description:
        "Creating intelligent conversational agents for businesses and services.",
      icon: "🤖",
    },
    {
      title: "Deep Learning",
      description: "Utilizing neural networks to drive complex AI solutions.",
      icon: "🧬",
    },
    {
      title: "AI in Healthcare",
      description:
        "Enhancing medical diagnosis and treatment with AI-powered solutions.",
      icon: "🩺",
    },
    {
      title: "Autonomous Systems",
      description: "Designing AI-driven self-learning and adaptive systems.",
      icon: "🚗",
    },
    {
      title: "AI Ethics & Bias",
      description: "Ensuring fairness and responsibility in AI applications.",
      icon: "⚖️",
    },
  ];

  return (
    <WrapperContainer>
      <div className="bg-white text-gray-900">
        <Heading>AI Expertise</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 sm:p-6 bg-gray-100 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="text-4xl sm:text-4xl mb-3 sm:mb-4"
              >
                {area.icon}
              </motion.div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                {area.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
