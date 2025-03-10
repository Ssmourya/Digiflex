import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import { BarChart, Bot, Link, Clock, Settings, TrendingUp } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Advanced Analytics & Insights",
    description:
      "Track user interactions, gather valuable data, and optimize performance with real-time analytics.",
    icon: BarChart,
  },
  {
    id: 2,
    title: "AI-Powered Conversational Abilities",
    description: "Understand and respond to user queries accurately.",
    icon: Bot,
  },
  {
    id: 3,
    title: "Multi-Platform Integration",
    description:
      "Connect with websites, mobile apps, messaging platforms, and enterprise software like CRM, ERP, and HRMS.",
    icon: Link,
  },
  {
    id: 4,
    title: "24/7 Availability",
    description:
      "Provide uninterrupted customer support and internal assistance.",
    icon: Clock,
  },
  {
    id: 5,
    title: "Automation & Workflow Optimization",
    description: "Automate repetitive tasks, reducing manual efforts.",
    icon: Settings,
  },
  {
    id: 6,
    title: "Scalability & Customization",
    description: "Tailor-made solutions to fit specific business requirements.",
    icon: TrendingUp,
  },
];

function Ai_chatbot_enterprise() {
  return (
    <div >
      <WrapperContainer>
        <Heading>Enterprise AI Chatbot</Heading>
        <Subheading className="text-center">
          At Digiflex.ai, we deliver cutting-edge Selenium Automation Testing
          solutions, ensuring faster execution, cost efficiency, and seamless
          scalability for your business needs.
        </Subheading>
        <div className="max-w-7xl mx-auto pt-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center transition-transform duration-400 ease-in-out hover:scale-105 group"
              >
                <div className="mb-4 transition-all duration-300">
                  <feature.icon size={40} className="text-blue-400 group-hover:text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default Ai_chatbot_enterprise;
