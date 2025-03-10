import React from "react";
import { MessageSquare, Rocket, Wallet, Building2, Plane } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const industries = [
  {
    icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
    title: "Healthcare",
    description:
      "Transform the healthcare experience with Digiflex.ai's expert mobile app consulting services. We provide tailored strategies to design user-friendly and secure apps for patient care, medical record management, appointment scheduling, telemedicine, EHRs, medication reminders, fitness tracking, and more.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-400" />,
    title: "Software and technology",
    description:
      "Optimize your business processes with Digiflex.ai's software and technology consulting services. We provide expert guidance in mobile app development and customization, system integration, IT strategy planning, cloud services, data management, project management, and cutting-edge technologies like IoT and AI/ML.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-green-400" />,
    title: "Fintech",
    description:
      "Reimagine the financial landscape with Digiflex.ai's mobile app consulting services. We specialize in designing robust, intuitive, and secure fintech solutions, including digital wallets, investment platforms, peer-to-peer payment apps, insurance management systems, personal finance trackers, and more.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-purple-400" />,
    title: "Banking",
    description:
      "Streamline banking operations and enhance customer experiences with Digiflex.ai's expert consulting services. We help you design strategies and develop mobile apps focused on core banking system integration, mobile and online banking solutions, robust cybersecurity, CRM systems, cloud migration, and seamless fintech integration.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-red-400" />,
    title: "Real estate",
    description:
      "Elevate your real estate business with Digiflex.ai's technology-driven solutions. Our consulting services help you design apps tailored for property listings, virtual tours, CRM systems, property management, investment analysis, and more.",
  },
  {
    icon: <Plane className="w-6 h-6 text-yellow-400" />,
    title: "Travel and transportation",
    description:
      "Transform the travel and transportation experience with Digiflex.ai's expert consulting services. We specialize in creating interactive travel guides, real-time transport tracking systems, ride-sharing apps, personalized itinerary planners, and virtual tours.",
  },
];

function Industries() {
  return (
    <WrapperContainer>
      <div className=" mx-auto">
        <Heading>Industries we innovate</Heading>{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Industries;
