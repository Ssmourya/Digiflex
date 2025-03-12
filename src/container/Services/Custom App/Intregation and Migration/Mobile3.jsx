"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

// Import some icons from lucide-react
import {
  RefreshCcw,
  Settings,
  Database,
  UploadCloud,
  Zap,
  Cloud,
} from "lucide-react";

const Mobile3 = () => {
  const arr3 =
    "https://i.pinimg.com/736x/f8/91/11/f891114391b563ea7ceb7ab3dd712259.jpg";
  const arr4 =
    "https://i.pinimg.com/736x/45/26/9d/45269d6a36b14be5e2d650069c96abce.jpg";
  const arr2 =
    "https://i.pinimg.com/736x/20/35/f2/2035f251301bf9848e93f802413435b6.jpg";
  const arr =
    "https://i.pinimg.com/736x/11/90/34/1190346b604a8e9b6e6179e7df234ef6.jpg";

  // Updated services array with icons for each card.
  const services = [
    {
      imgSrc: "/assets/bg14.jpg",
      text: "Application Porting & Migration Assessment",
      icon: <RefreshCcw className="w-8 h-8 text-white" />,
    },
    {
      imgSrc:"/assets/bg6.png",
      text: "Application Re-engineering",
      icon: <Settings className="w-8 h-8 text-white" />,
    },
    {
      imgSrc: arr,
      text: "Data Migration",
      icon: <Database className="w-8 h-8 text-white" />,
    },
    {
      imgSrc: arr2,
      text: "Upgrade Application",
      icon: <UploadCloud className="w-8 h-8 text-white" />,
    },
    {
      imgSrc: arr3,
      text: "Technology Migration",
      icon: <Zap className="w-8 h-8 text-white" />,
    },
    {
      imgSrc: arr4,
      text: "Cloud Migration & Transition",
      icon: <Cloud className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <div className="bg-white text-black p-8">
      {/* Section Title */}
      <Heading
      
        className="text-center text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How do we achieve success in Integration Migration Services?
      
      </Heading>
      <Paragraph
      
        className="text-center mb-8 max-w-3xl mx-auto text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        At Digiflex.ai, we ensure success in integration and migration services by
        leveraging advanced tools and technologies to deliver reliable, efficient,
        and scalable solutions. Our approach includes expertise in data migration tools,
        seamless API integration, client-centric strategies, and a proven track record in
        successful projects.
      
      </Paragraph>
      {/* Optional Graphic */}
      <div className="flex justify-center mb-8">
        <motion.img
          src='/assets/bg6.png'
          alt="Mobile Graphic"
          className="w-[290px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            {/* Background Image */}
            <img
              src={service.imgSrc}
              alt={service.text}
              className="w-full h-56 object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mb-2 flex justify-center"
              >
                <div className="bg-blue-500 p-2 rounded-full inline-block">
                  {service.icon}
                </div>
              </motion.div>
              <h2 className="text-lg font-bold text-white text-center">
                {service.text}
              </h2>
              <Paragraph >
                Digiflex.ai specializes in evaluating application ecosystems for
                seamless porting and migration.
              </Paragraph>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mobile3;
