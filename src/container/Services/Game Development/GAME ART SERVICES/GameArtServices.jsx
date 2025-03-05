import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const services = [
  {
    title: "2D Concept Art",
    description:
      "Transform your game ideas into stunning 2D concepts, including characters, environments, and props, tailored to your creative vision.",
    icon: "✏️",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "3D Modeling & Texturing",
    description:
      "Bring your game to life with high-quality 3D models and detailed textures, optimized for performance across various platforms.",
    icon: "🗿",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Character Design",
    description:
      "Create unique and memorable characters with detailed designs, from stylized heroes to realistic NPCs, enhancing player immersion.",
    icon: "👤",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Environment Art",
    description:
      "Craft immersive game worlds with breathtaking environments, from lush forests to futuristic cities, designed to captivate players.",
    icon: "🌍",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Animation Services",
    description:
      "Add fluidity and personality to your game with custom animations, including rigging, keyframing, and motion capture integration.",
    icon: "🏃",
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and visually appealing user interfaces that enhance gameplay experience and ensure seamless player interaction.",
    icon: "📱",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Enhance your game with stunning visual effects like particle systems, shaders, and dynamic lighting to elevate the overall experience.",
    icon: "✨",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Promotional Art",
    description:
      "Boost your game's visibility with eye-catching promotional assets, including trailers, key art, and store visuals for platforms like Steam.",
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
        <Heading>Game Art Services</Heading>
        <Paragraph>
          Elevate your game's visual appeal with our comprehensive art services designed to create immersive and engaging experiences.
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
