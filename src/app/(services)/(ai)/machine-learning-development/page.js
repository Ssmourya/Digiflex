import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';


export default function MachineLearningDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Machine Learning Development | Your Company</title>
        <meta name="description" content="Professional Machine Learning Development services to transform your business with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business with Machine Learning</h1>
            <p className="text-xl mb-8">Leverage the power of AI to drive innovation, efficiency, and growth</p>
            <button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Machine Learning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end machine learning solutions tailored to your specific business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to delivering high-quality machine learning solutions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery & Data Assessment",
                description: "We analyze your business needs and evaluate available data to determine the feasibility and potential impact of ML solutions."
              },
              {
                step: "2",
                title: "Data Preparation & Feature Engineering",
                description: "We clean, transform, and enrich your data to create optimal features for model training."
              },
              {
                step: "3",
                title: "Model Development & Training",
                description: "We develop and train custom machine learning models tailored to your specific business problems."
              },
              {
                step: "4",
                title: "Testing & Validation",
                description: "We rigorously test models against various scenarios to ensure accuracy, robustness, and reliability."
              },
              {
                step: "5",
                title: "Deployment & Integration",
                description: "We deploy models into your existing infrastructure with minimal disruption to your operations."
              },
              {
                step: "6",
                title: "Monitoring & Optimization",
                description: "We continuously monitor model performance and refine models to maintain and improve accuracy over time."
              }
            ].map((process, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  {index < 5 && <div className="h-full w-0.5 bg-indigo-200 mx-auto mt-2"></div>}
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We leverage cutting-edge technologies to build robust machine learning solutions</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "TensorFlow", icon: "/placeholder/100/100" },
              { name: "PyTorch", icon: "/placeholder/100/100" },
              { name: "scikit-learn", icon: "/placeholder/100/100" },
              { name: "AWS SageMaker", icon: "/placeholder/100/100" },
              { name: "Google Cloud AI", icon: "/placeholder/100/100" },
              { name: "Azure ML", icon: "/placeholder/100/100" },
              { name: "Kubernetes", icon: "/placeholder/100/100" },
              { name: "Docker", icon: "/placeholder/100/100" },
              { name: "MLflow", icon: "/placeholder/100/100" },
              { name: "Kubeflow", icon: "/placeholder/100/100" },
              { name: "Spark", icon: "/placeholder/100/100" },
              { name: "DVC", icon: "/placeholder/100/100" }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 w-16 h-16 relative">
                  <Image src={tech.icon} alt={tech.name} width={64} height={64} className="rounded" />
                </div>
                <h3 className="text-gray-800 font-medium text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See how we've helped businesses achieve remarkable results with machine learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Demand Forecasting",
                industry: "Retail",
                description: "Reduced inventory costs by 23% and stockouts by 45% through ML-powered demand forecasting",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Fraud Detection System",
                industry: "Finance",
                description: "Improved fraud detection accuracy by 87% while reducing false positives by 62%",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Predictive Maintenance",
                industry: "Manufacturing",
                description: "Cut downtime by 35% and maintenance costs by 28% using predictive ML models",
                image: "/api/placeholder/400/300"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium mb-3">{study.industry}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300">Read Case Study →</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
              View All Case Studies
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}