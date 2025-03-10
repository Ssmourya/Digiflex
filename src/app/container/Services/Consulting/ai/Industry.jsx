"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const industries = {
  healthcare: {
    title: "Healthcare AI Solutions",
    description:
      "We specialize in crafting tailored AI solutions for healthcare organizations aiming to adopt or enhance AI capabilities. Our expert team develops impactful integrations to advance diagnostics and streamline operations.",
    solutions: [
      "Healthcare AI Agents",
      "Documentation Intelligence",
      "Medical Imaging Intelligence",
      "Personalized Treatment",
      "Medical Claims Processing",
      "Virtual Health Assistants",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
  },
  fintech: {
    title: "Fintech AI Solutions",
    description:
      "We deliver bespoke AI solutions to fintech firms seeking innovation in fraud detection, risk assessment, and automated customer service. Our tailored integrations enhance transaction security and operational efficiency.",
    solutions: [
      "Financial AI Agents",
      "Underwriting & Pricing",
      "Financial Document Automation",
      "Personalized Financial Engines",
      "Risk Assessment & Management",
      "Credit Risk Management",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  },
  retail: {
    title: "Retail AI Solutions",
    description:
      "Transform your retail operations with our AI-powered solutions that optimize inventory management, enhance customer experience, and drive sales through predictive analytics.",
    solutions: [
      "Inventory Optimization",
      "Customer Behavior Analytics",
      "Demand Forecasting",
      "Personalized Recommendations",
      "Supply Chain Intelligence",
      "Price Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
  },
  saas: {
    title: "SaaS AI Solutions",
    description:
      "For SaaS companies, we provide AI-driven enhancements that improve user engagement, automate processes, and boost analytics capabilities. Our custom solutions are designed to integrate seamlessly with existing platforms, enhancing functionality and user experience.",
    solutions: [
      "SaaS AI Agents",
      "Code Generation/Debugging",
      "Cybersecurity Threat Detection",
      "Automated Testing",
      "AI-Powered API Integration",
      "UI Design Generation",
    ],
    image:
      "https://images.unsplash.com/photo-1573165231977-3f0e27806045?auto=format&fit=crop&q=80",
  },
  travel: {
    title: "Travel AI Solutions",
    description:
      "We create customized AI applications for the travel industry to streamline booking processes, personalize customer experiences, and optimize operational logistics. Our solutions help travel businesses adapt to market changes and enhance traveler satisfaction.",
    solutions: [
      "Travel AI Agents",
      "AI-Enhanced Customer Service",
      "Sentiment Analysis",
      "Language Translation Solutions",
      "Flight Forecasting",
      "Smart Baggage Handling",
    ],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80",
  },
  fitness: {
    title: "Fitness AI Solutions",
    description:
      "We build AI solutions for the fitness industry that personalize workout plans, track performance, and enhance user engagement through interactive applications. Our tailored approaches help fitness providers elevate their service offerings and client results.",
    solutions: [
      "Fitness AI Agents",
      "Nutritional Guidance",
      "Motivation/Engagement Tools",
      "Predictive Analytics",
      "Health Data Analysis Platforms",
      "AI-Enabled Virtual Coaching",
    ],
    image:
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80",
  },
  insurance: {
    title: "Insurance AI Solutions",
    description:
      "We help insurers harness AI to streamline claims, enhance customer experiences, and boost fraud detection. Our team builds customized solutions to address key insurance challenges, from underwriting and risk management to predictive analytics and claims automation.",
    solutions: [
      "Insurance AI Agent",
      "Automated Claims Processing",
      "Customer Service Chatbots",
      "Personalized Insurance Planning",
      "Policy Document Generation",
      "Risk Assessment & Underwriting",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
  },
};

export default function Industry() {
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Heading>Developing smart solutions for every industry</Heading>

        <div className="grid grid-cols-12 gap-8">
          {/* Industry Navigation */}
          <div className="col-span-12 lg:col-span-3">
            <div className="space-y-4">
              {Object.keys(industries).map((industry) => (
                <button
                  key={industry}
                  className={`block text-xl transition-all duration-300 transform hover:scale-105 ${
                    activeIndustry === industry
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveIndustry(industry)}
                >
                  {industry.charAt(0).toUpperCase() + industry.slice(1)}
                  {activeIndustry === industry && (
                    <span className="ml-2">›</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-12 gap-8 ">
              {/* Image */}
              <div className="col-span-12 lg:col-span-6 relative group">
                <div className="relative h-[400px] rounded-lg overflow-hidden transition-all duration-500 transform group-hover:scale-110">
                  <img
                    src={industries[activeIndustry].image}
                    alt={industries[activeIndustry].title}
                    className="w-full h-full object-cover transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 lg:col-span-6 mt-20 ">
                <h2 className="text-3xl font-bold mb-4 text-blue-800 animate__animated animate__fadeIn animate__delay-1s">
                  {industries[activeIndustry].title}
                </h2>
                <p className="text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-2s">
                  {industries[activeIndustry].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}
