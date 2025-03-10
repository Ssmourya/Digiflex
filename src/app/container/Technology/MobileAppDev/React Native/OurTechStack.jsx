"use client";

import { motion } from "framer-motion";
import { FaCode, FaCogs, FaServer, FaDatabase, FaBug, FaTools } from "react-icons/fa";
import Heading from "../../../../Layout/Heading";
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph'
const techStack = [
  {
    category: "Programming Languages",
    icon: <FaCode className="text-[#172554] text-2xl mr-2" />, 
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaCogs className="text-[#172554] text-2xl mr-2" />, 
    items: ["React Native", "Expo", "Redux", "React Navigation"],
  },
  {
    category: "Backend Services",
    icon: <FaServer className="text-[#172554] text-2xl mr-2" />, 
    items: ["Firebase", "AWS Amplify", "GraphQL", "Node.js"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-[#172554] text-2xl mr-2" />, 
    items: ["SQLite", "Realm", "Firebase Firestore"],
  },
  {
    category: "Testing & Debugging Tools",
    icon: <FaBug className="text-[#172554] text-2xl mr-2" />, 
    items: ["Jest", "Detox", "Reactotron"],
  },
  {
    category: "DevOps & CI/CD",
    icon: <FaTools className="text-[#172554] text-2xl mr-2" />,
    items: ["GitHub Actions", "Bitrise", "Fastlane", "Jenkins"],
  },
];

const OurTechStack = () => {
  return (
    <motion.div 
      className="w-full py-16 bg-white text-gray-900 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading
        className="text-5xl font-semibold text-center mb-10 text-[#172554]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our React Native Tech Stack
      </Heading>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((stack, index) => (
          <motion.div
            key={index}
            className="cursor-pointer p-6 bg-white rounded-xl shadow-md border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Subheading
              className="text-xl font-medium mb-4 flex items-center text-[#172554]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {stack.icon} {stack.category}
            </Subheading>
            <ul className="space-y-2">
              {stack.items.map((item, idx) => (
                <Paragraph
                
                  key={idx} 
                  className="text-lg flex items-center text-gray-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span className="mr-2 text-blue-600">✔</span> {item}
               
                </Paragraph>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurTechStack;
