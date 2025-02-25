import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const GameDevIcon = ({ paths, viewBox = "0 0 24 24" }) => (
  <svg 
    viewBox={viewBox} 
    className="w-12 h-12 text-blue-600"
    fill="currentColor"
  >
    {paths}
  </svg>
);

const ResourceAugmentation = () => {
  const resources = [
    {
      name: "3D Artists",
      description: "Enhance your game visuals with experienced 3D artists who specialize in character, environment, and asset creation.",
      icon: <GameDevIcon paths={
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 18.5L3.5 12 12 3.5l8.5 8.5-8.5 8.5zm0-4.5a4 4 0 100-8 4 4 0 000 8z" />
      } />
    },
    {
      name: "Game Developers",
      description: "Expand your team with skilled developers proficient in Unity, Unreal Engine, and other game development frameworks.",
      icon: <GameDevIcon paths={
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
      } />
    },
    {
      name: "Animators",
      description: "Get top-notch animators to create lifelike movements, cutscenes, and interactive animations for your game.",
      icon: <GameDevIcon paths={
        <path d="M4 8h16v8H4V8zm2 2v4h12v-4H6zm14-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
      } />
    },
    {
      name: "UI/UX Designers",
      description: "Improve player experience with professional UI/UX designers who specialize in intuitive game interfaces.",
      icon: <GameDevIcon paths={
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z" />
      } />
    },
    {
      name: "Sound Designers",
      description: "Elevate your game's audio with expert sound designers who create immersive sound effects and music.",
      icon: <GameDevIcon paths={
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      } />
    },
    {
      name: "QA Testers",
      description: "Ensure high-quality gameplay with professional QA testers who specialize in bug detection and playability testing.",
      icon: <GameDevIcon paths={
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      } />
    }
  ];

  return (
    <> 
      <WrapperContainer>
        <Heading>
          <div>
            Resource Augmentation in Game Development
          </div>
        </Heading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-[#f3f4f6] p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-50">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{resource.name}</h3>
              <p className="text-gray-600 text-center text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default ResourceAugmentation;
