import React from "react";
import { Brain, ShieldCheck, Cloud, Server } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";

const features = [
  {
    icon: <Brain className="w-6 h-6 transition-transform duration-300" />,
    title: "Expert AI & ML Team",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 transition-transform duration-300" />,
    title: "Custom AI Models",
  },
  {
    icon: <Cloud className="w-6 h-6 transition-transform duration-300" />,
    title: "Secure & Scalable",
  },
  {
    icon: <Server className="w-6 h-6 transition-transform duration-300" />,
    title: "Multi-Cloud & On-Premise Deployment",
  },
];

const stats = [
  {
    number: "10+",
    label: "Years of AI Experience",
    icon: <Brain className="w-12 h-12 mx-auto mb-4 text-blue-600 transition-transform duration-300" />,
  },
  {
    number: "50+",
    label: "Successful AI Deployments",
    icon: <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-600 transition-transform duration-300" />,
  },
  {
    number: "100+",
    label: "Enterprise Clients",
    icon: <Cloud className="w-12 h-12 mx-auto mb-4 text-blue-600 transition-transform duration-300" />,
  },
  {
    number: "200+",
    label: "AI Solutions Delivered",
    icon: <Server className="w-12 h-12 mx-auto mb-4 text-blue-600 transition-transform duration-300" />,
  },
];

function AI_whychoose() {
  return (
    <WrapperContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading>Why Choose Digiflex for Enterprise AI Chatbot Development?</Heading>
          <Paragraph>
            Digiflex specializes in cutting-edge AI chatbot solutions that enhance customer interactions, streamline operations, and improve business efficiency. Our expert team ensures your chatbot is secure, scalable, and customized to fit your unique business needs.
          </Paragraph>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                <div className="text-blue-950">{feature.icon}</div>
                <span className="text-gray-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:scale-105"
            >
              <div className="hover:scale-110">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AI_whychoose;
