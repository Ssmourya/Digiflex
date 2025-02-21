import React from 'react'
import { Cpu, Leaf, Code, Cloud, Network } from "lucide-react";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const topics = [
    {
      title: "Kubernetes Beyond Containers",
      description: "Explore Kubernetes for AI, Edge, & IoT.",
      icon: <Cpu size={40} />,
    },
    {
      title: "AI-Driven Cloud Operations (AIOps)",
      description: "Enhancing cloud efficiency with AI-powered operations.",
      icon: <Cloud size={40} />,
    },
    {
      title: "Sustainability & Green Cloud Computing",
      description: "Learn how cloud computing is going green.",
      icon: <Leaf size={40} />,
    },
    {
      title: "The Rise of WebAssembly (Wasm)",
      description: "Explore WebAssembly's role in cloud-native applications.",
      icon: <Code size={40} />,
    },
    {
      title: "Decentralized & Blockchain-Based Cloud",
      description: "Discover the future of decentralized cloud services.",
      icon: <Network size={40} />,
    },
  ];

function Native_feature() {
  return (
    <>
    <WrapperContainer>
    <Heading>Cloud-Native Future</Heading>
    <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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

export default Native_feature