"use client";

import { motion } from "framer-motion";
import React from "react";
// import AboutBg from "@/../publichttps://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AboutBg.mp4";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
function Hero() {
  return (
    <div>
      <motion.div
        className="relative h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src='https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AboutBg.mp4' type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/40 z-10 " />
      </motion.div>
    </div>
  );
}

export default Hero;
