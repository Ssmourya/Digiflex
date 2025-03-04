import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import { Cpu, TrendingUp, DollarSign, Server, Settings, Layers, Trash2 } from "lucide-react";
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';

const optimizationData = [
    {
      title: "Efficient Resource Allocation",
      icon: <Cpu size={30} className="text-blue-500" />, 
      description: "Optimizing cloud resources ensures cost-effectiveness and performance by matching resource allocation to actual usage.",
    },
    {
      title: "Dynamic Scaling",
      icon: <TrendingUp size={30} className="text-green-500" />,
      description: "Automatically adjusting cloud resources based on real-time demand prevents over-provisioning and reduces costs.",
    },
    {
      title: "Strategic Cost Management",
      icon: <DollarSign size={30} className="text-yellow-500" />,
      description: "Implementing financial best practices, including reserved instances and savings plans, enhances cost efficiency.",
    },
    {
      title: "Optimized Load Distribution",
      icon: <Server size={30} className="text-red-500" />,
      description: "Load balancing techniques ensure even resource utilization, preventing bottlenecks and improving system performance.",
    },
    {
      title: "AI-Powered Automation",
      icon: <Settings size={30} className="text-purple-500" />,
      description: "Using AI-driven tools helps automate workload optimization, detect inefficiencies, and enhance cloud performance.",
    },
    {
      title: "Multi-Cloud & Hybrid Approaches",
      icon: <Layers size={30} className="text-indigo-500" />,
      description: "Leveraging multiple cloud providers ensures flexibility, enhanced security, and reduced dependency on a single vendor.",
    },
    {
      title: "Reducing Unused Resources",
      icon: <Trash2 size={30} className="text-gray-500" />,
      description: "Regular audits and governance strategies help eliminate redundant cloud assets, improving cost-effectiveness.",
    },
];

function OptimizationWork() {
  return (
    <WrapperContainer>
      <Heading>
        Cloud Optimization Strategies by Digiflex
      </Heading>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {optimizationData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start border border-gray-200 hover:scale-105 hover:shadow-lg">
            <div className="mb-4">{item.icon}</div>
            <Subheading>
              <h2 className="mb-2">{item.title}</h2>
            </Subheading>
            <Paragraph>{item.description}</Paragraph>
          </div>
        ))}
      </div>
      <div className="flex items-center w-3/4 mt-10">
        <div className="flex-1 border-t-4 border-gray-400"></div>
        <div className="ml-10 w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
    </WrapperContainer>
  );
}

export default OptimizationWork;