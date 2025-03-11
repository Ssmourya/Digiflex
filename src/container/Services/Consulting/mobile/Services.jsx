import React from "react";
import { Rocket, Search, Settings } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const services = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch Your Mobile App with Digiflex.ai",
    description:
      "At Digiflex.ai, we transform your vision into reality. Our mobile app launch services include:",
    items: [
      "Crafting a clear product vision and strategy",
      "Creating a functional prototype",
      "Developing a detailed plan and specifications",
    ],
    footer:
      "From ideation to execution, we ensure your app is ready to succeed in today's competitive market.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Comprehensive Mobile App Audit",
    description:
      "Our team of experts at Digiflex.ai performs a thorough health check of your mobile app, covering:",
    items: [
      "In-depth UI/UX analysis for seamless user experiences",
      "Code audit to ensure stability and maintainability",
      "Security and compliance review to protect your users and business",
    ],
    footer:
      "We'll help you identify areas of improvement and maximize your app's potential.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Mobile App Modernization Services",
    description:
      "Revitalize your mobile app with Digiflex.ai's consulting expertise. Our app modernization process includes:",
    items: [
      "UI/UX redesign recommendations for a fresh and engaging look",
      "Performance optimization to deliver faster, smoother experiences",
      "Tailored strategies to meet your business goals",
    ],
    footer:
      "Let's bring your app up to speed with the latest trends and technologies.",
  },
];

function Services() {
  return (
    <WrapperContainer>
      <div className="mx-auto">
        <Heading>App Development Consulting</Heading>
        <Paragraph>
          Our mobile app consultants help companies to expand their business
          with the mobile app market as well as guide startups in launching
          their products successfully.
        </Paragraph>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-950 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-4 mb-6">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-gray-600 pl-5"> • {item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6">{service.footer}</p>
              <div className="px-5 py-5">
                <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  Get consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Services;
