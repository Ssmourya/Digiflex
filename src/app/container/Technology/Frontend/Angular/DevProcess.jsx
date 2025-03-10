"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSearch,
  Paintbrush,
  Code2,
  FlaskConical,
  Rocket,
  Settings,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";

export default function AngularDevelopmentProcess() {
  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "Understand project needs and goals through detailed stakeholder consultation.",
      icon: FileSearch,
      color: "text-purple-600",
    },
    {
      title: "Design & Prototyping",
      description:
        "Create wireframes and UI/UX design with modern design principles.",
      icon: Paintbrush,
      color: "text-pink-600",
    },
    {
      title: "Development",
      description:
        "Code using Angular framework and best practices for scalable applications.",
      icon: Code2,
      color: "text-blue-600",
    },
    {
      title: "Testing & QA",
      description:
        "Ensure quality with comprehensive automated and manual testing protocols.",
      icon: FlaskConical,
      color: "text-green-600",
    },
    {
      title: "Deployment",
      description:
        "Deploy the application to production environments with CI/CD pipelines.",
      icon: Rocket,
      color: "text-orange-600",
    },
    {
      title: "Maintenance & Updates",
      description:
        "Monitor performance and implement continuous improvements post-launch.",
      icon: Settings,
      color: "text-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <WrapperContainer>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <Heading>Angular Development Process</Heading>
          <Paragraph>
            A comprehensive approach to building robust Angular applications
          </Paragraph>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
              >
                <div className={`${step.color} mb-6`}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h2 className={`text-xl font-bold mb-3 ${step.color}`}>
                  {step.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-medium text-gray-500">
                    Step {index + 1}
                  </span>
                  <div className="ml-2 h-1 w-12 bg-gradient-to-r from-blue-200 to-purple-200 rounded" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </WrapperContainer>
  );
}
