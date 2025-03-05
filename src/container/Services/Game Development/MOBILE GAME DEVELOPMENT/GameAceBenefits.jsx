import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Code, Scale, Lightbulb } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-3 flex flex-col border border-gray-200"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-purple-600 rounded-full">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <WrapperContainer>
          <div className="text-center mb-12">
          <Heading>Why Choose Digiflex for Mobile Game Development?</Heading>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Digiflex specializes in creating high-performance, cross-platform
            mobile games that engage, entertain, and drive success.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <motion.button
            className="bg-purple-600 text-white px-8 py-3 rounded text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started with Digiflex
          </motion.button>
        </div>
          
    </WrapperContainer>
  );
};

export default DigiflexBenefits;
