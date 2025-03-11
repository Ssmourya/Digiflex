"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Briefcase,
  Shield,
  Globe,
  ShoppingBag,
  Truck,
  Home,
  GraduationCap,
  Factory,
  Film,
  BookOpen,
  Car,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const industries = [
  {
    name: "HEALTHCARE",
    icon: HeartPulse,
    description:
      "Delivering secure, scalable, and compliant IT solutions to enhance patient care and streamline medical operations.",
  },
  {
    name: "FINANCIAL AND BANKING",
    icon: Briefcase,
    description:
      "Enabling seamless, secure, and real-time financial transactions with cutting-edge fintech innovations.",
  },
  {
    name: "INSURANCE",
    icon: Shield,
    description:
      "Modernizing legacy systems to improve claims processing, risk assessment, and customer experience.",
  },
  {
    name: "INTERNET SERVICES AND SOFTWARE",
    icon: Globe,
    description:
      "Building robust, scalable platforms to power the digital economy and drive user engagement.",
  },
  {
    name: "RETAIL & E-COMMERCE",
    icon: ShoppingBag,
    description:
      "Transforming shopping experiences with AI-driven personalization and seamless omnichannel solutions.",
  },
  {
    name: "LOGISTICS & DELIVERY & SUPPLY CHAIN",
    icon: Truck,
    description:
      "Optimizing operations with IoT, AI, and real-time tracking for efficient supply chain management.",
  },
  {
    name: "REAL ESTATE",
    icon: Home,
    description:
      "Digitizing property management and enhancing customer experiences with smart, data-driven solutions.",
  },
  {
    name: "EDUCATION",
    icon: GraduationCap,
    description:
      "Empowering learning ecosystems with scalable EdTech platforms and immersive e-learning tools.",
  },
  {
    name: "MANUFACTURING",
    icon: Factory,
    description:
      "Driving Industry 4.0 with smart automation, predictive maintenance, and IoT-enabled production systems.",
  },
  {
    name: "ENTERTAINMENT",
    icon: Film,
    description:
      "Revolutionizing content creation, distribution, and engagement with AI and cloud-based solutions.",
  },
  {
    name: "PUBLISHING",
    icon: BookOpen,
    description:
      "Streamlining content workflows and enabling digital transformation for modern publishing needs.",
  },
  {
    name: "AUTOMOTIVE",
    icon: Car,
    description:
      "Accelerating innovation with connected vehicles, autonomous driving technologies, and smart manufacturing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function IndustriesSection() {
  return (
    <WrapperContainer>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Heading>Industries We Serve</Heading>
          <Paragraph>
            At Digiflex.ai, we specialize in delivering DevOps advisory services
            and building scalable, future-ready IT infrastructures. From
            startups to enterprises, we empower organizations across diverse
            industries—including FinTech, Healthcare, Retail, and SaaS—to
            streamline operations, accelerate innovation, and gain a competitive
            edge in today's fast-paced digital landscape.
          </Paragraph>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="rounded-lg p-4 w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </WrapperContainer>
  );
}

export default IndustriesSection;
