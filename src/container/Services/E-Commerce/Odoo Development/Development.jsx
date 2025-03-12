"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const odooFeatures = [
  {
    title: "Customization & Modules",
    content:
      "Odoo allows extensive customization with modular architecture. Businesses can develop custom modules to meet specific needs, including CRM, accounting, HR, and more.",
    image: "/assets/Modules.jpg",
  },
  {
    title: "E-commerce & POS",
    content:
      "Odoo integrates seamlessly with e-commerce platforms and POS systems, enabling businesses to manage sales, inventory, and customer data efficiently.",
    image: "/assets/ecommerceImg.jpg",
  },
  {
    title: "Accounting & Finance",
    content:
      "Odoo's built-in accounting features automate financial reporting, invoicing, and tax compliance, making financial management easier for businesses.",
    image: "/assets/Accounting_Finance.jpg",
  },
  {
    title: "Inventory & Supply Chain",
    content:
      "Odoo offers real-time inventory tracking, warehouse management, and automated stock replenishment to streamline supply chain operations.",
    image: "/assets/Inventory_Supply_Chain.jpg",
  },
  {
    title: "Project Management",
    content:
      "Odoo's project management tools help businesses track tasks, collaborate with teams, and manage deadlines with Kanban and Gantt chart views.",
    image: "/assets/Project_Management.jpg",
  },
  {
    title: "Security & Scalability",
    content:
      "Odoo ensures data security with encryption, access control, and cloud scalability, making it suitable for businesses of all sizes.",
    image: "/assets/Security_Scalability.jpg",
  },
];

const OdooDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <WrapperContainer>
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-0 px-0">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <Heading>Odoo Development & Features</Heading>
          <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
          <Paragraph className="text-center">
            Discover how Odoo’s modular system can revolutionize your business
            processes with seamless integrations and powerful automation.
          </Paragraph>
        </div>

        {/* Tabs & Content Section */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar (Feature Tabs) */}
          <div className="md:col-span-1 flex flex-col gap-8">
            {odooFeatures.map((feature, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-5 py-3 text-sm font-medium rounded-lg transition-all duration-300 text-left ${
                  activeIndex === index
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {feature.title}
              </motion.button>
            ))}
          </div>

          {/* Right Side (Feature Content & Image) */}
          <div className="md:col-span-2">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 bg-white rounded-xl shadow-lg border border-gray-200 text-left"
            >
              {/* Image - Full Visibility without Cropping */}
              <div className="w-full mb-6 flex justify-center">
                <Image
                  src={odooFeatures[activeIndex].image}
                  alt={odooFeatures[activeIndex].title}
                  className="w-full max-h-80 object-contain rounded-lg shadow-md"
                  priority={false}
                />
              </div>

              {/* Title & Description */}
              <Subheading>{odooFeatures[activeIndex].title}</Subheading>
              <Paragraph>{odooFeatures[activeIndex].content}</Paragraph>
            </motion.div>
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default OdooDevelopment;
