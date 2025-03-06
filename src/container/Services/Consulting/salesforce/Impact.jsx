import React from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const impacts = [
  {
    number: "1",
    title: "Streamline Business Processes",
    description:
      "Optimize your business operations by eliminating redundancies, automating routine tasks, and fostering seamless collaboration. At Digiflex.ai, we enhance efficiency and drive innovation through tailored IT solutions designed to simplify workflows and empower your team.",
  },
  {
    number: "2",
    title: "Drive Revenue Growth",
    description:
      "Digiflex.ai helps you identify untapped revenue streams, optimize sales processes, and enhance marketing campaigns to generate more qualified leads and achieve higher conversion rates. Partner with us to accelerate your growth and stay ahead in the market.",
  },
  {
    number: "3",
    title: "Improve Customer Experience",
    description:
      "Elevate your customer experience by optimizing service processes, personalizing interactions, and streamlining communication across all touchpoints. At Digiflex.ai, we craft IT solutions that enhance customer satisfaction, build loyalty, and ensure every interaction adds value to your brand",
  },
  {
    number: "4",
    title: "Enhance Data Management",
    description:
      "Achieve superior data management with Digiflex.ai by ensuring data quality, optimizing data architecture, and implementing robust governance policies. Our tailored solutions enable accurate reporting, insightful analysis, and smarter decision-making, empowering your business to thrive in a data-driven world.",
  },
];

const ImpactCard = ({ number, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-8 shadow-sm"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="text-4xl font-bold text-blue-900 mb-4"
        initial={{ scale: 0.5 }}
        whileInView={{
          scale: 1,
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 200,
          },
        }}
        viewport={{ once: true }}
      >
        {number}
      </motion.div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

function Impact() {
  return (
    <WrapperContainer>
      <div className="container mx-auto">
     <Heading>
     The Impact Of Our Salesforce Consulting Services
     </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              number={impact.number}
              title={impact.title}
              description={impact.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Impact;
