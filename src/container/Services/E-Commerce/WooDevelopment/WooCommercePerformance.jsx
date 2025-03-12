"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from '@/Layout/Subheading';

const WooCommercePerformance = () => {
  const [activeTab, setActiveTab] = useState('speed');
  const videoRef = useRef(null);
  
  // Tab content configuration
  const tabs = {
    speed: {
      icon: '🚀',
      title: 'Speed Optimization',
      tips: [
        'Optimize images for faster loading',
        'Enable browser caching',
        'Use a CDN for global delivery'
      ]
    },
    conversion: {
      icon: '💰',
      title: 'Conversion Boosters',
      tips: [
        'Streamline checkout process',
        'Improve mobile experience',
        'Add trust signals and testimonials'
      ]
    },
    maintenance: {
      icon: '🔧',
      title: 'Easy Maintenance',
      tips: [
        'Regular plugin updates',
        'Database optimization',
        'Security best practices'
      ]
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url($"/assets/woo_bg_1.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <WrapperContainer className="w-full px-4 sm:px-6 py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content Area */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                
                <Heading >
                  Supercharge Your <span className="text-blue-500">Store Performance</span>
                </Heading>
                <Paragraph className="text-gray-700 mt-3">
                  Speed up your WooCommerce store, improve conversions, and enhance user experience.
                </Paragraph>
              </motion.div>
              
              {/* Tab Navigation */}
              <div className="flex space-x-2 border-b border-gray-200">
                {Object.keys(tabs).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium text-sm transition-colors ${
                      activeTab === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-500 hover:text-blue-600'
                    }`}
                  >
                    {tabs[tab].icon} {tabs[tab].title}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                  <Subheading><span className="text-xl mr-2">{tabs[activeTab].icon}</span>
                  {tabs[activeTab].title}</Subheading>
                  
                
                <ul className="space-y-2">
                  {tabs[activeTab].tips.map((tip, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://woocommerce.com/document/performance-optimization/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Optimize Your Store Now
                </a>
              </motion.div>
            </div>
            
            {/* Video Container */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/Woo_Perfomance.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </WrapperContainer>
      </div>
      
      
    </section>
  );
};

export default WooCommercePerformance;