import React from "react";
import Azure_sca from "../../../../assets/Azore_sca.jpg";
import Azore_cost from "../../../../assets/Azore_cost.avif";
import Azure_security from "../../../../assets/Azore_security.jpg";
import Azure_time from "../../../../assets/Azure_time.jpg";
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

const advantages = [
  {
    title: "Scalability & Flexibility with Digiflex",
    points: [
      "Digiflex ensures seamless scaling of cloud resources based on business needs.",
      "Supports hybrid and multi-cloud environments for optimized performance.",
    ],
    image: Azure_sca,
  },
  {
    title: "Cost-Effective Cloud Solutions",
    points: [
      "Digiflex leverages Azure’s pay-as-you-go model to minimize IT expenses.",
      "Exclusive discounts and strategic resource allocation for maximum efficiency.",
    ],
    image: Azore_cost,
  },
  {
    title: "Enterprise-Grade Security & Compliance",
    points: [
      "Digiflex implements advanced security measures, including multi-layer encryption and threat protection.",
      "Ensures compliance with GDPR, HIPAA, ISO, and other global standards to meet regulatory requirements.",
    ],
    image: Azure_security,
  },
  {
    title: "Reliable Cloud Infrastructure",
    points: [
      "Digiflex guarantees 99.99% uptime with Azure’s globally distributed data centers.",
      "Automated backups and disaster recovery solutions to safeguard critical data.",
    ],
    image: Azure_time,
  },
];

function AzureServices() {
  return (
    <>
      <WrapperContainer>
        <div>
          <Heading>
            <h1>Advantages of Azure with Digiflex</h1>
          </Heading>
          <div className="space-y-20">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{advantage.title}</h2>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    {advantage.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-[350px] h-[300px] object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default AzureServices;