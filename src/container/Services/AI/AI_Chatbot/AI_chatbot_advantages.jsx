"use client";

import { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const data = {
  "Improved Customer Support": {
    title: "Improved Customer Support",
    content:
      "Enterprise AI chatbots provide instant responses to customer queries, ensuring 24/7 availability and reducing wait times. They can handle a high volume of requests simultaneously, improving customer satisfaction by delivering accurate and relevant information in real time. Additionally, AI chatbots can offer personalized responses based on customer history and preferences, leading to a more engaging and efficient support experience.",
  },
  "Cost Efficiency": {
    title: "Cost Efficiency",
    content:
      "By automating routine tasks such as answering FAQs, processing orders, and scheduling appointments, enterprise AI chatbots significantly reduce the need for human intervention. This leads to lower labor costs and operational expenses while maintaining a high level of service efficiency. Businesses can allocate human resources to more complex and strategic tasks, optimizing workforce productivity without compromising customer interactions.",
  },
  "Enhanced Employee Productivity": {
    title: "Enhanced Employee Productivity",
    content:
      "AI chatbots assist employees by handling repetitive inquiries, streamlining workflows, and integrating with enterprise systems to automate tasks like data entry, document retrieval, and internal communication. This allows employees to focus on higher-value activities, boosting overall productivity and efficiency within the organization. Additionally, chatbots can provide quick access to company policies, HR-related information, and IT support, reducing downtime and improving workplace efficiency.",
  },
  "Data-Driven Insights": {
    title: "Data-Driven Insights",
    content:
      "AI chatbots collect and analyze vast amounts of conversation data, enabling businesses to gain valuable insights into customer behavior, preferences, and pain points. This data can be leveraged to improve products, services, and customer engagement strategies. By monitoring chatbot interactions, companies can identify trends, optimize marketing efforts, and enhance decision-making processes based on real-time analytics.",
  },
};

export default function AIChatbotAdvantages() {
  const [selected, setSelected] = useState("Improved Customer Support");

  return (
    <WrapperContainer>
    <div className="pb-20">
      {/* Heading */}
     <Heading>Advantages of Enterprise AI Chatbots</Heading>
      {/* Cards Section */}
      <div className="pt-5 flex flex-wrap justify-center gap-4">
        {Object.keys(data).map((key) => (
          <div
            key={key}
            className={`relative w-full sm:w-48 p-4 border-2 rounded-lg cursor-pointer text-center transition-all duration-300 `}
            onClick={() => setSelected(key)}
          >
            <h3 className="font-semibold">{key}</h3>
            {/* Smooth Underline Animation */}
            <div
              className={`absolute bottom-0 left-1/2 w-0 h-1 bg-blue-500 transition-all duration-[1500ms] ease-in-out transform -translate-x-1/2 ${
                selected === key ? "w-full" : "w-0"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Selected Content with Smooth Border Animation */}
      <div
        className={`mt-4 p-6 rounded-lg bg-white shadow-lg transition-all duration-[1500ms] ease-in-out ${
          selected ? "border-2 border-blue-500" : "border-transparent"
        }`}
      >
        <h3 className="text-xl font-bold text-blue-600">{data[selected].title}</h3>
        <p className="mt-2 text-gray-700">{data[selected].content}</p>
      </div>
    </div>
    </WrapperContainer>
  );
}
