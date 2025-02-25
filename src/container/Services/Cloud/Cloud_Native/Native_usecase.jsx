import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

function CloudNativeUseCases() {
  const useCases = [
    "Digiflex Cloud-Native Solutions for Banking & Finance",
    "Digiflex Cloud-Native Innovations in Healthcare & Telemedicine",
    "Enhancing E-Commerce & Retail with Digiflex Cloud-Native Solutions",
    "Smart IoT & Device Integration with Digiflex Cloud-Native Services",
    "AI & Big Data Optimization Using Digiflex Cloud-Native Technologies"
  ];

  return (
    <WrapperContainer>
      <Heading>Digiflex Cloud-Native Use Cases</Heading>
      <div className="relative flex flex-col items-center text-center justify-center gap-6 rounded-xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[400px] w-1 bg-gray-300"></div>
        
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="relative w-full max-w-md px-6 py-3 bg-blue-100 text-lg font-medium text-gray-700 rounded-lg shadow transition-transform transform hover:-translate-y-1"
          >
            {useCase}
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default CloudNativeUseCases;
