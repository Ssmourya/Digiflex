"use client";

import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const services = [
  {
    title: "2D Concept Art",
    description:
      "Digiflex's expert artists transform your game ideas into stunning 2D concepts, including characters, environments, and props, with industry-leading quality and attention to detail.",
    icon: "✏️",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "3D Modeling & Texturing",
    description:
      "Our specialized 3D team brings your game to life with high-quality models and detailed textures, optimized for performance across all platforms using cutting-edge tools and techniques.",
    icon: "🗿",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Character Design",
    description:
      "Digiflex's character artists create unique and memorable characters with detailed designs, from stylized heroes to realistic NPCs, backed by years of gaming industry experience.",
    icon: "👤",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Environment Art",
    description:
      "Our environment artists craft immersive game worlds with breathtaking detail, from lush forests to futuristic cities, leveraging the latest tools and rendering technologies.",
    icon: "🌍",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Animation Services",
    description:
      "Digiflex's animation team adds fluidity and personality to your game with custom animations, including advanced rigging, keyframing, and state-of-the-art motion capture integration.",
    icon: "🏃",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX specialists design intuitive and visually appealing interfaces that enhance gameplay experience, following modern gaming standards and user-centered design principles.",
    icon: "📱",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Digiflex's VFX artists enhance your game with stunning visual effects using advanced particle systems, custom shaders, and dynamic lighting to create unforgettable gaming moments.",
    icon: "✨",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Promotional Art",
    description:
      "Our marketing art team boosts your game's visibility with eye-catching promotional assets, including cinematic trailers, key art, and platform-optimized store visuals.",
    icon: "🎨",
    gradient: "from-cyan-500 to-green-500"
  },
];

const GameArtServices = () => {
  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading>Digiflex Game Art Services</Heading>
        <Paragraph>
          Partner with Digiflex to elevate your game's visual appeal with our comprehensive art services. Our award-winning team combines creativity and technical expertise to create immersive and engaging experiences that captivate players worldwide.
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

export default GameArtServices;
