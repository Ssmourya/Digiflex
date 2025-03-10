"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Sliders,
  BarChart3,
  Rocket,
  Headphones,
  DollarSign,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const features = [
  {
    icon: <Users size={24} />,
    title: "Experienced Teams",
    description:
      "With a proven track record of serving over 300 clients, Digiflex.ai brings unparalleled expertise in Salesforce consulting. From strategy and implementation to seamless integration, our experienced team ensures customized solutions that drive business success.",
  },
  {
    icon: <Sliders size={24} />,
    title: "Personalized Approach",
    description:
      "At Digiflex.ai, we specialize in crafting Salesforce solutions designed to align seamlessly with your unique business operations. Our personalized approach ensures that every solution is optimized to drive efficiency and deliver measurable results.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Proven Track Record",
    description:
      "At Digiflex.ai, we take pride in our proven track record of delivering successful Salesforce solutions to businesses of all sizes and industries. Our experience ensures scalable, reliable, and impactful results tailored to your unique needs.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Pre-Built Accelerators",
    description:
      "At Digiflex.ai, our custom-built Salesforce accelerators are designed to streamline your implementation process, saving time while ensuring efficiency and precision.",
  },
  {
    icon: <Headphones size={24} />,
    title: "Comprehensive Support",
    description:
      "Digiflex.ai offers 24/7 support and maintenance services to ensure your Salesforce platform operates flawlessly, empowering your business without interruptions.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Competitive Pricing",
    description:
      "At Digiflex.ai, we offer flexible and competitive pricing models designed to fit your budget while aligning with your business objectives, ensuring value without compromise.",
  },
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-blue-600 mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

function Features() {
  return (
    <WrapperContainer>
      <Heading>Why Choose Us For Your Salesforce Consulting Needs</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </WrapperContainer>
  );
}

export default Features;
