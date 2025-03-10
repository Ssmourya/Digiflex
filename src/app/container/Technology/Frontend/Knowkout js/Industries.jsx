"use client";

import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const industries = [
  { name: "Education", icon: "📚" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Fun & Entertainment", icon: "🎮" },
  { name: "Banking & Financial", icon: "🏦" },
  { name: "Business", icon: "📊" },
  { name: "Job & Career", icon: "💼" },
  { name: "Travel", icon: "✈️" },
  { name: "Transport & Logistics", icon: "🚚" },
  { name: "Food", icon: "🍔" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Sports", icon: "⚽" },
  { name: "Dating, and more", icon: "💑" },
];

export default function Industries() {
  return (
    <WrapperContainer>
      <div className="bg-white text-black py-12">
        <Heading>Industries We Serve</Heading>
        <Paragraph>
          We serve a diverse range of clients from all business verticals.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8  mx-auto px-4">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white text-gray-800 rounded-2xl flex flex-col items-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl">{industry.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
}
