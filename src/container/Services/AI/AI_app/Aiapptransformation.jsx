import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const benefits = [
  {
    title: "Automation & Efficiency",
    description:
      "AI eliminates repetitive tasks, optimizing workflows for higher productivity.",
  },
  {
    title: "Enhanced User Experience",
    description:
      "AI personalizes user interactions, providing smarter, context-aware responses.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "AI-powered analytics help businesses make faster and smarter decisions.",
  },
  {
    title: "Scalability & Adaptability",
    description:
      "AI applications grow with your business needs, ensuring long-term success.",
  },
  {
    title: "Security & Fraud Prevention",
    description:
      "AI detects anomalies, preventing cybersecurity threats and financial fraud.",
  },
];

function Aiapptransformation() {
  return (
    <>
      <div className="bg-[#E0E0E0] pb-20">
        <WrapperContainer>
        <Heading>
              <span>
                <h1>
                  AI App Development – The Future of Digital Transformation
                </h1>
              </span>
            </Heading>
          <div className="bg-white rounded-2xl">
           
            <div className="min-h-screen flex flex-col items-center p-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row w-full max-w-4xl bg-white border border-gray-300 rounded-lg p-6 mb-4 shadow-md "
                >
                  <h2 className="text-4xl font-semibold text-gray-800 w-1/3">
                    {benefit.title}
                  </h2>
                  <p className="text-gray-600 w-2/3">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </WrapperContainer>
      </div>
    </>
  );
}

export default Aiapptransformation;
