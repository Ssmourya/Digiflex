import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";
import Heading from "@/Layout/Heading";

const OpenCartModernSection = () => {
  const features = [
    { 
      img: "/assets/Solution_1.jpg", 
      title: "Custom OpenCart Solutions", 
      text: "Tailored features and seamless integrations for your store.",
      color: "bg-indigo-500" 
    },
    { 
      img: "/assets/Parfomance_1.jpg", 
      title: "High-Performance Optimization", 
      text: "Improve speed, SEO, and user experience to boost conversions.",
      color: "bg-blue-500" 
    },
    { 
      img: "/assets/user_interface.jpg", 
      title: "Custom Theme & UI Design", 
      text: "Modern and responsive themes that attract and retain customers.",
      color: "bg-green-500" 
    },
    { 
      img: "/assets/Payment.jpg", 
      title: "Secure Payment & Checkout", 
      text: "Safe and seamless payment gateways for smooth transactions.",
      color: "bg-red-500" 
    },
    { 
      img: "/assets/Expand.jpg", 
      title: "Scalability & Flexibility", 
      text: "Easily expand your store with powerful OpenCart extensions.",
      color: "bg-purple-500" 
    },
    { 
      img: "/assets/Mantanance.jpg", 
      title: "Ongoing Support & Maintenance", 
      text: "Dedicated technical support for uninterrupted performance.",
      color: "bg-yellow-500" 
    }
  ];

  return (
    <div className="bg-white">
      <WrapperContainer>
        <section className="w-full py-0 px-4">
          {/* Heading with badge */}
          <div className="max-w-7xl mx-auto text-center mb-20">
          
            <Heading>
              Elevate Your Store with <span className="text-blue-600">OpenCart</span> Development
            </Heading>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <Paragraph>
              Build a feature-rich and scalable eCommerce store with OpenCart. Our expert solutions help you customize, optimize, and grow your business effortlessly.
            </Paragraph>
          </div>

          {/* Feature Cards with Image Overlay */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative h-96 overflow-hidden rounded-2xl shadow-lg"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                  {/* Decorative Bar */}
                  <div className={`w-12 h-1 ${feature.color} mb-4 transition-all duration-300 group-hover:w-20`}></div>
                  
                  <Subheading className="font-bold text-white mb-3">
                    {feature.title}
                  </Subheading>
                  
                  <Paragraph className="text-white mb-6 opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {feature.text}
                  </Paragraph>
                  
                  {/* Learn More Button */}
                  <div className="transition-all duration-300 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className={`px-5 py-2.5 ${feature.color} text-white font-medium rounded-lg inline-flex items-center`}>
                      Learn More
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </section>
      </WrapperContainer>
    </div>
  );
};

export default OpenCartModernSection;