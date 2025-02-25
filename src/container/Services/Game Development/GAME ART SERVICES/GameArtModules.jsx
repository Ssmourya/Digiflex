import React from "react";
import {
  Wallet, // Reused as a placeholder; replaced with relevant icons below
  Coins,
  Rocket,
  CreditCard,
  Users,
  Code,
  Key,
  MessageSquare,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const ModuleCard = ({ title, description, icon: Icon }) => (
  <div className="relative bg-[#f3f4f6] border border-gray-300 shadow-md rounded-lg overflow-hidden hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
    <div className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-all duration-300">
          <Icon size={28} className="text-blue-500 group-hover:text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-800">
          {description}
        </p>
      </div>
    </div>
  </div>
);

function GameArtModules() {
  const modules = [
    {
      title: "Concept Art Creation",
      description:
        "Develop initial 2D sketches and designs to establish the visual style and tone of your game.",
      icon: Code, // Represents sketching/coding the initial vision
    },
    {
      title: "3D Modeling & Texturing",
      description:
        "Craft high-quality 3D models with detailed textures, optimized for game engines like Unity or Unreal.",
      icon: Rocket, // Symbolizes building and launching 3D assets
    },
    {
      title: "Character Design",
      description:
        "Create unique and engaging characters, from concept to fully realized 3D models, enhancing player immersion.",
      icon: Users, // Represents designing characters/people
    },
    {
      title: "Environment Art",
      description:
        "Design immersive game worlds with detailed landscapes and atmospheric settings for a captivating experience.",
      icon: Key, // Symbolizes unlocking immersive worlds
    },
    {
      title: "Animation Services",
      description:
        "Produce smooth animations with rigging and keyframing to bring characters and objects to life.",
      icon: Coins, // Represents the value added by dynamic motion
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing interfaces to enhance player navigation and interaction.",
      icon: CreditCard, // Represents a sleek, functional design like a card
    },
    {
      title: "Visual Effects (VFX)",
      description:
        "Add stunning effects like particles and shaders to elevate gameplay and visual appeal.",
      icon: Wallet, // Reused to symbolize enriching the game with effects
    },
    {
      title: "Promotional Art",
      description:
        "Create eye-catching promotional materials like trailers and key art to showcase your game.",
      icon: MessageSquare, // Represents marketing and communication
    },
  ];

  return (
    <>
      <WrapperContainer>
          <div className="bg-white py-10 flex justify-center">
            <Heading>
              <h1>Our Game Art Services in Game Development</h1>
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
              />
            ))}
          </div>     
      </WrapperContainer>
    </>
  );
}

export default GameArtModules;
