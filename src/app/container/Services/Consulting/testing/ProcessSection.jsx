"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSteps, animations, item } from "./constants";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function ProcessCard({ step, title, color, icon: Icon, items }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform"
    >
      <div className="flex mb-4 drop-shadow-lg">
        <div
          className={`${color} py-4 px-6 text-white flex items-center rounded-l-lg`}
        >
          <Icon className="w-6 h-6 mr-2" />
          <span className="font-bold mr-1">STEP</span>
          <span className="font-bold">{step}</span>
        </div>
        <div className="bg-white py-4 px-4 rounded-r-lg flex-grow">
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        </div>
      </div>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md flex-grow"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="space-y-3">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-gray-700"
            >
              <div className="mr-3 text-green-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export const ProcessSection = () => {
  return (
    <WrapperContainer>
      <motion.div
        className=""
        initial="hidden"
        animate="show"
        variants={animations.container}
      >
        <Heading>Our QA Consulting Process</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </motion.div>
    </WrapperContainer>
  );
};
