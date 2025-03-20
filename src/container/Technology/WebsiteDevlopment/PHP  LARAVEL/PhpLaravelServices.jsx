"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const services = [
  {
    title: "Backend Development with PHP",
    description:
      "Digiflex specializes in building robust and scalable backend systems using PHP and Laravel. We create high-performance applications that cater to your business needs with clean, maintainable code.",
    icon: "💻",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Laravel Framework Development",
    description:
      "Our expert Laravel developers build secure, scalable, and feature-rich applications. We leverage Laravel’s powerful ecosystem to deliver fast and efficient web solutions.",
    icon: "⚡️",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "API Development with PHP",
    description:
      "We create fast, secure, and scalable RESTful APIs using PHP and Laravel. Our APIs are designed for high availability and real-time data processing.",
    icon: "🔌",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "E-commerce Development with Laravel",
    description:
      "Build and optimize your e-commerce platform with PHP and Laravel. Our custom solutions ensure your online store is fast, secure, and user-friendly.",
    icon: "🛒",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Database Design & Optimization",
    description:
      "Our PHP and Laravel experts specialize in creating optimized database schemas and queries to improve performance and scalability for large applications.",
    icon: "📊",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Laravel Performance Optimization",
    description:
      "We use advanced Laravel features like caching, queue management, and database optimization techniques to ensure your application runs at peak performance.",
    icon: "🚀",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Security & Authentication with Laravel",
    description:
      "Implement robust security measures in your application with Laravel's built-in tools for authentication, authorization, and encryption to protect sensitive data.",
    icon: "🔐",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Custom Laravel Solutions",
    description:
      "We deliver fully customized solutions tailored to your specific business requirements using Laravel, ensuring your project is built the right way from the start.",
    icon: "🔧",
    gradient: "from-cyan-500 to-green-500"
  },
];

const PhpLaravelServices = () => {
  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading>Digiflex PHP & Laravel Development Services</Heading>
        <Paragraph>
          Partner with Digiflex to build powerful web applications with PHP and Laravel. Our experienced developers create secure, scalable, and high-performance systems tailored to your needs.
        </Paragraph>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="p-6">
              <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 text-4xl w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.gradient}" />
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default PhpLaravelServices;
