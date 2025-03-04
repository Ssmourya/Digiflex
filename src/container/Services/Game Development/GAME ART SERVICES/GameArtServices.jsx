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
  },
  {
    title: "3D Modeling & Texturing",
    description:
      "Bring your game to life with high-quality 3D models and detailed textures, optimized for performance across various platforms.",
    icon: "🗿",
  },
  {
    title: "Character Design",
    description:
      "Create unique and memorable characters with detailed designs, from stylized heroes to realistic NPCs, enhancing player immersion.",
    icon: "👤",
  },
  {
    title: "Environment Art",
    description:
      "Craft immersive game worlds with breathtaking environments, from lush forests to futuristic cities, designed to captivate players.",
    icon: "🌍",
  },
  {
    title: "Animation Services",
    description:
      "Add fluidity and personality to your game with custom animations, including rigging, keyframing, and motion capture integration.",
    icon: "🏃",
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and visually appealing user interfaces that enhance gameplay experience and ensure seamless player interaction.",
    icon: "📱",
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Enhance your game with stunning visual effects like particle systems, shaders, and dynamic lighting to elevate the overall experience.",
    icon: "✨",
  },
  {
    title: "Promotional Art",
    description:
      "Boost your game’s visibility with eye-catching promotional assets, including trailers, key art, and store visuals for platforms like Steam.",
    icon: "🎨",
  },
];

const GameArtServices = () => {
  return (
    <WrapperContainer>
      <Heading>
        <div className="text-center text-3xl font-bold text-gray-900">
          Acquire Our Best Game Art Services
        </div>
      </Heading>
      <Paragraph>
        <span className="flex justify-center text-lg text-gray-700">
          We offer top-tier game art services, empowering game developers to
          create visually stunning and immersive experiences across platforms.
        </span>
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-3 text-gray-600 text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default GameArtServices;
