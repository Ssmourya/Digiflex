import React from "react";
import { Cpu, Code, Image, Brain, Users, CheckCircle } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const topics = [
  {
    icon: Cpu,
    title: "Game Engine",
    description:
      "A game engine is a software platform used to build and run games. Popular engines include Unreal Engine, Unity, and Godot.",
  },
  {
    icon: Code,
    title: "Programming",
    description:
      "Developers use languages like C++, C#, or Python to code gameplay mechanics, AI behavior, physics, and more.",
  },
  {
    icon: Image,
    title: "3D/2D Art & Animation",
    description:
      "Visual assets, such as models, textures, and animations, are created by artists for immersive game environments.",
  },
  {
    icon: Brain,
    title: "AI Development",
    description:
      "AI is essential for NPCs, enemy behavior, and procedural content generation, ranging from pathfinding to decision-making systems.",
  },
  {
    icon: Users,
    title: "Multiplayer & Networking",
    description:
      "Design and implement multiplayer features, ensuring smooth connectivity and synchronization of data across players.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance (QA) & Testing",
    description:
      "Ensuring the game is bug-free and functions as expected by testing for glitches, balancing issues, and performance problems.",
  },
];

function PC_development() {
  return (
    <WrapperContainer>
      <div className="max-w-4xl mx-auto text-center">
        <Heading>Game Development</Heading>

        <p className="text-gray-600 text-lg leading-loose">
          Exploring key aspects of game development, from coding to design.
        </p>
      </div>

      {/* Grid Layout for Topics */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {topics.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-6 rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            {/* Icon - Centered at the top inside a bordered circle */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-blue-500 bg-white absolute -top-10">
              <Icon size={36} className="text-blue-500" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mt-10">{title}</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>

            {/* Hover Effect */}
            <a
              href="#"
              className="mt-4 text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default PC_development;
