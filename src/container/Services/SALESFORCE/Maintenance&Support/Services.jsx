import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import { Wrench, ShieldCheck, Rocket, Activity } from "lucide-react";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const services = [
  {
    icon: Wrench,
    title: "Regular Maintenance",
    description: "Ensure your system runs smoothly with scheduled updates and fixes.",
  },
  {
    icon: ShieldCheck,
    title: "Security Updates",
    description: "Protect your application with the latest security patches and monitoring.",
  },
  {
    icon: Rocket,
    title: "Optimization",
    description: "Enhance speed and efficiency with continuous system improvements.",
  },
  {
    icon: Activity,
    title: "24/7 Support",
    description: "Get round-the-clock assistance to resolve technical issues quickly.",
  },
];

function ServiceOverview() {
  return (
    <WrapperContainer>
      <div className="max-w-6xl mx-auto text-center">
        <Heading>Maintenance & Support Services</Heading>
        <Paragraph>
          We provide top-tier maintenance and support solutions to keep your application running smoothly, securely, and efficiently.
        </Paragraph>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white border border-gray-300 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white mb-4 shadow-md">
              <Icon size={32} />
            </div>
            <Subheading>{title}</Subheading>
            <Paragraph>{description}</Paragraph>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default ServiceOverview;
