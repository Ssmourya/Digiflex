import { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from "../../../../Layout/Paragraph";
import Fontheading from "../../../../Layout/Fontheading";

const data = [
  {
    title: "Microservices Architecture",
    description:
      "Digiflex enables applications to be built as small, independent services that communicate via APIs. Each microservice can be developed, deployed, and scaled independently, ensuring faster updates, modularity, and high availability.",
  },
  {
    title: "Containerization & Orchestration",
    description:
      "Digiflex leverages Docker for standardized application packaging and Kubernetes for automated management, scaling, and orchestration. Helm simplifies Kubernetes application deployment, enhancing operational efficiency.",
  },
  {
    title: "Serverless Computing",
    description:
      "Digiflex eliminates infrastructure management with serverless solutions like AWS Lambda, Azure Functions, and Google Cloud Functions. This ensures cost-efficiency by charging only for actual execution time.",
  },
  {
    title: "CI/CD (Continuous Integration & Continuous Deployment)",
    description:
      "Digiflex automates software development pipelines using tools like Jenkins, GitHub Actions, GitLab CI/CD, and AWS CodePipeline. This reduces manual effort and accelerates software delivery.",
  },
  {
    title: "Scalability & Elasticity",
    description:
      "Digiflex optimizes auto-scaling strategies to meet traffic demands dynamically. Horizontal and vertical scaling techniques, along with load balancing, ensure performance optimization.",
  },
  {
    title: "Observability & Monitoring",
    description:
      "Digiflex provides real-time insights using tools like Prometheus, Grafana, AWS CloudWatch, and Datadog. This ensures proactive issue detection and resolution.",
  },
  {
    title: "Service Mesh for Secure Communication",
    description:
      "Digiflex ensures secure, encrypted, and optimized communication between microservices with Istio, Linkerd, and Consul, providing enhanced traffic control, security, and observability.",
  },
  {
    title: "Security & Compliance",
    description:
      "Digiflex enforces the Zero Trust Security Model with least privilege access, Identity & Access Management (IAM), and data encryption via TLS to ensure complete protection of sensitive information.",
  },
];

export default function Sidebar() {
  const [selected, setSelected] = useState(data[0]);

  return (
    <WrapperContainer>
      <Heading><h1>Digiflex Cloud-Native Services</h1></Heading>
      <div className="flex p-4 justify-center items-center">
        {/* Full Screen Card with Divider */}
        <div className="w-full h-full flex">
          {/* Left Sidebar */}
          <div className="w-1/2 ">
           <Fontheading>
              Topics
              </Fontheading>
            <ul className="space-y-5 pt-5">
              {data.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setSelected(item)}
                  className={`p-2 cursor-pointer rounded-md hover:bg-blue-100 transition ${
                    selected.title === item.title ? "bg-blue-200" : ""
                  }`}
                >
                <Fontheading>
                  {item.title}
                  </Fontheading>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vertical Divider */}
          <div className="w-0.5 bg-gray-300"></div>

          {/* Right Content Section */}
          <div className="w-1/2 p-4">
            <Subheading><h2 className="text-2xl font-bold mb-4">{selected.title}</h2></Subheading>
            <Paragraph><p className="text-gray-700">{selected.description}</p></Paragraph>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}