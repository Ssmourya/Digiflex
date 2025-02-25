import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";


const steps = [
  {
    title: "Prompt your idea",
    description:
      "Choose a workflow from the dropdown, describe your video idea. Share details about how you want your video to be.",
  },
  {
    title: "Select your audience",
    description:
      "Select the audience, platform, and appearance for your video. This enables AI to set the tone for the title, script, background music, and so on.",
  },
  {
    title: "Edit script & media",
    description:
      "Change the script by clicking 'Edit script' or replace stock media with your own with a simple upload.",
  },
];

const StepSlider = () => {
  return (
    <>
    <div className=" bg-gray-100 pb-20">
    <WrapperContainer>
      {/* Heading Section */}
      <Heading>
        <div>
        Our Services
        </div>
      </Heading>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative p-12 bg-white rounded-3xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Step Title */}
            <Subheading>
              <div>
              {step.title}
              </div>
            </Subheading>
           
            {/* Step Description */}
            <Paragraph>
              <div className="text-left">  
            {step.description}
              </div>
            </Paragraph>
           
            {/* Step Number (Moved Below Text) */}
            <span className="text-7xl text-gray-300 font-bold mt-6 self-end">
              {index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </WrapperContainer>
    </div>
    </>
  );
};

export default StepSlider;
