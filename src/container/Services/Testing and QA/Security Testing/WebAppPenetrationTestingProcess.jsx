"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";

const PentestProgress = () => {
  const [currentSlide, setCurrentSlide] = useState(4); // Starting at "Reporting"
  const progressRef = useRef(null);

  const steps = [
    {
      name: "Define Scope",
      description:
        "We work with you to clearly define the boundaries and objectives of the security assessment. This step ensures that both parties agree on the systems, applications, and networks that will be tested. It also includes determining the rules of engagement, legal considerations, and testing methodologies to be used. A well-defined scope helps avoid misunderstandings and ensures a smooth testing process.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Define_Scope.jpeg",
      status: "completed",
    },
    {
      name: "Information Gathering",
      description:
        "In this phase, we collect and analyze all available information about the target systems and infrastructure. This includes identifying domains, subdomains, IP addresses, technology stacks, employee email addresses, and any exposed data that could be leveraged in an attack. This step helps us understand the potential attack surface and develop effective testing strategies.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Information_Gathering.jpeg",
      status: "completed",
    },
    {
      name: "Enumeration",
      description:
        "Enumeration involves systematically mapping the network and identifying potential vulnerabilities and entry points. We gather details about open ports, running services, databases, and configurations. This step also includes identifying potential user accounts, API endpoints, and version-specific vulnerabilities in the applications. The goal is to uncover as much technical insight as possible about the target environment.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Enumeration.jpeg",
      status: "completed",
    },
    {
      name: "Attack and Penetration",
      description:
        "During this critical phase, controlled attacks are carefully executed to validate security weaknesses and potential impacts. We attempt to exploit vulnerabilities found in previous phases, using both automated tools and manual techniques. This process includes privilege escalation, lateral movement, and testing the effectiveness of security controls like firewalls, intrusion detection systems (IDS), and web application security measures. We ensure that all attacks are conducted in a safe and ethical manner without disruptions.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Attack_and_Penetration.jpeg",
      status: "completed",
    },
    {
      name: "Reporting",
      description:
        "After the testing is completed, we compile a comprehensive report detailing our findings. This includes an in-depth analysis of identified vulnerabilities, their severity levels, potential impact, and step-by-step exploitation techniques. We also provide clear remediation steps to help your team patch and mitigate security risks effectively. Our actionable insights empower your organization to strengthen defenses and prevent real-world cyber threats.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/reporting.jpeg",
      status: "current",
    },
    {
      name: "Remediation Testing",
      description:
        "Once the recommended security fixes are implemented, we perform remediation testing to verify that the vulnerabilities have been effectively addressed. This step ensures that patches are properly applied, configurations are secured, and no new security gaps have been introduced. A final validation report is provided, confirming the security posture improvements and offering further recommendations if necessary.",
      image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Remediation_Testing.jpeg",
      status: "upcoming",
    },
  ];

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentSlide]);

  // Ensure first button is visible on mount
  useEffect(() => {
    if (progressRef.current && currentSlide === 0) {
      progressRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((current) => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setCurrentSlide((current) => Math.min(steps.length - 1, current + 1));
  };

  return (
    <WrapperContainer className="flex items-center justify-center custom-scrollbar w-full">
      <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Progress Steps - Scrollable on Small Screens */}
        <div className="bg-blue-700 py-4">
          <div className="flex items-center justify-start space-x-2 md:space-x-4 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
            {steps.map((step, index) => (
              <button
                key={step.name}
                ref={index === currentSlide ? progressRef : null}
                onClick={() => setCurrentSlide(index)}
                className={`relative px-10 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex-shrink-0 snap-center
                  ${
                    index === currentSlide
                      ? "bg-white text-indigo-700 shadow-lg"
                      : "text-white/80 hover:bg-white/10"
                  }
                  ${index < currentSlide ? "opacity-100" : "opacity-60"}
                `}
              >
                {step.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
          {/* Image Section */}
          <div className="flex items-center justify-center order-2 md:order-1">
            <div className="w-full max-w-xs md:max-w-sm h-60 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={steps[currentSlide].image}
                alt={steps[currentSlide].name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 order-1 md:order-2">
            <Subheading className="text-2xl md:text-3xl font-bold">
              {steps[currentSlide].name}
            </Subheading>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {steps[currentSlide].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between p-4 bg-gray-100">
          <button
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-2 text-xs md:text-base
              ${
                currentSlide === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }
            `}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === steps.length - 1}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center space-x-2 text-xs md:text-base
              ${
                currentSlide === steps.length - 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }
            `}
          >
            <span>Next</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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
          </button>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </WrapperContainer>
  );
};

export default PentestProgress;
