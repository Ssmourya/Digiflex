"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const Mobile2 = () => {
  return (
    <section className="bg-white text-black py-12">
      <div className="container mx-auto text-center">
        <Heading>Key Features</Heading>
        
        <div className="flex flex-col md:flex-row justify-center items-center">
          
          {/* First Feature with Animation */}
          <motion.div
            className="md:w-1/3 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="p-4 rounded-full inline-block mb-4">
              <img src="/assets/bg11.png" alt="End-To-End Consulting Icon" />
            </div>
            <Subheading className="text-xl font-semibold mb-2">
              End-To-End Consulting
            </Subheading>
            <Paragraph>
              From creating data architecture to creating automated transfer scripts, from creating data warehouses to running your automated scripts, we can help you at every step.
            </Paragraph>
          </motion.div>
          
          {/* Center Image with Animation */}
          <motion.div
            className="md:w-1/3 p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/assets/bg12.jpg" alt="Center Image" className="w-full object-cover rounded-lg" />
          </motion.div>
          
          {/* Third Feature with Animation */}
          <motion.div
            className="md:w-1/3 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="p-4 rounded-full inline-block mb-4">
              <img src="@/assets/bg10.png" alt="Automated Data Transfer Icon" />
            </div>
            <Subheading className="text-xl font-semibold mb-2">
              Automated Data Transfer
            </Subheading>
            <Paragraph>
              Digiflex.ai focuses on an automated tool-based data migration approach offering minimal code changes, leaving the investment in business logic intact.
            </Paragraph>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Mobile2;
