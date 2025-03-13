"use client";

import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const WhyKnockoutJS = () => {
  const features = [
    {
      title: "Two-Way Data Binding",
      description:
        "Ensures real-time synchronization between the UI and the data model, reducing manual DOM manipulation.",
    },
    {
      title: "Automatic UI Refresh",
      description:
        "Observables detect changes in data and update the UI automatically, improving responsiveness.",
    },
    {
      title: "Dependency Tracking",
      description:
        "Efficiently tracks data dependencies and updates only the necessary UI components.",
    },
    {
      title: "Computed Observables",
      description:
        "Derives values automatically based on dependencies, optimizing performance and reducing redundant calculations.",
    },
    {
      title: "Component-Based Architecture",
      description:
        "Encapsulates UI logic into reusable components, making applications scalable and maintainable.",
    },
    {
      title: "Template-Based Rendering",
      description:
        "Supports dynamic UI rendering using templates, improving code reusability and modularity.",
    },
  ];

  return (
    <WrapperContainer>
      <Heading>Why Choose Knockout.js?</Heading>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
          >
            <div className="text-xl font-semibold mb-2 text-blue-600">
              {feature.title}
            </div>
            <p className="text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default WhyKnockoutJS;
