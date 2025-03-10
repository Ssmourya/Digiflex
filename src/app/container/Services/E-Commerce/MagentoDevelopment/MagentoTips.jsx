"use client";

import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading"; 
import Paragraph from "../../../../Layout/Paragraph";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import PerformanceImage from "../../../../../../public/assets/Magento_perfomance.jpg"; // Add your image path here
import Subheading from "../../../../Layout/Subheading";

const optimizations = [
  { title: "Enable Full-Page Caching", description: "Reduces server load and speeds up page rendering." },
  { title: "Use a Fast Hosting Provider", description: "Choose a reliable and high-performance hosting service." },
  { title: "Optimize Images", description: "Compress images to reduce loading time without compromising quality." },
  { title: "Minify CSS, JavaScript, and HTML", description: "Remove unnecessary spaces and comments to enhance performance." },
  { title: "Use a Content Delivery Network (CDN)", description: "Distribute content across multiple servers to speed up delivery." }
];

const MagentoBoost = () => {
  return (
    <WrapperContainer>
      {/* Full-Width Heading and Paragraph */}
      <div className="text-center max-w-6xl mx-auto px-6 sm:px-12 py-0">
        <Heading>Boost Your Magento Performance</Heading>
        <Paragraph className="max-w-4xl mx-auto mt-4">
          Enhance your Magento store’s speed and efficiency using these essential optimization techniques.
        </Paragraph>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-6 sm:px-12 py-0 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2">
          {/* Optimization Features - Now in a List Format */}
          <div className="space-y-6">
            {optimizations.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 border-l-4 border-blue-500 pl-4 py-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <FaRegCheckCircle className="text-blue-500 text-xl flex-shrink-0" />
                <div>
                  <Subheading>{item.title}</Subheading>
                  <Paragraph>{item.description}</Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={PerformanceImage} 
            alt="Magento Performance Boost" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </WrapperContainer>
  );
};

export default MagentoBoost;
