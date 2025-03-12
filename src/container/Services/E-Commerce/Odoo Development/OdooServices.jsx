import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import { 
  FaCheckCircle, 
  FaCogs, 
  FaHandsHelping, 
  FaFileAlt, 
  FaSyncAlt,
  FaArrowRight
} from "react-icons/fa";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const OdooServices = () => {
  const services = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-xl" />,
      title: "Odoo Consultation & Strategy Development",
      description: "We analyze your business needs and create a tailored Odoo strategy.",
      color: "blue"
    },
    {
      icon: <FaCogs className="text-green-600 text-xl" />,
      title: "Odoo Customization & Module Development",
      description: "We customize Odoo modules to fit your specific business requirements.",
      color: "green"
    },
    {
      icon: <FaHandsHelping className="text-orange-600 text-xl" />,
      title: "Odoo Migration & Integration",
      description: "We ensure a smooth migration and integration of Odoo with your existing systems.",
      color: "orange"
    },
    {
      icon: <FaFileAlt className="text-red-600 text-xl" />,
      title: "Odoo Support & Maintenance",
      description: "Our expert team provides continuous support to keep your Odoo system running smoothly.",
      color: "red"
    },
   
  ];

  return (
    <WrapperContainer>
    <div className="bg-gradient-to-b from-white to-blue-50 py-0">
      {/* Heading with decorative elements */}
      <div className="text-center mb-12">
        <Heading>Our Odoo Development Services</Heading>
      </div>

      
        <section className="bg-white rounded-2xl shadow-xl py-0 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            
            {/* Two columns layout */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              
              {/* Left Side: Service List */}
              <div className="space-y-6">
                <Subheading>Comprehensive Odoo Services</Subheading>
                
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl p-1 border-l-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderLeftColor: `var(--color-${service.color}-600)` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-${service.color}-100 flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div>
                          <Subheading className="font-semibold">{service.title}</Subheading>
                          <Paragraph>{service.description}</Paragraph>
                          
                          {/* Learn More Link (Optional) */}
                          <button className={`mt-2 text-${service.color}-600 inline-flex items-center gap-1 text-sm font-medium hover:underline`}>
                            Learn more <FaArrowRight className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Image and Call to Action */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-70 z-0"></div>
                  
                  {/* Main image */}
                  <img
                    src="/assets/OdooErp.png"
                    alt="Odoo ERP Solutions"
                    className="relative z-10 rounded-lg shadow-lg w-full max-w-lg object-cover"
                  />
                </div>
                
                
              </div>
            </div>
          </div>
        </section>
    
    </div>
    </WrapperContainer>
  );
};

export default OdooServices;