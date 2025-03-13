import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Fontheading from "@/Layout/Fontheading";

const advantages = [
  {
    title: "Scalability & Flexibility with Digiflex.ai",
    points: [
      "Digiflex.ai ensures seamless scaling of cloud resources based on business needs.",
      "Supports hybrid and multi-cloud environments for optimized performance.",
    ],
    image: "/assets/Azore_sca.jpg",
  },
  {
    title: "Cost-Effective Cloud Solutions",
    points: [
      "Digiflex.ai leverages Azure’s pay-as-you-go model to minimize IT expenses.",
      "Exclusive discounts and strategic resource allocation for maximum efficiency.",
    ],
    image: "/assets/Azore_cost.avif",
  },
  {
    title: "Enterprise-Grade Security & Compliance",
    points: [
      "Digiflex.ai implements advanced security measures, including multi-layer encryption and threat protection.",
      "Ensures compliance with GDPR, HIPAA, ISO, and other global standards to meet regulatory requirements.",
    ],
    image: "/assets/Azore_security.jpg",
  },
  {
    title: "Reliable Cloud Infrastructure",
    points: [
      "Digiflex.ai guarantees 99.99% uptime with Azure’s globally distributed data centers.",
      "Automated backups and disaster recovery solutions to safeguard critical data.",
    ],
    image: "/assets/Azure_time.jpg",
  },
];

function AzureServices() {
  return (
    <WrapperContainer>
      <Heading>Advantages of Azure with Digiflex.ai</Heading>
      <div className="space-y-10">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } space-y-6 md:space-y-0`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <Fontheading>{advantage.title}</Fontheading>
              <ul className="mt-5 list-disc list-inside text-lg space-y-2">
                {advantage.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={advantage.image}
                alt={advantage.title}
                width={350} // Added required width
                height={300} // Added required height
                className="object-cover rounded-lg"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}

export default AzureServices;
