import React, { useState } from 'react';
import { Shield, BarChart3, FileCheck, Bitcoin, ArrowRight, CheckCircle } from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';

const ConsultingServices = () => {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      title: "Business & Strategy",
      icon: BarChart3,
      description: "Strategic planning and growth solutions for modern businesses.",
      items: [
        "Market analysis & growth strategies",
        "Financial planning & risk assessment",
        "Digital transformation solutions",
        "Business process optimization",
        "Competitive advantage development"
      ],
      detailContent: "Our strategic business consulting helps organizations navigate market challenges, optimize operations, and drive sustainable growth through data-driven insights and industry expertise."
    },
    {
      title: "IT & Cybersecurity",
      icon: Shield,
      description: "Protecting your digital assets with advanced security solutions.",
      items: [
        "Security compliance assessment",
        "Cloud infrastructure protection",
        "Vulnerability assessment testing",
        "Security architecture design",
        "Incident response planning"
      ],
      detailContent: "Our cybersecurity experts utilize cutting-edge technologies and methodologies to identify vulnerabilities, implement robust security measures, and help your organization maintain a strong security posture."
    },
    {
      title: "Compliance & Regulatory",
      icon: FileCheck,
      description: "Ensuring adherence to industry regulations and standards.",
      items: [
        "ISO, GDPR & HIPAA compliance",
        "Risk management frameworks",
        "Regulatory implementation",
        "Compliance documentation",
        "Ongoing compliance monitoring"
      ],
      detailContent: "Our compliance consultants help you navigate complex regulatory landscapes, establish effective governance frameworks, and implement systems that ensure continuous compliance with relevant standards."
    },
    {
      title: "ICO & Blockchain",
      icon: Bitcoin,
      description: "Expert guidance on blockchain and cryptocurrency strategies.",
      items: [
        "Tokenomics & whitepaper design",
        "Smart contract security audits",
        "Legal compliance strategies",
        "ICO/STO launch planning",
        "Blockchain integration solutions"
      ],
      detailContent: "Our blockchain specialists provide comprehensive guidance for businesses looking to leverage distributed ledger technologies, from initial concept development to technical implementation and regulatory compliance."
    }
  ];

  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <WrapperContainer>

    
    <div className="font-sans antialiased  flex justify-center  px-6">
      <section className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <Heading>
            <div>
            Our Consulting & Assessment Services
            </div>
          </Heading>
          <Paragraph>
            <span className='block text-center'>
            Expert solutions tailored to your business needs, delivered with precision and professionalism.
            </span>
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white p-6 flex flex-col items-center text-center ${isActive ? 'ring-2 ring-blue-600' : ''}`}
              >
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <IconComponent size={28} className="text-blue-600" />
                </div>
                <Subheading>
                {service.title}
                </Subheading>
                <Paragraph>
                <span className='block text-center'>
                {service.description}
                </span>
                </Paragraph>
                
                <button 
                  onClick={() => handleServiceClick(index)}
                  className="mt-4 border border-blue-600 text-blue-600 font-medium py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center"
                >
                  <span>{isActive ? 'Hide Details' : 'View Details'}</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
                
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700 w-full text-left">
                    <p>{service.detailContent}</p>
                    <button className="mt-3 text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                      <span>Request Consultation</span>
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>

    </WrapperContainer>
  );
};

export default ConsultingServices;
