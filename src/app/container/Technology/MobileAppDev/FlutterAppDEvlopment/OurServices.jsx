"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";  // Import Subheading
import {
  Smartphone,
  Palette,
  RefreshCcw,
  Bug,
  Server,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform App Development",
    description: "iOS, Android, Web, and Desktop",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design with Flutter",
    description: "Stunning, brand-focused interfaces",
  },
  {
    icon: RefreshCcw,
    title: "Flutter App Migration & Modernization",
    description: "Convert your old apps to Flutter",
  },
  {
    icon: Bug,
    title: "Flutter App Testing & Debugging",
    description: "Quality assurance for flawless apps",
  },
  {
    icon: Server,
    title: "Backend & API Integration",
    description: "Firebase, GraphQL, RESTful APIs",
  },
  {
    icon: Wrench,
    title: "Post-Launch Support & Maintenance",
    description: "Regular updates & feature enhancements",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-20 px-6 text-[#172554]">
      {/* Main Title */}
      <Heading
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-2 text-[#172554]"
      >
        🛠 Our Flutter App Development Services at Digiflex.ai
      </Heading>
      
      {/* Subheading in Title */}
      <Subheading
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl text-center mb-8 text-[#172554]"
      >
        Transforming ideas into high-performance, beautiful apps.
      </Subheading>
      
      <motion.div
        className="mx-auto mb-12 w-24 h-1 bg-[#172554]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-gray-100 rounded-xl shadow-lg transition duration-300 flex flex-col items-center text-center hover:bg-[#172554] hover:text-white"
          >
            <service.icon
              size={50}
              className="mb-4 transition duration-300"
              style={{ color: "inherit" }}
            />
              <Subheading>
          
              {service.title}
            </Subheading>
            <Paragraph>
              {service.description}
            </Paragraph>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
