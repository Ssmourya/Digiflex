import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const FeaturesList = ({ features }) => {
  return (
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-lg">
          <svg
            className="w-5 h-5 -mt-5 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <Paragraph className="text-start">{feature}</Paragraph>
        </li>
      ))}
    </ul>
  );
};

const featuresData = [
  "Web & App Automation testing on Real Devices",
  "Automated Visual UI testing Cloud",
  "Unlimited Automated Accessibility Tests",
];

const ScalableAutomation = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row items-center bg-white px-4 py-6 md:px-8 lg:px-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <Heading>
            <div>Scalable Automation Cloud Infrastructure</div>
          </Heading>
          <Paragraph className="text-start">
            <span>
              Effortlessly scale test configurations in the cloud and seamlessly
              test across diverse real devices, browsers, and OS versions.
            </span>
          </Paragraph>

          <FeaturesList features={featuresData} />
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            Get Started For Free
            <span className="ml-1">&rarr;</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-5 flex justify-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/cloud_infrastructure.jpeg"
            width={500}
            height={300}
            className="rounded-xl w-full max-w-[500px] md:max-w-full"
            alt="Cloud Infrastructure"
            priority={false}
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ScalableAutomation;
