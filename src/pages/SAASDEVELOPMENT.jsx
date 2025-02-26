import React from "react";
import { motion } from "framer-motion";
import Saas2 from "../container/Services/Custom App/Saas Devlopment/Saas2";
import Saas3 from "../container/Services/Custom App/Saas Devlopment/Saas3";
import Saas4 from "../container/Services/Custom App/Saas Devlopment/Saas4";
import Saas5 from "../container/Services/Custom App/Saas Devlopment/Saas5";
import videoBg from "../assets/blockchain_video.mp4"; // Video Background
import Heading from '../Layout/Heading';
import Subheading from '../Layout/Subheading';
import SaaSFAQ from "../container/Services/Custom App/Saas Devlopment/SaaSFAQ";
const clients = [
  { name: "Universal", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBM7RW2MYrGDHBmKM99UUycqt995yTLhWww&s" },
  { name: "NHS", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtutCNQT5sDXQvTm17rkNot67tFpR38Jig&s" },
  { name: "Guinness", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBcKvoP84DeACaP9kvyPCakbXbWXrYb1ztA&s" },
  { name: "E-commerce", src: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" },
];

const Saas = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content */}
        <motion.div
          className="relative z-30 text-white max-w-4xl p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-blue-600 text-white text-sm px-3 py-1 inline-block mb-4">
            SERVICES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SaaS Development Services
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Since 2007, we have been building impactful SaaS solutions, enterprise software, and large-scale products for global businesses across 20+ industries.
          </p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Clients Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
        <Heading>Our Clients</Heading>
          
          <p className="text-gray-600">
            The world's leading companies trust our software development expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img src={client.src} alt={`${client.name} logo`} className="max-h-12 w-auto object-contain" />
            </motion.div>
          ))}
        </div>
      </div>

     
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
         <Heading>Why Choose Our SaaS Solutions?</Heading>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">Scalability</Subheading>
              <p className="text-gray-600">Our solutions grow with your business needs.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">Security</Subheading>
              <p className="text-gray-600">We implement top security measures to protect your data.</p>
            </motion.div>
            <motion.div
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold mb-2">Seamless Integration</Subheading>
              <p className="text-gray-600">Compatible with various platforms and tools.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Saas2 />
      <Saas3 />
      <Saas4 />
      <SaaSFAQ/>
     
    </>
  );
};

export default Saas;
