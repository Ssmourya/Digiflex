import React from "react";
import {
  Wallet,
  Coins,
  Rocket,
  CreditCard,
  Users,
  Code,
  Key,
  MessageSquare,
} from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";

const ModuleCard = ({ title, description, icon: Icon }) => (
  <div className="relative p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-50 group-hover:bg-blue-100"></div>

    {/* Icon floating in top-right */}
    <div className="absolute top-4 right-4">
      <Icon
        size={24}
        className="text-blue-500 group-hover:text-blue-600 transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="space-y-4">
      {/* Title with underline effect */}
      <h3 className="text-xl font-bold text-gray-800 relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
      </h3>

      {/* Description with fade-in effect */}
      <p className="text-gray-600 text-sm leading-relaxed opacity-90 group-hover:opacity-100">
        {description}
      </p>

      {/* Hover indicator */}
      <div className="absolute bottom-4 left-6 w-8 h-0.5 bg-blue-500 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </div>
  </div>
);

function RubyOnRailsModules() {
  const modules = [
    {
      title: "Custom Web Development",
      description:
        "Digiflex builds tailored Ruby on Rails web applications, delivering scalable and efficient solutions to meet your unique business needs.",
      icon: Code,
    },
    {
      title: "API Development",
      description:
        "Digiflex crafts secure and robust APIs with Ruby on Rails, enabling seamless integrations and high-performance backend systems.",
      icon: Rocket,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Digiflex develops feature-rich e-commerce platforms using Ruby on Rails, designed for usability, scalability, and rapid deployment.",
      icon: Users,
    },
    {
      title: "Database Management",
      description:
        "Digiflex optimizes and manages databases with Rails’ ActiveRecord, ensuring fast queries and reliable data handling for your app.",
      icon: Key,
    },
    {
      title: "App Maintenance",
      description:
        "Digiflex provides ongoing maintenance for Ruby on Rails apps, including updates, bug fixes, and performance enhancements.",
      icon: Coins,
    },
    {
      title: "UI/UX Implementation",
      description:
        "Digiflex integrates intuitive and responsive UI/UX designs into Rails applications, enhancing user satisfaction and engagement.",
      icon: CreditCard,
    },
    {
      title: "Performance Optimization",
      description:
        "Digiflex boosts your Rails app’s speed and scalability with caching, query optimization, and efficient code practices.",
      icon: Wallet,
    },
    {
      title: "Consulting & Training",
      description:
        "Digiflex offers expert Ruby on Rails consulting and team training to empower your developers with best practices and skills.",
      icon: MessageSquare,
    },
  ];

  return (
    <>
      <WrapperContainer>
        <div className="bg-white py-10 flex justify-center">
          <Heading>
            Our Ruby on Rails Development Services
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
            />
          ))}
        </div>
      </WrapperContainer>
    </>
  );
}

export default RubyOnRailsModules;