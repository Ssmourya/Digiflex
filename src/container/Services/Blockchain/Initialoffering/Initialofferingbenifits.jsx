import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We start with thorough consulting and research to create an effective ICO strategy for your business.",
  },
  {
    id: 2,
    title: "Understanding Your Goals",
    description:
      "Here we plan our offerings after deeply understanding your goals and vision for your ICO project.",
  },
  {
    id: 3,
    title: "Development Phase",
    description:
      "This phase covers actual development, configuring smart contracts and ensuring readiness for launch.",
  },
  {
    id: 4,
    title: "Testing and QA",
    description:
      "Our dedicated QA team conducts extensive testing to ensure reliability and performance of the product.",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "We finalize the product, making it live and offering services, including server deployment and maintenance.",
  },
  {
    id: 6,
    title: "Support and Maintenance",
    description:
      "Our team provides comprehensive support and maintenance to ensure smooth operation and continuous improvements.",
  },
];

const IcoDevelopmentProcess = () => {
  return (
    <WrapperContainer>


    <div>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center">
        <Heading>
          <div>
          Initial Coin Offering Benifits
          </div>
        </Heading>
          <Paragraph>
            <div className="text-center">
          Unlock success in your business with our comprehensive ICO development process, positioning us as a true leader in the crypto industry.

            </div>
          </Paragraph>
        </div>

        {/* Alternating Timeline */}
        <div className="relative wrap overflow-hidden">
          {/* Vertical line in the center */}
          <div />
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0; // Even indices on the left, odd on the right

            return (
              <div
                key={step.id}
                className={`
                  mb-8 flex gap-5 flex-col md:flex-row items-center w-full 
                  ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Empty space on one side */}
                <div className="order-1 md:w-5/12 w-full"></div>

                {/* Purple circle with step number */}
                <div className="z-20 flex items-center order-1 bg-[#1D4ED8] shadow-xl w-10 h-10 rounded-full">
                  <span className="mx-auto font-bold text-white">
                    {step.id}
                  </span>
                </div>

                {/* Step content box */}
                <div className="order-1 bg-white rounded-lg shadow-xl md:w-5/12 w-full px-6 py-4 mt-4 md:mt-0">
                 <Subheading>
                  <div>
                  {step.title}
                  </div>
                 </Subheading>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
};

export default IcoDevelopmentProcess;
