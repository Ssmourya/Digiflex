"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const industries = [
  {
    title: "Healthcare",
    description: "Innovative healthcare solutions.",
    icon: "💉",
  },
  {
    title: "Finance",
    description: "Smart & secure financial tools.",
    icon: "💰",
  },
  {
    title: "Education",
    description: "Revolutionizing digital learning.",
    icon: "📚",
  },
  { title: "E-commerce", description: "Next-gen online shopping.", icon: "🛒" },
  {
    title: "Real Estate",
    description: "Smart property solutions.",
    icon: "🏡",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Industry = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col items-center bg-white">
        <Heading>Explore Our Expertise</Heading>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative flex flex-col items-center justify-center p-6 bg-blue-500 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 text-white transition-all cursor-pointer"
            >
              <motion.div
                className="text-5xl mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {industry.icon}
              </motion.div>
              <h2 className="text-2xl font-bold">{industry.title}</h2>
              <p className="text-gray-300 text-center">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

export default Industry;
