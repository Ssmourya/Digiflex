"use client"
import React, { useState } from "react";
import { Cloud, Server, Cpu, Code, Settings, Database } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const techStack = [
  { name: "AWS", icon: Cloud, description: "Amazon Web Services for scalable cloud computing." },
  { name: "Azure", icon: Server, description: "Microsoft Azure for hybrid cloud deployments." },
  { name: "Kubernetes", icon: Cpu, description: "Container orchestration for scalable applications." },
  { name: "Docker", icon: Code, description: "Containerization for efficient deployment." },
  { name: "Terraform", icon: Settings, description: "Infrastructure as Code for automated provisioning." },
  { name: "MongoDB", icon: Database, description: "NoSQL database for high-performance storage." },
];

function TechStackPage() {
  const [selectedTech, setSelectedTech] = useState(techStack[0]);

  return (
    <WrapperContainer>
      <div className="max-w-6xl mx-auto text-center ">
        <Heading>Cloud Rollout Strategy - Tech Stack</Heading>
        <Paragraph>
          Explore the core technologies powering the new cloud rollout strategy.
        </Paragraph>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            onClick={() => setSelectedTech(tech)}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${selectedTech.name === tech.name ? "bg-[#1D4ED8] text-white" : "bg-gray-100 hover:bg-blue-200"}`}
          >
            <tech.icon size={40} className="mb-4" />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
          </div>
        ))}
      </div>

      {/* Selected Tech Details */}
      <div className="mt-12 p-8 bg-white shadow-xl rounded-lg border border-gray-300 max-w-4xl mx-auto text-center transition-all duration-300 transform hover:scale-105">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white mb-6 shadow-md">
          <selectedTech.icon size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">{selectedTech.name}</h3>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">{selectedTech.description}</p>
      </div>
    </WrapperContainer>
  );
}

export default TechStackPage;
