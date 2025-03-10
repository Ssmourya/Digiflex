"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, UserCheck, Zap, Settings } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const Cards = () => {
  return (
    <>
      <br />
      <div className="flex items-center justify-center text-lg font-bold text-black mb-6">
        <Heading>
          Enhance Customer Experiences with These Powerful CEM Solutions
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 mt-4 bg-white rounded-xl shadow-md md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 - Omni-Channel Engagement */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center h-full flex flex-col justify-between"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div>
            <div className="flex justify-center mb-2">
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
            <Subheading>Omni-Channel Engagement</Subheading>
            <Paragraph>
              Deliver seamless interactions across chat, email, voice, and social media, ensuring consistent support at every touchpoint.
            </Paragraph>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mx-auto mt-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 2 - Self-Service & AI Chatbots */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center h-full flex flex-col justify-between"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div>
            <div className="flex justify-center mb-2">
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
            <Subheading>AI-Powered Self-Service</Subheading>
            <Paragraph>
              Enable customers to resolve issues instantly with intelligent chatbots, FAQs, and interactive knowledge bases.
            </Paragraph>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-all duration-300 flex items-center justify-center mx-auto mt-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 3 - Predictive Analytics & AI */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center h-full flex flex-col justify-between"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div>
            <div className="flex justify-center mb-2">
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <Subheading>Predictive Analytics & AI Insights</Subheading>
            <Paragraph>
              Use AI-driven insights to predict customer needs, personalize support, and optimize service strategies.
            </Paragraph>
          </div>
          <button className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center mx-auto mt-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>

        {/* Card 4 - Automated Workflows & Process Optimization */}
        <motion.div
          className="bg-white p-4 rounded-xl border border-gray-200 shadow-md text-center h-full flex flex-col justify-between"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
          }}
        >
          <div>
            <div className="flex justify-center mb-2">
              <Settings className="h-8 w-8 text-purple-500" />
            </div>
            <Subheading>Automated Workflows & Process Optimization</Subheading>
            <Paragraph>
              Streamline service operations with AI-driven automation, reducing response times and improving agent efficiency.
            </Paragraph>
          </div>
          <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 transition-all duration-300 flex items-center justify-center mx-auto mt-auto">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
