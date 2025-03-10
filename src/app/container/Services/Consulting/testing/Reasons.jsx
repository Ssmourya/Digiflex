"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { reasons, animations } from "./constants";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

export const ReasonCard = ({
  reason,
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  return (
    <motion.div
      variants={animations.item}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <button
        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-200 transition-colors rounded-lg"
      >
        <div className="flex gap-4 items-center">
          <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <h3 className="font-semibold text-gray-900 text-lg">
            {reason.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {expandedIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-200">
              {reason.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Reasons = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <WrapperContainer>
        <Heading> Reasons To Choose Consultation In Software Testing</Heading>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Software Testing Analytics"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            variants={animations.container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                reason={reason}
                index={index}
                expandedIndex={expandedIndex}
                setExpandedIndex={setExpandedIndex}
              />
            ))}
          </motion.div>
        </div>
      
    </WrapperContainer>
  );
};
