"use client";
import Image from "next/image";
import React, { useState } from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Fontheading from "@/Layout/Fontheading";

function Google_Hosting() {
  const [hoveredIndexes, setHoveredIndexes] = useState([]);

  const services = [
    {
      name: "Compute Engine",
      description:
        "Virtual machines on Google Cloud, providing scalable compute capacity.",
    },
    {
      name: "App Engine",
      description:
        "A platform for developing and hosting web applications with automatic scaling.",
    },
    {
      name: "Kubernetes Engine",
      description:
        "A managed Kubernetes service for deploying containerized applications.",
    },
    {
      name: "Cloud Functions",
      description:
        "A serverless execution environment for building event-driven applications.",
    },
    {
      name: "Cloud Run",
      description:
        "A fully managed platform for running containerized applications in a serverless environment.",
    },
  ];

  // Function to handle hover state for multiple items
  const handleMouseEnter = (index) => {
    setHoveredIndexes((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndexes((prev) => prev.filter((i) => i !== index));
  };

  return (
    <WrapperContainer>
      <Heading>
        Types of Google Cloud Hosting
      </Heading>
      <div className="pt-5 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
        {/* Services List */}
        <div className="w-full lg:w-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col transition-all duration-300 mb-4"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Service Name */}
                <Fontheading>{service.name}</Fontheading>

              {/* Description Appears Below on Hover with Smooth Expand Animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hoveredIndexes.includes(index)
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="w-full bg-white p-3 shadow-md rounded-lg border border-gray-300">
                  <p className="font-semibold text-[#0B57D0] text-md sm:text-lg">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/google_hosting.jpg"
            width={500}
            height={300}
            alt="Google Cloud Hosting"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg "
            priority={false}
          />
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Google_Hosting;
