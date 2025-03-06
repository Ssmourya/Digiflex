import React from "react";
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer"
import { DesignTestingFAQData } from "../FAQData";
import Faq from "../../../../components/Faq";


function ComprehensiveSection() {
  return (
    <div className="flex pb-10">
      <WrapperContainer>
        <h1 className="text-5xl text-center font-bold">
          Comprehensive <span className="text-blue-800">Exploratory</span>{" "}
          Testing
        </h1>
        <div className=" text-black pb-20 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section (Text Content) */}

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Paragraph className=" mt-4 text-sm sm:text-base md:text-lg">
              Digiflex is now the leading Crypto Digital Marketing agency,
              offering world-class Public Relations campaigns for companies
              anticipating to thrive. Working with people from local to global,
              we have helped projects start from Zero and made them one of the
              best-leading projects in the Blockchain Industry. The team
              demonstrated exceptional professionalism and technical expertise
              throughout the project.
            </Paragraph>
            <Paragraph className=" mt-4 text-sm sm:text-base md:text-lg">
              With our comprehensive exploratory testing approach, we go beyond
              the standard testing process to ensure your product not only
              functions as expected but also provides an outstanding user
              experience. Our expert testers will simulate real-world usage
              scenarios to uncover any hidden issues, ensuring your product’s
              readiness for launch.
            </Paragraph>

            <div className="mt-6 flex justify-center lg:justify-start">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition">
                Try It Now →
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://www.lambdatest.com/resources/images/testmanager/Comprehensive-Exploratory-Testing.png"
              alt="Exploratory Testing"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <Faq faqs={DesignTestingFAQData} />
      </WrapperContainer>
    </div>
  );
}

export default ComprehensiveSection;
