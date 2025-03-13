"use client";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

function Technology({ technologies, activeTech, setActiveTech }) {
  return (
    <WrapperContainer>
      <Heading>Our Cutting Edge Technology</Heading>

      {/* Description with Animation */}
      <Paragraph>
        At Digiflex.ai, we continuously evolve our tech stack to build
        innovative and future-ready solutions. Our commitment to adopting the
        latest advancements ensures seamless performance, scalability, and
        long-term success for your business.
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech Categories List with Hover Effects */}
        <div className="space-y-3">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.div
              key={key}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                activeTech === key ? "bg-blue-50 shadow-md" : "hover:bg-gray-50"
              }`}
              onMouseEnter={() => setActiveTech(key)}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-1 text-blue-800">
                {tech.title}
              </h3>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos Grid with Fade Transition */}
        <div className="relative overflow-hidden">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.div
              key={key}
              className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center p-4 justify-center ${
                activeTech === key ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTech === key ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
                {tech.logos.map((logo, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center aspect-square"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={logo.url}
                      alt={logo.name || "Technology logo"}
                      className="max-w-full max-h-full object-contain"
                      width={100}
                      height={100}
                      priority={false}
                      unoptimized={true}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Technology;
