"use client";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Heading from "@/Layout/Heading";
import { motion } from "framer-motion";

import Subheading from "@/Layout/Subheading";

const industries = [
  { name: "Healthcare", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd.jpg" },
  { name: "Travel & Tourism", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd2.jpg" },
  { name: "Fintech", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd3.jpg" },
  { name: "BFSI", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd4.jpg" },
  { name: "Automotive", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd5.jpg" },
  { name: "Education & eLearning", image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Hd6.jpg" },
];

const partners = [
  { name: "Yale University", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo.jpg" },
  { name: "Dubai Police", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo2.jpg" },
  { name: "Panasonic", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo3.jpg" },
  { name: "Infosys", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo4.jpg" },
  { name: "KIA", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo5.jpg" },
  { name: "Eatigo", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo6.jpg" },
  { name: "Hitachi", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo7.jpg" },
  { name: "Orange Business Services", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo8.jpg" },
  { name: "CSF", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo9.jpg" },
  { name: "Spinny", logo: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Logo10.jpg" },
];

const WebApplication3 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Industries Section */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
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
                <Image
                  src={industry.image}
                  alt={industry.name}
                  height={100}
                  width={100}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <Subheading className="text-white text-xl font-semibold p-4">
                    {industry.name}
                  </Subheading>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <motion.div
        className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 py-10 px-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Heading>
          Trusted by startups and Fortune{" "}
          <span className="text-indigo-600">500</span> companies
        </Heading>
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
              <Image
                src={partner.logo}
                alt={partner.name}
                height={100}
                width={100}
                className="max-h-16 w-auto transition-transform duration-300 hover:scale-110"
                priority={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebApplication3;
