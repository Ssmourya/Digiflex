"use client";

import React, { useState } from 'react';
import { BarChart2, Users, TrendingUp, CheckCircle, ArrowRight, X, ChevronRight } from 'lucide-react';

import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from '@/Layout/Paragraph';
import Subheading from "@/Layout/Subheading"

export default function ConsultingAssessment() {
  const [activeService, setActiveService] = useState(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  
  // Service definitions with unified blue styling
  const services = [
    {
      id: "strategy",
      title: "Tailored Strategies",
      description: "Customized solutions based on your industry needs.",
      icon: <TrendingUp className="h-6 w-6" />,
      bgColor: "bg-blue-600",
      lightBgColor: "bg-blue-50"
    },
    {
      id: "data",
      title: "Data-Driven Insights",
      description: "AI-powered assessments for better decision-making.",
      icon: <BarChart2 className="h-6 w-6" />,
      bgColor: "bg-blue-600",
      lightBgColor: "bg-blue-50"
    },
    {
      id: "expert",
      title: "Expert Guidance",
      description: "Consulting from top industry professionals.",
      icon: <Users className="h-6 w-6" />,
      bgColor: "bg-blue-600",
      lightBgColor: "bg-blue-50"
    },
    {
      id: "support",
      title: "End-to-End Support",
      description: "From strategy to execution, we help at every step.",
      icon: <CheckCircle className="h-6 w-6" />,
      bgColor: "bg-blue-600",
      lightBgColor: "bg-blue-50"
    }
  ];
  
  // Assessment questions for each service
  const assessmentQuestions = {
    strategy: [
      {
        question: "What's your primary business objective?",
        options: ["Growth", "Optimization", "Innovation", "Restructuring"]
      },
      {
        question: "What timeline are you working with?",
        options: ["1-3 months", "3-6 months", "6-12 months", "12+ months"]
      }
    ],
    data: [
      {
        question: "What's your current data maturity level?",
        options: ["Beginner", "Intermediate", "Advanced", "Enterprise"]
      },
      {
        question: "Which data challenges are you facing?",
        options: ["Collection", "Storage", "Analysis", "Actionability"]
      }
    ],
    expert: [
      {
        question: "Which industry sector do you operate in?",
        options: ["Technology", "Healthcare", "Finance", "Retail", "Other"]
      },
      {
        question: "What expertise do you need most?",
        options: ["Technical", "Operational", "Strategic", "Financial"]
      }
    ],
    support: [
      {
        question: "What phase is your project currently in?",
        options: ["Planning", "Development", "Implementation", "Review"]
      },
      {
        question: "What type of support do you need?",
        options: ["Advisory", "Implementation", "Maintenance", "Training"]
      }
    ]
  };
  
  // Handle service selection
  const handleServiceSelect = (serviceId) => {
    setActiveService(serviceId);
    setShowAssessment(true);
    setAssessmentStep(0);
    setSelectedOptions({});
  };
  
  // Handle option selection in assessment
  const handleOptionSelect = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [assessmentStep]: option
    });
    
    if (assessmentStep < assessmentQuestions[activeService].length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      // Show completion message and close after delay
      setTimeout(() => {
        setShowAssessment(false);
        setActiveService(null);
      }, 1200);
    }
  };
  
  // Close assessment modal
  const closeAssessment = () => {
    setShowAssessment(false);
    setActiveService(null);
  };

  return (
    
      <>
      <WrapperContainer>
      <div className="max-w-6xl mx-auto text-center relative z-10">
   <Heading>
    <div>
      Why Choose Quest Digiflex.ai
    </div>
   </Heading>

     <Paragraph>
      <span className='inline-flex items-center justify-center'>
      Empowering businesses with data-driven insights and expert strategies.
      </span>
     </Paragraph>
      </div>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            onClick={() => handleServiceSelect(service.id)}
          >
            <div className={`h-1 ${service.bgColor} w-full`}></div>
            <div className="p-6">
              <div className={`w-12 h-12 ${index % 2 === 0 ? service.bgColor : 'bg-white border-2 border-blue-600'} rounded-lg flex items-center justify-center mb-4`}>
                <span className={index % 2 === 0 ? 'text-white' : 'text-blue-600'}>
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="inline-flex items-center text-blue-600 font-medium">
                Start Assessment <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Metrics Section */}
      <div className="bg-blue-50 rounded-xl p-8 max-w-6xl mx-auto ">
        <div className="text-center mb-8">
        <Heading>
          <div>
            Our Impact
          </div>
        </Heading>
         <Paragraph>
          <span className='block text-center'>
          Delivering measurable results for our clients
          </span>
         </Paragraph>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600">98%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600">32%</p>
            <p className="text-gray-600">Average ROI</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600">15+</p>
            <p className="text-gray-600">Industries Served</p>
          </div>
        </div>
      </div>
      
      
      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative">
            <button 
              onClick={closeAssessment}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="h-1 w-full bg-blue-600"></div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {services.find(s => s.id === activeService).title} Assessment
              </h3>
              <p className="text-gray-600 mb-6">
                Answer a few questions to receive a customized recommendation.
              </p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">
                  Step {assessmentStep + 1} of {assessmentQuestions[activeService].length}
                </p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600"
                    style={{ width: `${((assessmentStep + 1) / assessmentQuestions[activeService].length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {assessmentQuestions[activeService][assessmentStep].question}
                </h4>
                <div className="space-y-3">
                  {assessmentQuestions[activeService][assessmentStep].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        selectedOptions[assessmentStep] === option 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  </WrapperContainer>

  </>
     
  );
}