"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const IndustryTab = ({ name, isActive, onClick }) => (
  <motion.button
    className={`px-6 py-3 text-center transition-colors ${
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600"
        : "text-gray-600 hover:text-gray-800"
    }`}
    onClick={onClick}
    whileHover={{ y: isActive ? 0 : -2 }}
  >
    <span>{name}</span>
  </motion.button>
);

const IndustryContent = ({ industry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="pt-8"
    >
      <motion.p
        className="text-gray-600 mb-8 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {industry.description}
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {industry.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div
              className={`absolute inset-0 ${stat.color} rounded-2xl opacity-20`}
            />
            <div className="relative p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ x: 4 }}
      >
        <span>{industry.buttonText}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

function Industry() {
  const industries = [
    {
      title: "Pharma & Life Sciences",
      description:
        "Digiflex.ai is a trusted global technology partner for businesses seeking to gain or retain a competitive edge by redefining excellence through high-quality IT services and innovative product solutions. We empower organizations to achieve their goals with cutting-edge technology and tailored strategies designed for success.",
      stats: [
        {
          value: "78%",
          label: "Global pharma companies chasing digital transformation",
          color: "bg-purple-100",
        },
        {
          value: "$2.55B",
          label: "Expected life sciences software market growth by 2025",
          color: "bg-blue-100",
        },
      ],
      buttonText: "Explore Pharma & Life Sciences",
    },
    {
      title: "Insurance",
      description:
        "At Digiflex.ai, we leverage technology with a strategic approach to drive long-term value for our clients in the insurance industry. Our innovative solutions streamline operations, enhance customer experiences, and ensure sustainable growth in a competitive landscape..",
      stats: [
        {
          value: "50%",
          label:
            "Next-generation customers require an omnichannel in-app experience",
          color: "bg-purple-100",
        },
        {
          value: "60%",
          label: "Insurance back-office operations can be automated",
          color: "bg-blue-100",
        },
      ],
      buttonText: "Explore Insurance",
    },
    {
      title: "Financial Services",
      description:
        "At Digiflex.ai, we deliver cutting-edge digital solutions tailored for financial, banking, insurance, wealth management, and fintech institutions. Our services are designed to meet the rapidly evolving demands of the industry, empowering your business with velocity, security, adaptability, and innovation to stay ahead in a competitive landscape.",
      stats: [
        {
          value: "58%",
          label: "Enterprises using cloud financial solutions",
          color: "bg-purple-100",
        },
        {
          value: "$40.67B",
          label: "Predicted banking software market by 2029",
          color: "bg-blue-100",
        },
      ],
      buttonText: "Explore Financial Services",
    },
    {
      title: "Automotive",
      description:
        "As the automotive industry rapidly evolves into a technology-driven market, Digiflex.ai stands by its clients with unwavering support for their digital transformation journeys. We deliver cutting-edge IT solutions that empower innovation, efficiency, and growth in this dynamic landscape.",
      stats: [
        {
          value: "8.1%",
          label: "Forecasted CAGR for vehicle embedded software by 2026",
          color: "bg-purple-100",
        },
        {
          value: "$620B",
          label: "Predicted OEMs' software-based revenue by 2031",
          color: "bg-blue-100",
        },
      ],
      buttonText: "Explore Automotive",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4 py-16">
        <Heading>Industries We Serve</Heading>

        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="border-b">
            <div className="flex justify-center items-center space-x-6 px-8">
              {industries.map((industry, index) => (
                <IndustryTab
                  key={index}
                  name={industry.title}
                  isActive={activeIndustry === index}
                  onClick={() => setActiveIndustry(index)}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">
              <IndustryContent
                key={activeIndustry}
                industry={industries[activeIndustry]}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </WrapperContainer>
  );
}

export default Industry;
