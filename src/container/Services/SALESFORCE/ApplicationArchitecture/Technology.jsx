// import React from 'react'

// const Technology = () => {
//   return (
//     <div>Technology</div>
//   )
// }

// export default Technology
import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const technologies = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "from-blue-500 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
    techs: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "🔌",
    color: "from-green-500 to-green-700",
    lightColor: "bg-green-50",
    textColor: "text-green-700",
    techs: ["Node.js", "Express.js", "NestJS"],
  },
  {
    category: "Databases",
    icon: "💾",
    color: "from-yellow-500 to-yellow-700",
    lightColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    techs: ["MongoDB", "PostgreSQL", "Salesforce"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    color: "from-purple-500 to-purple-700",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

const Technology = () => {
  return (
    <WrapperContainer>
      <div className="bg-white flex flex-col justify-center items-center relative ">
        {/* Heading */}
        <Heading>
          <div>
            Technologies What We Use
          </div>
        </Heading>

        {/* Subheading */}
        <Paragraph>
          <span>
            Our powerful tech stack enables us to build scalable, high-performance solutions.
          </span>
        
        </Paragraph>

        {/* Technologies Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`relative flex items-center border-l-4 ${tech.textColor} p-6 rounded-lg shadow-md transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Icon */}
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${tech.color} text-white text-3xl shadow-md`}
              >
                {tech.icon}
              </div>

              {/* Text Content */}
              <div className="ml-6">
                <h3 className={`text-xl font-semibold ${tech.textColor} mb-2`}>
                  {tech.category}
                </h3>
                <ul className="text-gray-700 text-base space-y-1">
                  {tech.techs.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-lg">✅</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Technology;
