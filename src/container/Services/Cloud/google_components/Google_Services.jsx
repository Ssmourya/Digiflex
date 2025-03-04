import React from "react";
import { Eye, FileText, Shield, BarChart, Globe, Monitor } from "lucide-react";

import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";


const steps = [
  { id: 1, name: "INGESTION", color: "bg-[#FBBC05]" },
  { id: 2, name: "STORAGE", color: "bg-[#EA4335]" },
  { id: 3, name: "PROCESS & ANALYZE", color: "bg-[#4285F4]" },
  { id: 4, name: "EXPLORE & VISUALIZE", color: "bg-[#34A853]" },
];

const features = [
  {
    icon: <Eye size={32} />,
    title: "Preview your site",
    description: "Preview with your team before going live",
  },
  {
    icon: <FileText size={32} />,
    title: "Optimized Content",
    description: "Serve compressed content with Brotli encoding",
  },
  {
    icon: <Globe size={32} />,
    title: "Domain Management",
    description: "Use custom domain or Firebase subdomain",
  },
  {
    icon: <Shield size={32} />,
    title: "Security",
    description: "No-cost SSL certificate out of the box",
  },
  {
    icon: <Monitor size={32} />,
    title: "Monitoring",
    description: "Real-time performance monitoring",
  },
  {
    icon: <BarChart size={32} />,
    title: "Analytics",
    description: "Detailed usage and performance analytics",
  },
];

function Google_Services() {
  return (
    <>
    <WrapperContainer>
      {/* Key Services */}
      <div>
        <Heading>
            Key Services of Google Cloud
        </Heading>
      <Subheading>
      <div>
        <p className="text-center">
        Digiflex leverages Google Cloud's AI and data services to build scalable, secure, and high-performance solutions, driving business innovation. 
        </p>
      </div>
        </Subheading>
        {/* Steps Section */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-2">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Step Circle */}
                <div className="flex flex-col items-center w-full sm:w-auto relative">
                  <div
                    className={`${step.color} w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-white font-medium p-4 text-sm sm:text-base md:text-lg`}
                  >
                    <span className="text-center">{step.name}</span>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex flex-1 h-1 bg-gray-400"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      </WrapperContainer>

      <WrapperContainer>
      {/* Features Section */}
      <div>
        <Heading>
        <div>
          <h1>
            Features of Google Cloud
          </h1>
          </div>
        </Heading>
          <Subheading>
          <div>
          <p className="text-center ">
          Google Cloud boasts features like scalable computing, robust storage,
          and advanced analytics, all backed by a secure, global
          infrastructure.
        </p>
          </div></Subheading>
       

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 pt-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <Subheading>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                </Subheading>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
    </>
  );
}

export default Google_Services;
