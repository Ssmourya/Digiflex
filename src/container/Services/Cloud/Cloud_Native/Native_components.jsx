import React, { useState } from "react";
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
    icon: <Cloud size={24} className="text-white" />,
    image: Archivetecture,
    description:
      "Digiflex enables applications to be built as small, independent services that communicate via APIs. Each microservice can be developed, deployed, and scaled independently, ensuring faster updates, modularity, and high availability.",
  },
  {
    title: "Containerization & Orchestration",
    icon: <Package size={24} className="text-white" />,
    image: Ai_Containerization,
    description:
      "Digiflex leverages Docker for standardized application packaging and Kubernetes for automated management, scaling, and orchestration. Helm simplifies Kubernetes application deployment, enhancing operational efficiency.",
  },
  {
    title: "Serverless Computing",
    icon: <Server size={24} className="text-white" />,
    image: perfo_test_and_sol,
    description:
      "Digiflex eliminates infrastructure management with serverless solutions like AWS Lambda, Azure Functions, and Google Cloud Functions. This ensures cost-efficiency by charging only for actual execution time.",
  },
  {
    title: "CI/CD (Continuous Integration & Continuous Deployment)",
    icon: <RefreshCcw size={24} className="text-white" />,
    image: AI_Powered,
    description:
      "Digiflex automates software development pipelines using tools like Jenkins, GitHub Actions, GitLab CI/CD, and AWS CodePipeline. This reduces manual effort and accelerates software delivery.",
  },
  {
    title: "Scalability & Elasticity",
    icon: <TrendingUp size={24} className="text-white" />,
    image: AI_Elasticity,
    description:
      "Digiflex optimizes auto-scaling strategies to meet traffic demands dynamically. Horizontal and vertical scaling techniques, along with load balancing, ensure performance optimization.",
  },
  {
    title: "Observability & Monitoring",
    icon: <Eye size={24} className="text-white" />,
    image: AI_Cutting_Edge,
    description:
      "Digiflex provides real-time insights using tools like Prometheus, Grafana, AWS CloudWatch, and Datadog. This ensures proactive issue detection and resolution.",
  },
  {
    title: "Service Mesh for Secure Communication",
    icon: <ShieldCheck size={24} className="text-white" />,
    image: Automation_2,
    description:
      "Digiflex ensures secure, encrypted, and optimized communication between microservices with Istio, Linkerd, and Consul, providing enhanced traffic control, security, and observability.",
  },
  {
    title: "Security & Compliance",
    icon: <Lock size={24} className="text-white" />,
    image: AI_Automation_Business,
    description:
      "Digiflex enforces the Zero Trust Security Model with least privilege access, Identity & Access Management (IAM), and data encryption via TLS to ensure complete protection of sensitive information.",
  },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="pt-12 sm:pt-16 md:pt-20">
      <div className="bg-blue-900  pb-12 sm:pb-16 md:pb-20">
        <WrapperContainer>
          <Heading>
            <h1 className="text-white">Digiflex Cloud-Native Services</h1>
          </Heading>
          <div className=" bg-blue-950">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Features List */}
              <div className="flex flex-col">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 border-b border-blue-800 flex flex-col md:flex-row md:items-center gap-3 cursor-pointer transition duration-300 hover:bg-blue-700 ${
                      selectedItem === index ? "bg-blue-600" : ""
                    }`}
                    onClick={() => setSelectedItem(index)} // Only sets the selected index
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <p className="text-white hover:underline">{item.title}</p>
                    </div>
                    {selectedItem === index && (
                      <div className="mt-2 md:hidden bg-blue-800 p-3 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 object-cover rounded-lg mb-2"
                        />
                        <p className="text-white text-sm">{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column - Display Dynamic Content for Larger Screens */}
              <div
                className={`hidden md:flex flex-col p-4 transition-all duration-300 ${
                  selectedItem !== null ? "h-auto" : "h-64"
                }`}
              >
                <div className="bg-blue-800 rounded-lg min-h-64 mb-4 flex items-center justify-center text-white overflow-hidden">
                  {selectedItem !== null ? (
                    <img
                      src={data[selectedItem].image}
                      alt={data[selectedItem].title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  ) : (
                    <p>Your image will go here</p>
                  )}
                </div>
                <p className="text-white text-center">
                  {selectedItem !== null
                    ? data[selectedItem].description
                    : "Click on a feature to learn more."}
                </p>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </div>
  );
};

export default Sidebar;
