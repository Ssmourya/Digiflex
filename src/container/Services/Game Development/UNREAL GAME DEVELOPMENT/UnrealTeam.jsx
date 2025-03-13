import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const toolsData = [
  { category: "Game Engines", tools: ["Unity", "Unreal Engine", "Godot"] },
  { category: "Programming", tools: ["Visual Studio", "JetBrains Rider"] },
  { category: "3D Modeling", tools: ["Blender", "Maya", "3ds Max"] },
  { category: "2D Art & UI", tools: ["Photoshop", "GIMP", "Krita"] },
  { category: "Audio Editing", tools: ["Audacity", "FL Studio", "Ableton"] },
  { category: "Version Control", tools: ["Git", "GitHub", "GitLab"] },
];

const TeamMemberCard = ({ icon, title, description }) => (
  <tr className="border border-gray-300 hover:bg-gray-100 transition-colors duration-200">
    <td className="border border-gray-300 px-6 py-3 font-semibold">{title}</td>
    <td className="border border-gray-300 px-6 py-3">{description}</td>
  </tr>
);

const UnrealTeam = () => {
  const teamMembers = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: "Game Designer",
      description:
        "At Digiflex, our Game Designers define the core mechanics, world-building, and player experience. They collaborate closely with narrative designers to develop compelling plots and engaging gameplay.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <path d="M12 2l7 20-7-5-7 5z" />
        </svg>
      ),
      title: "Unreal Tech Lead",
      description:
        "Our Unreal Tech Leads are experts in Unreal Engine, responsible for game architecture, coding, and mentoring developers. They ensure high-quality code and optimal performance in all Digiflex projects.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      title: "QA Specialist",
      description:
        "Digiflex's QA Specialists ensure game quality by identifying design inconsistencies, bugs, and errors. They work closely with developers to enhance gameplay and user experience.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <path d="M4 4h16v16H4z" />
        </svg>
      ),
      title: "3D Artist",
      description:
        "Our 3D Artists at Digiflex create high-quality 3D assets, characters, and environments, ensuring the game world is visually stunning and immersive.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <path d="M12 2L19 21H5L12 2z" />
        </svg>
      ),
      title: "Animator",
      description:
        "Digiflex Animators bring characters and objects to life with fluid and realistic animations, ensuring smooth and engaging gameplay.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 mx-auto"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2 2" />
        </svg>
      ),
      title: "Audio Engineer",
      description:
        "Our Audio Engineers at Digiflex design and implement immersive sound effects and music to enhance the player's emotional and auditory experience.",
    },
  ];

  return (
    <WrapperContainer>
      <Heading>Digiflex Unreal Engine Development Team</Heading>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                Role
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left font-semibold">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                icon={member.icon}
                title={member.title}
                description={member.description}
              />
            ))}
          </tbody>
        </table>
      </div>
    </WrapperContainer>
  );
};

export default UnrealTeam;
