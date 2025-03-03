import React from "react";
import { motion } from "framer-motion";
import {
  MonitorIcon,
  ShoppingCartIcon,
  BuildingIcon,
  PenToolIcon,
  WrenchIcon,
} from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragrph from "../../../../Layout/Paragraph"


const ServiceCard = ({ icon, title, description, linkText = "VIEW MORE" }) => (
  <motion.div
    className="flex flex-col space-y-4 p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 md:p-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="w-12 h-12 text-[#172554] flex items-center justify-center"
      whileHover={{ rotate: 15 }}
    >
      {icon}
    </motion.div>
    <Subheading className="text-xl font-semibold text-[#172554]">
      {title}
    </Subheading>
    <Paragrph>
      {description}
    </Paragrph>
    {linkText && (
      <button className="text-[#172554] hover:text-blue-700 text-sm font-medium uppercase text-left w-fit">
        {linkText}
      </button>
    )}
  </motion.div>
);

export default function Website3() {
  const services = [
    {
      icon: <MonitorIcon className="w-10 h-10" />,
      title: "Small Business Website",
      description:
        "A website is essential for your startup’s success. Digiflex.ai creates stunning, user-friendly websites to enhance your brand’s online presence.",
    },
    {
      icon: <BuildingIcon className="w-10 h-10" />,
      title: "Web Application Development",
      description:
        "Boost your business with secure, scalable web apps. Digiflex.ai specializes in creating solutions that drive efficiency and engagement.",
    },
    {
      icon: <ShoppingCartIcon className="w-10 h-10" />,
      title: "eCommerce Website Design",
      description:
        "Build an optimized online store with Digiflex.ai. We develop impressive B2B & B2C marketplaces tailored to your business needs.",
    },
    {
      icon: <BuildingIcon className="w-10 h-10" />,
      title: "Corporate Website Design",
      description:
        "Professionalism, impressive UI, and easy accessibility – Digiflex.ai crafts secure websites for enterprises worldwide.",
    },
    {
      icon: <PenToolIcon className="w-10 h-10" />,
      title: "UX/UI Design",
      description:
        "We design user-friendly, attractive websites that improve accessibility and engagement for your audience.",
    },
    {
      icon: <WrenchIcon className="w-10 h-10" />,
      title: "Support and Maintenance",
      description:
        "Our team provides ongoing performance monitoring, troubleshooting, and upgrades to keep your software running smoothly.",
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <Heading className="text-center text-3xl font-bold mb-10">
          Our Services
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
