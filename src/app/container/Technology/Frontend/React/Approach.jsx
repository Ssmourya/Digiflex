"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Handshake,
  PaintBucket,
  SearchCheck,
  FileText,
} from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const approachSteps = [
  {
    icon: Lightbulb,
    title: "Assessment of Requirements",
    description:
      "Our React experts meticulously evaluate project requirements, objectives, and expectations to devise a roadmap for React.JS app development.",
  },
  {
    icon: Handshake,
    title: "Agreement on Service Models",
    description:
      "As a leading React.JS app development company, we recommend the best-suited engagement model to all our clients tailored to their requirements along with hand-picked resources.",
  },
  {
    icon: PaintBucket,
    title: "Design and Development",
    description:
      "Design and development begin to deliver a dynamic, interactive, scalable, and bespoke web or mobile app solution that meets the acceptance criteria and goals.",
  },
  {
    icon: SearchCheck,
    title: "Testing and QA",
    description:
      "Extensive documentation, rigorous testing, and client feedback are integrated into our React.JS web development process that lets us deliver the premium solution, every time.",
  },
  {
    icon: FileText,
    title: "Support",
    description:
      'Post-deployment, "the end of the beginning" with constant monitoring and debugging of React.JS app development solutions to ensure seamless operation.',
  },
];

const Approach = () => {
  return (
    <WrapperContainer>
      <div className=" mx-auto">
        <Heading>Our Approach</Heading>
        <Paragraph>
          Aligning Business Requirements with React Development Services
        </Paragraph>

        <div className="relative">
          {/* Desktop/Tablet View */}
          <div className="hidden md:flex items-center justify-between">
            {approachSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-purple-100 p-4 rounded-xl mb-4">
                    <step.icon className="w-12 h-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 max-w-xs">{step.description}</p>
                </motion.div>
                {index < approachSteps.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{
                      duration: 0.6,
                      delay: (index + 1) * 0.3,
                    }}
                    className="h-1 bg-purple-500 mx-4"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                }}
                className="flex items-center bg-gray-800 p-6 rounded-xl"
              >
                <div className="bg-purple-100 p-4 rounded-xl mr-6">
                  <step.icon className="w-12 h-12 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Approach;
