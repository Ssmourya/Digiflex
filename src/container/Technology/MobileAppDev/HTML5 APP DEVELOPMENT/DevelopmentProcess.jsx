import React from "react";

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
          Our Development Process (Steps)
        </h2>
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-blue-200"></div>
          <div className="flex justify-between items-center relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/5 px-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
