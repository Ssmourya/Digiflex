"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Shield, Handshake, DollarSign, Atom } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const whyChooseSections = [
  {
    icon: Star,
    title: "Customer Satisfaction",
    description:
      "In order to deliver innovative, secure, scalable, and user-friendly business solutions that meet your needs, we work with the most recent technologies and frameworks.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Our team of React.js experts is committed to providing high-end business solutions using a variety of frameworks and technologies.",
  },
  {
    icon: Shield,
    title: "Integrity and Transparency",
    description:
      "We value your thoughts and vision, which is why we regularly update you on all project details and take into account your valuable advice as needed.",
  },
  {
    icon: Handshake,
    title: "Flexible Engagement Models",
    description:
      "Instead of working on rigid and strict parameters, we always offer flexibility to our clients to select from different engagement and hiring models.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "We offer an ideal combination of cost-effective rates and ensuring quality to ensure the fastest pricing in our segment.",
  },
];

const WhyDigiflex = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto">
        <Heading>Why is Digiflex the best for React JS Development?</Heading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-6">
            {whyChooseSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <section.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Code/Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 bg-gray-800 flex items-center justify-between">
              <div className="flex items-center">
                <Atom className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-white font-bold">React JS</span>
              </div>
              <span className="text-gray-400">We provide it all</span>
            </div>
            <div className="p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>
                  {`// React Component Example
function Digiflex Development() {
  const [technology, setTechnology] = useState('React');
  
  return (
    <div className="innovative-solution">
      <h1>Cutting-Edge React Development</h1>
      <Tech name={technology} />
      <Capabilities 
        features={[
          'Scalable Solutions',
          'High Performance',
          'User-Centric Design'
        ]} 
      />
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhyDigiflex;
