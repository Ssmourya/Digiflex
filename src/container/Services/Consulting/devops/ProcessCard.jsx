"use client";

import React from "react";
import { motion } from "framer-motion";

function ProcessCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: index * 0.1 + 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        <Icon className="w-12 h-12 text-blue-500" />
      </motion.div>
      <motion.h3
        className="text-2xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: index * 0.1 + 0.3 },
        }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: index * 0.1 + 0.4 },
        }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default ProcessCard;
