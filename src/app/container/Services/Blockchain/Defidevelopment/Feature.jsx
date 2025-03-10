"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const FeaturesSection = () => {
  return (
    <WrapperContainer>
      <div >
        <Heading >
          <div className="text-center">
          Our Top Features
          </div>
        </Heading>
        <Paragraph>
          <span className="block text-center">
          Secure transactions, smart contracts, liquidity pools, staking, and decentralized governance features.
          </span>
        </Paragraph>
        <div className="max-w-4xl mx-auto mt-8 space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex-shrink-0 text-orange-500 text-3xl">
                {feature.icon}
              </div>
              <div>
                <Subheading className="mb-2 text-lg font-semibold text-gray-800">
                  {feature.title}
                </Subheading>
                <Paragraph className="text-gray-600">
                  {feature.description}
                </Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

const features = [
  {
    icon: "📷", // Replace with an actual icon component if needed
    title: "Non-custodial",
    description:
      "We ensure the user has full control of the private keys and financial assets eliminating third-party intervention.",
  },
  {
    icon: "📱",
    title: "Cross-platform DeFi Application",
    description:
      "The DeFi platform we develop can be accessed on any device and any operating system enabling easy usability from anywhere.",
  },
  {
    icon: "🔒",
    title: "Security",
    description:
      "Through highly secured smart contracts, we ensure the DeFi platform developed by us is free from vulnerabilities.",
  },
  {
    icon: "🔗",
    title: "Decentralization",
    description:
      "Through decentralization, we enable users to have full access to their funds and financial activities ensuring transparency.",
  },
];

export default FeaturesSection;
