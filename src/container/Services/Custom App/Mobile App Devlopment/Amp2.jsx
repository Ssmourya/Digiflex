"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Clock } from "lucide-react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const Amp2 = () => {
  const features = [
    {
     
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      text: "Secure and Scalable Mobile App Solutions",
    },
    {
      
      icon: <Users className="w-8 h-8 text-blue-600" />,
      text: "Experienced Team with Deep Industry Knowledge",
    },
    {
     
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      text: "Custom Mobile Applications Tailored to Your Business Needs",
    },
    {
     
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      text: "Timely Delivery and Ongoing Support",
    },
  ];

  return (
    <>
      
      <div className="min-h-[60vh] w-full bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/assets/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection-b.png"
                alt="Mobile App Security"
                className="w-full max-w-xl object-contain"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 max-w-xl text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Heading>Mobile App Security</Heading>
              <p className="text-lg text-gray-700 mb-4">
                At <span className="font-bold text-[#172554]">Digiflex.ai</span>, we prioritize mobile app security by implementing advanced encryption protocols, secure authentication mechanisms, and strict compliance with industry standards.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <div className="mt-1">{feature.icon}</div>
                    <Paragraph>{feature.text}</Paragraph>
                   
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

     
     
    </>
  );
};

export default Amp2;