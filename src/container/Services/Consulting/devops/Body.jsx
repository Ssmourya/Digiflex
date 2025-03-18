"use client";
import Image from "next/image";
import React from "react";
import DevOpsProcess from "./DevOpsProcess";
import DevOpsSolutions from "./DevOpsSolutions";
import TechStack from "./TechStack";
import IndustriesSection from "./IndustriesSection";
import { motion } from "framer-motion";

import WrapperContainer from "@/Layout/WrapperContainer";
import FAQ from "./FAQ";

function Body() {
  return (
    <div className="min-h-screen bg-white">
      <WrapperContainer>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Text Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl font-bold text-blue-700 mb-6 
            hover:text-blue-900 transition-colors duration-300"
            >
              Revolutionize Your DevOps Journey with Digiflex.ai's Expertise
            </h1>
            <p className="text-lg text-gray-600">
              Transform your development process with Digiflex.ai's expert
              DevOps consulting. Our seasoned DevOps specialists leverage
              cutting-edge tools and proven strategies to streamline workflows,
              reduce costs, and accelerate delivery—ensuring a seamless,
              future-ready DevOps transformation tailored to your business
              goals.
            </p>
          </motion.div>

          {/* Right Side Image Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/devops2.png"
              alt="DevOps Illustration"
              width={500}
              height={400}
              className="w-full h-auto 
              transition-transform duration-300 transform hover:scale-105"
              priority={false}
            />
          </motion.div>
        </div>
      </WrapperContainer>

      {/* Process Section */}
      <DevOpsProcess />

      {/* Solutions Section */}
      <DevOpsSolutions />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Industries Section */}
      <IndustriesSection />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}

export default Body;
