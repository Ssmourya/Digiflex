import React from "react";
import {
  Lightbulb,
  Search,
  Code,
  TestTube,
  Rocket,
  CheckCircle,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const ProcessStep = ({ icon: Icon, step, title, description }) => (
  <div className="flex items-start gap-6 group">
    <div className="relative">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      {/* Connector Line */}
      <div className="absolute top-12 left-1/2 w-0.5 h-full -translate-x-1/2 bg-gray-200 -z-10" />
    </div>
    <div className="flex-1 pb-16">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="text-blue-600 font-semibold mb-2">Step {step}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Understanding Requirements",
      description:
        "We analyze project requirements, define key features, and assess the suitability of Knockout.js for building dynamic UI components.",
    },
    {
      icon: Search,
      title: "Architecture & ViewModel Planning",
      description:
        "We structure the application using MVVM (Model-View-ViewModel) principles, ensuring clean separation of concerns and maintainability.",
    },
    {
      icon: Code,
      title: "Knockout.js Development",
      description:
        "We implement dynamic bindings, observables, computed properties, and components to create a responsive user interface.",
    },
    {
      icon: TestTube,
      title: "Testing & Debugging",
      description:
        "We perform unit tests, browser compatibility checks, and debugging using Knockout's built-in tools and external testing frameworks.",
    },
    {
      icon: Rocket,
      title: "Deployment & Optimization",
      description:
        "The application is deployed efficiently with optimized bindings, minimized dependencies, and performance tuning for smooth execution.",
    },
    {
      icon: CheckCircle,
      title: "Maintenance & Updates",
      description:
        "We provide continuous monitoring, bug fixes, and feature updates to ensure the Knockout.js application remains scalable and efficient.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="text-center mb-10">
        <Heading level={1}>Knockout.js Development Process</Heading>
        <Paragraph>
          Our Knockout.js development process ensures a structured and scalable
          approach, leveraging MVVM architecture for dynamic and interactive web
          applications.
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
    </WrapperContainer>
  );
};

export default Process;
