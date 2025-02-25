import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaLock, FaCloud, FaMicrochip, FaCubes, FaEye, FaNetworkWired } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import WrapperContainer from "../../../Layout/WrapperContainer";

const images1 = [
  "https://i.pinimg.com/736x/ae/5f/c6/ae5fc66ea21871dd7aa620e7109f048d.jpg",
  "https://i.pinimg.com/736x/85/2b/2f/852b2f1dda4e60109535ae25327391e6.jpg",
  "https://i.pinimg.com/736x/ae/70/96/ae7096e8c42185fbc1eda6b54eefa4f8.jpg",
  "https://i.pinimg.com/736x/91/fc/ed/91fced729a9ceb98fc3889b23a38c184.jpg",
];

const images2 = [
  "https://i.pinimg.com/736x/0e/c2/94/0ec294ac6fc6e583ad648f9aefd01666.jpg",
  "https://i.pinimg.com/736x/57/a2/07/57a2079f1f20614c08e84d596cc7d0f1.jpg",
  "https://i.pinimg.com/736x/dc/03/2f/dc032f4708ac43b395204450bd888ac3.jpg",
  "https://i.pinimg.com/736x/47/f6/82/47f682ac56e35aa606baa273b2810931.jpg",
];

const technologies = [
  { name: "Artificial Intelligence", description: "AI powers automation, chatbots, and smart assistants.", icon: <FaRobot /> },
  { name: "Machine Learning", description: "ML enables systems to learn and improve from data.", icon: <FaBrain /> },
  { name: "Blockchain", description: "Decentralized and secure technology for digital transactions.", icon: <FaCubes /> },
  { name: "Cybersecurity", description: "Protecting digital assets from cyber threats.", icon: <FaLock /> },
  { name: "Cloud Computing", description: "Scalable and flexible storage solutions.", icon: <FaCloud /> },
  { name: "IoT (Internet of Things)", description: "Connecting smart devices for automation.", icon: <FaNetworkWired /> },
  { name: "Quantum Computing", description: "Next-gen computing for complex problem-solving.", icon: <FaMicrochip /> },
  { name: "AR/VR (Augmented & Virtual Reality)", description: "Immersive digital experiences.", icon: <FaEye /> },
];

const Marquee = ({ images, direction }) => {
  return (
    <div className="overflow-hidden h-[400px] w-[160px] relative">
      <motion.div
        animate={{ y: direction === "up" ? [-400, 0] : [0, -400] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Marquee Image"
            className="w-[150px] h-[150px] object-cover rounded-lg shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

const TechnologyCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 bg-[#121826] text-white flex items-center gap-4"
        >
          <div className="text-blue-400 text-2xl">{tech.icon}</div>
          <div>
            <h3 className="font-bold text-lg text-blue-300">{tech.name}</h3>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="bg-black text-white py-16 flex justify-center items-center">
    <WrapperContainer>
      <div className="w-full max-w-[1400px] rounded-[2.5rem] p-0.5 overflow-hidden bg-[#121826] flex flex-col justify-center items-center">
        <div className="relative bg-black rounded-[2.4rem] p-8 sm:p-12 lg:p-10 overflow-hidden text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-blue-400"
          >
            Key Features
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="flex gap-4">
              <Marquee images={images1} direction="up" />
              <Marquee images={images2} direction="down" />
            </div>
            <TechnologyCards />
          </div>
        </div>
      </div>
      </WrapperContainer>
    </div>
  );
};

export default KeyFeatures;
  