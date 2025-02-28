import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
const features = [
  {
    title: "Single Codebase, Multi-Platform",
    description: "Build apps for mobile, web, and desktop from one codebase.",
  },
  {
    title: "Near-Native Performance",
    description: "Runs at 60/120 FPS with smooth animations.",
  },
  {
    title: "Beautiful UI with Material & Cupertino Widgets",
    description: "Pixel-perfect, customizable UIs.",
  },
  {
    title: "Hot Reload for Fast Development",
    description: "See changes instantly while coding.",
  },
  {
    title: "Backed by Google & Growing Community",
    description: "Future-proof technology with continuous support.",
  },
  {
    title: "Rich Set of Pre-Built Widgets",
    description:
      "Use Flutter's extensive widget library for faster UI development.",
  },
];

const WhyChooseFlutter = () => {
  return (
    <section className="bg-white py-20 px-6">
      {/* Main Heading with Animated Underline */}
      <Heading 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-4"
        style={{ color: "var(--theme-color, #007bff)" }} // Fallback color
      >
        Why Choose Flutter for App Development for Digiflex.ai
      </Heading>

      <motion.div
        className="mx-auto mb-12 w-24 h-1"
        style={{ backgroundColor: "var(--theme-color, #007bff)" }} // Fallback color
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.07 }}
            className="p-8 bg-white rounded-xl shadow-lg flex items-start space-x-4 border border-transparent hover:border-2 transition"
            style={{ borderColor: "var(--theme-color, #007bff)" }} // Fallback color
          >
            <CheckCircle size={32} className="mt-1" style={{ color: "var(--theme-color, #007bff)" }} />
            <div>
              <Subheading className="text-xl font-semibold text-black">
                {feature.title}
              </Subheading>
              <Paragraph>
                {feature.description}
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseFlutter;
