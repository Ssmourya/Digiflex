import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const services = [
  {
    icon: "\ud83c\udfae", // Game Controller Icon
    title: "VR/XR Game Environment Design",
    description:
      "We create immersive VR/XR environments with high-end 3D graphics and seamless interactions, ensuring a rich user experience.",
  },
  {
    icon: "\ud83d\udee0", // Wrench Icon
    title: "VR/XR Game Development & Integration",
    description:
      "Our team specializes in building VR/XR simulation games with real-time physics, AI-driven NPCs, and multi-platform support.",
  },
  {
    icon: "\ud83d\udcfc", // Film Projector Icon
    title: "XR Content Creation & Optimization",
    description:
      "We develop and optimize interactive XR content for training simulations, educational applications, and entertainment.",
  },
  {
    icon: "\ud83c\udf10", // Globe Icon
    title: "Cross-Platform VR/XR Compatibility",
    description:
      "Our VR/XR solutions are designed to work seamlessly across multiple devices, including Oculus, HTC Vive, and mobile AR platforms.",
  },
];

const DevelopmentServices = () => {
  return (
    <WrapperContainer>
      <div className="max-w-6xl mx-auto px-2 py-12">
        <Heading>
          <div>
            Our VR/XR Simulation Game Development Services
          </div>
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white"
            >
              <span className="text-4xl text-blue-500">{service.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer> 
  );
};

export default DevelopmentServices;
