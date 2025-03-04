import React, { useState } from "react";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from "../../../../Layout/Paragraph";

const WhyChoose = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { 
      id: 1, 
      title: "Unreal Game Development", 
      description: "We specialize in Unreal Engine game development, delivering high-fidelity graphics, real-time rendering, and immersive experiences. Our expertise includes multiplayer integration, VR/AR solutions, and cross-platform support for PC, console, and mobile gaming." 
    },
    { 
      id: 2, 
      title: "Advanced Physics & AI", 
      description: "Utilizing Unreal Engine’s advanced physics and AI capabilities, we create realistic character movements, dynamic environments, and intelligent NPC behaviors that enhance gameplay experiences." 
    },
    { 
      id: 3, 
      title: "Seamless Multiplayer", 
      description: "We develop scalable multiplayer experiences with smooth networking, low-latency performance, and real-time synchronization, ensuring engaging online gameplay across different platforms." 
    },
    { 
      id: 4, 
      title: "VR & AR Integration", 
      description: "Our Unreal Engine solutions extend to Virtual Reality (VR) and Augmented Reality (AR), offering interactive simulations, immersive training modules, and next-gen gaming experiences." 
    },
    { 
      id: 5, 
      title: "Optimized Performance", 
      description: "We optimize Unreal Engine applications for maximum performance, ensuring high frame rates, efficient memory usage, and smooth gameplay across all supported devices." 
    },
  ];

  return (
    <WrapperContainer>
      <div className="bg-white flex flex-col justify-center items-center">
        <Heading>
          <div>Why Choose Digiflex for Unreal Game Development?</div>
        </Heading>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section - Headings */}
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`flex items-center gap-4 p-4 cursor-pointer rounded-lg transition-all ${
                  activeSection === section.id ? "text-white bg-blue-600" : "bg-gray-100 text-gray-900"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="text-3xl font-semibold">✔</span>
                <Subheading>{section.title}</Subheading>
              </div>
            ))}
          </div>

          {/* Right Section - Description */}
          <div className="p-6 rounded-lg shadow-md flex items-center justify-center bg-gray-50">
            <Paragraph>
              {sections.find((section) => section.id === activeSection)?.description}
            </Paragraph>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhyChoose;
