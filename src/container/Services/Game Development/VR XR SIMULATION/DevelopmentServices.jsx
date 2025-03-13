"use client";

import React, { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { 
  Gamepad, 
  Wrench, 
  Film, 
  Globe 
} from 'lucide-react';

const services = {
  'environment-design': {
    icon: <Gamepad className="w-6 h-6 text-blue-500" />,
    title: "VR/XR Game Environment Design",
    description: "Digiflex creates immersive VR/XR environments with high-end 3D graphics and seamless interactions, ensuring a rich user experience."
  },
  'development-integration': {
    icon: <Wrench className="w-6 h-6 text-green-500" />,
    title: "VR/XR Game Development & Integration",
    description: "Digiflex specializes in building VR/XR simulation games with real-time physics, AI-driven NPCs, and multi-platform support."
  },
  'content-creation': {
    icon: <Film className="w-6 h-6 text-yellow-500" />,
    title: "XR Content Creation & Optimization",
    description: "Digiflex develops and optimizes interactive XR content for training simulations, educational applications, and entertainment."
  },
  'cross-platform': {
    icon: <Globe className="w-6 h-6 text-red-500" />,
    title: "Cross-Platform VR/XR Compatibility",
    description: "Digiflex's VR/XR solutions are designed to work seamlessly across multiple devices, including Oculus, HTC Vive, and mobile AR platforms."
  }
};

const DevelopmentServices = () => {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <WrapperContainer>
        <Heading>
          Digiflex VR/XR Simulation Game Development Services
        </Heading>

        <div className="space-y-8">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`flex flex-col items-start p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white cursor-pointer ${
                expandedService === key ? 'bg-blue-100' : 'hover:bg-gray-200'
              }`}
              onClick={() => setExpandedService(expandedService === key ? null : key)}
            >
              <span className="text-4xl mb-4">{service.icon}</span>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              {expandedService === key && (
                <p className="text-gray-600 mt-2">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      
    </WrapperContainer>
  );
};

export default DevelopmentServices;
