import React from 'react';
import { Cpu, Leaf, Code, Cloud, Network } from "lucide-react";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const topics = [
    {
      title: "Advanced Kubernetes Applications",
      description: "Harness Kubernetes for AI, Edge Computing, and IoT innovations.",
      icon: <Cpu size={40} />,
    },
    {
      title: "AI-Powered Cloud Management",
      description: "Optimize cloud performance with AI-driven automation.",
      icon: <Cloud size={40} />,
    },
    {
      title: "Eco-Friendly Cloud Solutions",
      description: "Discover sustainable and energy-efficient cloud computing.",
      icon: <Leaf size={40} />,
    },
    {
      title: "WebAssembly: The Future of Cloud Apps",
      description: "Unleashing WebAssembly for high-performance cloud-native applications.",
      icon: <Code size={40} />,
    },
    {
      title: "Blockchain-Powered Cloud Services",
      description: "Revolutionizing cloud security and decentralization with blockchain.",
      icon: <Network size={40} />,
    },
  ];

function NativeFeature() {
  return (
    <>
    <WrapperContainer>
    <Heading>Cloud-Native Innovations by Digiflex</Heading>
    <div className="mb-20 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
        >
          {topic.icon}
          <Subheading>
          <h3 className="mt-4 text-lg font-semibold text-center">
            {topic.title}
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            {topic.description}
          </p>
          </Subheading>
        </div>
      ))}
    </div>
    </WrapperContainer>

    </>
  )
}

export default NativeFeature;