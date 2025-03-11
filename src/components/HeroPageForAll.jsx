"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroPageForAll = ({ title, description, videoSrc }) => {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col justify-end">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src='/assets/TestingQAbg.mp4' type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative w-11/12 mx-auto flex flex-col px-4 text-center md:text-left">
        {/* Hero Content */}
        <motion.div className="flex flex-col justify-center items-center md:items-start">
          <motion.div className="flex flex-col md:flex-row justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="px-4 md:px-8 w-full md:w-[65%]"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="text-lg sm:text-xl text-white mb-6 mx-auto"
              >
                {description}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPageForAll;
