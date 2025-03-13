"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wallet,
  Laptop,
  Clock,
  CheckCircle2,
  Network,
  Database,
  Bitcoin,
} from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const steps = [
  {
    topIcon: <ArrowRight className="w-6 h-6 text-blue-500" />,
    title: "James wants to send money to Oliver",
    icon: <Wallet className="w-12 h-12 text-orange-500" />,
  },
  {
    topIcon: <Bitcoin className="w-6 h-6 text-blue-500" />,
    title: "James uses Blockchain to execute the transaction",
    icon: <Laptop className="w-12 h-12 text-blue-500" />,
  },
  {
    topIcon: <Database className="w-6 h-6 text-blue-500" />,
    title: "The transaction is recorded on the Blockchain",
    icon: <Network className="w-12 h-12 text-purple-500" />,
  },
  {
    topIcon: <Network className="w-6 h-6 text-blue-500" />,
    title: "Network parties are notified about the transaction",
    icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
  },
];

const bottomSteps = [
  {
    topIcon: <ArrowRight className="w-6 h-6 text-blue-500 rotate-180" />,
    title: "Oliver receives the money",
    icon: <Wallet className="w-12 h-12 text-orange-500" />,
  },
  {
    topIcon: <Bitcoin className="w-6 h-6 text-blue-500" />,
    title: "Online money transfer takes place",
    icon: <Network className="w-12 h-12 text-blue-500" />,
  },
  {
    topIcon: <Wallet className="w-6 h-6 text-blue-500" />,
    title: "Wallet is initialized",
    icon: <Laptop className="w-12 h-12 text-purple-500" />,
  },
  {
    topIcon: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
    title: "The transaction gets approved if everything is fine",
    icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
  },
];

const StepCard = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.2 }}
    className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
  >
    <div className="absolute -top-3 bg-orange-500 rounded-full p-2 shadow-md">
      {step.topIcon}
    </div>
    <div className="mt-4 mb-4">{step.icon}</div>
    <p className="text-center text-sm font-medium">{step.title}</p>
  </motion.div>
);

const SmartContractWorkflow = () => {
  return (
    <WrapperContainer>
    <section>
        <div className="">
     
        <div>
            <Heading>
       
            How Does a Smart Contract Work?
         
            </Heading>

        </div>
        <Paragraph className=" text-center">
    
          Smart contracts execute automatically using blockchain, ensuring transparency, security, and trust.

        </Paragraph>
        

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mb-12">
            {steps.map((step, index) => (
              <StepCard key={`top-${index}`} step={step} index={index} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomSteps.map((step, index) => (
              <StepCard key={`bottom-${index}`} step={step} index={index + steps.length} />
            ))}
          </div>
        </div>
      
    </div>
    </section>
    </WrapperContainer>
  );
};

export default SmartContractWorkflow;
