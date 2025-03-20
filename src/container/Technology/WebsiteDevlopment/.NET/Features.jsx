import React from 'react';
import { Code2, Cpu, Shield, Cloud, Database, Rocket } from 'lucide-react';

const Features = () => {
    
  const features = [
    {
      icon: <Code2 className="w-12 h-12 text-purple-500" />,
      title: "Modern Development",
      description: "Build applications using C#, F#, or Visual Basic with the latest .NET features and best practices."
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Cross-Platform",
      description: "Develop applications that run on Windows, macOS, and Linux using .NET Core."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Enterprise Security",
      description: "Leverage built-in security features and best practices for robust application protection."
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-500" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with Azure cloud services and other cloud platforms."
    },
    {
      icon: <Database className="w-12 h-12 text-red-500" />,
      title: "Data Access",
      description: "Efficient data access with Entity Framework Core and multiple database support."
    },
    {
      icon: <Rocket className="w-12 h-12 text-yellow-500" />,
      title: "High Performance",
      description: "Achieve exceptional performance with optimized runtime and compilation."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Why Choose .NET Development?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            .NET is a powerful, open-source framework for building modern applications. 
            It provides a comprehensive platform for developing web, mobile, desktop, 
            and cloud applications with high performance and security.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Build with .NET?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's create powerful, scalable applications that drive your business forward.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Features;
