"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaPaintBrush, FaCode, FaBug, FaCloudUploadAlt, FaTools } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
const discoveryImg = "https://i.pinimg.com/736x/35/96/d3/3596d3d1164775e3bf9d0961c906d574.jpg";
const designImg = "https://i.pinimg.com/736x/82/7f/8c/827f8c8170a5842d2560da75249117af.jpg";
const developmentImg = "https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg";
const testingImg = "https://i.pinimg.com/736x/3f/16/77/3f16771ec946807784d1227e974ed312.jpg";
const deploymentImg = "https://i.pinimg.com/736x/80/fc/cd/80fccd23d7bc75165c0431083f3d1f19.jpg";
const supportImg = "https://i.pinimg.com/736x/b9/31/b3/b931b397ac9d4a23d935d9d4944ee8bd.jpg";

const steps = [
  { id: "discovery", title: "Discovery & Planning", icon: <FaSearch />, image: discoveryImg, description: "We start by understanding your requirements, market trends, and user needs to create a well-defined roadmap." },
  { id: "design", title: "UI/UX Design", icon: <FaPaintBrush />, image: designImg, description: "Our designers craft intuitive, engaging, and visually appealing interfaces to enhance user experience." },
  { id: "development", title: "Development", icon: <FaCode />, image: developmentImg, description: "Our developers use cutting-edge technology to build high-performance and scalable iOS applications." },
  { id: "testing", title: "Testing & Quality Assurance", icon: <FaBug />, image: testingImg, description: "Rigorous testing ensures your app is bug-free, high-performing, and meets all industry standards." },
  { id: "deployment", title: "App Deployment", icon: <FaCloudUploadAlt />, image: deploymentImg, description: "We handle the app store submission, ensuring compliance with Apple's guidelines for a smooth launch." },
  { id: "support", title: "Maintenance & Support", icon: <FaTools />, image: supportImg, description: "Post-launch, we provide ongoing support, updates, and enhancements for long-term success." }
];

const ProcessSidebar = ({ activeStep, setActiveStep }) => {
  return (
    <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
      {steps.map((step) => (
        <motion.div
          key={step.id}
          onClick={() => setActiveStep(step.id)}
          className={`cursor-pointer p-4 rounded-lg transition-all mb-2 ${
            activeStep === step.id ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2">
            {step.icon}
            <h3 className="text-lg font-semibold">{step.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ProcessContent = ({ step }) => {
  const selectedStep = steps.find((s) => s.id === step);

  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-3/4 p-6 bg-white rounded-lg shadow-md"
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-2">
        {selectedStep?.icon} {selectedStep?.title}
      </h3>
      <p className="text-gray-600 mb-6">{selectedStep?.description}</p>
      <motion.img
        src={selectedStep?.image}
        alt={selectedStep?.title}
        className="w-full h-60 object-contain rounded-lg shadow-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default function IOSProcess() { 
    const [activeStep, setActiveStep] = useState("discovery");
  
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-12 px-6">
        <div className="max-w-6xl w-full flex gap-6">
          <ProcessSidebar activeStep={activeStep} setActiveStep={setActiveStep} />
          <AnimatePresence initial={false}>
            <ProcessContent key={activeStep} step={activeStep} />
          </AnimatePresence>
        </div>
      </div>
    );
  }
  
