import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Settings, Eye, Box } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const technologies = [
  {
    name: "Knockout.js",
    icon: <Code size={40} />,
    description:
      "A JavaScript library that provides declarative bindings and dependency tracking for building dynamic UIs.",
    color: "bg-blue-500",
  },
  {
    name: "MVVM Architecture",
    icon: <Box size={40} />,
    description:
      "Knockout.js follows the Model-View-ViewModel (MVVM) pattern for clean and maintainable code.",
    color: "bg-purple-500",
  },
  {
    name: "Observable Data",
    icon: <Eye size={40} />,
    description:
      "Uses observables to automatically update the UI when data changes.",
    color: "bg-green-500",
  },
  {
    name: "Computed Observables",
    icon: <Settings size={40} />,
    description:
      "Dynamically calculates values based on other observables and updates automatically.",
    color: "bg-yellow-500",
  },
  {
    name: "Knockout.js Components",
    icon: <Database size={40} />,
    description:
      "Encapsulated UI elements that can be reused throughout the application.",
    color: "bg-red-500",
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
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-64 flex flex-col justify-between">
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            className={`w-16 h-16 rounded-full ${tech.color} flex items-center justify-center text-white`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {tech.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 mt-4 group-hover:text-blue-600 transition-colors text-center">
            {tech.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm text-center">{tech.description}</p>
      </div>
    </motion.div>
  );
}


export default function ToolsAndTech() {
  return (
    <WrapperContainer>
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading>Knockout.js Development Toolkit</Heading>
          <Paragraph>
            Explore the tools and technologies we use to craft dynamic,
            data-driven applications with Knockout.js.
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
    </WrapperContainer>
  );
}
