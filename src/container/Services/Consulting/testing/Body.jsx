import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reasons } from "./Reasons";
import { ProcessSection } from "./ProcessSection";
import { ServicesSection } from "./ServicesSection";
import { IndustriesSection } from "./IndustriesSection";
import { servicesData, reasons, processSteps, industries } from "./constants";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import FAQ from "./FAQ";

function Body() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab] = useState("full-cycle");

  const tabContent = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <WrapperContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Heading>Software Quality Assurance Consulting</Heading>
          <motion.div
            className="text-gray-600 text-lg max-w-4xl mx-auto space-y-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              At Digiflex.ai, we bridge the gap between software development and
              testing by offering expert QA consulting services tailored to your
              needs. Whether you're establishing an in-house QA team or
              optimizing an existing one, our consultants bring a fresh
              perspective and industry-leading expertise to refine your
              processes, enhance efficiency, and ensure top-tier software
              quality.
            </p>
            <p>
              Our approach is never one-size-fits-all. We conduct in-depth
              assessments, identify gaps, and implement customized strategies
              that align with your business goals—helping you achieve flawless,
              high-performing software in record time.
            </p>
          </motion.div>
        </motion.div>
      </WrapperContainer>

      {/* Reasons Section */}

      <Reasons
        reasons={reasons}
        expandedIndex={expandedIndex}
        setExpandedIndex={setExpandedIndex}
      />

      {/* Process Section */}

      <ProcessSection steps={processSteps} />

      {/* Services Section */}

      <ServicesSection
        services={servicesData[activeTab]}
        activeTab={activeTab}
        tabContent={tabContent}
      />

      {/* Industries Section */}

      <IndustriesSection industries={industries} />

      <FAQ/>
    </div>
  );
}

export default Body;
