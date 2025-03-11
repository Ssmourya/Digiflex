"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Shield } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$499",
    icon: Shield,
    features: [
      "Basic Angular development",
      "Responsive design",
      "1-month support",
      "Code review",
      "Basic SEO optimization",
    ],
    color: "blue",
  },
  {
    name: "Standard Plan",
    price: "$999",
    icon: Zap,
    features: [
      "Full-stack Angular development",
      "Custom UI components",
      "3-month support",
      "Performance optimization",
      "Advanced integrations",
    ],
    color: "purple",
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "$1499",
    icon: Star,
    features: [
      "Enterprise-level Angular development",
      "Advanced UI/UX",
      "6-month support",
      "24/7 priority support",
      "Custom feature development",
    ],
    color: "teal",
  },
];

const PriceModels = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <Heading>Angular Development Pricing</Heading>
        <Paragraph>Choose the perfect plan for your project needs</Paragraph>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
      >
        {pricingPlans.map((plan, index) => {
          const Icon = plan.icon;
          const isPopular = plan.popular;
          const colorClass = {
            blue: "from-blue-500 to-blue-600",
            purple: "from-purple-500 to-purple-600",
            teal: "from-teal-500 to-teal-600",
          }[plan.color];

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                isPopular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {isPopular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className={`bg-gradient-to-r ${colorClass} text-white p-8`}>
                <Icon className="w-12 h-12 mb-4" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm opacity-90 mt-2">per project</p>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={featureVariants}
                      className="flex items-center text-gray-700"
                    >
                      <Check className="w-5 h-5 mr-3 text-green-500" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full py-3 px-6 rounded-xl bg-gradient-to-r ${colorClass} text-white font-semibold hover:opacity-90 transition-opacity`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </WrapperContainer>
  );
};

export default PriceModels;
