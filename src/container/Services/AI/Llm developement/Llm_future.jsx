import React from "react";
import { Cpu, Image, Settings, MessageCircle } from "lucide-react"; // Lucide icons
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const industries = [
  {
    icon: <Cpu size={40} className="text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />,
    title: "Cutting-Edge Performance",
    description:
      "At Digiflex.ai, we develop highly optimized LLMs with superior accuracy, speed, and bias reduction, ensuring seamless integration into diverse business applications.",
  },
  {
    icon: <Image size={40} className="text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />,
    title: "Multimodal AI Solutions",
    description:
      "Our expertise in multimodal AI enables LLMs to process text, audio, and video, unlocking next-gen applications in autonomous systems, smart surveillance, and intelligent automation.",
  },
  {
    icon: <Settings size={40} className="text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />,
    title: "Enterprise-Grade AI Automation",
    description:
      "Digiflex.ai empowers businesses by automating clerical workflows, enhancing customer interactions, and streamlining content creation, driving efficiency across industries.",
  },
  {
    icon: <MessageCircle size={40} className="text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />,
    title: "Revolutionizing Conversational AI",
    description:
      "Our AI-driven virtual assistants and chatbots provide context-aware, human-like interactions, improving customer service, smart home automation, and enterprise AI solutions.",
  },
];

function LlmFuture() {
  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center">
          <Heading>
            <h2>
              Digiflex.ai  
              <span className="block">Shaping the Future of LLMs</span>
            </h2>
          </Heading>
          <p className="text-lg text-gray-600">
            The future of Large Language Models (LLMs) looks promising and transformative, with advancements expected in several key areas.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 md:p-5 bg-white border-2 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 group flex flex-col items-center text-center"
            >
              <div>{industry.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default LlmFuture;
