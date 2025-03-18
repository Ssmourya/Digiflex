import React from 'react';
import { CheckCircle, Users, ShieldCheck, Box } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 rounded-lg p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-gray-900 text-xl font-bold max-w-[70%]">{title}</h3>
      <div className="w-16 h-16">
        {icon}
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: <Box className="text-blue-500" size={48} />,
      title: "HIGH-PERFORMANCE GOLANG DEVELOPMENT",
      description: "Digiflex specializes in building fast, efficient, and scalable applications using Golang. From backend systems to cloud-native solutions, we deliver robust software tailored to your needs."
    },
    {
      icon: <Users className="text-green-500" size={48} />,
      title: "EXPERTISE IN MICROSERVICES & API DEVELOPMENT",
      description: "Leverage Golang’s powerful concurrency model to build highly scalable microservices and RESTful APIs. Digiflex ensures seamless integration and optimal performance for your applications."
    },
    {
      icon: <ShieldCheck className="text-red-500" size={48} />,
      title: "SECURE AND RELIABLE ARCHITECTURES",
      description: "Security is at the core of our development process. We implement best practices in authentication, encryption, and secure coding to protect your applications from potential threats."
    },
    {
      icon: <CheckCircle className="text-yellow-500" size={48} />,
      title: "CLOUD-NATIVE & CONTAINERIZED APPLICATIONS",
      description: "Digiflex excels in developing cloud-based Golang applications using Docker, Kubernetes, and serverless architectures. We build solutions that are scalable, resilient, and easy to maintain."
    }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Heading>
            WHY CHOOSE DIGIFLEX FOR GOLANG DEVELOPMENT?
          </Heading>

          <Paragraph>
            At Digiflex, we harness the power of Golang to develop high-performance applications with scalability and efficiency. Our team ensures quality-driven development with a strong focus on security and reliability.
          </Paragraph>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Benefits;
