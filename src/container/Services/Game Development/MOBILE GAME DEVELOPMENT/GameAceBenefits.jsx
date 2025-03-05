import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Code, Scale, Lightbulb } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-4 bg-blue-600 rounded-full">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
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
      <div className="mx-auto">
        <div className="text-center mb-12">
          <Heading>Why Choose Digiflex for Mobile Game Development?</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Digiflex specializes in creating high-performance, cross-platform
            mobile games that engage, entertain, and drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started with Digiflex
          </button>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default DigiflexBenefits;
