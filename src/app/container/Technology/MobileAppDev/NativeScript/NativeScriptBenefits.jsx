"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const features = [
  "True Native Performance – Full access to iOS and Android APIs",
  "Single Codebase for Multi-Platform Apps – Write once, run on both platforms",
  "No WebViews – Uses native UI components for better speed and efficiency",
  "Supports Angular, Vue.js, and JavaScript – Flexible development options",
  "Large Plugin Ecosystem – Extend functionality with NativeScript plugins",
];

export default function NativeScriptBenefits() {
  return (
    <section className="bg-white py-16 px-6 text-#172554 text-center">
      
      <Heading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-[#172554]"
      >
        🚀 Why Choose NativeScript for App Development at digiflex?
        </Heading>
     
      <div className="max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center gap-4 bg-#172554 text-[#172554] rounded-xl p-4 mb-4 shadow-lg backdrop-blur-lg"
          >
            <CheckCircle className="text-blue-600 w-6 h-6" />
            <Paragraph>{feature}</Paragraph>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
