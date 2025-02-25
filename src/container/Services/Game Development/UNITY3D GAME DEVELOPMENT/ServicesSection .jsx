import React from "react";
import { Circle, X, Square } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col h-full p-6 bg-[#f3f4f6] rounded-xl hover:shadow-lg transition-all duration-300">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <Subheading>{title}</Subheading>
      <p className="text-gray-700 text-sm leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Circle,
      title: "Unity3D Game Development",
      description:
        "Digiflex specializes in Unity3D game development, offering high-quality 2D and 3D gaming solutions with immersive experiences. Our expertise ensures seamless performance across mobile, web, PC, and console platforms.",
    },
    {
      icon: X,
      title: "AR/VR/XR App Development",
      description:
        "We create cutting-edge AR, VR, and XR applications that redefine user experiences. From gaming to education and enterprise solutions, Digiflex delivers innovative immersive applications tailored to your needs.",
    },
    {
      icon: Square,
      title: "LiveOps & Game Maintenance",
      description:
        "Our LiveOps services keep your game fresh and engaging with regular updates, new content, and performance optimizations. We ensure long-term success with analytics-driven improvements and post-launch support.",
    },
  ];

  return (
    <WrapperContainer>
      {/* Header Section */}
      <div className="text-center mb-16">
        <Heading>Digiflex Unity3D Game Development Services</Heading>
      </div>
      <Subheading>
        At Digiflex, we craft innovative gaming experiences using the latest technology and creative solutions.
        Our Unity game developers bring your vision to life with engaging, high-performance games for all platforms.
      </Subheading>
      <br />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="h-full">
            <ServiceCard icon={service.icon} title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default ServicesSection;
