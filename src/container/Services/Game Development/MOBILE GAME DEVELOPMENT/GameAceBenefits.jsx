import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Code, Scale, Rocket, Lightbulb } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-[#f3f4f6] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <Subheading>{title}</Subheading>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const DigiflexBenefits = () => {
  const benefits = [
    {
      icon: Code,
      title: "Cutting-Edge Game Development",
      description:
        "At Digiflex, we utilize advanced technologies and frameworks to develop engaging and immersive mobile games tailored for global audiences.",
    },
    {
      icon: Users,
      title: "Player-Centric Approach",
      description:
        "We prioritize user experience by creating games that captivate, entertain, and provide seamless interactions across multiple platforms.",
    },
    {
      icon: Clock,
      title: "Timely Project Delivery",
      description:
        "Our streamlined development process ensures your game is completed on schedule, without compromising on quality or innovation.",
    },
    {
      icon: Scale,
      title: "Scalable & Future-Ready Solutions",
      description:
        "We build mobile games that are scalable and adaptable, allowing your game to grow with expanding audiences and new market trends.",
    },
    {
      icon: Shield,
      title: "Robust Security & Data Protection",
      description:
        "Digiflex follows industry-best security standards to protect your intellectual property and game data, ensuring secure and reliable development.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Game Concepts",
      description:
        "We push the boundaries of creativity to deliver unique and engaging gameplay experiences that stand out in the competitive gaming industry.",
    },
  ];

  return (
    <WrapperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto"
      >
        <div className="text-center mb-12">
          <Heading>Why Choose Digiflex for Mobile Game Development?</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Digiflex specializes in creating high-performance, cross-platform mobile games that engage, entertain, and drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started with Digiflex
          </button>
        </motion.div>
      </motion.div>
    </WrapperContainer>
  );
};

export default DigiflexBenefits;
