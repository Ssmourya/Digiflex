"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const processSteps = [
  {
    title: "Strategic Design",
    description:
      "Web3 project development starts with strategy formation, market analysis, tech stack selection, establishing goals & visions, etc.",
    icon: "🎯",
  },
  {
    title: "Infrastructure Development",
    description:
      "Next, the core components of the Web3 application or software creation follow along with security protocols integration.",
    icon: "🔧",
  },
  {
    title: "Ecosystem Development",
    description:
      "Web3 ecosystem development involves customization of UI/UX, features, tools, dashboards, etc., to make it futuristic.",
    icon: "🌐",
  },
  {
    title: "Functionality Integration",
    description:
      "Industry-specific functionalities are integrated into the Web3 platform to help businesses gain a competitive advantage after ecosystem development.",
    icon: "⚡",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Process = () => {
  return (
    <WrapperContainer>
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header  Section */}
        <div className="text-center mb-16">
          <Heading>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Web3 Development Process
            </motion.div>
          </Heading>
          <Paragraph>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Maticz innovates & adapts the Web3 development process by
              thoroughly studying & analyzing the market evolution and trends
              for each business project.
            </motion.span>
          </Paragraph>
        </div>

        {/* Process Steps in a Modern Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-3xl bg-yellow-400 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                {step.icon}
              </div>
              <div>
                
                <Subheading>
                  <div>
                  {step.title}
                  </div>
                </Subheading>
              <Paragraph>
                <span>
                {step.description}
                </span>
              </Paragraph>
              
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </WrapperContainer>
  );
};

export default Process;
