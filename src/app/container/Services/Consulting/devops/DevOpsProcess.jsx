"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Users2, Cog, TrendingUp } from "lucide-react";
import ProcessCard from "./ProcessCard";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function DevOpsProcess() {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Assessment",
      description:
        "At Digiflex.ai, we start by diving deep into your existing processes, tools, and infrastructure. Our comprehensive assessment uncovers pain points, bottlenecks, and untapped opportunities, laying the foundation for a customized DevOps strategy that drives efficiency, scalability, and innovation.",
    },
    {
      icon: Users2,
      title: "Strategy Development",
      description:
        "At Digiflex.ai, we craft a customized DevOps strategy aligned with your business objectives. Our approach includes selecting the optimal tools, streamlining processes, and setting clear, measurable goals to enhance efficiency, scalability, and innovation.",
    },
    {
      icon: Cog,
      title: "Implementation & Integration",
      description:
        "At Digiflex.ai, our experts collaborate with your team to implement a robust DevOps strategy, ensuring seamless integration of tools and processes into your existing workflows. We provide hands-on guidance, continuous support, and best practices to drive efficiency and innovation.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "At Digiflex.ai, we view DevOps as an ongoing evolution. Our team continuously monitors performance, gathers actionable feedback, and refines processes to enhance efficiency, security, and scalability—ensuring your DevOps ecosystem stays ahead of the curve.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <Heading>Our DevOps Consulting Process</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-blue-600 mr-4 p-4 rounded-full bg-blue-50"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-blue-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default DevOpsProcess;
