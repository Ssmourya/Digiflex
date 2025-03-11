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
