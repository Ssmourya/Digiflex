import React from "react";
import { Handshake, Eye, Shield, Settings, DollarSign, Crosshair, BarChart, Activity } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const benefits = [
  { title: "Trust", icon: <Handshake className="w-8 h-8 text-white" /> },
  { title: "Transparency", icon: <Eye className="w-8 h-8 text-white" /> },
  { title: "Security", icon: <Shield className="w-8 h-8 text-white" /> },
  { title: "Automation", icon: <Settings className="w-8 h-8 text-white" /> },
];

const rightBenefits = [
  { title: "Savings", icon: <DollarSign className="w-8 h-8 text-white" /> },
  { title: "Accuracy", icon: <Crosshair className="w-8 h-8 text-white" /> },
  { title: "Efficiency", icon: <BarChart className="w-8 h-8 text-white" /> },
  { title: "Agility", icon: <Activity className="w-8 h-8 text-white" /> },
];

const SmartContractBenefits = () => {
  return (
    <WrapperContainer>

   
    <div className=" flex flex-col items-center justify-center ">
      <Heading>
      <div>
        The Benefits of Smart Contracts
      </div>
    
      </Heading>
     

      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-6xl">
        {/* Left Benefits */}
        <div className="flex flex-col space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="bg-orange-500 p-3 rounded-full shadow-lg flex items-center justify-center">
                {benefit.icon}
              </div>
              <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {benefit.title}
              </span>
            </div>
          ))}
        </div>

        {/* Center Document Image */}
        <div className="relative w-60 h-72 bg-white shadow-lg rounded-lg flex items-center justify-center mx-8 my-8 md:my-0">
          <div className="absolute w-20 h-20 bg-blue-500 rounded-full top-6 left-2 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">101</span>
          </div>
          <div className="absolute w-12 h-12 bg-orange-500 rounded-full bottom-6 right-2 flex items-center justify-center shadow-md">
            <DollarSign className="text-white w-6 h-6" />
          </div>
          <div className="text-center px-4">
            <h2 className="text-lg font-bold text-gray-700">Smart Contract</h2>
            <p className="text-sm text-gray-500">
              A secure & transparent way to manage transactions.
            </p>
          </div>
        </div>

        {/* Right Benefits */}
        <div className="flex flex-col space-y-6">
          {rightBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <span className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {benefit.title}
              </span>
              <div className="bg-orange-500 p-3 rounded-full shadow-lg flex items-center justify-center">
                {benefit.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </WrapperContainer>
  );
};

export default SmartContractBenefits;
