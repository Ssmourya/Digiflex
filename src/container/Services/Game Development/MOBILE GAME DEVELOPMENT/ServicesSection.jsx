import React from "react";
import { motion } from "framer-motion";

import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const services = [
  {
    title: "Full-Cycle Mobile Game Development",
    description:
      "At Digiflex, we provide end-to-end mobile game development solutions, from ideation and concept art to development, testing, and deployment. We ensure your game meets industry standards and engages players worldwide.",
    icon: "⚙️",
  },
  {
    title: "Android & iOS Game Development",
    description:
      "Our team specializes in creating high-quality games for both Android and iOS platforms, ensuring seamless performance and an immersive gaming experience across devices.",
    icon: "📱",
  },
  {
    title: "Cross-Platform Game Development",
    description:
      "With Digiflex's expertise in cross-platform game development, we bring your gaming ideas to life, optimizing them for multiple platforms to reach a wider audience.",
    icon: "🖥️",
  },
  {
    title: "Game Art, Design, & Animation",
    description:
      "We offer top-notch 2D/3D game art, UI/UX design, and animation services to create visually stunning and engaging games that captivate players.",
    icon: "🎨",
  },
  {
    title: "UI/UX Logic & Game Design",
    description:
      "Our UI/UX designers ensure your game has an intuitive and user-friendly interface, enhancing player engagement and delivering an exceptional gaming experience.",
    icon: "🖌️",
  },
  {
    title: "Game Testing & Quality Assurance",
    description:
      "At Digiflex, we conduct thorough game testing to ensure smooth performance, bug-free gameplay, and optimal compatibility across different devices and platforms.",
    icon: "✅",
  },
];

const ServicesSection = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-12">
        <Heading>Digiflex Mobile Game Development Services</Heading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <Subheading>{service.title}</Subheading>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default ServicesSection;
