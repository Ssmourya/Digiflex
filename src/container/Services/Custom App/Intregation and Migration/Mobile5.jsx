import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';


const Mobile5 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heading>Integration and Migration Made Easier!!</Heading>
        <Paragraph>
          Accelerate Your Digital Transformation with Seamless Integration & Migration.
        </Paragraph>
      </motion.div>

      {/* Case Study */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Image Section */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg"
              alt="E-learning platform"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Subheading>
            Mindbowser's Augmented Team Helped an E-learning Platform Add New Features at a Faster Pace
          </Subheading>
          <Paragraph>
            The e-learning platform provides STEM-focused courses and tech camps for a deeper education in technology for school students. 
            The platform is supported by education and technology experts from the Harvard Graduate School of Education and the MIT Media Lab, 
            making it a perfect synthesis of education and STEM. Mindbowser augmented the development efforts by providing a technology team 
            that worked directly with the CTO to accelerate development efforts.
          </Paragraph>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mobile5;
