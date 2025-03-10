"use client";

import React, { useState, useEffect } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const topics = [
  { name: "Planning & Requirement Analysis", shortDesc: "Define project goals and scope.", icon: "📋" },
  { name: "Development & Version Control", shortDesc: "Use Git for code management.", icon: "💻" },
  { name: "CI/CD Pipeline", shortDesc: "Automate integration & deployment.", icon: "🔄" },
  { name: "Automated Testing & QA", shortDesc: "Ensure quality with tests.", icon: "🧪" },
  { name: "Monitoring & Logging", shortDesc: "Track performance and logs.", icon: "📊" },
  { name: "Security & Compliance (DevSecOps)", shortDesc: "Integrate security into DevOps.", icon: "🔒" },
  { name: "Feedback & Continuous Improvement", shortDesc: "Refine processes over time.", icon: "🔍" }
];

const DevOpsDiagram = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WrapperContainer>
        <Heading>
            <div>
                Phase Of The Devops Lifecycle
            </div>
        </Heading>
        <Paragraph>
            <span className="block text-center">
            The DevOps lifecycle streamlines development, integration, testing, deployment, monitoring, and continuous improvement.
            </span>
        </Paragraph>

  
    <div className="flex flex-col lg:flex-row justify-center items-center bg-white ">
      {!isMobile ? (
        // Circular Diagram for Desktop
        <div className="relative w-full max-w-[600px] aspect-square  lg:mr-12 flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-40 h-40 bg-blue-900 text-white text-center flex items-center justify-center rounded-full text-lg font-bold shadow-lg p-4">
              DevOps & Test Automation
            </div>
          </div>

          {topics.map((topic, index) => {
            const angle = (index / topics.length) * (2 * Math.PI);
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className={`absolute w-44 h-44 flex items-center justify-center text-center p-3 
                  bg-blue-100 text-blue-900 rounded-full shadow-md font-semibold cursor-pointer 
                  transition duration-300 ease-in-out transform hover:scale-105 
                  ${selectedTopic === topic ? 'ring-4 ring-blue-300' : 'hover:bg-blue-200'}`}
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  left: "50%",
                  top: "50%",
                }}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic.name}
              </div>
            );
          })}
        </div>
      ) : (
        // Responsive Card View for Mobile
        <div className="w-full max-w-md">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-blue-100 text-blue-900 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition duration-300"
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{topic.icon}</span>
                <h3 className="font-semibold">{topic.name}</h3>
              </div>
              {selectedTopic === topic && (
                <p className="mt-2 text-sm text-blue-700">{topic.shortDesc}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Topic Overview Card */}
      <div className="flex justify-center items-center w-full max-w-md lg:w-96">
        <div className="w-full p-6 bg-white border border-blue-100 rounded-lg shadow-xl">
          <h2 className="font-bold text-xl text-blue-900 mb-4">DevOps Topics</h2>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center text-blue-800">
                <span className="text-2xl mr-3">{topic.icon}</span> {topic.shortDesc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </WrapperContainer>
  );
};

export default DevOpsDiagram;
