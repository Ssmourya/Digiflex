"use client"
import React, { useState } from "react";
import { ShieldCheck, TrendingUp, CloudLightning, Server, Users, Clock } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description:
      "Implement industry-leading security measures, ensuring data protection and compliance with global standards.",
  },
  {
    icon: TrendingUp,
    title: "Scalability & Flexibility",
    description:
      "Easily scale your infrastructure to meet business demands without costly hardware upgrades.",
  },
  {
    icon: CloudLightning,
    title: "Improved Performance",
    description:
      "Leverage cloud computing for faster data processing and seamless performance optimization.",
  },
  {
    icon: Server,
    title: "Cost Efficiency",
    description:
      "Reduce operational costs with a pay-as-you-go model, eliminating the need for on-premise maintenance.",
  },
  {
    icon: Users,
    title: "Better Collaboration",
    description:
      "Enable seamless remote work and team collaboration with centralized cloud access and real-time updates.",
  },
  {
    icon: Clock,
    title: "Business Continuity",
    description:
      "Ensure minimal downtime and quick disaster recovery with cloud-based backups and failover mechanisms.",
  },
];

function CloudRolloutBenefits() {
  const [selectedBenefit, setSelectedBenefit] = useState(benefits[0]);

  return (
    <WrapperContainer>
      <div className="max-w-6xl mx-auto text-center ">
        <Heading>Benefits of New Cloud Rollout Strategy</Heading>
        <Paragraph>
          Unlock the full potential of cloud adoption with enhanced security, scalability, and efficiency.
        </Paragraph>
      </div>

      {/* Interactive Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 max-w-6xl mx-auto">
        <div className="w-full md:w-1/3 space-y-4">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => setSelectedBenefit(benefit)}
              className={`w-full text-left px-6 py-3 rounded-lg transition-all duration-300 ${selectedBenefit.title === benefit.title ? "bg-[#1D4ED8] text-white shadow-lg" : "bg-gray-100 hover:bg-blue-200"}`}
            >
              {benefit.title}
            </button>
          ))}
        </div>
        
        <div className="w-full md:w-2/3 p-8 bg-white shadow-xl rounded-lg border border-gray-300 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white mb-6 shadow-md">
            <selectedBenefit.icon size={40} />
          </div>
          <Subheading>{selectedBenefit.title}</Subheading>
          <Paragraph>{selectedBenefit.description}</Paragraph>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default CloudRolloutBenefits;
