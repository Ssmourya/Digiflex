import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaCloud, FaCubes, FaLock, FaEye } from "react-icons/fa";
import WrapperContainer from "../../../Layout/WrapperContainer";

const strategies = [
  {
    number: "01",
    title: "PROJECT STRATEGY",
    icon: <FaRobot className="text-blue-400" />, 
    description: "Our project strategy ensures thorough planning and precise execution.",
    image: "https://i.pinimg.com/736x/2f/18/34/2f18340560646d0712eca0a4c9c69736.jpg",
  },
  {
    number: "02",
    title: "DESIGN & MOTION",
    icon: <FaBrain className="text-blue-400" />,
    description: "Innovative design combined with dynamic motion for engaging experiences.",
    image: "https://i.pinimg.com/originals/a5/35/60/a53560c8088900e266880f779dacced7.gif",
  },
  {
    number: "03",
    title: "SMOOTH DEVELOPMENT",
    icon: <FaCloud className="text-blue-400" />,
    description: "Seamless development processes ensure efficiency and scalability.",
    image: "https://i.pinimg.com/736x/05/43/fe/0543feb1496162dd651921bab79af301.jpg",
  },
  {
    number: "04",
    title: "POWERFUL MARKETING",
    icon: <FaCubes className="text-blue-400" />,
    description: "Robust marketing strategies drive growth and brand recognition.",
    image: "https://i.pinimg.com/736x/96/af/8d/96af8d60f3ef5b40a357169293974faf.jpg",
  },
  {
    number: "05",
    title: "ONGOING SUPPORT",
    icon: <FaLock className="text-blue-400" />,
    description: "We offer continuous support to keep your operations running smoothly.",
    image: "https://i.pinimg.com/736x/0d/3e/1c/0d3e1c4677a54db8e814c7cf0a5311bc.jpg",
  },
  {
    number: "06",
    title: "FUTURE EVOLUTION",
    icon: <FaEye className="text-blue-400" />,
    description: "Innovative solutions to prepare you for tomorrow’s challenges.",
    image: "https://i.pinimg.com/736x/86/a8/83/86a8830b333868867434d47350341a34.jpg",
  },
];

const Card = ({ strategy }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.6)" }}
      className="bg-gray-900 rounded-2xl p-6 shadow-md cursor-pointer transition-all border border-gray-700 text-center"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-3xl font-extrabold text-blue-400">{strategy.number}</span>
        {strategy.icon}
      </div>
      <h3 className="mt-4 text-2xl font-bold text-white">{strategy.title}</h3>
      <p className="mt-2 text-sm text-gray-400">{strategy.description}</p>
    </motion.div>
  );
};

const HorizontalMarquee = () => {
  const images = strategies.map((strategy) => strategy.image);
  return (
    <div className="w-full overflow-hidden mt-10 flex justify-center">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {images.concat(images).map((img, idx) => (
          <img
            key={`marquee-${idx}`}
            src={img}
            alt={`Marquee ${idx}`}
            className="w-40 h-40 object-cover rounded-lg shadow-lg border border-gray-700 mx-2"
          />
        ))}
      </motion.div>
    </div>
  );
};

const StandOut = () => {
  return (
    <div className="bg-black  flex justify-center items-center p-10">
      <WrapperContainer>
    <div className=" text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 text-center mb-10">
          PATHWAY TO SUCCESS.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {strategies.map((strategy, index) => (
            <Card key={index} strategy={strategy} />
          ))}
        </div>
        <HorizontalMarquee />
      </div>
      </WrapperContainer>
    </div>
  );
};

export default StandOut;