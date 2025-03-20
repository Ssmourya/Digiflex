"use client";
import { useState } from "react";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import { Server, GitBranch, Repeat, Award, Users } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <WrapperContainer>
        <Heading>Our Ruby on Rails Services</Heading>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "development", label: "Web Development", icon: Server },
            { id: "api", label: "API Development", icon: GitBranch },
            { id: "maintenance", label: "App Maintenance", icon: Repeat },
            { id: "optimization", label: "Performance Optimization", icon: Award },
            { id: "training", label: "Team Training", icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
          {activeTab === "development" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Ruby on Rails Web Development</h3>
              <p className="text-gray-600">
                We build fast, scalable, and secure web applications using Ruby on Rails, tailored to your business needs with a focus on rapid development and quality.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Custom web application development",
                  "E-commerce platform creation",
                  "SaaS product development",
                  "Rapid MVP prototyping",
                  "Full-stack Rails solutions",
                  "Responsive design integration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                      <Server className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">API Development with Rails</h3>
              <p className="text-gray-600">
                We create robust, secure, and efficient APIs using Ruby on Rails to power your applications and enable seamless integrations.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "RESTful API development",
                  "API authentication & security",
                  "Third-party API integration",
                  "GraphQL implementation",
                  "API versioning & documentation",
                  "Scalable API architecture",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "maintenance" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Rails Application Maintenance</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance to keep your Ruby on Rails applications running smoothly and up-to-date.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Bug fixing & troubleshooting",
                  "Rails version upgrades",
                  "Security patch application",
                  "Feature enhancements",
                  "Database maintenance",
                  "Code refactoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                      <Repeat className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "optimization" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Performance Optimization</h3>
              <p className="text-gray-600">
                We enhance the speed, scalability, and efficiency of your Ruby on Rails applications to ensure optimal performance under any load.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Database query optimization",
                  "Caching strategy implementation",
                  "Load balancing solutions",
                  "Code performance auditing",
                  "Scalability enhancements",
                  "Response time reduction",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                      <Award className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "training" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Team Training & Enablement</h3>
              <p className="text-gray-600">
                Equip your developers with the skills and best practices needed to build and maintain Ruby on Rails applications effectively.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Rails best practices workshop",
                  "ActiveRecord optimization training",
                  "Custom Rails documentation",
                  "Hands-on coding sessions",
                  "Test-driven development (TDD)",
                  "Rails deployment strategies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                      <Users className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      
    </WrapperContainer>
  );
};

export default Services;