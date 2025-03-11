"use client";

import { motion } from "framer-motion";
import Heading from "@/Layout/Heading";
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph'
const WhyChooseReactNative = () => {
  const features = [
    {
      text: "Single Codebase, Multi-Platform – One app, two platforms (iOS & Android)",
      icon: "✅",
    },
    {
      text: "Hot Reloading for Faster Development – Real-time updates without restarting the app",
      icon: "⚡",
    },
    {
      text: "Optimized Performance – Uses native components for near-native speed",
      icon: "🚀",
    },
    {
      text: "Large Community Support – Backed by Facebook & a growing developer community",
      icon: "🌍",
    },
    {
      text: "Seamless Third-Party Integrations – Works well with APIs, sensors, and plugins",
      icon: "🔌",
    },
    {
      text: "Cost-Effective Development – Reduce costs with reusable components and faster development cycles",
      icon: "💰",
    },
  ];

  return (
    <motion.div
      className="w-full py-16 bg-white text-[#172554] text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <Heading
  
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose React Native at Digiflex.ai
      
      </Heading>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center p-6  text-white rounded-xl shadow-lg border border-[#172554] hover:shadow-xl transition transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-3xl mr-4">{feature.icon}</span>
            <Subheading>{feature.text}</Subheading>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseReactNative;
