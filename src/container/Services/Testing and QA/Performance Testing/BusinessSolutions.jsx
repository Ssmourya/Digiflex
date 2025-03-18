import Image from "next/image";
import React from "react";

import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const BusinessSolutions = () => {
  const solutions = [
    {
      title: "DevOps Solutions",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/devops_Solutions.jpeg",
      link: "#",
    },
    {
      title: "Quality Assurance",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/quality_assurance.jpeg",
      link: "#",
    },
    {
      title: "Software Development",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/software_dev.jpeg",
      link: "#",
    },
  ];

  return (
    <WrapperContainer>
      <div>
        <Heading>Solutions for Businesses</Heading>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <Image
                src={solution.image}
                alt={solution.title}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                priority={false}
                height={100}
                width={100}
              />

              {/* Base Overlay */}
              <div className="absolute inset-0 bg-[#1a1a4e] bg-opacity-75 transition-all duration-300 group-hover:bg-opacity-90"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  {solution.title}
                </h3>
                <div className="transform transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={solution.link}
                    className="text-orange-500 hover:text-orange-400 flex items-center gap-2 transition-colors duration-300"
                  >
                    <span>Find Out More</span>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default BusinessSolutions;
