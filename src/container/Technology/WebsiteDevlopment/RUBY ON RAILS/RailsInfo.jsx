import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

function RailsInfo() {
  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full">
          <Heading>
            <div>
              <p className="uppercase text-left mt-6 md:mt-10">
                About Ruby on Rails
              </p>
            </div>
          </Heading>
          <Paragraph className="text-left mt-4">
            Digiflex.ai harnesses the power of Ruby on Rails to deliver rapid,
            reliable, and scalable web development services. With Ruby on Rails'
            convention-over-configuration approach, robust ecosystem, and focus
            on developer productivity, Digiflex.ai builds high-quality web
            applications, e-commerce platforms, and SaaS solutions tailored to
            business needs. This framework enables fast prototyping and
            deployment, empowering organizations to accelerate innovation and
            achieve digital success.
          </Paragraph>
        </div>
      </div>
      <div className="w-full h-2 mt-10 flex p-0 gap-0">
        <div className="w-4/6 bg-blue-500"></div>
        <div className="w-2/6 bg-red-500"></div>
        <div className="w-2/6 bg-yellow-500"></div>
        <div className="w-1/6 bg-blue-500"></div>
        <div className="w-1/6 bg-green-500"></div>
        <div className="w-1/6 bg-red-500"></div>
      </div>
    </WrapperContainer>
  );
}

export default RailsInfo;