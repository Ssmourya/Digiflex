"use client";

import React from "react";
import { Code, Clipboard, CheckCircle, Coffee, ShoppingCart, Globe, Shield, Layers } from "lucide-react";
import bussse from "../../../../../../public/assets/Busssensss.png";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragrph from "../../../../Layout/Paragraph"
import { motion } from "framer-motion";

const processSteps = [
  { title: "Planning", description: "Understanding business needs.", icon: <Clipboard className="w-8 h-8 text-white" /> },
  { title: "Design", description: "Creating visually appealing mockups.", icon: <Coffee className="w-8 h-8 text-white" /> },
  { title: "Development", description: "Turning designs into functional websites.", icon: <Code className="w-8 h-8 text-white" /> },
  { title: "Testing", description: "Ensuring usability and security.", icon: <CheckCircle className="w-8 h-8 text-white" /> },
  { title: "Launch", description: "Deploying the website.", icon: <ShoppingCart className="w-8 h-8 text-white" /> },
  { title: "Maintenance", description: "Ongoing support and updates.", icon: <Clipboard className="w-8 h-8 text-white" /> },
];

const packages = [
  { 
    title: "STARTUP WEBSITE", 
    subtitle: "Best for Startups", 
    description: "Simple and professional websites for new businesses.", 
    buttonText: "Startup Plan", 
    icon: <Clipboard className="w-8 h-8 text-white" /> 
  },
  { 
    title: "SMALL BUSINESS", 
    subtitle: "Best for Small Business", 
    description: "More functionality and engagement tools.", 
    buttonText: "Small Business Plan", 
    icon: <Code className="w-8 h-8 text-white" /> 
  },
  { 
    title: "ECOMMERCE WEBSITE", 
    subtitle: "Best for Large Business", 
    description: "Advanced eCommerce capabilities.", 
    buttonText: "Ecommerce Website Plan", 
    icon: <ShoppingCart className="w-8 h-8 text-white" /> 
  },
  { 
    title: "ENTERPRISE SOLUTIONS", 
    subtitle: "Best for Corporates", 
    description: "Custom enterprise-level web solutions for high efficiency.", 
    buttonText: "Enterprise Plan", 
    icon: <Globe className="w-8 h-8 text-white" /> 
  },
  { 
    title: "SECURE WEB DEVELOPMENT", 
    subtitle: "Cybersecurity Focused", 
    description: "We prioritize security to protect your data and users.", 
    buttonText: "Secure Web Plan", 
    icon: <Shield className="w-8 h-8 text-white" /> 
  },
  { 
    title: "CUSTOM WEB APPS", 
    subtitle: "Tailored Solutions", 
    description: "Fully customized web applications built for your needs.", 
    buttonText: "Custom Web Plan", 
    icon: <Layers className="w-8 h-8 text-white" /> 
  }
];

const Button = ({ className, children }) => (
  <button className={`${className} px-6 py-3 rounded-full text-white font-semibold transition-transform transform hover:scale-105 duration-300`}>{children}</button>
);

const Card = ({ icon, title, subtitle, description, button }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all hover:shadow-xl duration-300"
  >
    <div className="mx-auto bg-blue-600 rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-md">
      {icon}
    </div>
    <h3 className="text-xl font-bold mt-4 text-gray-800">{title}</h3>
    {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    <Paragrph>{description}</Paragrph>
    {button && <div className="mt-4">{button}</div>}
  </motion.div>
);

export default function Website4() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <Heading> Expert Website Development Services </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              icon={pkg.icon}
              title={pkg.title}
              subtitle={pkg.subtitle}
              description={pkg.description}
              button={<Button className="bg-blue-600 hover:bg-indigo-700">{pkg.buttonText}</Button>}
            />
          ))}
        </div>

      

        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 space-y-8 md:space-y-0 rounded-lg shadow-md">
          <div className="md:w-1/2 space-y-4">
            <Heading> Why Invest in a Business Website? </Heading>
            <p className="text-lg text-gray-700">
              Partner with Digiflex.ai for SEO-friendly, mobile-responsive, and high-performance websites.
            </p>
          </div>
          <div className="w-full md:w-1/2 hidden md:block">
            <img src={bussse} alt="Business Website" className="w-full h-auto object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <Heading> Our Website Development Process </Heading>
        <Subheading className="text-center text-gray-600">A streamlined approach for top-quality web solutions.</Subheading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <Card 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
