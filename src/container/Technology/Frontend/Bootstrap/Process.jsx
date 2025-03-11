"use client";

import React from "react";
import {
  Lightbulb,
  Search,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const ProcessStep = ({ icon: Icon, step, title, description }) => (
  <motion.div
    className="flex items-start gap-6 group"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: step * 0.2 }}
  >
    <div className="relative">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      {/* Connector Line */}
      <div className="absolute top-14 left-1/2 w-1 h-full -translate-x-1/2 bg-gradient-to-b from-gray-300 to-gray-500 -z-10" />
    </div>
    <div className="flex-1 pb-16">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-blue-600 font-semibold mb-2 text-lg">
          Step {step}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  </motion.div>
);

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Requirements Gathering",
      description:
        "We begin by thoroughly understanding your project needs, objectives, and desired outcomes through detailed consultations and requirement analysis.",
    },
    {
      icon: Search,
      title: "Planning & Analysis",
      description:
        "Our team creates a comprehensive project plan, including timeline, milestones, technical architecture, and resource allocation to ensure smooth execution.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Our skilled developers begin coding using best practices and latest technologies, with regular updates and continuous integration throughout the process.",
    },
    {
      icon: Layers,
      title: "Bootstrap Development",
      description:
        "We implement responsive and modern UI designs using Bootstrap, ensuring cross-device compatibility and user-friendly interfaces.",
    },
    {
      icon: TestTube,
      title: "Testing & QA",
      description:
        "Rigorous testing is performed to ensure quality, performance, and reliability. We conduct unit tests, integration tests, and user acceptance testing.",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description:
        "We carefully deploy your application to the chosen environment, ensuring proper configuration and optimal performance.",
    },
    {
      icon: CheckCircle,
      title: "Maintenance & Support",
      description:
        "Post-launch, we provide ongoing maintenance, updates, and support to ensure your application continues to perform at its best.",
    },
  ];

  return (
    <WrapperContainer>
      <div className=" mx-auto">
        <div className="text-center mb-16">
          <Heading>Our Development Process</Heading>
          <Paragraph>
            We follow a structured and proven development process to ensure
            successful delivery of your projects, maintaining transparency and
            quality throughout each phase.
          </Paragraph>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Process;
