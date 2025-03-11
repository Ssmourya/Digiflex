"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import {
  FaGamepad,
  FaVrCardboard,
  FaUsers,
  FaCloud,
  FaRocket,
  FaCogs,
  FaGlobe,
  FaBrain,
  FaHandsHelping,
  FaMobileAlt,
  FaHdd,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  { icon: <FaVrCardboard />, title: "Immersive VR Environments", desc: "Create deeply engaging virtual reality experiences" },
  { icon: <FaGlobe />, title: "AR/XR Integration", desc: "Seamless integration of augmented and mixed reality" },
  { icon: <FaUsers />, title: "Real-time Multiplayer Support", desc: "Connect players in shared virtual spaces" },
  { icon: <FaBrain />, title: "AI-driven NPCs & Behavior", desc: "Intelligent and responsive game characters" },
  { icon: <FaHandsHelping />, title: "Haptic Feedback Support", desc: "Enhanced immersion through tactile feedback" },
  { icon: <FaCogs />, title: "Physics-Based Interactions", desc: "Realistic object interactions and dynamics" },
  { icon: <FaRocket />, title: "High-Performance Graphics", desc: "Stunning visuals and smooth performance" },
  { icon: <FaCloud />, title: "Cloud Syncing & Cross-Platform", desc: "Seamless experience across devices" },
  { icon: <FaHdd />, title: "Optimized Storage Solutions", desc: "Efficient data management and storage" },
  { icon: <FaMobileAlt />, title: "Mobile & VR Compatibility", desc: "Support for multiple VR platforms" },
  { icon: <FaShieldAlt />, title: "Secure Asset Management", desc: "Protected digital assets and transactions" },
  { icon: <FaGamepad />, title: "User Customization", desc: "Personalized avatars and experiences" }
];

const VrXrServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    
    <section className="relative w-full bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="relative min-h-[60vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 py-16 md:py-24">
        <motion.div
          className="absolute top-0 left-0 w-full bg-blue-950 rounded-b-[40%] z-0"
          initial={{ height: "0%" }}
          animate={{ height: "70%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Transform Reality with{" "}
              <span className="text-blue-300">VR/XR Development</span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Paragraph className="text-white">
              Create immersive virtual experiences with cutting-edge VR/XR technology and innovative game development solutions.
            </Paragraph>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-8 lg:px-16 mt-0 pt-0 pb-16 md:pb-20 bg-gray-200">
        <WrapperContainer>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Subheading className="text-xl sm:text-2xl md:text-3xl text-blue-800 mb-4">
              Comprehensive VR/XR Development Features
            </Subheading>
            <Paragraph className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
              Leverage our expertise in virtual and extended reality to create groundbreaking immersive experiences.
            </Paragraph>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-950 rounded-lg flex items-center justify-center mb-4 text-2xl">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <Subheading className="text-lg md:text-xl text-blue-950 font-bold mb-2">
                        {feature.title}
                      </Subheading>
                      <Paragraph className="text-sm md:text-base text-gray-600">
                        {feature.desc}
                      </Paragraph>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-950" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Paragraph className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
              Ready to bring your virtual reality vision to life?
            </Paragraph>
            <button className="px-8 py-3 bg-blue-950 text-white font-medium rounded-full shadow-md hover:bg-blue-900 transition duration-300">
              Start Your VR/XR Project
            </button>
          </motion.div>
        </WrapperContainer>
      </div>
    </section>
  );
};

export default VrXrServices;