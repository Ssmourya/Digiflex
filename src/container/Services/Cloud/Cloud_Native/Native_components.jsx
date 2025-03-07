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
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Archivetecture from "../../../../assets/Information_Gathering.jpeg";
import Ai_Containerization from "../../../../assets/Ai_Containerization.png";
import perfo_test_and_sol from "../../../../assets/perfo_test_and_sol.jpeg";
import AI_Powered from "../../../../assets/AI-Powered.jpg";
import AI_Elasticity from "../../../../assets/AI_Elasticity.avif";
import AI_Automation_Business from "../../../../assets/AI_Automation_Business.jpg";
import Automation_2 from "../../../../assets/Automation-2.jpeg";
import AI_Cutting_Edge from "../../../../assets/AI_Cutting-Edge.jpeg";

const data = [
  {
    title: "Microservices Architecture",
    icon: <Cloud size={32} />,
    image: Archivetecture,
    description:
      "Digiflex enables applications to be built as small, independent services that communicate via APIs.",
  },
  {
    title: "Containerization & Orchestration",
    icon: <Package size={32} />,
    image: Ai_Containerization,
    description:
      "Digiflex leverages Docker for standardized application packaging and Kubernetes for management.",
  },
  {
    title: "Serverless Computing",
    icon: <Server size={32} />,
    image: perfo_test_and_sol,
    description:
      "Digiflex eliminates infrastructure management with serverless solutions like AWS Lambda and Azure Functions.",
  },
  {
    title: "CI/CD Automation",
    icon: <RefreshCcw size={32} />,
    image: AI_Powered,
    description:
      "Digiflex automates software pipelines using Jenkins, GitHub Actions, and AWS CodePipeline.",
  },
  {
    title: "Scalability & Elasticity",
    icon: <TrendingUp size={32} />,
    image: AI_Elasticity,
    description:
      "Digiflex optimizes auto-scaling strategies with horizontal and vertical scaling techniques.",
  },
  {
    title: "Observability & Monitoring",
    icon: <Eye size={32} />,
    image: AI_Cutting_Edge,
    description:
      "Digiflex provides real-time insights using Prometheus, Grafana, and AWS CloudWatch.",
  },
  {
    title: "Service Mesh Security",
    icon: <ShieldCheck size={32} />,
    image: Automation_2,
    description:
      "Digiflex ensures secure, encrypted communication between microservices using Istio and Linkerd.",
  },
  {
    title: "Security & Compliance",
    icon: <Lock size={32} />,
    image: AI_Automation_Business,
    description:
      "Digiflex enforces the Zero Trust Security Model with IAM and TLS encryption.",
  },
];

const CloudServicesCards = () => {
  return (
    <WrapperContainer>
      <Heading>
        <h1 className="text-blue-900 text-center text-3xl font-bold mb-6">
          Digiflex Cloud-Native Services
        </h1>
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
