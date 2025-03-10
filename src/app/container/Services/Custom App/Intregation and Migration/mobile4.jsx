"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

import Mobile5 from './Mobile5';

const clients = [
  { name: 'RIZE', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbkwaakT0MqX9mJruYXOhkDz4AV6oGEcxeg&s" },
  { name: 'Seeke', logo: "https://i.pinimg.com/736x/2d/34/b4/2d34b4c4556e1243267348e547bc924c.jpg" },
  { name: 'Shortlist', logo: "https://i.pinimg.com/736x/af/78/cd/af78cd2e9ca405148101b95a75620e3c.jpg" },
  { name: 'Smiling Mind', logo: "https://i.pinimg.com/736x/30/f7/78/30f778228ca4d53bb62deb8d7726d633.jpg" }
];

const Mobile4 = () => {
  return (
    <>    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Clients Section */}
      <motion.div
        className="bg-gray-50 py-12 px-4 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <Heading>Our Clients</Heading>
          <div className="overflow-hidden relative w-full">
            <motion.div
              className="flex space-x-12"
              animate={{ x: [0, -100, -200, -300, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-[80px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    <Mobile5/>
</>

  );
};

export default Mobile4;
