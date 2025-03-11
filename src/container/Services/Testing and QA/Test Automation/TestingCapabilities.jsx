"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import { TestAutomationFAQData } from "../FAQData";
import Faq from "@/components/Faq";

const categories = {
  "TEST AUTOMATION": [
    "Automation Testing - Selenium",
    "Unit Testing - JUnit, TestNG",
    "UI Testing - Cypress, Puppeteer",
  ],
  "NON-FUNCTIONAL TESTING": [
    "Performance Testing - JMeter",
    "Security Testing - OWASP ZAP, Nessus",
    "Load Testing - LoadRunner",
  ],
  "DATA WAREHOUSING/ETL": [
    "ETL Testing - Informatica, Talend",
    "Data Validation - SQL Queries",
    "Data Migration Testing",
  ],
  "TESTING EXCELLENCE": [
    "Test Strategy Development",
    "Process Improvement",
    "Bug Tracking - JIRA",
  ],
};

const ListSection = ({ items }) => {
  return (
    <ul className="w-full space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

const TestingCapabilities = () => {
  const [selectedCategory, setSelectedCategory] = useState("TEST AUTOMATION");

  return (
    <WrapperContainer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <div className="text-center">
          <Heading>Our Testing Capabilities</Heading>
          <Paragraph className="text-center">
            Comprehensive testing solutions to ensure quality, performance, and
            reliability
          </Paragraph>
        </div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Block */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Testing and Quality Assurance"
                className="object-cover w-full h-full max-h-[400px] lg:max-h-none transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white px-8 max-w-xs">
                  {selectedCategory}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="text-xl font-semibold text-blue-700 mb-6 hidden lg:block">
                Key Capabilities
              </h4>
              <ListSection items={categories[selectedCategory]} />

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Learn more about our {selectedCategory.toLowerCase()} services
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq faqs={TestAutomationFAQData} />
    </WrapperContainer>
  );
};

export default TestingCapabilities;
