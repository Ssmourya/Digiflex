"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";

const aiFeatures = [
  {
    title: "AI-Powered Product Recommendations",
    description: "Enhance customer experience with personalized product suggestions based on browsing behavior and trends."
  },
  {
    title: "Automated Customer Support",
    description: "AI-driven chatbots provide instant responses, reducing support workload and improving engagement."
  },
  {
    title: "Smart Inventory Management",
    description: "Predict demand and optimize stock levels with AI-driven insights, reducing overstock and stockouts."
  },
  {
    title: "Dynamic Pricing Strategies",
    description: "AI adjusts pricing based on real-time competitor analysis and market demand, maximizing revenue."
  },
  {
    title: "Fraud Detection & Security",
    description: "AI monitors transactions and detects fraudulent activities, ensuring secure transactions and customer trust."
  }
];

const MagentoAIAutomation = () => {
  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-0">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <Heading>Revolutionizing Magento with AI & Automation</Heading>
          <Paragraph>
            Integrate AI-powered automation to optimize efficiency, enhance personalization, and fortify security in your Magento store.
          </Paragraph>
        </div>

        {/* AI Automation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - AI Automation Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src="/assets/Magento_Ai.jpg" 
              alt="Magento AI & Automation" 
              className="w-full max-w-lg rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Right Side - AI Features */}
          <div className="space-y-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2 border-l-4 border-blue-600 pl-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Subheading>{feature.title}</Subheading>
                <Paragraph>{feature.description}</Paragraph>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default MagentoAIAutomation;
