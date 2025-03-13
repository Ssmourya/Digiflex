"use client";

import React, { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import Fontheading from "@/Layout/Fontheading";

const IndustriesData = [
  {
    title: "AI-Powered Application Development",
    about: [
      "Custom AI solutions for finance, healthcare, e-commerce, and more.",
      "AI-powered chatbots & virtual assistants to enhance customer experience.",
      "Smart recommendation systems for personalized user engagement.",
      "AI-driven automation for improved efficiency and cost savings.",
      "Seamless integration with existing applications and platforms.",
    ],
  },
  {
    title: "Machine Learning & Deep Learning Solutions",
    about: [
      "Predictive analytics for data-driven decision-making.",
      "Natural Language Processing (NLP) for intelligent text & speech processing.",
      "Computer vision for facial recognition, object detection & video analytics.",
      "Deep learning models for advanced pattern recognition and forecasting.",
      "AI-powered anomaly detection for security and fraud prevention.",
    ],
  },
  {
    title: "AI for Business Automation",
    about: [
      "Robotic Process Automation (RPA) to streamline repetitive tasks.",
      "AI-powered workflow optimization for operational efficiency.",
      "Smart decision-making systems using AI-driven insights.",
      "Automated data entry and document processing with AI.",
      "AI-based customer support automation for faster response times.",
    ],
  },
  {
    title: "Cloud-Based AI Solutions",
    about: [
      "AI integration with AWS, Azure, and Google Cloud.",
      "Big data AI processing for analytics and business intelligence.",
      "Secure & scalable AI architectures deployed on cloud platforms.",
      "Real-time AI model deployment and monitoring in the cloud.",
      "Cloud-based AI-driven automation for seamless operations.",
    ],
  },
  {
    title: "AI in Blockchain & Web3",
    about: [
      "AI-driven smart contracts for blockchain transactions.",
      "AI-enhanced cybersecurity & fraud detection in Web3 applications.",
      "Decentralized AI models for trustless and transparent operations.",
      "AI-powered NFT and token analytics for market predictions.",
      "AI-based risk assessment for DeFi and blockchain security.",
    ],
  },
];

function AiSoftwareServices() {
  const [select, setSelect] = useState(IndustriesData[0]);

  return (
    <WrapperContainer>
      <Heading>Digiflex.ai AI Software Development Services</Heading>
      <div className="flex flex-col md:flex-row border-2 border-[#C0DCFE] rounded-3xl w-full h-auto">
        {/* Left Section (Industry List) */}
        <div className="md:w-1/2 w-full bg-[#C0DCFE] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4">
          <ol className="space-y-2 md:space-y-4">
            {IndustriesData.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelect(item)}
                className={`text-lg md:text-2xl font-medium p-3 md:p-4 cursor-pointer rounded-md transition-all duration-300 ${
                  select.title === item.title
                    ? "text-[#203d8c] bg-white shadow-md"
                    : "hover:bg-white/70"
                }`}
              >
                <Fontheading>{item.title}</Fontheading>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Section (Industry Details) */}
        <div className="md:w-1/2 w-full p-6 md:p-10 bg-white rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          <Subheading>
            <span className="text-xl md:text-3xl font-semibold">
              {select.title}
            </span>
          </Subheading>
          <div className="pt-3 md:pt-5 text-sm md:text-lg text-justify">
            <ul className="space-y-2">
              {select.about.map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiSoftwareServices;
