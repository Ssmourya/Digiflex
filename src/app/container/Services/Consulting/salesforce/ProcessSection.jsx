"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const ProcessStep = ({ title, description, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-colors ${
        isActive
          ? "bg-blue-50 border-2 border-blue-200"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <div
        className={`h-1 w-16 rounded ${
          isActive ? "bg-blue-500" : "bg-gray-300"
        }`}
      />
    </motion.div>
  );
};

const ProcessContent = ({ step }) => {
  const content = {
    discovery: {
      title: "Discovery",
      description:
        "Our process begins with a thorough assessment of your business processes, goals, and challenges. This in-depth analysis helps us understand your unique requirements and identify the most effective IT solutions, including tailored Salesforce implementations, to drive your organization's success.",
      image:'/assets/discovery.png',
    },
    findings: {
      title: "Findings",
      description:
        "We compile a detailed report of our findings, highlighting key insights and challenges. Based on this analysis, we propose innovative solutions and processes, creating a clear and actionable roadmap to guide your business toward achieving its objectives efficiently.",
      image: '/assets/analysis.png',
    },
    proposal: {
      title: "Proposal",
      description:
        "At Digiflex.ai, we are pleased to present tailored solutions and actionable recommendations to address your current challenges, backed by a detailed project plan and competitive pricing. Leveraging our expertise in IT services and product development, we aim to deliver scalable, efficient, and innovative solutions that align with your goals.",
      image: '/assets/proposal.png',
    },
    kickoff: {
      title: "Kickoff",
      description:
        "Once the agreement is signed, we'll guide you through a detailed project plan and seamlessly implement the recommended processes and customizations into your Salesforce environment. Our team at Digiflex.ai ensures a smooth transition, empowering your business with optimized solutions tailored to your needs.",
      image: '/assets/kickoff.png',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg p-6 shadow-sm"
    >
      <div>
        <motion.h3
          className="text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {content[step].title}
        </motion.h3>
        <motion.p
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {content[step].description}
        </motion.p>
      </div>
      <motion.div
        className="relative h-80 rounded-lg overflow-hidden shadow-md bg-gray-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      >
        <img
          src={content[step].image}
          alt={content[step].title}
          className="w-full h-full object-contain p-4"
        />
      </motion.div>
    </motion.div>
  );
};

function ProcessSection() {
  const [activeStep, setActiveStep] = useState("discovery");
  const steps = [
    { id: "discovery", title: "Discovery Phase" },
    { id: "findings", title: "Findings Analysis" },
    { id: "proposal", title: "Solution Proposal" },
    { id: "kickoff", title: "Project Kickoff" },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto">
        <div className="text-center mb-8 relative">
          <motion.h2
            className="text-5xl font-bold text-blue-900 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Process
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-950 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
            <div className="h-1 w-full bg-blue-950 mt-2 rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {steps.map((step) => (
            <ProcessStep
              key={step.id}
              title={step.title}
              isActive={activeStep === step.id}
              onClick={() => setActiveStep(step.id)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <ProcessContent key={activeStep} step={activeStep} />
        </AnimatePresence>
      </div>
    </WrapperContainer>
  );
}

export default ProcessSection;
