"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";

const industries = [
  {
    title: "Healthcare",
    description: "Smart Apps catering to the needs of healthcare.",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=2070&auto=format&fit=crop')",
  },
  {
    title: "Finance",
    description: "Secure and efficient financial solutions.",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop')",
  },
  {
    title: "Education",
    description: "Revolutionizing learning with smart technology.",
    bgImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop')",
  },
  {
    title: "E-commerce",
    description: "Empowering businesses with digital commerce solutions.",
    bgImage:
      "url('https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop')",
  },
  {
    title: "Real Estate",
    description: "Innovative solutions for modern real estate.",
    bgImage:
      "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop')",
  },
  {
    title: "Transportation",
    description: "Smart solutions for modern mobility and logistics.",
    bgImage:
      "url('https://images.unsplash.com/photo-1473042904451-00171c69419d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0fGVufDB8fDB8fHww')",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    x: 5,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Industry = () => {
  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center mb-12"
      >
        <Heading>Our Expertise in Different Industries</Heading>
        <Paragraph>
          We offer tailor-made Angular Development solutions to diverse
          industries including:
        </Paragraph>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="relative overflow-hidden rounded-2xl shadow-lg group transition-transform duration-300"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundImage: industry.bgImage }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <div className="relative z-10 p-6 sm:p-8 min-h-[300px] lg:min-h-[350px] flex flex-col items-center justify-center">
              <motion.h2
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-2xl sm:text-3xl font-bold mb-4 text-white text-center"
              >
                {industry.title}
              </motion.h2>
              <p className="text-base sm:text-lg text-gray-200 mb-6 text-center">
                {industry.description}
              </p>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full text-white font-semibold transition-colors duration-300"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </WrapperContainer>
  );
};

export default Industry;
