import React from "react";
import Google_intro from "../../../../assets/google_intro.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";


function Google_info() {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
        <Heading><div>
        <p className="uppercase text-left mt-6 md:mt-10">
            About Google Cloud
          </p>
        </div></Heading>
          <Paragraph>
          <p className="text-left mt-4 ">
          Digiflex.ai leverages the power of Google Cloud to deliver cutting-edge AI app development services. With Google Cloud’s robust computing power, flexible storage options, advanced data analytics, and machine learning tools, Digiflex.ai ensures high-performance, scalable, and secure solutions for businesses worldwide. By utilizing the same infrastructure that powers Google’s own products, Digiflex.ai helps organizations build, deploy, and scale applications efficiently, driving innovation and digital transformation.
          </p>
          </Paragraph>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Google_intro}
            alt="Google Cloud"
            className="w-full h-auto max-w-full"
          />
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

export default Google_info;

   