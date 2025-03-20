import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const Four = () => {
  return (
    <div className="bg-white p-6 md:p-8 font-sans">
      {/* First Section - OptiOps */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="flex-1 text-center md:text-left">
          <Heading>OptiOps</Heading>
          <Subheading className="text-lg text-gray-600 mb-4">
            Intelligent Knowledge Management
          </Subheading>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center md:justify-start">
            <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
              Watch Demo
            </button>
            <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
              Learn More
            </button>
          </div>
          <div className="mb-4">
            <Subheading className="text-blue-600 text-xl mb-2">
              AI-Powered Knowledge Base
            </Subheading>
            <Paragraph>
              Empower your service teams with AI-driven knowledge management.
              Reduce resolution times and enhance customer interactions with
              instant access to contextual, relevant information. Leverage
              real-time insights to improve agent productivity and customer
              satisfaction.
            </Paragraph>
          </div>
          <ul className="list-none p-0 text-center md:text-left">
            <li className="text-blue-600 text-base mb-2">AI-Powered Search</li>
            <li className="text-blue-600 text-base mb-2">
              Smart Content Suggestions
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/bg5.png"
            alt="Knowledge Management"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md mb-4"
            priority={false}
          />
        </div>
      </div>

      {/* Second Section - OmniAssist */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex-1 text-center md:text-left">
          <Heading>OmniAssist</Heading>
          <Subheading className="text-lg text-gray-600 mb-4">
            Omni-Channel Customer Engagement
          </Subheading>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center md:justify-start">
            <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
              Watch Demo
            </button>
            <button className="bg-blue-700 text-white py-3 px-6 font-semibold rounded-lg hover:bg-blue-800">
              Learn More
            </button>
          </div>
          <div className="mb-4">
            <Subheading className="text-blue-600 text-xl mb-2">
              Unified Communication Across Channels
            </Subheading>
            <Paragraph>
              Deliver seamless customer support across voice, chat, email, and
              social channels. Our omni-channel engagement solution ensures
              personalized, context-aware interactions, reducing friction and
              improving customer experience.
            </Paragraph>
          </div>
          <ul className="list-none p-0 text-center md:text-left">
            <li className="text-blue-600 text-base mb-2">
              Automated Response Suggestions
            </li>
            <li className="text-blue-600 text-base mb-2">
              Real-Time Agent Collaboration
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/bg6.png"
            alt="Omni-Channel Engagement"
            width={500}
            height={300}
            className="w-full rounded-lg shadow-md mb-4"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Four;
