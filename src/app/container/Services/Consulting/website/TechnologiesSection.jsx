"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, Database, Cloud } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const TechnologiesSection = () => {
  const technologiesData = [
    {
      icon: Globe,
      title: "Front-end Technologies",
      technologies: "React, Angular, Vue.js, HTML5, CSS3, JavaScript",
    },
    {
      icon: Database,
      title: "Back-end Technologies",
      technologies: "Node.js, Python, Java, .NET, PHP, Go",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      technologies: "AWS, Azure, Google Cloud Platform",
    },
  ];

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <Heading>Our Stack of Technologies</Heading>

        <div className="grid md:grid-cols-3 gap-8">
          {technologiesData.map((tech, index) => (
            <div
              key={tech.title}
              className="
                bg-white p-6 border border-gray-200 rounded-lg 
                transform transition-all duration-700 
                hover:scale-105 hover:shadow-xl 
                "
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <tech.icon
                className="w-12 h-12 text-blue-600 mb-4 
                transform transition-transform duration-300 
                group-hover:rotate-12 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold mb-4 transition-all duration-300 hover:text-blue-600">
                {tech.title}
              </h3>
              <p
                className="text-gray-600 
                transform transition-all duration-300 
                hover:translate-x-2 hover:text-blue-600
              "
              >
                {tech.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TechnologiesSection;
