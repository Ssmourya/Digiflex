import React, { useState } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaAndroid, FaApple, FaWindows } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const WebApplication4 = () => {
  const [activeTab, setActiveTab] = useState('programming');
  
  const categories = {
    programming: {
      title: 'Programming Languages',
      icons: [
        <FaHtml5 key="html5" size={40} className="text-[#E34F26]" />, 
        <FaCss3Alt key="css3" size={40} className="text-[#1572B6]" />, 
        <FaJs key="javascript" size={40} className="text-[#F7DF1E]" />, 
        <FaReact key="react" size={40} className="text-[#61DAFB]" />, 
        <FaPython key="python" size={40} className="text-[#3776AB]" />, 
     
      ]
    },
    mobile: {
      title: 'Mobile & Platforms',
      icons: [
        <FaAndroid key="android" size={40} className="text-[#3DDC84]" />, 
        <FaApple key="apple" size={40} className="text-[#A2AAAD]" />, 
        <FaWindows key="windows" size={40} className="text-[#0078D6]" />
      ]
    },
    databases: {
      title: 'Databases',
      icons: [
        <SiMysql key="mysql" size={40} className="text-[#4479A1]" />, 
        <SiPostgresql key="postgresql" size={40} className="text-[#336791]" />, 
        <SiMongodb key="mongodb" size={40} className="text-[#47A248]" />
      ]
    }
  };

  return (
    <div className="bg-white px-4 py-10 md:p-12 lg:p-16 xl:p-20 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <Heading>
          Technologies & Frameworks We Use
        </Heading>
        <Subheading className="text-gray-700 text-lg md:text-xl leading-relaxed">
          As a leading web development company, we are proud to have a team of expert developers skilled in the following core technologies:
        </Subheading>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([key, category]) => (
          <motion.div 
            key={key}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center"
          >
            <div className="flex gap-4 flex-wrap justify-center">
              {category.icons.map((icon) => icon)}
            </div>
            <Subheading className="text-xl font-semibold text-[#4A90E2] mt-4">
              {category.title}
            </Subheading>
          </motion.div>
        ))}
      </div>
      
     

      {/* Extra Content for Larger Screens */}
      <div className="hidden lg:block mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading>
            Why Choose Us?
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Subheading className="text-gray-700 text-lg mt-4 max-w-3xl mx-auto">
            Our team is proficient in the latest technologies and frameworks, ensuring secure, scalable, and high-performing web solutions.
          </Subheading>
        </motion.div>
        <div className="mt-6 flex justify-center gap-8">
          {[
            { title: "Expert Developers", desc: "Skilled professionals with years of experience." },
            { title: "Cutting-edge Tech", desc: "We use the latest tools and frameworks." },
            { title: "Customer-centric", desc: "Focused on providing the best solutions for clients." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md w-1/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Subheading className="text-xl font-semibold text-[#4A90E2]">
                {item.title}
              </Subheading>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebApplication4;
