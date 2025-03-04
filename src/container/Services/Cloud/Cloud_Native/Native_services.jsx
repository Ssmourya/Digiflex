import React from "react";
import Google_logo from "../../../../assets/Google-Cloud-Logo.png";
import Micro_Azore from "../../../../assets/Azore_intro.png";
import Aws_logo from "../../../../assets/AWS_logo.avif";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

const cloudServices = [
  {
    provider: "AWS",
    logo: Aws_logo,
    services: [
      { name: "AWS Lambda", description: "Serverless computing." },
      { name: "Amazon ECS/EKS", description: "Managed container orchestration." },
      { name: "AWS Fargate", description: "Serverless containers." },
    ],
  },
  {
    provider: "Microsoft Azure",
    logo: Micro_Azore,
    services: [
      { name: "Azure Kubernetes Service (AKS)", description: "Managed Kubernetes." },
      { name: "Azure Functions", description: "Serverless computing." },
      { name: "Azure Monitor", description: "Cloud-native observability." },
    ],
  },
  {
    provider: "Google Cloud Platform (GCP)",
    logo: Google_logo,
    services: [
      { name: "Google Kubernetes Engine (GKE)", description: "Managed Kubernetes." },
      { name: "Cloud Run", description: "Serverless containers." },
      { name: "Cloud Pub/Sub", description: "Event-driven messaging." },
    ],
  },
];

const CloudServices = () => {
  return (
    <WrapperContainer>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
      {cloudServices.map((provider, index) => (
        <div
          key={index}
          className="border rounded-lg p-6 shadow-lg transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white group"
        >
          <div className="flex justify-center mb-4">
            <img src={provider.logo} alt={provider.provider} className=" h-16 object-contain" />
          </div>
          <Subheading>
          <h2 className="text-xl font-semibold mb-4 text-center group-hover:text-white">{provider.provider}</h2>
          </Subheading>
          <ul>
            {provider.services.map((service, i) => (
              <li key={i} className="mb-3">
                <strong className="group-hover:text-white">{service.name}</strong>
                <p className="text-gray-600 group-hover:text-white">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </WrapperContainer>
  );
};

export default CloudServices;
