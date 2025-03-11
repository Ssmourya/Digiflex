"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

// Memoized card component to prevent unnecessary re-renders
const MethodologyCard = memo(({ 
  item, 
  details, 
  isActive, 
  onClick 
}) => {
  return (
    <div
      className={`relative p-4 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 shadow-md
        ${isActive
          ? "bg-blue-700 text-white shadow-lg"
          : "bg-white hover:bg-blue-50"
        }`}
      onClick={onClick}
    >
      <h3 className="text-base sm:text-lg font-semibold mb-3">{item}</h3>
      <div className="w-10 sm:w-12 h-1 bg-current"></div>

      {isActive && (
        <div className="mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm mb-2">
            {details.description}
          </p>
          <div className="mt-2">
            <p className="font-semibold text-xs sm:text-sm mb-1">Key Aspects:</p>
            <ul className="list-disc list-inside text-xs">
              {details.details.map((detail, idx) => (
                <li key={idx} className="ml-1 mb-1">{detail}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2 text-xs sm:text-sm">
            <p className="font-semibold">Impact:</p>
            <p className="text-yellow-200">
              {details.impact}
            </p>
          </div>
        </div>
      )}

      <div 
        className={`absolute inset-0 border-2 rounded-xl transition-colors duration-300 pointer-events-none
          ${isActive ? "border-blue-500" : "border-transparent"}`}
      />
    </div>
  );
});

MethodologyCard.displayName = 'MethodologyCard';

const MethodologySection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const methodologyDetails = {
    "UX-BASED WEB DESIGN": {
      description:
        "At Digiflex.ai, we prioritize user-centric design to create seamless, intuitive navigation and engaging interfaces that enhance user satisfaction.",
      impact: "Increases user satisfaction and conversion rates by 40%",
      details: [
        "User-first design methodology",
        "Streamlined navigation for effortless usability",
        "Responsive, adaptive, and modern interfaces",
      ],
    },
    "DATA-DRIVEN DECISIONS": {
      description:
        "Digiflex.ai empowers businesses to make informed design and strategic decisions using advanced analytics and user behavior insights.",
      impact:
        "Enhances website performance by up to 65% through targeted optimizations.",
      details: [
        "Advanced web analytics for actionable insights",
        "Comprehensive user behavior tracking",
        "Performance-focused optimization strategies",
      ],
    },
    "SEO CONTENT": {
      description:
        "We craft strategically optimized content that ranks high on search engines while delivering genuine value to users.",
      impact:
        "Increases organic traffic by up to 75% and enhances search engine rankings.",
      details: [
        "In-depth keyword research",
        "Data-driven content strategy",
        "Comprehensive search engine optimization",
      ],
    },
    "ONGOING OPTIMIZATION": {
      description:
        "Stay ahead of the competition with continuous monitoring and iterative improvements for top-notch performance and user experience.",
      impact:
        "Ensures a competitive edge with 50% faster adaptation to market changes.",
      details: [
        "Regular performance audits",
        "Continuous improvements for better results",
        "Adaptive strategies tailored to evolving needs",
      ],
    },
  };

  const handleToggleItem = (item) => {
    setActiveItem(prevItem => prevItem === item ? null : item);
  };

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4 sm:px-6">
        <Heading >Our Web Consultants Best Practices</Heading>
        <Paragraph>
          We utilize data-driven best practices and industry insights to inform
          our consulting strategy.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.keys(methodologyDetails).map((item) => (
            <MethodologyCard
              key={item}
              item={item}
              details={methodologyDetails[item]}
              isActive={activeItem === item}
              onClick={() => handleToggleItem(item)}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default MethodologySection;