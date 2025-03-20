"use client";

import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "Efficiency Boost",
    description: "Automate repetitive tasks and focus on high-value work.",
  },
  {
    title: "Smart Assistance",
    description:
      "Get AI-driven insights and recommendations tailored to your needs.",
  },
  {
    title: "Seamless Integration",
    description: "Works effortlessly with your existing tools and workflows.",
  },
  {
    title: "Personalized Experience",
    description: "AI adapts to your workflow for customized assistance.",
  },
  {
    title: "Security & Privacy",
    description: "Ensures data protection with top-tier security measures.",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Facilitates seamless teamwork with instant AI-driven insights.",
  },
];

const BodySection = () => {
  return (
    <div>
      {/* Features Section */}
      <WrapperContainer>
        <section>
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold text-blue-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose AI Copilot?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              AI Copilot enhances productivity, automates tasks, and provides
              smart suggestions to streamline your workflow.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-between"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </WrapperContainer>
    </div>
  );
};

export default BodySection;
