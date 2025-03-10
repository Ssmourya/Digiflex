"use client";

import React, { useState } from 'react';
import { Check, ExternalLink, Github, ArrowRight } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const WhyChooseUsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const benefits = [
    {
      title: "Experienced Python Developers",
      description: "Our team consists of senior Python developers with deep expertise across various domains.",
      icon: <Check className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Scalable & Cost-Effective",
      description: "We build solutions that grow with your business while keeping development and maintenance costs optimized.",
      icon: <Check className="w-6 h-6 text-blue-600" />
    },
    {
      title: "End-to-End Development",
      description: "From ideation to deployment, we handle every stage of the development lifecycle.",
      icon: <Check className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Secure & High-Performance",
      description: "Security and performance are at the core of every application we develop.",
      icon: <Check className="w-6 h-6 text-blue-600" />
    }
  ];
  
  const caseStudies = [
    {
      title: "E-Commerce Recommendation Engine",
      description: "Built a machine learning-powered recommendation system that increased conversion rates by 32%.",
      image: "https://i.pinimg.com/736x/88/67/75/8867754cb580bafa6c49a4073d8ac87f.jpg",
      technologies: ["Python", "TensorFlow", "Django", "PostgreSQL"],
      outcomes: ["32% increase in conversions", "45% increase in average order value"],
      links: {
        live: "https://example.com/project",
        github: "https://github.com/example/project"
      }
    },
    {
      title: "Financial Data Analytics Dashboard",
      description: "Developed a real-time financial analytics platform for investment professionals.",
      image: "https://i.pinimg.com/736x/0b/40/d4/0b40d4e8f590b4f0f7f153b8620c7d18.jpg",
      technologies: ["Python", "Flask", "Pandas", "React", "MongoDB"],
      outcomes: ["Reduced data processing time by 65%", "Enabled real-time decision making"],
      links: {
        live: "https://example.com/finance-project",
        github: "https://github.com/example/finance-project"
      }
    },
    {
      title: "IoT Smart Factory System",
      description: "Created an IoT platform to monitor and optimize manufacturing processes.",
      image: "https://i.pinimg.com/736x/2f/55/86/2f5586a95f47fd7bdfa806e3c0a40029.jpg",
      technologies: ["Python", "FastAPI", "PyTorch", "AWS IoT", "TensorFlow"],
      outcomes: ["23% reduction in operational costs", "15% increase in production efficiency"],
      links: {
        live: "https://example.com/iot-project",
        github: "https://github.com/example/iot-project"
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heading>Why Choose Us for Python Development?</Heading>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-600">
              <div className="mb-4 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <Subheading>{benefit.title}</Subheading>
              <Paragraph>{benefit.description}</Paragraph>
            </div>
          ))}
        </div>
        
        {/* Case Studies Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <Heading>
              <span className="mr-2 text-blue-200">🔹</span> Case Studies & Portfolio
            </Heading>
          </div>
          
          {/* Tab Navigation */}
          <div className="bg-white px-6 py-3 border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mr-4 whitespace-nowrap font-medium rounded-md transition-colors duration-200 ${
                    activeTab === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {study.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Case Study Content */}
          <div className="p-6">
            {caseStudies.map((study, index) => (
              <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                <div className="md:flex">
                  <div className="md:w-2/5 mb-6 md:mb-0 md:pr-6">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  </div>
                  <div className="md:w-3/5">
                    <Subheading>{study.title}</Subheading>
                    <Paragraph>{study.description}</Paragraph>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h5>
                      <ul className="space-y-1">
                        {study.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-4 mt-6">
                      <a href={study.links.live} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4 mr-2" /> View Live
                      </a>
                      <a href={study.links.github} className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                        <Github className="w-4 h-4 mr-2" /> GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;