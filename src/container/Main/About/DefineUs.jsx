"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Monitor, Users, Target, Cpu } from "lucide-react";
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';

const ValuesSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white">
      <WrapperContainer>
        <div className=" pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What <span className='text-blue-700'>Defines</span> Us</h2>
          <Paragraph>"Driven by purpose, defined by impact."</Paragraph>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-between gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={item}
              className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 w-full sm:w-[48%] lg:w-[48%]"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#dbeafe", rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Monitor className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                Expert Implementation Team
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                transition={{ duration: 0.3 }}
              >
                You're in capable hands. Our implementation team consists of highly trained professionals, including CPAs,
                who bring both technical expertise and industry knowledge. They're ready to answer your questions, provide
                practical insights, and deliver added value at every step.
              </motion.p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={item}
              className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 w-full sm:w-[48%] lg:w-[48%]"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#dbeafe", rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                We are an extension of your team
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                transition={{ duration: 0.3 }}
              >
                Our one team approach means that we listen & learn. We tailor our implementation sessions to your needs
                and show you how you can improve your processes. Our consultants work with you as an integral part of your
                team.
              </motion.p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={item}
              className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 w-full sm:w-[48%] lg:w-[48%]"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#dbeafe", rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                Laser focus on construction
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                transition={{ duration: 0.3 }}
              >
                We understand construction inside and out. By anticipating challenges and evolving best practices, we
                design every feature to meet the industry's unique needs.
              </motion.p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={item}
              className="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 w-full sm:w-[48%] lg:w-[48%]"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "#dbeafe", rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Cpu className="w-6 h-6 text-blue-600" />
              </motion.div>
              <motion.h3
                className="text-2xl font-semibold text-gray-900"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                AI-powered digital transformation
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                transition={{ duration: 0.3 }}
              >
                Adapt to constantly changing technology and leverage the most powerful tools on the market. With AI built
                into Premier, you'll be sure to stay at the forefront of the race.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default ValuesSection;
