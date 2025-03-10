"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import AI_Expert from "../../../../../../public/assets/AI_Expert.jpg";
import Llm_Optimization from "../../../../../../public/assets/Llm_Optimization.jpg";
import AI_chatbots from "../../../../../../public/assets/AI_chatbots.jpg";
import Llm_codegeneration from "../../../../../../public/assets/Llm_codegeneration.webp";
import devops_Solutions from "../../../../../../public/assets/devops_Solutions.jpeg";
import security from "../../../../../../public/assets/security.jpg";

const Llm_services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Custom LLM Training & Development",
      description: "We build AI models tailored to your industry.",
      image: AI_Expert,
    },
    {
      title: "Fine-Tuning & Optimization",
      description: "Enhancing pre-trained models for better accuracy.",
      image: Llm_Optimization,
    },
    {
      title: "AI-Powered Chatbots & Virtual Assistants",
      description: "Intelligent automation for customer engagement.",
      image: AI_chatbots,
    },
    {
      title: "Automated Content & Code Generation",
      description: "AI-generated text, reports, and programming solutions.",
      image: Llm_codegeneration,
    },
    {
      title: "Integration & Deployment",
      description: "Seamlessly incorporating AI models into your existing systems.",
      image: devops_Solutions,
    },
    {
      title: "AI Security & Compliance",
      description: "Ensuring safe and ethical AI model deployment.",
      image: security,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 3 : prev - 1));
  };

  return (
    <WrapperContainer>
      <Heading>Quest Digiflex.ai - Your Trusted Partner in LLM Development</Heading>
      <Paragraph>
        At Quest Digiflex.ai, we specialize in creating cutting-edge AI-driven LLM solutions to help businesses harness the
        true power of artificial intelligence. Whether you need a custom AI model, a fine-tuned chatbot, or an AI-powered
        automation tool, our expert team is here to bring your vision to life.
      </Paragraph>

      {/* Slider Section */}
      <div className="relative">
        {/* Left Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-blue-100"
        >
          <ChevronLeft size={28} className="text-blue-600" />
        </button>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="min-w-[33.333%] px-4">
                {/* Card with Shadow */}
                <div className="bg-white rounded-lg overflow-hidden h-80 shadow-xl transition-transform duration-300 hover:shadow-2xl">
                  {/* Image Section */}
                  <div className="relative h-48">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-600">{slide.title}</h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-blue-100"
        >
          <ChevronRight size={28} className="text-blue-600" />
        </button>
      </div>
    </WrapperContainer>
  );
};

export default Llm_services;
