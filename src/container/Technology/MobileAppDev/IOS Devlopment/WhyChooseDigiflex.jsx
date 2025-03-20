"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
const features = [
  {
    id: "experienced",
    title: "Experienced iOS Developers",
    description:
      "Our team of skilled developers brings years of experience to build high-quality iOS apps.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IOS5.jpg",
  },
  {
    id: "uiux",
    title: "User-Centric UI/UX Designs",
    description:
      "We craft intuitive and engaging user interfaces that enhance user experience.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IOS4.jpg",
  },
  {
    id: "performance",
    title: "Performance-Optimized Apps",
    description:
      "Our apps are built for speed and efficiency, ensuring smooth performance.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IOS3.jpg",
  },
  {
    id: "security",
    title: "Secure & Scalable Architecture",
    description:
      "We ensure data security and scalability for apps that grow with your business.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IOS2.jpg",
  },
  {
    id: "agile",
    title: "Agile Development Approach",
    description:
      "We follow an agile methodology for fast, iterative development and quick market launch.",
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/IOS.jpg",
  },
];

const FeatureStep = ({ title, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 transition-colors ${
        isActive
          ? "bg-blue-50 border-2 border-blue-200"
          : "bg-gray-50 hover:bg-gray-100"
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
    >
      <h3 className="text-lg  font-semibold text-black mb-2">{title}</h3>
    </motion.div>
  );
};

const FeatureContent = ({ feature }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg p-6 shadow-sm"
    >
      <div>
        {/* Apply the gradient to the feature title if desired */}
        <Subheading
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {feature.title}
        </Subheading>
        <Paragraph
          className="text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {feature.description}
        </Paragraph>
      </div>
      <motion.div
        className="relative h-80 rounded-lg overflow-hidden shadow-md bg-gray-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
      >
        <Image
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-contain p-4"
          priority={false}
          width={500}
          height={300}
        />
      </motion.div>
    </motion.div>
  );
};

export default function WhyChooseDigiflex() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Heading & Subheading */}
        <div className="text-center mb-8">
          {/* Main Heading with Gradient */}

          <Heading
            className="text-5xl pb-6 font-bold "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Digiflex.ai For businesses ?
          </Heading>

          {/* Subheading with Black Text */}
          <motion.p
            className="mt-4 text-xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your trusted partner for innovative iOS solutions.
          </motion.p>
        </div>

        {/* Feature Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {features.map((feature) => (
            <FeatureStep
              key={feature.id}
              title={feature.title}
              isActive={activeFeature === feature.id}
              onClick={() => setActiveFeature(feature.id)}
            />
          ))}
        </div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <FeatureContent
            key={activeFeature}
            feature={features.find((f) => f.id === activeFeature)}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
