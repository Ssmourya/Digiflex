import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";

const features = [
  {
    title: "AI-Powered Automation",
    description: "Enhance efficiency with intelligent process automation.",
  },
  {
    title: "24/7 Availability",
    description: "Ensure seamless operations with round-the-clock support.",
  },
  {
    title: "Scalability & Customization",
    description: "Tailored solutions that scale with your business growth.",
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage analytics for smarter decision-making.",
  },
  {
    title: "Seamless Integration",
    description: "Effortlessly connect with existing enterprise systems.",
  },
];

function FeatureCircles() {
  return (
    <>
    <WrapperContainer>
      <div >
      <Heading>
        <h1>
          Why Choose Digiflex.ai for Enterprise AI Solutions?
        </h1>
        </Heading>
        <Subheading>
        <p className="text-center">
        Digiflex.ai empowers businesses with advanced AI-driven solutions, ensuring automation, efficiency, and scalability for future-ready operations.
        </p>
        </Subheading>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-blue-500 text-white rounded-full text-center font-semibold transition-transform duration-300 group-hover:translate-y-4">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    </>
  );
}

export default FeatureCircles;