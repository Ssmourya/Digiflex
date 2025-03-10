"use client";

import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import Fontheading from "../../../../Layout/Fontheading";

const industries = [
  {
    title: "E-Commerce & Retail",
    subheading: "AI-Powered Shopping, Personalization, and Customer Engagement",
    description:
      "At Digiflex.ai, we enhance E-Commerce & Retail with AI-driven chatbots, recommendation engines, and customer analytics. Our chatbots provide real-time assistance, while recommendation systems personalize shopping experiences, boosting sales and engagement.",
    points: [
      "AI-driven chatbots provide instant customer support and assistance.",
      "Recommendation engines personalize shopping experiences to boost sales.",
      "Customer analytics enhance decision-making and improve retention.",
      "AI-powered automation streamlines inventory management and order processing.",
      "Fraud detection ensures secure and seamless transactions."
    ],
    logo: "xyz",
  },
  {
    title: "Healthcare & MedTech",
    subheading: "AI-Driven Diagnostics, Analytics, and Patient-Centric Solutions",
    description:
      "Digiflex.ai revolutionizes healthcare with AI-powered diagnostics, medical image analysis, and predictive analytics. Our AI-driven tools assist doctors in faster, more accurate disease detection, improving patient care.",
    points: [
      "AI-powered tools enhance medical image analysis and diagnostics.",
      "Predictive analytics improve disease detection and treatment planning.",
      "Chatbots assist in patient queries and appointment scheduling.",
      "AI-driven drug discovery accelerates pharmaceutical research.",
      "Remote patient monitoring enhances healthcare accessibility."
    ],
    logo: "xyz",
  },
  {
    title: "Finance & FinTech",
    subheading: "AI for Fraud Detection, Risk Assessment, and Financial Advisory",
    description:
      "We secure the Finance & FinTech industry with AI-driven fraud detection, risk assessment, and automated financial advisory. Our AI systems detect suspicious transactions in real-time, preventing fraud and ensuring compliance.",
    points: [
      "AI-powered fraud detection prevents fraudulent transactions in real-time.",
      "Automated risk assessment improves financial decision-making.",
      "AI-driven robo-advisors provide personalized financial recommendations.",
      "Predictive analytics optimize investment and credit scoring.",
      "Secure AI solutions ensure compliance with financial regulations."
    ],
    logo: "xyz",
  },
  {
    title: "Education & E-Learning",
    subheading: "Personalized AI Tutoring and Smart Learning Solutions",
    description:
      "Digiflex.ai enhances education with AI-driven personalized learning and smart tutoring systems. Our AI adapts to student needs, providing customized learning experiences and real-time feedback.",
    points: [
      "AI adapts to individual learning styles for personalized education.",
      "Smart tutoring systems provide real-time feedback and assistance.",
      "AI-powered assessments help track student progress effectively.",
      "Automated grading reduces workload for educators.",
      "Virtual learning assistants enhance online education experiences."
    ],
    logo: "xyz",
  },
  {
    title: "Manufacturing & Logistics",
    subheading: "AI-Driven Automation, Maintenance, and Supply Chain Optimization",
    description:
      "We optimize Manufacturing & Logistics with AI-based automation, predictive maintenance, and supply chain optimization. AI helps detect equipment failures before they happen, reducing downtime and maintenance costs.",
    points: [
      "AI-powered automation enhances manufacturing efficiency and productivity.",
      "Predictive maintenance minimizes downtime and reduces costs.",
      "Smart supply chain optimization ensures smooth logistics operations.",
      "AI-driven quality control improves product accuracy and consistency.",
      "Robotics and AI enhance warehouse and inventory management."
    ],
    logo: "xyz",
  }
];

function Ai_app_Industries() {
  const [select, setSelect] = useState(industries[0]);

  return (
    <WrapperContainer>
      <Heading>Industries We Serve</Heading>
      <div className="flex flex-col md:flex-row border-2 border-[#C0DCFE] rounded-3xl w-full h-auto">
        
        {/* Left Section (Industry List) */}
        <div className="md:w-1/2 w-full bg-[#C0DCFE] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
          <ol className="p-4 md:p-6 space-y-2 md:space-y-4">
            {industries.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelect(item)}
                className={`text-lg md:text-2xl font-medium p-3 md:p-4 cursor-pointer rounded-md transition-all duration-300 ${
                  select.title === item.title ? "text-[#203d8c] bg-white shadow-md" : "hover:bg-white/70"
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

          {/* Points Section */}
          <ul className="mt-4 space-y-2 md:space-y-3">
            {select.points.map((point, index) => (
              <li key={index} className="flex items-start text-sm md:text-lg">
                <span className="text-[#203d8c] font-bold pr-2">•</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Ai_app_Industries;
