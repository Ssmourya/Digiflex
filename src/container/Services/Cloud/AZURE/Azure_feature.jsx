import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Subheading from "@/Layout/Subheading";

const services = [
  {
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_Computer.png",
    title: "Compute Services",
    brief: "Virtual Machines (VMs), App Services, AKS",
    details:
      "Azure provides scalable compute resources with Virtual Machines, Kubernetes, and App Services for hosting.",
  },
  {
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_storage.webp",
    title: "Storage Services",
    brief: "Blob Storage, Azure Files, Data Lake",
    details:
      "Reliable cloud storage solutions including Blob Storage for unstructured data, Azure Files for file storage, and Data Lake for big data analytics.",
  },
  {
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_network.png",
    title: "Networking",
    brief: "Virtual Networks (VNet), Load Balancers, ExpressRoute",
    details:
      "Connect and secure cloud applications using Azure Virtual Networks, Load Balancers for traffic management, and ExpressRoute for private connections.",
  },
  {
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_learning.jpg",
    title: "AI & Machine Learning",
    brief: "Cognitive Services, Azure Machine Learning",
    details:
      "Enhance applications with AI capabilities using Cognitive Services for vision, speech, and language processing, and Azure ML for model training.",
  },
  {
    icon: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Azore_security.png",
    title: "Security & Identity",
    brief: "Azure Active Directory (AAD), Key Vault, Security Center",
    details:
      "Secure access and identity management with Azure AD, store secrets safely in Key Vault, and protect resources using Security Center.",
  },
];

function Azure_feature() {
  return (
    <WrapperContainer>
      <Heading>Essential Features of Azure with Digiflex.ai</Heading>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-auto min-h-[250px] group">
              {/* Base Card */}
              <div className="absolute inset-0 p-4 bg-white border border-gray-300 rounded-xl shadow-md transition-all duration-300 group-hover:opacity-0">
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt="icon"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      priority={false}
                    />
                  </div>
                  <Subheading className="text-lg sm:text-xl font-bold text-center group-hover:text-white">
                    {service.title}
                  </Subheading>
                  <p className="text-gray-700 text-center text-sm sm:text-base">
                    {service.brief}
                  </p>
                </div>
              </div>

              {/* Hover Card */}
              <div className="absolute inset-0 p-4 bg-blue-500 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={service.icon} // Fixed the incorrect src value
                      alt="icon"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      priority={false}
                    />
                  </div>
                  <Subheading className="text-lg sm:text-xl font-bold text-center text-white">
                    {service.title}
                  </Subheading>
                  <p className="text-center text-sm sm:text-base">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Azure_feature;
