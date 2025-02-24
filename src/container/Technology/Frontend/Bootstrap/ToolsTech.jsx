import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Code,
  Paintbrush,
  Settings,
  Layers,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const technologies = [
  {
    name: "Bootstrap",
    icon: <LayoutDashboard size={40} />,
    description:
      "The most popular CSS framework for building responsive, mobile-first websites.",
    color: "bg-purple-500",
  },
  {
    name: "Sass",
    icon: <Code size={40} />,
    description:
      "A powerful CSS preprocessor that enhances Bootstrap styling and customization.",
    color: "bg-pink-500",
  },
  {
    name: "Tailwind CSS",
    icon: <Paintbrush size={40} />,
    description:
      "Utility-first CSS framework that complements Bootstrap for custom designs.",
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: <Settings size={40} />,
    description:
      "Enhance Bootstrap components with interactive and dynamic behavior.",
    color: "bg-yellow-500",
  },
  {
    name: "UI/UX Design",
    icon: <Layers size={40} />,
    description:
      "Create intuitive user interfaces using Bootstrap's design principles.",
    color: "bg-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

function TechCard({ tech }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="relative z-10">
          <motion.div
            className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center mb-4 mx-auto text-white`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {tech.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
            {tech.name}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{tech.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ToolsAndTech() {
  return (
    <WrapperContainer>
      <div className=" bg-white ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Heading>Bootstrap Development Toolkit</Heading>
            <Paragraph>
              Explore the tools and technologies we use to craft stunning
              Bootstrap-based web applications.
            </Paragraph>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {technologies.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </WrapperContainer>
  );
}
