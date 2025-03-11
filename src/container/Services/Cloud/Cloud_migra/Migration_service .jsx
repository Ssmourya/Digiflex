import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Migrationsaas from '@/@/public/assets/MigrationSaas.jpg'
import MigrationPass from '@/@/public/assets/MigrationPaas.avif'
import MigrationIaas from '@/@/public/assets/MigrationIaas.avif'



const advantages = [
  {
    title: "AI-Powered Conversational Abilities",
    points: [
      "Understand and respond to user queries accurately with advanced NLP.",
      "Enhance user experience with human-like interactions and contextual awareness.",
    ],
    image: Migrationsaas,
  },
  {
    title: "Multi-Platform Integration",
    points: [
      "Seamless integration with websites, mobile apps, and enterprise software.",
      "Connect Digiflex.ai's chatbot with CRM, ERP, and HRMS for enhanced automation.",
    ],
    image: MigrationPass,
  },
  {
    title: "Automation & Workflow Optimization",
    points: [
      "Reduce manual efforts by automating repetitive tasks efficiently.",
      "Digiflex.ai enables businesses to streamline workflows and improve productivity.",
    ],
    image: MigrationIaas,
  },
];

function EnterpriseAIService () {
  return (
    <>
       <WrapperContainer>
        <Heading>
          <h1>Enterprise AI Chatbot Solutions by Digiflex.ai</h1>
        </Heading>
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
              <img
                src={advantage.image}
                alt={advantage.title}
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
       </WrapperContainer>
    </>
  )
}

export default EnterpriseAIService
