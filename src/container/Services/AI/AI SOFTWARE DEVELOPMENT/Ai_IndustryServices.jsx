"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Fontheading from "@/Layout/Fontheading";

const industries = [
  {
    title: "Healthcare",
    description:
      "Artificial Intelligence is revolutionizing healthcare, enabling better diagnostics, improved patient care, and streamlined operations. Digiflex.ai's AI solutions for healthcare include AI-powered diagnostics & medical imaging – Enhancing accuracy in disease detection, from X-rays to MRI analysis. AI chatbots for virtual health consultations – Enabling 24/7 patient support and initial medical assessments, reducing wait times and improving healthcare accessibility.",
  },
  {
    title: "E-commerce & Retail",
    description:
      "AI is transforming online and offline shopping experiences by making them smarter and more personalized. At Digiflex.ai, we provide AI recommendation engines for personalized shopping – Delivering tailored product suggestions based on customer preferences. AI-powered customer behavior analysis – Understanding shopping patterns to optimize marketing strategies and improve customer retention.",
  },
  {
    title: "Finance & Banking",
    description:
      "Security and automation are crucial in financial services. Digiflex.ai integrates AI to enhance banking operations with AI-driven fraud detection & risk management – Analyzing patterns in real time to prevent fraudulent transactions. Automated AI-based trading & investment solutions – Leveraging AI algorithms for market analysis and smart investment decisions.",
  },
  {
    title: "Manufacturing & Automation",
    description:
      "AI is driving efficiency and innovation in manufacturing. Digiflex.ai's AI solutions include AI-powered robotics & automation in production – Increasing efficiency and precision in manufacturing processes. Quality control with AI-driven defect detection – Using machine learning to identify defects and maintain high production standards.",
  },
  {
    title: "Smart Cities & IoT",
    description:
      "AI plays a vital role in making cities smarter and more efficient. Digiflex.ai contributes to smart city advancements through AI-powered traffic management & predictive analytics – Optimizing traffic flow and reducing congestion using AI-driven insights. AI in energy efficiency & smart grid management – Improving power distribution and consumption for a more sustainable future.",
  },
];

function AiIndustryServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedArrow, setClickedArrow] = useState(null);

  const handleClick = (direction) => {
    setClickedArrow(direction);
    setTimeout(() => setClickedArrow(null), 300);

    setCurrentSlide((prev) =>
      direction === "next"
        ? (prev + 1) % industries.length
        : (prev - 1 + industries.length) % industries.length
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === "next" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "next" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <WrapperContainer>
      <div className="relative flex flex-col items-center w-full">
        {/* Main Heading */}
        <Heading>Industries We Serve with AI Solutions</Heading>

        {/* Main Content */}
        <div className="relative flex items-center w-full max-w-5xl">
          {/* Left Arrow */}
          <button
            onClick={() => handleClick("prev")}
            className="hidden sm:flex absolute left-[-3rem] bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
            aria-label="Previous slide"
            aria-hidden={currentSlide === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Slide Content with AnimatePresence */}
          <div className="relative w-full" aria-live="polite">
            <AnimatePresence custom={clickedArrow} mode="wait">
              <motion.div
                key={currentSlide}
                custom={clickedArrow}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-[#F2F2F2] rounded-2xl overflow-hidden w-full min-h-[250px] max-h-[300px] flex flex-col items-center p-6 sm:p-8"
              >
                <Fontheading>
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
                    {industries[currentSlide].title}
                  </div>
                </Fontheading>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                  {industries[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleClick("next")}
            className="hidden sm:flex absolute right-[-3rem] bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Arrows for Mobile */}
        <div className="flex sm:hidden justify-between w-full px-4 mt-4">
          <button
            onClick={() => handleClick("prev")}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
            aria-label="Previous slide"
            aria-hidden={currentSlide === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleClick("next")}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiIndustryServices;
