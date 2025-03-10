"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaDatabase,
  FaServer,
  FaTools,
  FaBug,
} from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from '../../../../Layout/Paragraph'

const techStack = [
  {
    category: "Programming Languages",
    items: ["Kotlin", "Java", "Dart (Flutter)"],
    icon: <FaCode />,
  },
  {
    category: "UI Frameworks",
    items: ["Jetpack Compose", "XML Layouts"],
    icon: <FaPaintBrush />,
  },
  {
    category: "Backend Services",
    items: ["Firebase", "AWS", "Google Cloud"],
    icon: <FaServer />,
  },
  {
    category: "Databases",
    items: ["SQLite", "Room", "Firestore"],
    icon: <FaDatabase />,
  },
  {
    category: "DevOps & Deployment",
    items: ["Google Play Console", "Fastlane", "Jenkins"],
    icon: <FaTools />,
  },
  {
    category: "Testing & Debugging",
    items: ["JUnit", "Espresso", "Firebase Test Lab"],
    icon: <FaBug />,
  },
];

export default function TechStack() {
  return (
    <div className="p-10 bg-white text-[#1A2E6F]">
      <Heading
        className="text-5xl font-bold text-center mb-10 text-[#1A2E6F]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Tech Stack
      </Heading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md mb-4">
                {React.cloneElement(tech.icon, {
                  className: "w-8 h-8 text-[#1A2E6F]",
                })}
              </div>
              <Subheading>
             
                {tech.category}
           
              </Subheading>
              <ul className="text-gray-900 text-lg">
                {tech.items.map((item, i) => (
                  <li key={i} className="mb-1">
                    <Paragraph>{item}</Paragraph>
                  
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
