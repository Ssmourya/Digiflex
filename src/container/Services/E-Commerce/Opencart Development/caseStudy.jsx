"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";

const OpenCartCaseStudies = () => {
  const caseStudies = [
    {
      client: "Fashion Boutique",
      industry: "Apparel & Fashion",
      challenge:
        "Struggling with inventory management across multiple locations",
      solution: "Custom OpenCart inventory sync module with real-time updates",
      results:
        "43% reduction in out-of-stock situations, 27% increase in sales",
      image: "/assets/Fashion-boutiqe.jpg",
      color: "bg-blue-500",
    },
    {
      client: "GourmetFoods",
      industry: "Food & Beverage",
      challenge: "Complex shipping requirements for perishable goods",
      solution:
        "Custom shipping calculator with temperature-controlled options",
      results: "92% customer satisfaction, 50% decrease in shipping issues",
      image: "/assets/GourmetFoods.webp",
      color: "bg-blue-500",
    },
    {
      client: "TechGadgets",
      industry: "Electronics",
      challenge: "Poor mobile conversion rates despite high traffic",
      solution: "Responsive OpenCart theme with optimized checkout",
      results: "215% increase in mobile conversions, 31% higher AOV",
      image: "/assets/TechGadgets.jpg",
      color: "bg-blue-500",
    },
  ];

  return (
    <WrapperContainer>
      <section className="py-16 md:py-0 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading>OpenCart Transformation Stories</Heading>
            <div className="mt-4 max-w-3xl mx-auto">
              <Paragraph>
                See how we've helped businesses overcome challenges and achieve
                remarkable results with customized OpenCart solutions.
              </Paragraph>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } md:flex items-center gap-8 lg:gap-16`}
              >
                {/* Image Section */}
                <div className="md:w-1/2 relative mb-8 md:mb-0">
                  <div
                    className={`absolute -bottom-6 -right-6 w-full h-full ${study.color} opacity-20 rounded-2xl -z-10 transform rotate-3`}
                  ></div>

                  {/* Framer Motion Image with Smooth Hover Animation */}
                  <motion.img
                    src={study.image}
                    alt={`${study.client} Case Study`}
                    className="w-full h-auto rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Company Logo (If available) */}
                  {study.logo && (
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                      <Image
                        src={study.logo}
                        alt={`${study.client} Logo`}
                        width={500}
                        height={300}
                        className="w-12 h-12 rounded-full"
                        priority={false}
                      />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-1/2">
                  <div
                    className={`inline-block px-3 py-1 rounded-full ${study.color} bg-opacity-10 text-sm font-medium mb-4`}
                  >
                    {study.industry}
                  </div>
                  <Subheading>
                    How {study.client} Transformed Their eCommerce Experience
                  </Subheading>

                  <div className="space-y-6">
                    <div>
                      <Subheading>The Challenge</Subheading>
                      <Paragraph>{study.challenge}</Paragraph>
                    </div>

                    <div>
                      <Subheading>Our Solution</Subheading>
                      <Paragraph>{study.solution}</Paragraph>
                    </div>

                    <div>
                      <Subheading>The Results</Subheading>
                      <Paragraph>{study.results}</Paragraph>
                    </div>

                    {/* Framer Motion Button with Animation */}
                    <motion.button
                      className={`mt-4 px-6 py-3 ${study.color} text-white font-medium rounded-lg inline-flex items-center transition-all`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      View Full Case Study
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default OpenCartCaseStudies;
