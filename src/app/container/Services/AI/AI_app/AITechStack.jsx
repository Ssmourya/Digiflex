"use client";

import { FaBrain, FaCloud, FaChartBar, FaEye, FaRobot, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";

const techStack = [
  {
    title: "Machine Learning & Deep Learning",
    tools: "TensorFlow, PyTorch, Scikit-learn",
    icon: FaBrain,
  },
  {
    title: "Natural Language Processing (NLP)",
    tools: "OpenAI GPT, BERT, Dialogflow",
    icon: FaRobot,
  },
  {
    title: "Computer Vision",
    tools: "OpenCV, YOLO, Google Vision API",
    icon: FaEye,
  },
  {
    title: "AI Cloud Services",
    tools: "AWS AI/ML, Google AI, Microsoft Azure AI",
    icon: FaCloud,
  },
  {
    title: "Big Data & Analytics",
    tools: "Apache Spark, Hadoop, Pandas",
    icon: FaChartBar,
  },
  {
    title: "AI-Powered Automation",
    tools: "UiPath, Automation Anywhere, Blue Prism",
    icon: FaCogs,  // New icon for automation
  },
];

export default function AITechStack() {
  return (
    <WrapperContainer>
      <div>
        <Heading>Our AI Tech Stack</Heading>
      </div>
      <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="border border-gray-300 p-6 rounded-2xl shadow-xl h-56 bg-white hover:bg-blue-50 transition duration-300">
              <div className="flex flex-col items-center text-center">
                <tech.icon className="text-5xl text-blue-400 mb-4" />
                <Subheading>{tech.title}</Subheading>
                <Paragraph>{tech.tools}</Paragraph>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
}
