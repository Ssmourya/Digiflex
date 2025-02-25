import React from "react";
import { motion } from "framer-motion";
import { Pencil, Gamepad2, Users, Layout, Music, DollarSign } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-[#f3f4f6] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <Subheading>{title}</Subheading>
      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mt-2">{description}</p>
    </motion.div>
  );
};

const GameDesignSection = () => {
  const features = [
    {
      icon: Pencil,
      title: "Concept & Storyline",
      description:
        "This is the first step where game designers develop a concept for the game.\n\nIt includes defining the genre, theme, story, and objectives.",
    },
    {
      icon: Gamepad2,
      title: "Gameplay Mechanics",
      description:
        "These are the rules that govern how the game is played.\n\nThis includes player controls, level design, game physics, and enemy behavior.",
    },
    {
      icon: Users,
      title: "Characters & Worldbuilding",
      description:
        "Designers create the world in which the game takes place, including characters, locations, and lore.\n\nCharacter design is crucial for player engagement.",
    },
    {
      icon: Layout,
      title: "User Interface (UI)",
      description:
        "The visual elements like menus, buttons, and HUD (heads-up display) that players interact with.\n\nA clean and intuitive UI enhances the gaming experience.",
    },
    {
      icon: Music,
      title: "Audio Design",
      description:
        "Sound effects, background music, and voice acting contribute to the atmosphere of the game.",
    },
    {
      icon: DollarSign,
      title: "Monetization Strategies",
      description:
        "Exploring different revenue models such as in-game purchases, ads, and subscriptions.\n\nA well-planned monetization strategy ensures profitability while maintaining a great user experience.",
    },
  ];

  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
      >
        <div className="text-center mb-12">
          <Heading>Key Features of Game Development</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the essential aspects of game development helps create immersive and engaging experiences for players worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Learn More About Game Development
          </button>
        </motion.div>
      </motion.div>
    </WrapperContainer>
  );
};

export default GameDesignSection;
