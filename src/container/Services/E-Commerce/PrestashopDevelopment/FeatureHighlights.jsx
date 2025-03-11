"use client";

import React, { useState } from "react";
import image_1 from "@/@/public/assets/coustom_development.jpg";
import image_2 from "@/@/public/assets/Fast_optimized.jpg";
import image_3 from "@/@/public/assets/Secure_payment.jpg";
import image_4 from "@/@/public/assets/Mobile_friendly.jpg";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const FeatureHighlights = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-6 h-6">
          <path d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h131.2C178 151 242.6 96 320 96s142 55 156.8 128H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H476.8z"/>
        </svg>
      ),
      title: "Custom Development",
      description: "Tailored PrestaShop solutions with personalized features. Our team ensures that your store is designed specifically to meet your business needs, enhancing both functionality and performance.",
      image: image_1,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
          <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/>
        </svg>
      ),
      title: "Fast & Optimized",
      description: "Optimized coding ensures a seamless user experience. With our speed-enhancing strategies, your customers will enjoy faster load times and smooth navigation.",
      image: image_2,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
          <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
        </svg>
      ),
      title: "Secure Payments",
      description: "Safe and secure payment gateway integration. We implement the latest security protocols to ensure all transactions are encrypted and protected against fraud.",
      image: image_3,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6">
          <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
        </svg>
      ),
      title: "Mobile Friendly",
      description: "Fully responsive design for all devices. Whether your customers shop from a phone, tablet, or desktop, they will experience a seamless and visually appealing interface.",
      image: image_4,
    }
  ];

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  return (
    <WrapperContainer>
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heading>Why Choose Our PrestaShop Services?</Heading>
            <Paragraph className="text-center">
              We offer a range of PrestaShop development services tailored to enhance your online store’s performance, security, and user experience.
            </Paragraph>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          {/* Feature Points */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 flex flex-col items-center rounded-lg transition-all ${
                  activeFeatureIndex === index ? "bg-blue-600 text-white shadow-md scale-105" : "bg-blue-600 text-white hover:shadow-lg"
                }`}
                onClick={() => setActiveFeatureIndex(index)}
              >
                {feature.icon}
                <Subheading className="text-white">{feature.title}</Subheading>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={features[activeFeatureIndex].image}
              alt={features[activeFeatureIndex].title}
              className="w-72 md:w-80 lg:w-96 h-auto rounded-lg shadow-md"
            />
            <div className="flex-1">
              <Subheading>{features[activeFeatureIndex].title}</Subheading>
              <Paragraph>{features[activeFeatureIndex].description}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default FeatureHighlights;
