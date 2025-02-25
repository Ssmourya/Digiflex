import React from "react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const TopFeature = () => {
  const features = [
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              d="M12 2L2 7h20L12 2zM2 7l10 5 10-5M2 7v10l10 5 10-5V7"
              strokeWidth="2"
            />
          </svg>
        </div>
      ),
      title: "3D Modeling",
      description:
        "Create detailed 3D models for characters, props, and environments with optimized topology.",
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
            <path d="M3 9h18M9 3v18" strokeWidth="2" />
          </svg>
        </div>
      ),
      title: "2D Concept Art",
      description:
        "Develop stunning 2D concepts for characters and scenes to guide your game’s visual style.",
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              d="M12 2a10 10 0 0 0-10 10h4l4 4 4-4h4a10 10 0 0 0-6-10z"
              strokeWidth="2"
            />
          </svg>
        </div>
      ),
      title: "Character Design",
      description:
        "Design unique characters with personality, from sketches to fully rigged models.",
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path d="M3 18h18v-6a9 9 0 0 0-18 0v6zM12 3v6" strokeWidth="2" />
          </svg>
        </div>
      ),
      title: "Environment Art",
      description:
        "Build immersive game worlds with detailed and atmospheric environment designs.",
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              d="M12 2v6m-4 4h8m-8 4h8m-4-12a10 10 0 0 0-10 10h4l4 4 4-4h4a10 10 0 0 0-6-10z"
              strokeWidth="2"
            />
          </svg>
        </div>
      ),
      title: "Animation Services",
      description:
        "Bring characters and objects to life with smooth and dynamic animations.",
    },
    {
      icon: (
        <div className="w-10 h-10 mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2" />
            <path d="M2 8h20" strokeWidth="2" />
          </svg>
        </div>
      ),
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user interfaces for seamless gameplay experience.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="text-center p-6">
        <Heading>
          <h1>Top Features of Game Art Services</h1>
        </Heading>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl text-center border-[#6D4A2D] transition-all duration-500 hover:shadow-2xl hover:border-white hover:bg-blue-500 group transform hover:-translate-y-1 bg-[#f3f4f6]"
            >
              <div className="text-amber-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TopFeature;
