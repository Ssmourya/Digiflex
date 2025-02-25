import React from "react";
import {
  Monitor,
  Smartphone,
  Code,
  RefreshCw,
  Database,
  Settings,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="p-6 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Vue.js Consultation",
      description:
        "Our Vue.js consultants dive deep into your project complexities and perform thorough market research. They offer expert advice leveraging their years of expertise to build apt Vue.js solutions.",
    },
    {
      icon: Monitor,
      title: "Vue.js Front-End UI Development",
      description:
        "Our front-end developers create visually captivating app front-ends. The frontends are highly functional, using reusable UI components that deliver beautiful looks and scalability.",
    },
    {
      icon: Database,
      title: "Custom Web App Development",
      description:
        "From SPA to PWA to track dashboards and CRM systems, our seasoned Vue.js developers excel at crafting Vue.js applications quickly. We ensure no compromise on features or functionality.",
    },
    {
      icon: Smartphone,
      title: "Interactive App Development",
      description:
        "Our Vue.js experts build dynamic and feature-rich apps. From social media apps to ecommerce sites and solutions and fully responsive, delivering an exceptional user experience.",
    },
    {
      icon: RefreshCw,
      title: "Vue.js Migration",
      description:
        "Are you experiencing a high bounce rate or scalability issues with your existing web solution? We can help you migrate to Vue.js framework hassle-free with no data loss.",
    },
    {
      icon: Settings,
      title: "Maintenance and Upgradation",
      description:
        "Our Vue.js developers can help add new features to your web apps seamlessly. We keep your app updated with the latest Vue.js enhancements, ensuring top-notch performance.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="text-center mb-12">
        <Heading>Our Vue.JS Development Services</Heading>
        <Paragraph>
          Our skilled Vue.js developers create interfaces that are easy for
          users to navigate, and packed with impressive features. Staying
          up-to-date with the latest tech advancements, we take an innovative
          approach to our website development services.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Services;
