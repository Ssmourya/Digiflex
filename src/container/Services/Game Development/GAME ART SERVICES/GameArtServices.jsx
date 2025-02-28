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
        <div>Acquire Our Best Game Art Services</div>
      </Heading>
      <Paragraph>
        <span className="flex justify-center">
          We offer top-tier game art services, empowering game developers to
          create visually stunning and immersive experiences across platforms.
        </span>
      </Paragraph>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f3f4f6] shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default GameArtServices;
