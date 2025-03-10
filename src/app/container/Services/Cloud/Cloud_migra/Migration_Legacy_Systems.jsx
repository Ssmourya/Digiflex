import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Fontheading from "../../../../Layout/Fontheading";

const steps = [
  {
    title: "Step 1: AI-Powered Conversational Abilities",
    description:
      "Digiflex.ai ensures accurate and intelligent chatbot interactions using cutting-edge AI and NLP technologies, enhancing user engagement.",
  },
  {
    title: "Step 2: Multi-Platform Integration",
    description:
      "Seamlessly integrate Digiflex.ai chatbots with websites, mobile apps, messaging platforms, and enterprise software like CRM, ERP, and HRMS.",
  },
  {
    title: "Step 3: 24/7 Availability",
    description:
      "Provide continuous customer support and internal assistance with Digiflex.ai chatbots, ensuring uninterrupted service.",
  },
  {
    title: "Step 4: Automation & Optimization",
    description:
      "Digiflex.ai chatbots automate repetitive tasks, optimize workflows, and enhance business productivity with intelligent automation.",
  },
];

function MigrationSteps() {
  return (
    <WrapperContainer>
    <div>  
    <Heading>
      <h1>Enterprise AI Chatbot Implementation</h1>
      </Heading>
      <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-lg transition ease-in-out transform hover:bg-blue-600 duration-400 hover:scale-105"
          >
            <Fontheading>
            <h2 className=" mb-2 transition duration-400 ease-in-out group-hover:text-white">
              {step.title}
            </h2>
              </Fontheading>
            <p className="text-gray-700 transition duration-400 ease-in-out  group-hover:text-white">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </WrapperContainer>
  );
}

export default MigrationSteps;
