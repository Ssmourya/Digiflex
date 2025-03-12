"use client";
import Image from "next/image";
import React, { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Fontheading from "@/Layout/Fontheading";

const StrategiesData = [
  {
    title: "Efficient Resource Allocation",
    describe:
      "Optimize compute, storage, and database resources to match actual usage and reduce costs.",
  },
  {
    title: "Dynamic Scaling and Load Management",
    describe:
      "Implement autoscaling to adjust resources dynamically and balance traffic across multiple servers efficiently.",
  },
  {
    title: "Cost-Effective Instance Management",
    describe:
      "Utilize Reserved Instances for predictable workloads and leverage Spot Instances for non-critical tasks to save costs.",
  },
  {
    title: "Optimized Data Storage Solutions",
    describe:
      "Select appropriate storage tiers (e.g., Standard, Infrequent Access, Archive) to achieve cost-effectiveness and performance balance.",
  },
  {
    title: "Proactive Monitoring and Cost Control",
    describe:
      "Leverage cloud-native monitoring tools such as AWS CloudWatch, Azure Monitor, or Google Cloud Operations Suite to manage performance and expenditures.",
  },
  {
    title: "Automation and AI-Powered Efficiency",
    describe:
      "Utilize Infrastructure as Code (IaC) with Terraform or AWS CloudFormation to streamline cloud resource management and automation.",
  },
  {
    title: "Multi-Cloud and Hybrid Deployment Strategies",
    describe:
      "Distribute workloads across multiple cloud providers to prevent vendor lock-in and enhance redundancy.",
  },
  {
    title: "Policy-Driven Governance and Compliance",
    describe:
      "Establish access control policies, enforce resource tagging, and maintain compliance to avoid unnecessary expenses.",
  },
];

function OptimizationStrategies() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <WrapperContainer>
      <Heading>Cloud Optimization Strategies by Digiflex.ai</Heading>
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="flex flex-col w-full text-black md:w-2/3">
          {StrategiesData.map((strategy, index) => (
            <div
              key={index}
              className="w-full duration-300 border-b border-gray-600 relative overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer transition-transform duration-300  hover:translate-y-2 "
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <Fontheading>{strategy.title}</Fontheading>
              </div>
              {activeIndex === index && (
                <Paragraph>
                  <div className="p-4 transition-opacity duration-300 text-xl opacity-100">
                    {strategy.describe}
                  </div>
                </Paragraph>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full md:w-1/3 mt-8 md:mt-0">
          <Image
            src="/assets/Optimization.webp"
            width={500}
            height={300}
            alt="Cloud Optimization"
            className="w-full max-w-sm h-auto object-contain"
            priority={false}
          />
        </div>
      </div>
    </WrapperContainer>
  );
}

export default OptimizationStrategies;
