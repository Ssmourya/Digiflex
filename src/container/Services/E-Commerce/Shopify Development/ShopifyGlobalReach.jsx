"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const globalFeatures = [
  {
    title: "Multi-Currency Support",
    description: "Sell globally with automatic currency conversion and localized pricing.",
    icon: "💱",
  },
  {
    title: "Multiple Language Support",
    description: "Provide seamless shopping experiences with multilingual store capabilities.",
    icon: "🌍",
  },
  {
    title: "International Shipping",
    description: "Integrate with global shipping carriers for smooth worldwide delivery.",
    icon: "🚛",
  },
  {
    title: "Localized Payment Options",
    description: "Offer region-specific payment gateways for a frictionless checkout experience.",
    icon: "💳",
  },
  {
    title: "Global Tax Compliance",
    description: "Ensure compliance with international tax regulations effortlessly.",
    icon: "📜",
  },
  {
    title: "24/7 Global Support",
    description: "Get round-the-clock assistance to manage your store across time zones.",
    icon: "⏰",
  }
];

const ShopifyGlobalReach = () => {
  return (
    <WrapperContainer>
      <section className="bg-white py-0 px-0 text-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading className="text-4xl font-bold text-blue-600">
            Expand Your Business Globally with Shopify
          </Heading>
          <Paragraph className="text-lg text-gray-700 mt-4">
            Reach customers worldwide with built-in international selling features.
          </Paragraph>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {globalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                backgroundColor: "#f0f9ff",
                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
              }}
              className="flex items-center bg-white shadow-lg rounded-lg p-6 transition duration-300"
            >
              <motion.div 
                className="text-5xl bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }} // Slower rotation for smoothness
              >
                {feature.icon}
              </motion.div>
              <div className="max-w-md">
                <Subheading className="text-2xl font-semibold text-blue-600">{feature.title}</Subheading>
                <Paragraph className="text-gray-600 mt-2">{feature.description}</Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </WrapperContainer>
  );
};

export default ShopifyGlobalReach;
