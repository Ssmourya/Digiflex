import React from "react";
import { Code, Gamepad, Laptop, Smartphone, Zap, ArrowRight } from "lucide-react";
import Paragraph from "../../../../Layout/Paragraph";
import Heading from "../../../../Layout/Heading";
import Subheading from '../../../../Layout/Subheading'
const services = [
  {
    title: "Custom HTML5 Web Apps",
    description: "Fully responsive and interactive web applications",
    icon: <Laptop className="w-6 h-6 text-white" />,
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "Fast, reliable, and engaging PWA solutions",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    title: "HTML5 Mobile App Development",
    description: "Hybrid mobile applications using HTML5, CSS, and JavaScript",
    icon: <Smartphone className="w-6 h-6 text-white" />,
  },
  {
    title: "HTML5 Game Development",
    description: "Lightweight, high-performance games for browsers",
    icon: <Gamepad className="w-6 h-6 text-white" />,
  },
  {
    title: "HTML5 UI/UX Development",
    description: "Modern, user-friendly, and visually appealing designs",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    title: "Migration to HTML5",
    description: "Upgrade your legacy applications to the latest HTML5 standards",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
];

export default function HTML5Services() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <Heading>
          Our HTML5 App Development Services
        </Heading>
        <div className="relative">
          {/* Vertical line in the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-100"></div>
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    {/* Left side content */}
                    <div className="w-full md:w-5/12 text-right">
                      <Subheading>{service.title}</Subheading>
                      <Paragraph>{service.description}</Paragraph>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-black mt-2"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                    {/* Center icon */}
                    <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center z-10">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    {/* Right side empty */}
                    <div className="w-full md:w-5/12" />
                  </>
                ) : (
                  <>
                    {/* Left side empty */}
                    <div className="w-full md:w-5/12" />
                    {/* Center icon */}
                    <div className="w-full md:w-2/12 flex justify-center my-4 md:my-0">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center z-10">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    {/* Right side content */}
                    <div className="w-full md:w-5/12 text-left">
                      <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                      <p className="text-black mt-2">{service.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-black mt-2"
                      >
                        Learn more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
