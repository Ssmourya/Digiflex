import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import {
  FaGamepad,
  FaVrCardboard,
  FaUsers,
  FaCloud,
  FaRocket,
  FaCogs,
  FaGlobe,
  FaBrain,
  FaHandsHelping,
  FaMobileAlt,
  FaHdd,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  { icon: <FaVrCardboard />, title: "Immersive VR Environments" },
  { icon: <FaGlobe />, title: "AR/XR Integration" },
  { icon: <FaUsers />, title: "Real-time Multiplayer Support" },
  { icon: <FaBrain />, title: "AI-driven NPCs & Behavior" },
  { icon: <FaHandsHelping />, title: "Haptic Feedback Support" },
  { icon: <FaCogs />, title: "Physics-Based Interactions" },
  { icon: <FaRocket />, title: "High-Performance Graphics" },
  { icon: <FaCloud />, title: "Cloud Syncing & Cross-Platform Play" },
  { icon: <FaHdd />, title: "Optimized Storage Solutions" },
  { icon: <FaMobileAlt />, title: "Mobile & VR Device Compatibility" },
  { icon: <FaShieldAlt />, title: "Secure Asset Ownership & Transactions" },
  { icon: <FaGamepad />, title: "User Customization & Avatars" },
];

const VrXrServices = () => {
  return (
    <>
      <WrapperContainer>
        <Heading>
          <div>Looking for a VR/XR Simulation Game Developer?</div>
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-md bg-[#f3f4f6] min-h-[150px] w-full sm:w-auto"
            >
              <div className="text-4xl text-blue-500 mb-3">{feature.icon}</div>
              <p className="text-center font-semibold">{feature.title}</p>
            </div>
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default VrXrServices;