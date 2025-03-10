"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Search,
  Settings2,
  Users2,
  Workflow,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const solutions = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Services",
    description:
      "At Digiflex.ai, we streamline continuous development, integration, testing, and deployment with our robust CI/CD pipeline services. Our automation ensures seamless code integration, rigorous testing, and swift deployments, accelerating your software delivery lifecycle. Hire our expert DevOps consultants for efficient implementation and optimized workflows that drive innovation and reliability.",
  },
  {
    icon: Search,
    title: "DevOps Assessment",
    description:
      "At Digiflex.ai, our expert DevOps consultants conduct a thorough evaluation of your infrastructure and workflows. Through in-depth DevOps automation consulting, we identify strengths, uncover inefficiencies, and tap into hidden opportunities. Our tailored recommendations enhance productivity, quality, and agility, ensuring a streamlined and high-performing software delivery process.",
  },
  {
    icon: Settings2,
    title: "DevOps Management",
    description:
      "At Digiflex.ai, we go beyond implementation by offering comprehensive DevOps management services. We streamline operations, automate workflows, and optimize business processes for faster, more efficient software delivery. Our approach enhances collaboration, ensures continuous improvement, and drives agility—helping your business achieve high-quality outcomes with ease.",
  },
  {
    icon: Users2,
    title: "Team Augmentation",
    description:
      "Scale your team effortlessly with Digiflex.ai's skilled DevOps engineers. Our flexible team augmentation services integrate seamlessly into your workflow, bringing deep expertise in cutting-edge tools, best practices, and automation strategies to enhance efficiency and accelerate project delivery.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "At Digiflex.ai, we empower your development and operations with smart automation solutions. Our custom workflows eliminate manual inefficiencies, reduce errors, and accelerate delivery timelines—enhancing productivity, scalability, and reliability across your DevOps ecosystem.",
  },
  {
    icon: Shield,
    title: "Security Integration",
    description:
      "At Digiflex.ai, we embed security at every stage of your DevOps pipeline. Our proactive DevSecOps approach safeguards your applications and infrastructure without compromising speed, ensuring secure, compliant, and rapid deployments.",
  },
];

function DevOpsSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = solutions.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsToShow, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - cardsToShow));
  };

  const getVisibleSolutions = () => {
    return solutions.slice(currentIndex, currentIndex + cardsToShow);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <WrapperContainer>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading>DevOps Solutions We Offer</Heading>
          <Paragraph>
            As a DevOps consulting company, we help businesses of every kind for
            better efficiency by embracing the best DevOps practices and
            advancing the project at hand. Through implementing DevOps software
            consultancy, our consultants can help you assess existing systems
            and help improve them.
          </Paragraph>
        </div>

        <div className="relative px-6">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={currentIndex}
            >
              {getVisibleSolutions().map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={`${solution.title}-${currentIndex}-${index}`}
                    className="w-full min-w-[calc(33.333%-1rem)] bg-blue-950 rounded-xl p-8 text-white"
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                  >
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                      <Icon className="w-12 h-12 text-blue-600 mt-4" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg transition-all ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 opacity-100"
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-blue-950" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg transition-all ${
              currentIndex >= maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 opacity-100"
            }`}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6 text-blue-950" />
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default DevOpsSolutions;
