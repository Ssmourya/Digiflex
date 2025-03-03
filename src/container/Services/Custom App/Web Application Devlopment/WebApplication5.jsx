import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';
const WebApplication5 = () => {
  const processSteps = [
    { title: "Planning", description: "We define the web app's purpose, target audience, and desired user experience." },
    { title: "Design", description: "Our team creates a visual structure and interactive prototype for user feedback." },
    { title: "Development", description: "Our experts build UI and expand the functionality to bring your idea to life." },
    { title: "Testing", description: "Our testing team ensures the web app functions flawlessly across all devices." },
    { title: "Launch", description: "Our professionals ensure the web app launches on time without any glitches." },
    { title: "Maintenance", description: "Lastly, our support team provides continuous support & maintenance for future improvements." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Process Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Heading>
          Our Web App Development Process
        </Heading>
        <Subheading className="text-center text-gray-700 mb-12">
          Here is a streamlined overview of our custom web app development process.
        </Subheading>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold mb-4">
                  {index + 1}
                </div>
                <Subheading className="text-lg font-semibold text-[#172554]">
                  {step.title}
                </Subheading>
                <Paragraph>
                  {step.description}
                </Paragraph>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WebApplication5;
