"use client";

import React, { useState } from 'react';
import { ArrowRight, Cloud, Database, Server, Link, Code, GitBranch } from 'lucide-react';
import WrapperContainer from "@/Layout/WrapperContainer"
import Heading from "@/Layout/Heading"
const ArchitectureServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Cloud-Native Architecture",
      description: "Build scalable, resilient applications with AWS, Azure, or Google Cloud. Leverage cloud-native patterns to maximize platform benefits.",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      details: [
        "Infrastructure as Code (IaC)",
        "Container orchestration with Kubernetes",
        "Cloud provider specific optimizations",
        "High availability & disaster recovery design"
      ]
    },
    {
      id: 2,
      title: "Microservices Architecture",
      description: "Develop scalable, decoupled services for better efficiency. Enable independent deployment and technology diversity.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      details: [
        "Domain-driven design implementation",
        "Service discovery patterns",
        "Inter-service communication strategies",
        "Data consistency patterns"
      ]
    },
    {
      id: 3,
      title: "Monolithic vs. Serverless",
      description: "Choose the right architecture model based on your specific business needs and technical constraints.",
      icon: <Server className="w-8 h-8" />,
      color: "bg-green-100",
      iconColor: "text-green-600",
      details: [
        "Cost analysis and optimization",
        "Performance benchmarking",
        "Scalability planning",
        "Migration strategies"
      ]
    },
    {
      id: 4,
      title: "Salesforce Integration",
      description: "Connect with Salesforce for seamless data exchange. Implement real-time and batch processing solutions.",
      icon: <Link className="w-8 h-8" />,
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      details: [
        "Salesforce API integration",
        "Custom Apex development",
        "Lightning component implementation",
        "Data synchronization patterns"
      ]
    },
    {
      id: 5,
      title: "API-First Approach",
      description: "Design RESTful & GraphQL APIs for better connectivity. Ensure consistent interfaces for all services.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-red-100",
      iconColor: "text-red-600",
      details: [
        "API design and documentation",
        "Authentication & authorization",
        "Rate limiting and caching strategies",
        "Versioning and evolution"
      ]
    },
    {
      id: 6,
      title: "DevOps & CI/CD",
      description: "Automate deployments and ensure seamless delivery. Implement robust pipelines for reliable software delivery.",
      icon: <GitBranch className="w-8 h-8" />,
      color: "bg-amber-100",
      iconColor: "text-amber-600",
      details: [
        "Continuous integration workflows",
        "Deployment automation",
        "Infrastructure as Code (IaC)",
        "Monitoring and observability"
      ]
    }
  ];

  return (
    <>
    <WrapperContainer>

    
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading>
                Our Services
        </Heading>
        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className={`flex-shrink-0 p-6 rounded-full ${service.color} ${service.iconColor} mb-4 md:mb-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`mt-1 mr-3 ${service.iconColor}`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      </WrapperContainer>
    </>
  );
};

export default ArchitectureServices;
