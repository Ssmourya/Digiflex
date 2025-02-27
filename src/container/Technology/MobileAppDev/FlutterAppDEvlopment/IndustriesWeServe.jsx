import React from "react";
import { motion } from "framer-motion";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph"; // Import Subheading
import {
  HeartPulse,
  ShoppingCart,
  BookOpen,
  Banknote,
  PlayCircle,
  Globe,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Telemedicine",
    description: "Patient monitoring, doctor consultations",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Mobile shopping, digital payments",
  },
  {
    icon: BookOpen,
    title: "Education & E-learning",
    description: "Interactive learning, live classes",
  },
  {
    icon: Banknote,
    title: "Finance & FinTech",
    description: "Secure banking & stock trading apps",
  },
  {
    icon: PlayCircle,
    title: "Entertainment & Media",
    description: "Video streaming, live events, AR/VR gaming",
  },
  {
    icon: Globe,
    title: "Travel & Hospitality",
    description: "Innovative travel solutions and seamless booking experiences",
  },
];

const IndustriesWeServe = () => {
  return (
    <div className="py-20 bg-white text-[#172554] text-center">
      {/* Main Heading */}
      <Heading
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-2 text-[#172554]"
      >
        Industries We Serve with Flutter Apps
      </Heading>
      
      {/* Subheading in Title */}
      <Subheading
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        
      >
        Discover how our Flutter solutions empower diverse industries.
      </Subheading>

      {/* Industries Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <industry.icon size={50} className="text-[#172554] mb-4" />
            {/* Card Title as Heading */}
            <Subheading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-semibold text-black"
            >
              {industry.title}
            </Subheading>
            {/* Card Subheading as Subheading */}
            <Paragraph
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-base text-gray-700"
            >
              {industry.description}
            </Paragraph>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <IndustriesWeServe />
    </>
  );
}
