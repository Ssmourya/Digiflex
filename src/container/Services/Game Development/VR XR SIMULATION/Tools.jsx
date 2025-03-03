import React, { useState, memo } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

// Icon components for reusability
const Icon = ({ iconKey }) => {
  const IconPaths = {
    vr: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5zM2 13l10 5 10-5"
      />
    ),
    xr: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12l9 6 9-6-9-6-9 6zM3 12v6l9 6 9-6v-6"
      />
    ),
    simulation: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 00-2-2"
      />
    )
  };

  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      {IconPaths[iconKey]}
    </svg>
  );
};

const TechCard = memo(({ stack, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl p-6 cursor-pointer
        transition-all duration-300 transform hover:-translate-y-1
        ${isSelected ? 'shadow-2xl ring-2 ring-blue-500 bg-white' : 'shadow-lg hover:shadow-xl bg-white'}`}
      aria-selected={isSelected}
      role="button"
      aria-label={`View ${stack.title} technologies`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${isSelected ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'} transition-colors duration-300`}>
          <Icon iconKey={stack.iconKey} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{stack.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{stack.description}</p>
        </div>
      </div>
    </div>
  );
});

const Tools = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  const techStacks = [
    {
      title: "VR Development",
      iconKey: "vr",
      description: "Immersive virtual reality experiences using advanced game engines",
      technologies: [
        { name: "Unity", description: "Game engine" },
        { name: "Unreal Engine", description: "Photorealistic rendering" },
        { name: "VRChat SDK", description: "Social VR development" }
      ]
    },
    {
      title: "XR Solutions",
      iconKey: "xr",
      description: "Cross-reality applications blending VR, AR, and MR",
      technologies: [
        { name: "Microsoft HoloLens", description: "Mixed reality hardware" },
        { name: "ARKit", description: "Apple AR framework" },
        { name: "ARCore", description: "Google AR SDK" }
      ]
    },
    {
      title: "Simulation Development",
      iconKey: "simulation",
      description: "Realistic simulations for training and entertainment",
      technologies: [
        { name: "PhysX", description: "Physics engine" },
        { name: "Havok", description: "Game physics" },
        { name: "Vuforia", description: "Augmented reality" }
      ]
    },
    {
      title: "AI-driven VR",
      iconKey: "vr",
      description: "Enhancing VR with artificial intelligence for smart interactions",
      technologies: [
        { name: "OpenAI API", description: "AI-powered interactions" },
        { name: "TensorFlow", description: "Machine learning for VR" },
        { name: "Unity ML-Agents", description: "Reinforcement learning in VR" }
      ]
    },
    {
      title: "Cloud XR Solutions",
      iconKey: "xr",
      description: "Cloud-based XR experiences for seamless performance",
      technologies: [
        { name: "AWS CloudXR", description: "Cloud rendering for XR" },
        { name: "Google Stadia", description: "Cloud gaming" },
        { name: "Azure Remote Rendering", description: "High-quality cloud graphics" }
      ]
    },
    {
      title: "Haptic Feedback Integration",
      iconKey: "simulation",
      description: "Realistic touch feedback for immersive experiences",
      technologies: [
        { name: "Ultrahaptics", description: "Mid-air haptic feedback" },
        { name: "HaptX", description: "Haptic gloves for VR" },
        { name: "SenseGlove", description: "Wearable haptic gloves" }
      ]
    }
  ];

  return (
    <>
      <WrapperContainer>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading>
              <div>
                VR/XR Simulation Tech Stack
              </div>
            </Heading>
            <Paragraph>
              <span>
                Advanced tools for developing cutting-edge VR and XR experiences
              </span>             
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
            {techStacks.map((stack, index) => (
              <TechCard
                key={index}
                stack={stack}
                isSelected={selectedStack === index}
                onClick={() => setSelectedStack(index === selectedStack ? null : index)}
              />
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default Tools;