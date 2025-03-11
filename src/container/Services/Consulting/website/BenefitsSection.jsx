"use client";

import { motion } from "framer-motion";
import { Star, Users, BarChart, Target } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

export const BenefitsSection = () => {
  return (
    <WrapperContainer>
      <div className="text-center mb-8 md:mb-12">
        <Heading>Why do you need website consulting?</Heading>
        <Paragraph className="max-w-3xl mx-auto px-4">
          There are several benefits of website consulting services, including:
        </Paragraph>
      </div>
      
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Benefits List */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:space-x-4 p-4 sm:p-6 rounded-xl bg-white shadow-md transition-all duration-500 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Animated Icon */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="text-blue-600 w-10 h-10 p-2 rounded-full bg-blue-100 flex justify-center items-center shadow-md transition-transform mb-3 sm:mb-0"
              >
                {benefit.icon}
              </motion.div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 transition-all duration-300 hover:text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section with Animated Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative h-64 sm:h-80 md:h-auto order-1 md:order-2 mb-8 md:mb-0"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            className="rounded-xl w-full h-full object-cover md:translate-y-0  transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
          />
          {/* Glowing Effect on Hover */}
          <div className="absolute inset-0 bg-white opacity-10 transition-opacity duration-500 hover:opacity-20"></div>
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

// Benefits Data
const benefits = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Set a positive first impression",
    description:
      "94% of first impressions are influenced by your website's design. Digiflex.ai creates visually engaging websites that impress and convert visitors.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Deliver a better user experience",
    description:
      "Over 85% of businesses invest in UX, as poor usability drives 89% of users away. Digiflex.ai ensures a seamless, intuitive experience for your visitors.",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Drive more traffic to your website",
    description:
      "With expert SEO strategies, Digiflex.ai helps your website rank higher, gain visibility, and attract more visitors.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Increase your leads and conversions",
    description:
      "Digiflex.ai builds high-converting websites with optimized CTAs to transform visitors into customers.",
  },
];

export default BenefitsSection;