import React from "react";
import { Cloud, Server, Lock, Users, Settings, CheckCircle } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const rolloutFeatures = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Implement scalable and secure cloud infrastructure using AWS, Azure, or Salesforce Cloud solutions.",
  },
  {
    icon: Server,
    title: "Data Migration",
    description:
      "Seamless migration of existing data to the cloud with minimal downtime and maximum security.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description:
      "Ensure robust security policies, encryption, and compliance with industry standards such as GDPR and ISO 27001.",
  },
  {
    icon: Users,
    title: "User Access & Management",
    description:
      "Manage user roles, permissions, and authentication for controlled cloud access.",
  },
  {
    icon: Settings,
    title: "Automation & Optimization",
    description:
      "Automate cloud operations, scaling, and performance monitoring for efficiency.",
  },
  {
    icon: CheckCircle,
    title: "Testing & Deployment",
    description:
      "Ensure smooth deployment with rigorous testing and rollback strategies to prevent failures.",
  },
];

function CloudRolloutStrategy() {
  return (
    <WrapperContainer>
      <div className="max-w-4xl mx-auto text-center">
        <Heading>New Cloud Rollout Strategy</Heading>
        
        <Paragraph className="text-gray-600 text-lg leading-loose mt-4">
          At Digiflex, we specialize in cloud transformation, ensuring a seamless transition with modern cloud technologies.
        </Paragraph>
      </div>

      {/* Grid Layout for Features */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {rolloutFeatures.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Icon - Centered at the top inside a bordered circle */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white absolute -top-10">
              <Icon size={36} className="text-blue-500" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mt-10">{title}</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>

          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default CloudRolloutStrategy;
