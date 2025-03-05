import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Fontheading from "../../../../Layout/Fontheading";

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
    <div className="bg-[#E0E0E0] pb-20">
      <WrapperContainer>
        <Heading>
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            AI App Development – The Future of Digital Transformation
          </h1>
        </Heading>
        <div className="bg-white rounded-2xl p-4 md:p-8">
          <div className="flex flex-col items-center p-4 md:p-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center w-full max-w-4xl bg-white border border-gray-300 rounded-lg p-4 md:p-6 mb-4 shadow-md min-h-[8rem]"
              >
                <Fontheading>
                  <h1 className="w-full md:w-auto text-lg font-semibold">
                    {benefit.title}
                  </h1>
                </Fontheading>
                <p className="text-gray-600 mt-2 md:mt-0 md:ml-4">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default Aiapptransformation;