import React from "react";
import Google_intro from "../../../../assets/google_intro.jpg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function Google_info() {
  return (
    <WrapperContainer>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
        <Heading><div>
        <p className="uppercase text-left leading-tight mt-6 md:mt-10 text-2xl md:text-4xl font-bold">
            About Google Cloud
          </p>
        </div></Heading>
          
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Google Cloud is a comprehensive suite of cloud computing services
            that enables organizations to build, deploy, and scale applications
            using the same infrastructure that powers Google’s own products. It
            offers robust computing power, flexible storage options, advanced
            data analytics, and cutting-edge machine learning tools, all
            designed to deliver high performance and security on a global scale.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={Google_intro}
            alt="Google Cloud"
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="w-4/5 h-2 mt-10 flex p-0 gap-0">
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

   