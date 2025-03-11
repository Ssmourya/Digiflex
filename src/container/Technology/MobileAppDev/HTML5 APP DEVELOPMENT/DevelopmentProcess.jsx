import React from "react";
import Paragraph from "@/Layout/Paragraph";

const steps = [
  {
    title: "Requirement Analysis",
    description: "Understanding your business needs",
  },
  {
    title: "UI/UX Design",
    description: "Creating engaging designs",
  },
  {
    title: "Development",
    description: "Coding with best practices",
  },
  {
    title: "Testing & QA",
    description: "Ensuring performance & security",
  },
  {
    title: "Deployment & Maintenance",
    description: "Continuous support",
  },
];

export default function DevelopmentProcess() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Development Process at Digiflex.ai (Steps)
        </h2>
        <div className="relative">
          {/* Horizontal connector line for larger screens */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-blue-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-0 items-center relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <Paragraph>{step.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
