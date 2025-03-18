
"use client";

import React from 'react'
import Head from 'next/head';
import Image from 'next/image';

import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const data = [
    {
        title: "Predictive Analytics",
        description: "Anticipate future trends and behavior patterns to make data-driven decisions",
        icon: "📈"
    },
    {
        title: "Computer Vision",
        description: "Extract meaningful information from images and videos for automated analysis",
        icon: "👁️"
    },
    {
        title: "Natural Language Processing",
        description: "Enable your systems to understand, interpret, and respond to human language",
        icon: "💬"
    },
    {
        title: "Recommendation Systems",
        description: "Deliver personalized suggestions to enhance user experience and engagement",
        icon: "🎯"
    },
    {
        title: "Anomaly Detection",
        description: "Identify unusual patterns that don't conform to expected behavior",
        icon: "🔍"
    },
    {
        title: "MLOps & Deployment",
        description: "Streamline the process of taking machine learning models to production",
        icon: "🚀"
    }
];

const Services = () => {
  return (
    <WrapperContainer>
      
        <div className="text-center">
            <Heading>Our Machine Learning Services</Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end machine learning solutions tailored to your specific business needs</Paragraph>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                data.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))
            }
        </div>     
       
    </WrapperContainer>
  )
}

export default Services