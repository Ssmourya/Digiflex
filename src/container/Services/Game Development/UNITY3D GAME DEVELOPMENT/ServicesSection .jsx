"use client";

import React, { useState } from "react";
import { Circle, X, Square, Hexagon, Star } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, isSelected, onClick, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`border rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transition-colors duration-300 ${
        isSelected ? "bg-blue-100" : "hover:bg-gray-200"
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-3">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <Subheading className="text-xl font-semibold text-center">{title}</Subheading>
      </div>
      {isSelected && (
        <div className="p-4 bg-white">
          <Paragraph className="text-gray-700 text-lg leading-relaxed">{description}</Paragraph>
        </div>
      )}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Circle,
      title: "Unity3D Game Development",
      description:
        "Digiflex specializes in Unity3D game development, offering high-quality 2D and 3D gaming solutions with immersive experiences. Our expertise ensures seamless performance across mobile, web, PC, and console platforms.",
    },
    {
      icon: X,
      title: "AR/VR/XR App Development",
      description:
        "We create cutting-edge AR, VR, and XR applications that redefine user experiences. From gaming to education and enterprise solutions, Digiflex delivers innovative immersive applications tailored to your needs.",
    },
    {
      icon: Square,
      title: "LiveOps & Game Maintenance",
      description:
        "Our LiveOps services keep your game fresh and engaging with regular updates, new content, and performance optimizations. We ensure long-term success with analytics-driven improvements and post-launch support.",
    },
    {
      icon: Hexagon,
      title: "Game Analytics & Insights",
      description:
        "Utilize advanced analytics to gain insights into player behavior and game performance, driving data-driven decisions for game improvements.",
    },
    {
      icon: Star,
      title: "Custom Game Engines",
      description:
        "Create custom game engines tailored to your specific needs, providing unique features and optimizations for your game projects.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="max-w-full space-y-6">
        <Heading>
          <h1 className="text-3xl font-bold text-center mb-6">
            Digiflex Unity3D Game Development Services
          </h1>
        </Heading>
        <div className="flex flex-col space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              isSelected={selectedService === index}
              onClick={() =>
                setSelectedService(selectedService === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ServicesSection;
