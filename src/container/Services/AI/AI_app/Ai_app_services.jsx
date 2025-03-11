"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Fontheading from "@/Layout/Fontheading";

const services = [
  {
    title: "Custom AI-Powered Applications",
    description:
      "We build AI-driven mobile and web apps that automate operations, enhance decision-making, and improve user engagement. Our apps use machine learning, natural language processing (NLP), and deep learning to create next-gen solutions.",
    image: '/assets/AI-Powered.jpg',
  },
  {
    title: "AI-Powered Mobile & Web Apps",
    description:
      "Whether you need an intelligent e-commerce platform, fintech solution, or enterprise-grade AI app, Digiflex.ai develops cutting-edge mobile and web applications that offer smart functionalities.",
    image: '/assets/AI_ML_Mobility.jpg',
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description:
      "We design AI-powered chatbots that enhance customer support, automate responses, and engage users with human-like interactions. Our virtual assistants integrate with popular messaging platforms, websites, and mobile applications.",
    image: '/assets/AI_chatbots.jpg',
  },
  {
    title: "Machine Learning & Predictive Analytics",
    description:
      "Harness the power of machine learning algorithms to gain actionable insights. Our AI-powered data analytics solutions predict trends, detect patterns, and optimize business strategies.",
    image: '/assets/AI_Machine.jpg',
  },
  {
    title: "AI in Healthcare, Finance, and Retail",
    description:
      "We specialize in industry-specific AI solutions: Healthcare – AI-driven diagnostics, patient management, and predictive healthcare analytics. Finance – Fraud detection, risk analysis, and AI-driven financial advisory. Retail & E-Commerce – AI-driven recommendations, inventory optimization, and customer behavior analysis.",
    image: '/assets/AI_Healthcare.jpeg',
  },
  {
    title: "Computer Vision & Image Processing",
    description:
      "Our AI-powered vision systems enable businesses to analyze images, detect objects, and automate visual tasks. Applications include facial recognition, product detection, and security surveillance.",
    image:'/assets/AI_Computer_vision.jpeg',
  },
  {
    title: "AI-Powered Automation for Businesses",
    description:
      "We help enterprises reduce manual effort by integrating AI into workflow automation, document processing, and smart decision-making tools.",
    image: '/assets/AI_Automation_Business.jpg',
  },
];

function AiAppServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedArrow, setClickedArrow] = useState(null);

  const handleClick = (direction) => {
    setClickedArrow(direction);
    setTimeout(() => setClickedArrow(null), 300);
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  return (
    <WrapperContainer>
      <div className="relative flex flex-col items-center w-full px-4">
        <Heading>
          <h1>Our AI App Development Services</h1>
        </Heading>
        
        {/* Main Content */}
        <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden max-w-7xl flex flex-col lg:flex-row items-center relative">
          
          {/* Left Side - Image (Adjusts Based on Screen) */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 h-60 sm:h-80 lg:h-[500px] overflow-hidden"
          >
            <img
              src={services[currentSlide].image}
              alt={services[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side - Text (Resizes for Smaller Screens) */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
            <Fontheading><h2 className=" sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              {services[currentSlide].title}
            </h2></Fontheading>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {services[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-full max-w-7xl mt-4 lg:mt-6 px-4">
          <button
            onClick={() => handleClick("prev")}
            className={`p-3 rounded-full transition-colors ${
              clickedArrow === "prev"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleClick("next")}
            className={`p-3 rounded-full transition-colors ${
              clickedArrow === "next"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiAppServices;
