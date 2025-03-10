import React from "react";
import {
  Code,
  Database,
  Cloud,
  Shield,
  Terminal,
  Cpu,
  Layers,
  RefreshCw,
  Server,
  Package,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const technologies = [
  {
    name: "Angular",
    icon: <Code size={40} />,
    description: "A powerful front-end framework for building dynamic web applications.",
    color: "bg-red-500",
  },
  {
    name: "TypeScript",
    icon: <Terminal size={40} />,
    description: "A superset of JavaScript that brings static typing and advanced features.",
    color: "bg-blue-500",
  },
  {
    name: "Node.js",
    icon: <Server size={40} />,
    description: "A runtime for executing JavaScript on the server-side, essential for development.",
    color: "bg-green-500",
  },
  {
    name: "MongoDB",
    icon: <Database size={40} />,
    description: "A NoSQL database for handling large amounts of unstructured data.",
    color: "bg-green-600",
  },
  {
    name: "React",
    icon: <Code size={40} />,
    description: "A JavaScript library for building user interfaces.",
    color: "bg-blue-400",
  },
  {
    name: "AWS",
    icon: <Cloud size={40} />,
    description: "Cloud computing services to scale applications efficiently.",
    color: "bg-yellow-500",
  },
  {
    name: "Docker",
    icon: <Package size={40} />,
    description: "A containerization platform for deploying applications seamlessly.",
    color: "bg-blue-600",
  },
  {
    name: "Cybersecurity",
    icon: <Shield size={40} />,
    description: "Protect applications from threats with security best practices.",
    color: "bg-purple-500",
  },
  {
    name: "CI/CD",
    icon: <RefreshCw size={40} />,
    description: "Automate software delivery with continuous integration and deployment.",
    color: "bg-gray-700",
  },
  {
    name: "AI & Machine Learning",
    icon: <Cpu size={40} />,
    description: "Integrate AI models for smarter applications and automation.",
    color: "bg-indigo-600",
  },
];

function TechCard({ tech }) {
  return (
    <div className="group perspective-1000 h-full">
      <div className="relative transform-gpu backface-hidden h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:translate-y-1 flex flex-col">
        <div className="relative z-10 flex flex-col items-center flex-grow">
          <div
            className={`w-16 h-16 rounded-xl ${tech.color} flex items-center justify-center mb-4 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
          >
            {tech.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {tech.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center flex-grow">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ToolsAndTech() {
  return (
    <WrapperContainer>
      <div className="mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Heading>Tools & Technologies</Heading>
          <Paragraph className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Explore the cutting-edge technologies we use to build modern applications
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}
