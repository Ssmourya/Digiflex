import React from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import { motion } from "framer-motion";
import Hd from "../../../../assets/Hd.jpg";
import Hd2 from "../../../../assets/Hd2.jpg";
import Hd3 from "../../../../assets/Hd3.jpg";
import Hd4 from "../../../../assets/Hd4.jpg";
import Hd5 from "../../../../assets/Hd5.jpg";
import Hd6 from "../../../../assets/Hd6.jpg";

import Logo from "../../../../assets/Logo.jpg";
import Logo2 from "../../../../assets/Logo2.jpg";
import Logo3 from "../../../../assets/Logo3.jpg";
import Logo4 from "../../../../assets/Logo4.jpg";
import Logo5 from "../../../../assets/Logo5.jpg";
import Logo6 from "../../../../assets/Logo6.jpg";
import Logo7 from "../../../../assets/Logo7.jpg";
import Logo8 from "../../../../assets/Logo8.jpg";
import Logo9 from "../../../../assets/Logo9.jpg";
import Logo10 from "../../../../assets/Logo10.jpg";

import Subheading from "../../../../Layout/Subheading";

const industries = [
  { name: "Healthcare", image: Hd },
  { name: "Travel & Tourism", image: Hd2 },
  { name: "Fintech", image: Hd3 },
  { name: "BFSI", image: Hd4 },
  { name: "Automotive", image: Hd5 },
  { name: "Education & eLearning", image: Hd6 },
];

const partners = [
  { name: "Yale University", logo: Logo },
  { name: "Dubai Police", logo: Logo2 },
  { name: "Panasonic", logo: Logo3 },
  { name: "Infosys", logo: Logo4 },
  { name: "KIA", logo: Logo5 },
  { name: "Eatigo", logo: Logo6 },
  { name: "Hitachi", logo: Logo7 },
  { name: "Orange Business Services", logo: Logo8 },
  { name: "CSF", logo: Logo9 },
  { name: "Spinny", logo: Logo10 },
];

const WebApplication3 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Industries Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div >
          <Heading>Industries We Cater To</Heading>
          
        </div>

        <p className="text-gray-600 mb-8 max-w-3xl">
          The cost of software development depends on various factors such as
          service scope, sourcing model, and industry requirements.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <Subheading className="text-white text-xl font-semibold p-4">
                    {industry.name}
                  </Subheading>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-300">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        
      <Heading>Trusted by startups and Fortune <span className="text-orange-500">500</span> companies</Heading>
           
      
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center mt-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>

     
    </div>
  );
};

export default WebApplication3;