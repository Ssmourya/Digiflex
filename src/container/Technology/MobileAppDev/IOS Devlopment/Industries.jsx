"use client";

import { motion } from "framer-motion";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

export default function Industries() {
  const industries = [
    { name: "Healthcare", image: "/assets/Healthcare.jpg", description: "Innovative iOS solutions for patient care and medical management." },
    { name: "E-commerce", image: "/assets/Ecomerce.jpg", description: "Boost your online store with seamless shopping experiences." },
    { name: "Education", image: "/assets/Education.jpg", description: "Engaging learning platforms for students and educators." },
    { name: "Finance & FinTech", image: "/assets/fintech-investment-financial-internet-technology-concept.jpg", description: "Secure and efficient financial technology applications." },
    { name: "Entertainment & Media", image: "/assets/enterprise.png", description: "Immersive experiences for streaming and media consumption." },
    { name: "Real Estate", image: "/assets/Reacl-estate.jpg", description: "Smart property solutions for buyers and sellers." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
       <Heading
     
          className="text-3xl font-bold text-[#172554] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
       
        </Heading>
        <Paragraph
         
          className="text-black mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          We develop high-quality iOS applications across various industries to meet business needs.
        
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-40 object-cover rounded-lg mb-4" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />

              <Subheading>
            {industry.name}
              
              </Subheading>
              
              <Paragraph>{industry.description}</Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
