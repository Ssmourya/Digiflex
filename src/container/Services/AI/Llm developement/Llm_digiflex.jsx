import React from "react";
import {
  BrainCircuit,
  Settings,
  ShieldCheck,
  RefreshCw,
  Layers,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const data = [
  {
    icon: <BrainCircuit size={48} className="text-blue-600" />,
    title: "AI Expertise",
    description:
      "Our team of AI professionals has deep expertise in machine learning, NLP, and LLM development.",
  },
  {
    icon: <Settings size={48} className="text-blue-600" />,
    title: "Tailored Solutions",
    description: "We develop AI models customized to your business needs.",
  },
  {
    icon: <ShieldCheck size={48} className="text-blue-600" />,
    title: "Scalability & Security",
    description:
      "High-performance models with a focus on data security and compliance.",
  },
  {
    icon: <RefreshCw size={48} className="text-blue-600" />,
    title: "Continuous Support & Upgrades",
    description: "Ongoing maintenance and optimization for AI solutions.",
  },
  {
    icon: <Layers size={48} className="text-blue-600" />,
    title: "Industry-Specific AI Models",
    description: "We cater to finance, healthcare, retail, legal, and more.",
  },
];

function Llm_digiflex() {
  return (
    <WrapperContainer>
      <Heading>Why Choose Quest Digiflex.ai?</Heading>

      {/* Cards in a single row on large screens */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6  md:px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-3 border border-blue-600 rounded-xl bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Icon inside a bordered circle */}
            <div className="flex items-center justify-center w-16 h-16 border-2 border-blue-600 rounded-full mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-blue-600">
              {item.title}
            </h3>
            <div className="text-gray-600">{item.description}</div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Llm_digiflex;
