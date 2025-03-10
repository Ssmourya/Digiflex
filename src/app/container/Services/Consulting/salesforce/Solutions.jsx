"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Timer, Cuboid as Cube, Network } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const solutions = [
  {
    icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
    title: "Salesforce Enablement",
    description:
      "At Digiflex.ai, we guide your team with tailored strategies to maximize Salesforce's value for your business.",
    features: [
      "Assessments",
      "Platform enablement",
      "Increase scale & engagement",
      "Cross-platform data management",
      "Established best practices",
    ],
  },
  {
    icon: <Timer className="w-12 h-12 text-blue-600" />,
    title: "Salesforce Platform-as-a-Service",
    description:
      "At Digiflex.ai, we harness the full potential of Salesforce to optimize your customers' experiences.",
    features: [
      "Implementation services",
      "Re-implementation services",
      "Managed services",
      "Custom development",
    ],
  },
  {
    icon: <Cube className="w-12 h-12 text-blue-600" />,
    title: "Strategy, Vision & Governance",
    description:
      "At Digiflex.ai, we partner with you to visualize, plan, and prioritize Salesforce features, ensuring continuous value throughout your Salesforce journey.",
    features: [
      "Vision & Strategy development",
      "Center of Excellence (COE)",
      "CRM & marketing automation maturity models",
      "Capability & capacity maps",
      "Short & long-term roadmaps",
    ],
  },
  {
    icon: <Network className="w-12 h-12 text-blue-600" />,
    title: "Integration Expertise",
    description:
      "At Digiflex.ai, we specialize in seamlessly integrating Salesforce across your technology stack to maximize its capabilities and deliver optimal results.",
    features: [
      "Industry-specific and proprietary tool integrations",
      "Cloud data storage",
      "Engineering solutions, process development, and data governance and hygiene",
    ],
  },
];

function Solutions() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <WrapperContainer>
        <Heading>SALESFORCE SOLUTION AREAS</Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="flex justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {solution.icon}
              </motion.div>
              <h2 className="text-lg sm:text-xl font-semibold text-blue-900 text-center mb-3 sm:mb-4">
                {solution.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
                {solution.description}
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="text-sm sm:text-base text-gray-700 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                  >
                    <span className="text-indigo-600 mr-2">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </WrapperContainer>
    </div>
  );
}

export default Solutions;
