import React from "react";
import {
  Cloud,
  Package,
  Server,
  RefreshCcw,
  TrendingUp,
  Eye,
  ShieldCheck,
  Lock,
} from "lucide-react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const data = [
  {
    title: "Microservices Architecture",
    icon: <Cloud size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Information_Gathering.jpeg",
    description:
      "Digiflex enables applications to be built as small, independent services that communicate via APIs.",
  },
  {
    title: "Containerization & Orchestration",
    icon: <Package size={32} />,
    image:"https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Ai_Containerization.png",
    description:
      "Digiflex leverages Docker for standardized application packaging and Kubernetes for management.",
  },
  {
    title: "Serverless Computing",
    icon: <Server size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/perfo_test_and_sol.jpeg",
    description:
      "Digiflex eliminates infrastructure management with serverless solutions like AWS Lambda and Azure Functions.",
  },
  {
    title: "CI/CD Automation",
    icon: <RefreshCcw size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AI-Powered.jpg",
    description:
      "Digiflex automates software pipelines using Jenkins, GitHub Actions, and AWS CodePipeline.",
  },
  {
    title: "Scalability & Elasticity",
    icon: <TrendingUp size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AI_Elasticity.avif",
    description:
      "Digiflex optimizes auto-scaling strategies with horizontal and vertical scaling techniques.",
  },
  {
    title: "Observability & Monitoring",
    icon: <Eye size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AI_Cutting-Edge.jpeg",
    description:
      "Digiflex provides real-time insights using Prometheus, Grafana, and AWS CloudWatch.",
  },
  {
    title: "Service Mesh Security",
    icon: <ShieldCheck size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Automation-2.jpeg",
    description:
      "Digiflex ensures secure, encrypted communication between microservices using Istio and Linkerd.",
  },
  {
    title: "Security & Compliance",
    icon: <Lock size={32} />,
    image: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/AI_Automation_Business.jpg",
    description:
      "Digiflex enforces the Zero Trust Security Model with IAM and TLS encryption.",
  },
];

const CloudServicesCards = () => {
  return (
    <WrapperContainer>
      <Heading className="text-center mb-6">     
          Digiflex Cloud-Native Services
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition duration-300 cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full text-center transition-all duration-500 group-hover:h-full">
              {/* Icon */}
              <div className="mb-3 text-white opacity-100 transition-all duration-300 group-hover:opacity-0">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white transition-all duration-500">
                {item.title}
              </h3>

              {/* Description (Hidden by Default) */}
              <p className="text-white text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default CloudServicesCards;
