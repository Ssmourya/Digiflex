import React from 'react';

import devops_Solutions from "../../../../assets/devops_Solutions.jpeg"
import quality_assurance from "../../../../assets/quality_assurance.jpeg"
import software_dev from "../../../../assets/software_dev.jpeg"
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
const BusinessSolutions = () => {
    const solutions = [
        {
            title: "DevOps Solutions",
            image: devops_Solutions,
            link: "#"
        },
        {
            title: "Quality Assurance",
            image: quality_assurance,
            link: "#"
        },
        {
            title: "Software Development",
            image: software_dev,
            link: "#"
        }
    ];

    return (

        <WrapperContainer>
            <div>
                {/* Title Section */}
                <div className="text-center mb-16">
                    <Heading>Solutions for Businesses</Heading>
                    <div className="w-48 h-1 bg-orange-500 mx-auto"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index} className="    relative group overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
                            {/* Background Image */}
                            <img 
                                src={solution.image} 
                                alt={solution.title}
                                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Base Overlay */}
                            <div className="absolute inset-0 bg-[#1a1a4e] bg-opacity-75 transition-all duration-300 group-hover:bg-opacity-90"></div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-center transform transition-transform duration-300 group-hover:-translate-y-2">
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