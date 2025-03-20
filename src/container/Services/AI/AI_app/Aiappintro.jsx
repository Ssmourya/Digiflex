import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

function Aiappintro() {
  return (
    <div>
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Heading level={1} className="text-left">
              Welcome to Quest Digiflex.ai – Pioneering AI App Development
            </Heading>
            <Paragraph className="text-xl text-left text-black leading-7">
              At Digiflex.ai, we transform businesses with cutting-edge
              AI-powered applications that enhance efficiency, automate
              processes, and unlock new opportunities. Our team of expert
              developers, data scientists, and AI engineers specialize in
              crafting intelligent applications that revolutionize industries.
            </Paragraph>
          </div>
          <div className="flex-1">
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Aiappintro.png"
              alt="AI App Intro"
              className="w-full h-auto rounded-lg shadow-lg"
              width={500}
              height={300}
              priority={false}
            />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}

export default Aiappintro;
