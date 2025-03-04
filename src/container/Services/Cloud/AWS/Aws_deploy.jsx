import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function Aws_deploy() {
  const steps = [
    { title: "Select Deployment Strategy" },
    { title: "Deploy Frontend with Digiflex" },
    { title: "Deploy Backend with Digiflex" },
    { title: "Integrate Frontend & Backend Seamlessly" },
  ];

  return (
    <WrapperContainer>
      <Heading>
        <div>
            Deploy Your Project on AWS with Digiflex
        </div>
      </Heading>

      <div className="mt-8 md:mt-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <div className="relative group">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center 
                              bg-[#1F2937] text-white font-bold text-center rounded-full 
                              text-sm md:text-lg p-3 md:p-4 transition-all duration-300 
                              hover:bg-[#374151] hover:scale-105 relative z-10">
                  {step.title}
                </div>
              </div>
              
              {index !== steps.length - 1 && (
                <>
                  {/* Mobile Line (Vertical) */}
                  <div className="h-16 w-1 bg-gray-400 md:hidden"></div>
                  
                  {/* Desktop Line (Horizontal) */}
                  <div className="hidden md:block w-16 h-1 bg-gray-400 mx-0"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Aws_deploy;
