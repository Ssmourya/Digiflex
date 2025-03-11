import React from "react";
import { Users, ShieldCheck, Code, Eye } from "lucide-react"; // Importing icons from Lucide
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";

const Features = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center bg-white">
        <Heading>Why Angular</Heading>
        {/* Hero WrapperContainer */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text WrapperContainer */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Why Choose Angular Development Services
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Angular development services offer scalable, high-performance web
              applications with a component-based structure, two-way data
              binding, and robust security. Backed by Google, Angular ensures
              maintainability, efficiency, and a seamless user experience.
            </p>
          </div>

          {/* Image WrapperContainer */}
          <div
            className="md:w-1/2 w-full h-48 sm:h-64 bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/two-developers-working-with-big-data-technology-big-data-management-storage-database-analytics-design-data-software-engineering-concept-vector-isolated-illustration_335657-2135.jpg?w=996')",
            }}
          ></div>
        </div>

        {/* Features WrapperContainer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {/* Feature Cards */}
          <FeatureCard
            icon={<Users size={40} className="text-blue-600" />}
            title="Dedicated Developer Focus"
            description="Get expert Angular developers committed to your project for seamless execution and efficiency."
          />
          <FeatureCard
            icon={<ShieldCheck size={40} className="text-green-600" />}
            title="Advanced Security & Stability"
            description="Ensure robust protection and reliability with Angular’s built-in security features and strong architecture."
          />
          <FeatureCard
            icon={<Code size={40} className="text-purple-600" />}
            title="Angular Specialist"
            description="Work with experienced professionals skilled in building high-performance, scalable Angular applications."
          />
          <FeatureCard
            icon={<Eye size={40} className="text-orange-600" />}
            title="Transparent Approach"
            description="Enjoy clear communication, regular updates, and a collaborative development process."
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Features;
