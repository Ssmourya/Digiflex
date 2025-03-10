"use client";

import { motion } from 'framer-motion';
import { FaMobileAlt, FaBolt, FaLock, FaRobot, FaRocket, FaCloud } from 'react-icons/fa';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph'
const features = [
  {
    icon: <FaMobileAlt className="text-green-400 text-6xl" />,
    title: "Multi-Device Compatibility",
    description: "Apps for phones, tablets, TVs, and wearables",
  },
  {
    icon: <FaBolt className="text-yellow-400 text-6xl" />,
    title: "Optimized for Performance",
    description: "Faster load times, smooth UI animations, and battery efficiency",
  },
  {
    icon: <FaLock className="text-blue-400 text-6xl" />,
    title: "Enterprise-Grade Security",
    description: "Secure authentication, encrypted storage, and compliance",
  },
  {
    icon: <FaRobot className="text-purple-400 text-6xl" />,
    title: "AI & ML-Powered Apps",
    description: "Smart recommendations, chatbots, and automation",
  },
  {
    icon: <FaRocket className="text-red-400 text-6xl" />,
    title: "Agile & Scalable Solutions",
    description: "Rapid development with future scalability",
  },
  {
    icon: <FaCloud className="text-indigo-400 text-6xl" />,
    title: "Seamless Cloud Integration",
    description: "Real-time sync, cloud storage, and scalable backend solutions",
  },
];

export default function WhyDigiflex() {
  return (
    <section className="relative bg-white text- py-20 px-5 md:px-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center"
      >
      <Heading>
        Why Digiflex for Android Development?</Heading>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition"
          >
            {feature.icon}
            <Subheading>
            {feature.title}</Subheading>
            <Paragraph>{feature.description}</Paragraph>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
