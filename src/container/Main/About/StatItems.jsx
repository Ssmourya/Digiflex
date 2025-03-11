"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WrapperContainer from '@/Layout/WrapperContainer';

function StatItem({ number, label, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center text-white"
    >
      <motion.div 
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          delay: delay + 0.2
        }}
        className="text-6xl font-bold mb-2"
      >
        {number}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 0.4 }}
        className="text-lg"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

function App() {
  return (
    <div className="relative w-full">
      <WrapperContainer>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500"
        >
          <div className="px-8 py-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-200 text-center mb-12 tracking-wider font-medium drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              [ Digiflex in numbers ]
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <StatItem 
                number="55+" 
                label="Team Members" 
                delay={0.2} 
              />
              <StatItem 
                number="2015" 
                label="Year founded" 
                delay={0.4} 
              />
              <StatItem 
                number="900+" 
                label="Customers" 
                delay={0.6} 
              />
              <StatItem 
                number="60" 
                label="Days implementation" 
                delay={0.8} 
              />
            </div>
          </div>
        </motion.div>
      </WrapperContainer>
    </div>
  );
}

export default App;
