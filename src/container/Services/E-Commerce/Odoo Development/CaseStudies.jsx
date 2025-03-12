"use client";

import React, { useState } from "react";
import { FaTags, FaArrowRight } from "react-icons/fa";

// Import images

import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Odoo Implementation for Retail Business",
      description:
        "Successfully implemented Odoo ERP to streamline inventory, sales, and customer management.",
      image: "/assets/Management.jpg",
      client: "RetailCo",
      technologies: "Odoo, Python, PostgreSQL",
      link: "/case-study/retailco",
      category: "retail",
    },
    {
      title: "Odoo Customization for Manufacturing",
      description:
        "Customized Odoo to suit manufacturing requirements, including inventory tracking and quality control.",
      image: "/assets/Pakaging.jpg",
      client: "ManuTech",
      technologies: "Odoo, React, PostgreSQL",
      link: "/case-study/manutech",
      category: "manufacturing",
    },
    {
      title: "E-commerce Integration for Retail Business",
      description:
        "Integrated Odoo ERP with an e-commerce platform to manage online sales, inventory, and customer support.",
      image: "/assets/E-com.jpg",
      client: "OnlineStore",
      technologies: "Odoo, WooCommerce, MySQL",
      link: "/case-study/online-store",
      category: "retail",
    },
    {
      title: "Supply Chain Optimization for Manufacturing",
      description:
        "Implemented supply chain tracking and optimization using Odoo to reduce costs and improve efficiency.",
      image: "/assets/SupplyChain.jpg",
      client: "TechManufacture",
      technologies: "Odoo, Python, PostgreSQL",
      link: "/case-study/tech-manufacture",
      category: "manufacturing",
    },
    {
      title: "Cloud-Based Solutions for Healthcare",
      description:
        "Developed cloud-based solutions using Odoo to streamline patient data management and medical records.",
      image: "/assets/Health_care.jpg",
      client: "HealthCo",
      technologies: "Odoo, AWS, PostgreSQL",
      link: "/case-study/healthco",
      category: "healthcare",
    },
    {
      title: "Automated Inventory Management for Wholesale",
      description:
        "Created an automated inventory management system using Odoo to improve stock control for a wholesale business.",
      image: "/assets/Whole_sale.jpg",
      client: "WholesaleCo",
      technologies: "Odoo, Python, PostgreSQL",
      link: "/case-study/wholesaleco",
      category: "wholesale",
    },
  ];

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <WrapperContainer>
      <section className="bg-white py-0 px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heading> Our Success Stories</Heading>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-4"></div>
            <Paragraph className="text-center">
              Explore how we've helped businesses transform their operations
              with Odoo solutions
            </Paragraph>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-md scale-110"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 hover:shadow-md border border-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110 hover:shadow-2xl"
              >
                {/* Image with Overlay */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-md transition-all duration-300 ease-in-out">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-300"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Client Name */}
                  <div className="text-blue-600 text-sm font-medium mb-2 transition-all duration-300 hover:text-blue-800">
                    {project.client}
                  </div>

                  {/* Title */}
                  <Subheading className="text-xl font-bold text-gray-800 mb-3 transition-all duration-300 hover:text-blue-600">
                    {project.title}
                  </Subheading>

                  {/* Description */}
                  <Paragraph>{project.description}</Paragraph>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    {/* Technologies */}
                    <div className="flex items-center text-gray-500 text-sm">
                      <FaTags className="mr-2" size={14} />
                      <span className="truncate max-w-[150px]">
                        {project.technologies}
                      </span>
                    </div>

                    {/* View Case Button */}
                    <a
                      href={project.link}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-all duration-500 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-110 group"
                    >
                      View Case
                      <FaArrowRight
                        className="ml-2 transition-transform duration-500 ease-in-out group-hover:translate-x-2"
                        size={12}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </WrapperContainer>
  );
};

export default CaseStudies;
