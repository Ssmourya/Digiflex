import React from 'react';
import { ArrowRight, Lightbulb, Code, Server, Link, Gauge } from 'lucide-react';
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const GolangServices = () => {
  const services = [
    {
      id: 1,
      title: "Backend Development",
      description: "Digiflex delivers high-performance backend systems using Golang, ensuring scalability, security, and efficiency for modern applications.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      details: [
        "High-performance microservices",
        "Scalable API architecture",
        "Efficient database handling",
        "Cloud-native development"
      ]
    },
    {
      id: 2,
      title: "Microservices Architecture",
      description: "Leverage Golang's concurrency and lightweight nature to build scalable microservices for seamless system integration.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      details: [
        "Event-driven microservices",
        "Service-to-service communication",
        "Load balancing & fault tolerance",
        "Docker & Kubernetes integration"
      ]
    },
    {
      id: 3,
      title: "API Development",
      description: "Build fast and secure RESTful and gRPC APIs with Golang, designed for real-time data processing and high availability.",
      icon: <Server className="w-8 h-8" />,
      color: "bg-green-100",
      iconColor: "text-green-600",
      details: [
        "RESTful & gRPC API development",
        "Authentication & authorization",
        "Rate limiting & request handling",
        "API documentation & testing"
      ]
    },
    {
      id: 4,
      title: "Cloud and DevOps Solutions",
      description: "Optimize cloud-native development with Golang, leveraging AWS, Google Cloud, and Kubernetes for maximum efficiency.",
      icon: <Link className="w-8 h-8" />,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      details: [
        "Cloud-native applications",
        "Serverless architecture",
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)"
      ]
    },
    {
      id: 5,
      title: "Networking and Concurrency",
      description: "Utilize Golang’s powerful concurrency model for building real-time, high-performance networking applications.",
      icon: <Link className="w-8 h-8" />,
      color: "bg-red-100",
      iconColor: "text-red-600",
      details: [
        "Efficient Goroutines & Channels",
        "WebSockets & real-time messaging",
        "Load balancing & distributed systems",
        "Scalable TCP & UDP applications"
      ]
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Ensure your Golang applications are highly efficient with advanced profiling and memory management techniques.",
      icon: <Gauge className="w-8 h-8" />,
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      details: [
        "Code profiling & optimization",
        "Memory & garbage collection tuning",
        "Database query optimization",
        "Benchmarking & performance testing"
      ]
    }
  ];

  return (
    <>
      <WrapperContainer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>
            <div>Our Services in Golang Development</div>
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

export default GolangServices;
