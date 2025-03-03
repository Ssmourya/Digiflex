import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs, servicesData, descriptions, animations } from "./constants";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      variants={animations.item}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform"
    >
      <div className="text-blue-800 mb-6">
        <Icon size={30} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const TabContent = ({ activeTab }) => (
  <motion.p
    className="text-gray-600 text-center max-w-3xl mx-auto mb-6 text-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    {descriptions[activeTab]}
  </motion.p>
);

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("full-cycle");

  return (
    <WrapperContainer>
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="show"
        variants={animations.container}
      >
        <Heading>WE WORK WITH</Heading>

        <TabContent activeTab={activeTab} />

        <div className="flex justify-center space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-800 text-white shadow-md hover:scale-105"
                  : "bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="exit"
            animate="enter"
            exit="exit"
            variants={animations.tabContent}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData[activeTab].map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </WrapperContainer>
  );
};
