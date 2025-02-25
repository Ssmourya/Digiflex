import React, { useState } from "react";
import { motion } from "framer-motion";
import WrapperContainer from "../../../Layout/WrapperContainer";

const ServiceCard = ({ content, thumbnail, className, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 255, 0.25)" }}
      style={{ minHeight: "380px" }}
    >
      {thumbnail && (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? "brightness(0.5)" : "brightness(0.4)"
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ backgroundImage: `url(${thumbnail})` }} 
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-5"></div>
      <motion.div 
        className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center"
        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
        <motion.div 
          className="mt-8 overflow-hidden h-0 opacity-0"
          animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center text-blue-500 font-medium">
            <span>Learn more</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute top-0 left-0 right-0 mx-auto h-1 bg-blue-600"
        style={{ width: "30%" }}
        animate={{ 
          width: isHovered ? "50%" : "30%",
          opacity: isHovered ? 1 : 0.7
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

const ServiceOne = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-5xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Consulting
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Expert guidance to align your business goals with the right technology solutions.
    </p>
  </div>
);

const ServiceTwo = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Custom App Development
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Tailored applications designed to meet your unique business needs.
    </p>
  </div>
);

const ServiceThree = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Testing and QA
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Comprehensive testing services to ensure your applications are bug-free and performant.
    </p>
  </div>
);

const ServiceFour = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      UI & UX
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Beautiful and intuitive designs that enhance user experience and engagement.
    </p>
  </div>
);

const ServiceFive = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Cloud Solutions
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Scalable and secure cloud infrastructure to power your digital transformation.
    </p>
  </div>
);

const ServiceSix = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Data Analytics
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Transform your raw data into actionable insights for informed decision-making.
    </p>
  </div>
);

const ServiceSeven = () => (
  <div className="flex flex-col items-center">
    <motion.p 
      className="font-bold md:text-4xl text-2xl text-white mb-4 text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      Cybersecurity
    </motion.p>
    <p className="font-normal text-base max-w-lg text-gray-300 text-center">
      Protect your digital assets with our comprehensive security solutions.
    </p>
  </div>
);

const ViewAllCard = () => (
  <motion.div 
    onClick={() => window.location.href = '/services'}
    className="bg-gradient-to-br from-blue-900 to-blue-700 h-full w-full rounded-3xl flex flex-col items-center justify-center cursor-pointer p-8 relative overflow-hidden group"
    whileHover={{ 
      scale: 1.03, 
      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)" 
    }}
  >
    <motion.div 
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    
    <motion.div 
      className="absolute top-0 left-0 w-full h-full"
      whileHover={{ background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 70%)" }}
    />
    
    <motion.div className="relative z-10 flex flex-col items-center">
      <motion.h3 
        className="text-2xl md:text-3xl font-bold text-white mb-4 text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        View All Services
      </motion.h3>
      
      <p className="text-sm text-blue-100 text-center opacity-80 mb-6">
        Discover our complete range of solutions
      </p>
      
      <motion.div 
        className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center"
        whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </motion.div>
    </motion.div>
    
    <motion.div 
      className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-20"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  </motion.div>
);

const cards = [
  {
    id: 1,
    content: <ServiceOne />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <ServiceTwo />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <ServiceThree />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <ServiceFour />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <ServiceFive />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <ServiceSix />,
    className: "md:col-span-2 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <ServiceSeven />,
    className: "md:col-span-3 md:row-span-1",
    thumbnail: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <ViewAllCard />,
    className: "md:col-span-1 md:row-span-1",
    isViewAll: true
  }
];

export function WhatWeOffer() {
  return (
    <div className="bg-black  py-24 overflow-hidden">
    <WrapperContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background glow effects */}
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-700 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        <div className="h-full w-full">
          <motion.div 
            className="flex flex-col items-center pb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-24 h-1 bg-blue-600 rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              What We <motion.span 
                className="text-blue-600 inline-block"
                animate={{ 
                  color: ["#2563eb", "#3b82f6", "#60a5fa", "#3b82f6", "#2563eb"],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                Offer
              </motion.span>
            </h2>
            
            <motion.p 
              className="text-gray-400 text-center max-w-2xl text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming ideas into digital reality with our comprehensive suite of services
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {cards.map((card, index) => (
              <div key={card.id} className={card.className}>
                <ServiceCard 
                  content={card.content}
                  thumbnail={card.thumbnail}
                  className={card.isViewAll ? 'h-full' : ''}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </WrapperContainer>
    </div>
  );
}