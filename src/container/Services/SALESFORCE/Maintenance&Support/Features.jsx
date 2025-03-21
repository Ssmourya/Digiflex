import React from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const features = [
  {
    title: "Proactive Monitoring",
    description: "Detect and resolve issues before they impact users.",
  },
  {
    title: "Security Updates",
    description: "Regular patches to keep your system safe and secure.",
  },
  {
    title: "Performance Optimization",
    description: "Enhance speed and responsiveness for a seamless experience.",
  },
  {
    title: "24/7 Technical Support",
    description: "Immediate assistance for troubleshooting and queries.",
  },
  {
    title: "Backup & Recovery",
    description: "Automated backups to prevent data loss and ensure continuity.",
  },
  {
    title: "Bug Fixes & Improvements",
    description: "Continuous improvements to maintain application stability.",
  },
];

const Features = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>Key Features of Maintenance & Support</Heading>
        <Paragraph className="text-center">
          We provide high-quality maintenance and support services to keep your application running smoothly.
        </Paragraph>

        <div className="mt-16 relative z-10 space-y-8">
          {features.map(({ title, description }, index) => (
            <div
              key={index}
              className={`relative group transition-transform duration-300 ${
                index % 2 === 0 ? "ml-0 md:ml-12" : "ml-0 md:ml-24"
              }`}
            >
              {/* Feature Box */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-[#1D4ED8] relative overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]">
                {/* Circular Decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-100 rounded-full"></div>

                {/* Numbered Indicator */}
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center bg-[#1D4ED8] text-white font-semibold -ml-2 -mt-2 shadow-md rounded-br-lg z-10">
                  {index + 1}
                </div>

                <div className="flex items-start">
                  <div className="ml-4">
                    <Subheading>{title}</Subheading>
                    <Paragraph>{description}</Paragraph>
                  </div>
                </div>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#1D4ED8] w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Connecting Line Between Features */}
              {index < features.length - 1 && (
                <div className="absolute h-8 w-1 bg-blue-100 left-5 bottom-0 z-0 transform translate-y-full hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Features;

