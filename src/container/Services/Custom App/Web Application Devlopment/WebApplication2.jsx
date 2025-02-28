import React from 'react';
import { Code, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const WebApplication2 = () => {
  const services = [
    {
      id: 1,
      icon: <Code className="w-10 h-10 text-[#172554]" />,
      title: "Tailored Web Solutions",
      description:
        "We develop custom web applications that are designed to meet your unique business needs, ensuring seamless performance, scalability, and security.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-10 h-10 text-[#172554]" />,
      title: "Secure & Scalable Architecture",
      description:
        "Security and scalability are our top priorities. Our web applications are built with advanced security measures and scalable architecture to support business growth.",
    },
    {
      id: 3,
      icon: <Globe className="w-10 h-10 text-[#172554]" />,
      title: "Seamless User Experience",
      description:
        "Our web applications focus on providing an intuitive user experience, fast performance, and responsive design to engage users across all devices.",
    },
  ];

  return (
    <div className="bg-white text-[#172554] py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title Section */}
        <Heading>
          Custom Web Application Development <br />
          for Business Excellence
        </Heading>

        <Paragraph>
          We specialize in creating high-performance, secure, and scalable web applications tailored to your business goals. Our expert team leverages modern technologies to drive innovation and efficiency.
        </Paragraph>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white border border-gray-300 rounded-lg p-6 hover:bg-gray-100 transition-all duration-300 shadow-md flex flex-col items-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="mb-4">{service.icon}</div>
              <Subheading>{service.title}</Subheading>
              <Paragraph className="text-gray-700">{service.description}</Paragraph>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center mt-10 space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
            Get Started
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105 duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WebApplication2;
