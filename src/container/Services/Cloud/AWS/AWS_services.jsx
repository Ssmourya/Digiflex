import React from "react";
import { Server, Database, Cloud, ShieldCheck, Cpu, Bot } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const useCases = [
    { 
        title: "Compute Solutions by Digiflex (EC2, Lambda, ECS, EKS)", 
        description: "Digiflex leverages AWS Compute services to provide scalable, high-performance cloud solutions. Whether it's EC2 for virtual servers, Lambda for serverless computing, ECS for container management, or EKS for Kubernetes orchestration, Digiflex ensures seamless deployment and efficiency for businesses.", 
        icon: <Cpu size={48} className="text-blue-500" />
    },
    { 
        title: "Advanced Storage Solutions (S3, EBS, Glacier)", 
        description: "Digiflex offers secure and cost-effective storage solutions using AWS. From scalable object storage with S3, high-performance block storage via EBS, to long-term archival with Glacier, our solutions ensure data integrity, accessibility, and business continuity.", 
        icon: <Cloud size={48} className="text-yellow-500" />
    },
    { 
        title: "Managed Databases (RDS, DynamoDB, Aurora)", 
        description: "Digiflex provides fully managed database solutions powered by AWS. We support relational databases like MySQL and PostgreSQL with RDS, offer high-speed NoSQL solutions via DynamoDB, and optimize performance with Aurora for mission-critical applications.", 
        icon: <Database size={48} className="text-green-500" />
    },
    { 
        title: "Secure Networking (VPC, CloudFront, Route 53)", 
        description: "Digiflex enhances cloud networking with AWS services. We implement secure, isolated cloud environments with VPC, optimize content delivery using CloudFront’s global CDN, and manage domain resolutions effectively with Route 53 for high-availability solutions.", 
        icon: <Server size={48} className="text-purple-500" />
    },
    { 
        title: "Security & Compliance Solutions (IAM, Shield, WAF)", 
        description: "At Digiflex, security is our priority. We utilize AWS IAM for identity management, Shield for DDoS protection, and WAF to guard against web threats. Our compliance solutions ensure businesses meet global security standards seamlessly.", 
        icon: <ShieldCheck size={48} className="text-red-500" />
    },
    { 
        title: "AI & Machine Learning (SageMaker, Rekognition)", 
        description: "Digiflex empowers businesses with AI-driven solutions using AWS. With SageMaker, we streamline machine learning model training, and with Rekognition, we provide powerful image and video analysis for automation and enhanced insights.", 
        icon: <Bot size={48} className="text-indigo-500" />
    }
];
const AWS_services = () => {
    return (
        <>
        <WrapperContainer>
            <div className="bg-gray-100 p-10 rounded-xl ">
            <Heading>
                <h1>Digiflex AWS Cloud Services</h1>
                </Heading>
                <Paragraph>
                <p className=" text-center max-w-3xl mx-auto">
                    Digiflex is a trusted provider of AWS-powered cloud solutions, helping businesses scale with cutting-edge computing, storage, networking, and security services. Whether you need advanced AI/ML capabilities, secure data management, or global cloud infrastructure, Digiflex ensures a seamless and efficient cloud transformation.
                </p>
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                    {useCases.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h2 className="text-xl font-semibold text-[#1A2E6F]">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </WrapperContainer>
        </>
    );
};

export default AWS_services;
