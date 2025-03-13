"use client";

import React, { useState } from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from '@/Layout/WrapperContainer';
import Subheading from '@/Layout/Subheading'
import Paragraph from "@/Layout/Paragraph";

const WhyChoose = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: "Scalability", description: "Our solutions grow with your business. We ensure seamless scalability, allowing you to expand effortlessly without technical limitations." },
    { id: 2, title: "Security-First Approach", description: "We follow industry-best security practices, implementing robust encryption and data protection mechanisms to safeguard your business." },
    { id: 3, title: "High Performance", description: "Optimized architecture for speed and reliability, ensuring smooth user experiences with minimal downtime and enhanced efficiency." },
    { id: 4, title: "Custom Solutions", description: "Tailored application design for unique business needs. We create flexible, scalable, and user-friendly solutions that fit your requirements perfectly." },
    { id: 5, title: "Industry Experience", description: "Years of expertise in modern application architectures, delivering innovative solutions that keep your business ahead of the competition." },
  ];

  return (

    <WrapperContainer>

   
    <div className="bg-white flex flex-col justify-center items-center">
      <Heading>
                Why Choose Digiflex?
      </Heading>
    
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Headings */}
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`flex items-center gap-4 p-4 cursor-pointer rounded-lg transition-all ${activeSection === section.id ? " text-white" : "bg-gray-100 text-gray-900"}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="text-3xl font-semibold">✔</span>
              <Subheading>
              {section.title}
              </Subheading>
            </div>
          ))}
        </div>

        {/* Right Section - Description */}
        <div className="p-6  rounded-lg shadow-md flex items-center justify-center">
          <Paragraph>
          {sections.find(section => section.id === activeSection)?.description}
          </Paragraph>
        </div>
      </div>
    </div>
    
    </WrapperContainer>
  );
};

export default WhyChoose;
