import React from "react";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const advantages = [
  {
    title: "Scalability →",
    description: "Easily scale resources up or down based on demand",
  },
  {
    title: "Security →",
    description: "Built-in security features and compliance certifications",
  },
  {
    title: "Cost Efficiency →",
    description: "Pay-as-you-go pricing and sustained use discounts",
  },
  {
    title: "Global Infrastructure →",
    description: "Worldwide network of high-performance servers",
  },
  {
    title: "AI Integration →",
    description: "Built-in machine learning and AI capabilities",
  },
  {
    title: "Hybrid Solutions →",
    description: "Seamless integration with on-premises infrastructure",
  },
  {
    title: "Disaster Recovery →",
    description: "Automated backups and geo-redundant storage",
  },
  {
    title: "Developer Tools →",
    description: "Comprehensive suite of development and monitoring tools",
  },
];

function Google_Advantage() {

  return (

    <WrapperContainer>
      <Heading>
        <h1>Advantage of Google Cloud</h1>
      </Heading>
      <div className="mb-10 pt-5 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8 ">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="p-4 md:p-5 lg:p-6 bg-white rounded-lg border border-gray-200 hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 w-full mx-auto"
          >
            <div className="flex items-center justify-between mb-3">
              <Subheading>
                <h3 className="text-md md:text-lg font-medium">{item.title}</h3>
              </Subheading>
            </div>
            <Paragraph>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Google_Advantage;
