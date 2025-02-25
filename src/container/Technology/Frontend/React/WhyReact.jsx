import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineRocket,
  AiOutlineThunderbolt,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { FaLaptopCode, FaSearch, FaTools } from "react-icons/fa";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const Data = [
  {
    icon: <AiOutlineRocket size={40} />, 
    title: "Speed", 
    description:
      "The development process can proceed more quickly when specific app components are used on the client and server.",
    color: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    icon: <FaLaptopCode size={40} />, 
    title: "Usability", 
    description:
      "If you know the fundamentals of JavaScript, then the development and deployment of React won't take too long.",
    color: "bg-gradient-to-r from-pink-500 to-pink-700",
  },
  {
    icon: <AiOutlineThunderbolt size={40} />, 
    title: "Performance", 
    description:
      "The core of the React framework provides server-side rendering and a virtual DOM program that makes complex apps run fast.",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    icon: <AiOutlineSafetyCertificate size={40} />, 
    title: "Easy to Learn", 
    description:
      "Compared to other front-end frameworks like Angular and Vue, React is much easier to learn.",
    color: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    icon: <FaSearch size={40} />, 
    title: "SEO Friendly", 
    description:
      "Out of all the frameworks, React stands out as being SEO-friendly as it reduces page load time due to fast rendering.",
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    icon: <FaTools size={40} />, 
    title: "Reliable Development Tools", 
    description:
      "Application development with ReactJS becomes easy with reliable ReactJS development tools and Redux development tools.",
    color: "bg-gradient-to-r from-indigo-500 to-indigo-700",
  },
];

const Card = ({ icon, title, description, color }) => {
  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-lg text-white ${color} transition-transform transform hover:scale-110 hover:shadow-2xl`}
      whileHover={{ scale: 1.1 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-sm text-center mt-2">{description}</p>
    </motion.div>
  );
};

export const WhyReact = () => {
  return (
    <WrapperContainer>
      <Heading>Why ReactJS for Web Development</Heading>
      <Paragraph>
        Let's elaborate on more points to know why ReactJS is best for web development needs.
      </Paragraph>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Data.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </WrapperContainer>
  );
};
