import React from "react";
import { Code, Database, Server, Github, Globe } from "lucide-react";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";

const techStack = [
  { icon: Code, title: "Frontend", description: "React.js, Next.js, Tailwind CSS" },
  { icon: Server, title: "Backend", description: "Node.js, Express.js" },
  { icon: Database, title: "Database", description: "MongoDB, PostgreSQL" },
  { icon: Github, title: "Version Control", description: "GitHub, Git" },
  { icon: Globe, title: "Deployment", description: "Vercel, Netlify" },
];

const TechStack = () => {
  return (
    <WrapperContainer>
      <div>
        <Heading>Technology Stack</Heading>
        <Paragraph className="text-center">
          Our project is built using the latest and most efficient technologies for performance and scalability.
        </Paragraph>

        {/* Grid Layout for Tech Stack */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {techStack.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-300 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1D4ED8] text-white mb-4 shadow-md 
                           transition-all duration-300 hover:bg-[#153c96] hover:rotate-6"
              >
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 mt-2 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default TechStack;
