import React from "react";
import AWS_logo from "../../../../assets/AWS_logo.avif";
import Aws_intro_img from "../../../../assets/Aws_intro.avif";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

function Aws_busines() {
  const benefits = [
    "Scalability & Flexibility",
    "Cost-Effectiveness",
    "Security & Compliance",
    "Global Infrastructure",
    "Wide Range of Services"
  ];

  return (
    <WrapperContainer>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <Heading>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold">

            Why businesses use AWS

          </div>
        </Heading>
        
        <img 
          src={AWS_logo} 
          alt="AWS Cloud" 
          className="w-[60px] md:w-[80px] lg:w-[100px] my-6"
        />

        <Paragraph>
        <span>
            Amazon Web Services (AWS) is the world's leading cloud computing
            platform, providing businesses with scalable, secure, and
            cost-effective solutions. Here's why companies of all sizes choose
            AWS:
          </span>
        </Paragraph>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 
                      mt-8 md:mt-12 px-4 md:px-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={Aws_intro_img} 
            alt="AWS Infrastructure" 
            className="w-full max-w-[500px] rounded-lg shadow-md"
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
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Aws_busines;