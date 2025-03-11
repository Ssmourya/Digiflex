"use client";

import React from "react";
import { motion } from "framer-motion";
import { industries, animations } from "./constants";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const IndustryCard = ({ title, icon: Icon }) => {
  return (
    <motion.div
      variants={animations.item}
      whileHover={{
        y: -5,
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="text-blue-800 mb-4 bg-blue-100 p-3 rounded-full">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </motion.div>
  );
};

export const IndustriesSection = () => {
  return (
    <div className="mb-6">
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Heading>Some of the Industries We Serve</Heading>
        <Paragraph>
          At Digiflex.ai, we provide end-to-end software testing services
          tailored to diverse industries. Our expertise ensures reliability,
          security, and performance, helping businesses deliver high-quality
          software with confidence.
        </Paragraph>
      </motion.div>

      <motion.div
        variants={animations.container}
        initial="hidden"
        whileInView="show"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {industries.map((industry) => (
          <IndustryCard key={industry.title} {...industry} />
        ))}
      </motion.div>
    </WrapperContainer>
    </div>
  );
};
