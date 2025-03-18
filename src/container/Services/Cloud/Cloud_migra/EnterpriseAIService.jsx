import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const advantages = [
  {
    title: "AI-Powered Conversational Abilities",
    points: [
      "Understand and respond to user queries accurately with advanced NLP.",
      "Enhance user experience with human-like interactions and contextual awareness.",
    ],
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/MigrationSaas.jpg",
  },
  {
    title: "Multi-Platform Integration",
    points: [
      "Seamless integration with websites, mobile apps, and enterprise software.",
      "Connect Digiflex.ai's chatbot with CRM, ERP, and HRMS for enhanced automation.",
    ],
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/MigrationPaas.avif",
  },
  {
    title: "Automation & Workflow Optimization",
    points: [
      "Reduce manual efforts by automating repetitive tasks efficiently.",
      "Digiflex.ai enables businesses to streamline workflows and improve productivity.",
    ],
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/MigrationIaas.avif",
  },
];

function EnterpriseAIService() {
  return (
    <>
      <WrapperContainer>
        <Heading>Enterprise AI Chatbot Solutions by Digiflex.ai</Heading>
        <div className="mt-5">
          <div className="">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <div className="w-full md:w-1/2 px-6">
                  <h2 className="text-3xl font-bold mb-4">{advantage.title}</h2>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    {advantage.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-[350px] h-[300px] object-cover rounded-lg"
                    width={350} // ✅ Removed "px"
                    height={300} // ✅ Added height (Next.js requires both width & height)
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default EnterpriseAIService;
