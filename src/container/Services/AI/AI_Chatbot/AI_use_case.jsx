'use client';
import { useState } from 'react';
import { FaHeadset, FaUsers, FaShoppingCart, FaChartLine, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Heading from '@/Layout/Heading'
import WrapperContainer from '@/Layout/WrapperContainer'

const services = [
  { icon: <FaHeadset size={32} />, title: 'Customer Service', description: 'AI chatbots provide instant responses to FAQs, assist with order tracking, and resolve issues efficiently, ensuring 24/7 customer support.' },
  { icon: <FaUsers size={32} />, title: 'HR & Employee Support', description: 'They handle employee queries about company policies, payroll, and benefits, streamlining HR operations and reducing manual workload.' },
  { icon: <FaShoppingCart size={32} />, title: 'E-commerce Assistance', description: 'They personalize shopping experiences by guiding customers to relevant products, offering tailored discounts, and providing seamless support.' },
  { icon: <FaChartLine size={32} />, title: 'Sales & Marketing', description: 'Chatbots enhance customer engagement by generating leads, recommending products based on user preferences, and assisting in promotional campaigns.' },
  { icon: <FaUniversity size={32} />, title: 'Banking & Finance', description: 'AI-powered chatbots offer financial advice, detect fraudulent transactions, and assist users with secure and efficient banking operations.' }
];

function AI_use_case() {
  const [hovered, setHovered] = useState(null);
  return (
   <>
    <WrapperContainer>
        <Heading>Use Cases of Enterprise AI Chatbots</Heading>

        <div className="max-w-3xl mx-auto">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="py-4 cursor-pointer relative group"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center space-x-4">
            <motion.div 
              className="text-blue-600"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
            >
              {service.icon}
            </motion.div>
            <p className="text-lg font-semibold text-gray-800">{service.title}</p>
          </div>
          {hovered === index && (
            <motion.div 
              className="mt-2 w-full bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <motion.div 
                className="h-1 bg-blue-600 w-full mb-2"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
    </WrapperContainer>
   </>
  ) 
}

export default AI_use_case