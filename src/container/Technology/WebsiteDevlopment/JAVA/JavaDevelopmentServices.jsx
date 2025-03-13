"use client";

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const services = [
  {
    title: 'Web Application Development',
    description: [
      'Custom Java-based web applications for businesses.',
      'Scalable, secure, and high-performance applications.',
    ],
    image: 'https://i.pinimg.com/originals/28/35/b0/2835b06c053a1fdab58a4b8d7006f73b.gif',
  },
  {
    title: 'Full Stack Development',
    description: [
      'Building end-to-end applications with frontend and backend integration.',
      'Efficient and scalable solutions with Java and modern frameworks.',
    ],
    image: 'https://i.pinimg.com/originals/28/35/b0/2835b06c053a1fdab58a4b8d7006f73b.gif',
  },
  {
    title: 'Enterprise Application Development',
    description: [
      'Development of large-scale enterprise applications using Java technologies.',
      'Integration with enterprise systems like CRM, ERP, and cloud platforms.',
    ],
    image: 'https://i.pinimg.com/originals/75/95/2d/75952ddbecd4743baf83236395b20541.gif',
  },
  {
    title: 'Java API Development & Integration',
    description: [
      'RESTful and SOAP-based API development.',
      'Seamless third-party API integration for enhanced functionality.',
    ],
    image: 'https://i.pinimg.com/originals/1e/a2/bf/1ea2bf43d262adc533f6ba78a7772a9c.gif',
  },
  {
    title: 'Java SaaS Application Development',
    description: [
      'Cloud-based SaaS solutions built on Java.',
      'Scalable and cost-effective software models.',
    ],
    image: 'https://i.pinimg.com/originals/f6/da/48/f6da482f9b5f542e650dc5facf2fbf4d.gif',
  },
  {
    title: 'Java Migration & Modernization',
    description: [
      'Migrate legacy applications to Java-based frameworks.',
      'Upgrade Java applications to the latest versions.',
    ],
    image: 'https://i.pinimg.com/originals/89/e8/ff/89e8ffeaecb6c7cca7b5b37310f9fbc0.gif',
  },
  {
    title: 'Java Mobile App Development',
    description: [
      'Android application development using Java.',
      'Cross-platform solutions with Java frameworks.',
    ],
    image: 'https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif',
  },
  {
    title: 'Java Cloud Solutions',
    description: [
      'Cloud-based Java applications using AWS, Google Cloud, and Azure.',
      'Microservices architecture for cloud applications.',
    ],
    image: 'https://i.pinimg.com/736x/3b/b3/64/3bb364b657a1cc1a78cc04d0a2532407.jpg',
  },
  {
    title: 'Java Maintenance & Support',
    description: [
      'Performance monitoring and optimization.',
      'Regular updates, bug fixes, and enhancements.',
    ],
    image: 'https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif',
  },
];

export default function JavaDevelopmentServices() {
  return (
    <div className="py-16 px-8 bg-white">
      <Heading
        className="text-5xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Digiflex.ai - Our Java Development Services
      </Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 text-black rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-8">
              <Subheading>
                {service.title}
              </Subheading>
              {/* <Paragraph> */}
                <ul className="space-y-3">
                  {service.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-base text-gray-700 mb-5 text-center">
                      <FaCheckCircle className="text-blue-600 mr-3 mt-1" /> {desc}
                    </li>
                  ))}
                </ul>
              {/* </Paragraph> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
