import React from "react";
import { Circle, X, Square } from "lucide-react";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col h-full p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
    <div className="mb-5 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <Icon className="w-7 h-7 text-white" />
      </div>
    </div>
    <Subheading className="mb-2">{title}</Subheading>
    <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
  </div>
);

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
      <div className="text-center mb-10">
        <Heading>Digiflex Unity3D Game Development Services</Heading>
        <Subheading>
          We create innovative, high-performance Unity games using cutting-edge
          technology and creative solutions.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default ServicesSection;
