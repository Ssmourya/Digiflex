"use client";

import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Lightbulb,
  Workflow,
  Plug,
  BarChart,
  BrainCircuit,
} from "lucide-react";

const expertiseAreas = [
  {
    title: "AI-Powered Automation",
    description:
      "Automate repetitive tasks, allowing you to focus on high-value work.",
    icon: Bot,
  },
  {
    title: "Smart Suggestions",
    description:
      "AI-driven recommendations that enhance decision-making and efficiency.",
    icon: Lightbulb,
  },
  {
    title: "Workflow Optimization",
    description:
      "Streamline processes with AI-powered insights and automation.",
    icon: Workflow,
  },
  {
    title: "Seamless Integrations",
    description:
      "Works effortlessly with your favorite tools, enhancing productivity.",
    icon: Plug,
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverages AI analytics to provide actionable business insights.",
    icon: BarChart,
  },
  {
    title: "Adaptive Learning",
    description:
      "Continuously evolves based on user interactions and feedback.",
    icon: BrainCircuit,
  },
];

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    backgroundColor: "#93c5fd",
    transition: { duration: 0.3 },
  },
};

const OurExpertise = () => {
  return (
    <div>
      {/* Our Expertise Section */}
      <WrapperContainer>
        <section>
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Expertise
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              AI Copilot is designed to enhance productivity, automate
              workflows, and provide intelligent insights tailored to your
              needs.
            </motion.p>
          </div>

          {/* Expertise List */}
          <div className="max-w-4xl mx-auto space-y-8">
            {expertiseAreas.map((expertise, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <expertise.icon size={30} className="text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {expertise.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{expertise.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </WrapperContainer>
    </div>
  );
};

export default OurExpertise;
