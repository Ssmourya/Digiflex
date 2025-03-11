import React from "react";
import {
  Wallet,
  Coins,
  Rocket,
  CreditCard,
  Users,
  Code,
  Key,
  MessageSquare,
} from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";

const ModuleCard = ({ title, description, icon: Icon }) => (
  <div className="relative p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group">
    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-50 group-hover:bg-blue-100"></div>

    {/* Icon floating in top-right */}
    <div className="absolute top-4 right-4">
      <Icon
        size={24}
        className="text-blue-500 group-hover:text-blue-600 transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div className="space-y-4">
      {/* Title with underline effect */}
      <h3 className="text-xl font-bold text-gray-800 relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
      </h3>

      {/* Description with fade-in effect */}
      <p className="text-gray-600 text-sm leading-relaxed opacity-90 group-hover:opacity-100">
        {description}
      </p>

      {/* Hover indicator */}
      <div className="absolute bottom-4 left-6 w-8 h-0.5 bg-blue-500 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </div>
  </div>
);

function GameArtModules() {
  const modules = [
    {
      title: "Concept Art Creation",
      description:
        "Digiflex develops initial 2D sketches and designs to establish the visual style and tone of your game, ensuring a strong foundation for your creative vision.",
      icon: Code,
    },
    {
      title: "3D Modeling & Texturing",
      description:
        "Digiflex crafts high-quality 3D models with detailed textures, optimized for game engines like Unity or Unreal, bringing your game to life with precision.",
      icon: Rocket,
    },
    {
      title: "Character Design",
      description:
        "Digiflex creates unique and engaging characters, from concept to fully realized 3D models, enhancing player immersion and storytelling.",
      icon: Users,
    },
    {
      title: "Environment Art",
      description:
        "Digiflex designs immersive game worlds with detailed landscapes and atmospheric settings for a captivating experience that draws players in.",
      icon: Key,
    },
    {
      title: "Animation Services",
      description:
        "Digiflex produces smooth animations with rigging and keyframing to bring characters and objects to life, adding dynamic movement to your game.",
      icon: Coins,
    },
    {
      title: "UI/UX Design",
      description:
        "Digiflex designs intuitive and visually appealing interfaces to enhance player navigation and interaction, ensuring a seamless user experience.",
      icon: CreditCard,
    },
    {
      title: "Visual Effects (VFX)",
      description:
        "Digiflex adds stunning effects like particles and shaders to elevate gameplay and visual appeal, making your game stand out.",
      icon: Wallet,
    },
    {
      title: "Promotional Art",
      description:
        "Digiflex creates eye-catching promotional materials like trailers and key art to showcase your game and attract your target audience.",
      icon: MessageSquare,
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
