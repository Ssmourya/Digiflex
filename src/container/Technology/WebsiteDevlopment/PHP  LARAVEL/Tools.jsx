"use client";

import React, { useState, useEffect } from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';
import Subheading from '@/Layout/Subheading';
import Heading from '@/Layout/Heading';

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('laravel');
  const [activeFeature, setActiveFeature] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Handle initial mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Feature data organized by categories
  const featureCategories = {
    laravel: {
      title: "Laravel Development Tools",
      description: "Essential tools for building robust and scalable applications with Laravel.",
      items: [
        {
          id: "tinker",
          title: "Laravel Tinker",
          description: "Interactive REPL for Laravel, allowing quick testing and debugging.",
          icon: "terminal",
          benefits: ["Quick testing", "Efficient debugging", "Database interaction"]
        },
        {
          id: "artisan",
          title: "Laravel Artisan",
          description: "Command-line tool to automate repetitive tasks, migrations, and more.",
          icon: "cogs",
          benefits: ["Task automation", "Migrations", "Queue management"]
        },
        {
          id: "homestead",
          title: "Laravel Homestead",
          description: "A Vagrant box for Laravel development with pre-configured development environments.",
          icon: "box",
          benefits: ["Pre-configured environments", "Built-in tools", "Multi-platform support"]
        },
        {
          id: "forge",
          title: "Laravel Forge",
          description: "Provision and manage PHP applications in the cloud with ease.",
          icon: "cloud",
          benefits: ["Automatic server provisioning", "One-click deployment", "SSL certificates"]
        }
      ]
    },
    php: {
      title: "PHP Development Tools",
      description: "Tools for building efficient and high-performance applications with PHP.",
      items: [
        {
          id: "xdebug",
          title: "Xdebug",
          description: "PHP debugger and profiler for enhanced debugging and profiling capabilities.",
          icon: "bug",
          benefits: ["Step debugging", "Stack trace analysis", "Performance profiling"]
        },
        {
          id: "composer",
          title: "Composer",
          description: "Dependency manager for PHP, handling packages and autoloading efficiently.",
          icon: "package",
          benefits: ["Manage dependencies", "Autoloading", "Version control"]
        },
        {
          id: "phpstorm",
          title: "PHPStorm",
          description: "Advanced IDE for PHP, providing smart code assistance and debugging tools.",
          icon: "code",
          benefits: ["Code completion", "Integrated debugging", "Refactoring tools"]
        },
        {
          id: "phpunit",
          title: "PHPUnit",
          description: "Unit testing framework for PHP, ensuring high-quality code through tests.",
          icon: "check-circle",
          benefits: ["Automated tests", "Code quality", "Integration with CI/CD"]
        }
      ]
    },
    database: {
      title: "Database Tools for PHP",
      description: "Essential tools for managing and optimizing databases in PHP applications.",
      items: [
        {
          id: "sequelpro",
          title: "Sequel Pro",
          description: "MySQL database management tool with a clean and user-friendly interface.",
          icon: "database",
          benefits: ["Database management", "SQL queries", "User-friendly interface"]
        },
        {
          id: "phpmyadmin",
          title: "phpMyAdmin",
          description: "Web-based interface for managing MySQL databases, facilitating quick queries and administration.",
          icon: "desktop",
          benefits: ["Database administration", "SQL queries", "Easy-to-use interface"]
        },
        {
          id: "redis",
          title: "Redis",
          description: "In-memory data store for improving performance in PHP applications with caching.",
          icon: "refresh",
          benefits: ["Caching", "Real-time data", "Scalability"]
        },
        {
          id: "postgresql",
          title: "PostgreSQL",
          description: "Advanced open-source relational database management system, often used with PHP.",
          icon: "server",
          benefits: ["ACID compliance", "Data integrity", "Support for complex queries"]
        }
      ]
    }
  };

  // Get current category and features
  const currentCategory = featureCategories[activeCategory];

  return (
    <WrapperContainer>
      <div className={`p-4 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <Heading>Digiflex PHP & Laravel Development Tools</Heading>
          <Paragraph className='text-center'>Digiflex offers a wide range of tools to streamline PHP and Laravel development.</Paragraph>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-8 border-b">
          {Object.keys(featureCategories).map((category) => (
            <button
              key={category}
              className={`px-6 py-3 font-medium transition-all ${
                activeCategory === category 
                  ? 'border-b-2 border-blue-600 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveFeature(null);
              }}
            >
              {featureCategories[category].title}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div className="text-center mb-8">
          <Subheading>{currentCategory.title}</Subheading>
          <Paragraph>{currentCategory.description}</Paragraph>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentCategory.items.map((feature) => (
            <div 
              key={feature.id}
              className={`bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer transform hover:shadow-lg ${
                activeFeature === feature.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
            >
              <div className="p-6">
                <div className="mb-4 text-blue-600">
                  {/* Icon would go here */}
                </div>
                <Subheading>{feature.title}</Subheading>
                <Paragraph>{feature.description}</Paragraph>

                {activeFeature === feature.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Paragraph>Key Benefits:</Paragraph>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4 text-blue-600 text-sm font-medium">
                  {activeFeature === feature.id ? 'Click to collapse' : 'Click for details'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Tools;
