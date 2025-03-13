"use client";

import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaDollarSign,
  FaClock,
  FaUserTie,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const features = [
  {
    icon: <FaBuilding size={30} className="text-blue-500" />,
    title: "World-Class Infrastructure",
    description:
      "Infrastructure plays a vital role, and we have made world-class infrastructure at our workplace. Our team of Knockout.js Developers works in a state-of-the-art software development infrastructure embellished with high-end facilities.",
  },
  {
    icon: <FaDollarSign size={30} className="text-blue-500" />,
    title: "Cost-effective Pricing",
    description:
      "When it comes to cost-effective services, we're unbeatable. We provide Knockout.js Development Services at a competitive price that businesses feel comfortable engaging with.",
  },
  {
    icon: <FaClock size={30} className="text-blue-500" />,
    title: "On-Time Delivery",
    description:
      "We understand the importance of deadlines. Our streamlined processes ensure that we deliver high-quality projects on time, every time.",
  },
  {
    icon: <FaUserTie size={30} className="text-blue-500" />,
    title: "Experienced Developers",
    description:
      "Our team consists of highly skilled Knockout.js developers who have years of experience in building scalable and efficient web applications.",
  },
  {
    icon: <FaShieldAlt size={30} className="text-blue-500" />,
    title: "High Security Standards",
    description:
      "We prioritize security in every project. Our developers implement best security practices to ensure your data remains protected at all times.",
  },
  {
    icon: <FaHeadset size={30} className="text-blue-500" />,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any technical issues or queries related to our services.",
  },
];

export default function WhyDigiflex() {
  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-900 text-center"
      >
        <Heading level={2}>
          Why Choose Digiflex as Your Knockout.js Development Partner?
        </Heading>
      </motion.div>
      <Paragraph>
        Businesses have plenty of reasons to choose us for their next project.
        We offer solutions tailored to specific business needs.
      </Paragraph>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="flex items-start space-x-4 bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-blue-100 rounded-full">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
}
