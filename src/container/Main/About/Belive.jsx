"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const imageHoverEffect = {
  hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" },
};

const MissionVision = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-12">
      <WrapperContainer>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">
          What We <span className="text-blue-700">Believe</span> In.
        </h1>
        <Paragraph className="text-lg md:text-xl">
          "Empowering innovation, embracing creativity, and building the future, one idea at a time."
        </Paragraph>

        {/* Mission Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="flex-1" variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-base md:text-lg">
              At Digiflex, our mission is to revolutionize the digital experience by providing innovative, scalable,
              and user-centric solutions. We strive to empower businesses with cutting-edge technology, seamless
              integrations, and a strong focus on customer success.
            </p>
          </motion.div>
          <motion.div className="flex-1" variants={fadeInUp}>
            <motion.img
              src="https://plus.unsplash.com/premium_photo-1736892868741-35bc1ae89091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzc2lvbiUyMGZvciUyMHN0YXJ0dXB8ZW58MHx8MHx8fDA%3D"
              alt="Mission"
              className="w-full rounded-lg shadow-lg"
              whileHover="hover"
              variants={imageHoverEffect}
            />
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div className="flex-1" variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 text-base md:text-lg">
              We envision Digiflex as a global leader in digital transformation, enabling businesses to thrive in an
              ever-evolving technological landscape. By embracing innovation, fostering collaboration, and prioritizing
              excellence, we aim to shape the future of digital solutions.
            </p>
          </motion.div>
          <motion.div className="flex-1" variants={fadeInUp}>
            <motion.img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlzc2lvbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Vision"
              className="w-full rounded-lg shadow-lg"
              whileHover="hover"
              variants={imageHoverEffect}
            />
          </motion.div>
        </motion.div>
      </WrapperContainer>
    </div>
  );
};

export default MissionVision;
