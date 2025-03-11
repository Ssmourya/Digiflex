"use client";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const processes = [
  {
    title: "Discovery",
    description:
      "We start with a kick-off meeting to make sure we understand your requirements and objectives.",
    color: "bg-blue-100",
  },
  {
    title: "Planning",
    description:
      "We develop a project plan that outlines the timeline, key milestones, and deliverables.",
    color: "bg-yellow-100",
  },
  {
    title: "Development",
    description:
      "Our developers write clean, concise, and scalable code that meets your project requirements.",
    color: "bg-purple-100",
  },
  {
    title: "Testing",
    description:
      "We test our code to make sure it functions correctly, is secure, and meets your expectations.",
    color: "bg-red-100",
  },
  {
    title: "Deployment",
    description:
      "Once the software is tested and approved, we deploy it on the hosting server.",
    color: "bg-green-100",
  },
  {
    title: "Maintenance",
    description:
      "We provide ongoing maintenance and support to make sure your software runs smoothly.",
    color: "bg-orange-100",
  },
];

const Process = () => {
  return (
    <WrapperContainer>
      {/* Header Section */}
      <div className="text-center mb-10">
        <Heading>Our Development Process</Heading>
        <Paragraph>
          A step-by-step approach to building robust software.
        </Paragraph>
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processes.map((process, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-3xl shadow-xl ${process.color} transform transition-all duration-300 hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {process.title}
            </h3>
            <p className="text-gray-700 mt-2">{process.description}</p>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Process;
