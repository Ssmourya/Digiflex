import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import Fontheading from "../../../../Layout/Fontheading";

const IndustriesData = [
  {
    title: "AI-Powered Application Development",
    about: [
      "Custom AI solutions for finance, healthcare, e-commerce, and more.",
      "AI-powered chatbots & virtual assistants to enhance customer experience.",
      "Smart recommendation systems for personalized user engagement.",
    ],
  },
  {
    title: "Machine Learning & Deep Learning Solutions",
    about: [
      "Predictive analytics for data-driven decision-making.",
      "Natural Language Processing (NLP) for intelligent text & speech processing.",
      "Computer vision for facial recognition, object detection & video analytics.",
    ],
  },
  {
    title: "AI for Business Automation",
    about: [
      "Robotic Process Automation (RPA) to streamline repetitive tasks.",
      "AI-powered workflow optimization for operational efficiency.",
      "Smart decision-making systems using AI-driven insights.",
    ],
  },
  {
    title: "Cloud-Based AI Solutions",
    about: [
      "AI integration with AWS, Azure, and Google Cloud.",
      "Big data AI processing for analytics and business intelligence.",
      "Secure & scalable AI architectures deployed on cloud platforms.",
    ],
  },
  {
    title: "AI in Blockchain & Web3",
    about: [
      "AI-driven smart contracts for blockchain transactions.",
      "AI-enhanced cybersecurity & fraud detection in Web3 applications.",
    ],
  },
];

function AiSoftwareServices() {
  const [select, setSelect] = useState(IndustriesData[0]);

  return (
    <WrapperContainer>
      <Heading>Digiflex AI Software Development Services</Heading>
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
            <span className="text-xl md:text-3xl font-semibold">{select.title}</span>
          </Subheading>
          <Paragraph className="pt-3 md:pt-5 text-sm md:text-lg text-justify">
            <ul className="space-y-2">
              {select.about.map((point, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Paragraph>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiSoftwareServices;
