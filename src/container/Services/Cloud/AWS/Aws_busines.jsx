import React from "react";
import AWS_logo from "@/@/public/assets/AWS_logo.avif";
import Aws_intro_img from "@/@/public/assets/Aws_intro.avif";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Fontheading from "@/Layout/Fontheading";
import Subheading from "@/Layout/Subheading";

function Aws_busines() {
  const benefits = [
    "Scalability & Flexibility",
    "Cost-Effectiveness",
    "Security & Compliance",
    "Global Infrastructure",
    "Wide Range of Services",
  ];

  return (
    <WrapperContainer>
      <div className="flex flex-col items-center text-center">
        <Heading>Why Businesses Choose Digiflex.ai for AWS Solutions</Heading>

        <img
          src={AWS_logo}
          alt="AWS Cloud"
          className="w-[60px] md:w-[80px] lg:w-[100px]"
        />

        <Subheading>
          Digiflex.ai utilizes AWS to deliver scalable, secure, and cost-effective cloud solutions, helping businesses optimize operations, enhance security, and drive innovation with advanced cloud infrastructure.
        </Subheading>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 
                      mt-8 md:mt-5 px-4 md:px-8"
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Aws_intro_img}
            alt="AWS Infrastructure"
            className="w-full max-w-[500px] "
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-[500px]">
          <ul className="space-y-3 w-full">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="p-4 bg-white hover:shadow-lg transition duration-700 
                          rounded-lg border border-gray-100"
              >
                <Fontheading>{benefit}</Fontheading>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Aws_busines;
