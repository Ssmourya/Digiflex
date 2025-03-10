import React from "react";
import { ShoppingCart, Code, Cog, Settings } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Next.Js Customization Services",
      description:
        "Customize your NextJs apps with advanced tools and the latest technologies. Our development team comprises QA professionals and experienced developers who build highly scalable platforms as per requirement.",
    },
    {
      id: 2,
      icon: Code,
      title: "Next.js Web Development Solutions",
      description:
        "At Nextbrain, our NextJs web developers strive to achieve excellence with premium-quality web apps. The apps are optimized for smaller build sizes as well as faster development compilation.",
    },
    {
      id: 3,
      icon: Cog,
      title: "NextJs Custom Development Services",
      description:
        "In search of powerful web applications? Our professionals can effortlessly create premium quality NextJs applications with UI/UX designs, robust API, and exclusive features to create a strong online presence with custom services.",
    },
    {
      id: 4,
      icon: Settings,
      title: "Next.Js Integration Services",
      description:
        "Right from ReactJs to Express Js, now it has become easier to integrate your NextJs apps and websites with any JS library effortlessly. Our developers provide complete integration and maintenance to clients regarding NextJs development.",
    },
  ];

  return (
    <WrapperContainer>
      <div className=" mx-auto ">
        <div className="text-center mb-12">
          <Heading>Custom Next Js Development</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col  bg-blue-800">
              <div className="bg-navy-900 p-6 rounded-lg h-full">
                <div className="mb-4 bg-navy-800 w-12 h-12 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Services;
