"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

function Process({ steps, visibleSteps }) {
  return (
   <WrapperContainer>
      <div>
        {/* Section Header with Animation */}
  <Heading>
  Our Well-organized Approach for
  </Heading>
        <motion.h3
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
       <Subheading>
       AI Consulting
       </Subheading>
        </motion.h3>
   <Paragraph>
   At Digiflex.ai, we follow a structured and strategic methodology to deliver high-quality AI solutions. Our approach ensures seamless integration, optimized performance, and tangible business outcomes for our clients.

   </Paragraph>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-700 to-blue-950" />

          {/* Steps */}
          {steps.map((step) => (
            <motion.div
              key={step.number}
              data-step={step.number}
              className={`relative flex items-start gap-8 transition-all duration-1000 transform ${visibleSteps.includes(step.number) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Step Circle with Gradient Background */}
              <motion.div
                className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-2xl font-bold transition-all duration-500 transform ${visibleSteps.includes(step.number) ? 'scale-100' : 'scale-0'}`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {step.number.toString().padStart(2, '0')}
              </motion.div>

              {/* Step Title and Description */}
              <motion.div
                className={`transition-all duration-500 delay-200 ${visibleSteps.includes(step.number) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </WrapperContainer>
  );
}

export default Process;
