import React from 'react';
import { 
  Code, Database, Globe, Cloud, Shield,
  Coffee, Server, Layers, Box, Zap,
  FileCode, Monitor, HardDrive, Key, Lock,
  Grid, GitBranch, Terminal, Cpu, Settings
} from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';
export default function Technologies() {
  const techCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      items: [
        { name: "Core Java", icon: <Coffee className="h-4 w-4 text-red-500" /> },
        { name: "Java EE", icon: <Server className="h-4 w-4 text-orange-500" /> },
        { name: "Spring Boot", icon: <Layers className="h-4 w-4 text-green-500" /> },
        { name: "Spring MVC", icon: <Box className="h-4 w-4 text-green-600" /> },
        { name: "Hibernate", icon: <Zap className="h-4 w-4 text-yellow-600" /> },
        { name: "Struts", icon: <FileCode className="h-4 w-4 text-purple-500" /> },
        { name: "Jakarta EE", icon: <Server className="h-4 w-4 text-blue-500" /> },
      ],
    },
    {
      title: "Frontend & UI Frameworks",
      icon: <Monitor className="h-5 w-5 text-indigo-600" />,
      items: [
        { name: "React.js", icon: <Zap className="h-4 w-4 text-blue-400" /> },
        { name: "Angular", icon: <Shield className="h-4 w-4 text-red-600" /> },
        { name: "JSP", icon: <FileCode className="h-4 w-4 text-green-500" /> },
        { name: "Thymeleaf", icon: <Layers className="h-4 w-4 text-green-400" /> },
        { name: "Bootstrap", icon: <Grid className="h-4 w-4 text-purple-600" /> },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-green-600" />,
      items: [
        { name: "MySQL", icon: <Database className="h-4 w-4 text-blue-500" /> },
        { name: "PostgreSQL", icon: <Database className="h-4 w-4 text-blue-700" /> },
        { name: "MongoDB", icon: <HardDrive className="h-4 w-4 text-green-500" /> },
        { name: "Oracle", icon: <Database className="h-4 w-4 text-red-500" /> },
        { name: "Firebase", icon: <Zap className="h-4 w-4 text-yellow-500" /> },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5 text-blue-400" />,
      items: [
        { name: "AWS", icon: <Cloud className="h-4 w-4 text-orange-500" /> },
        { name: "Azure", icon: <Cloud className="h-4 w-4 text-blue-500" /> },
        { name: "Google Cloud", icon: <Cloud className="h-4 w-4 text-green-500" /> },
        { name: "Docker", icon: <Box className="h-4 w-4 text-blue-600" /> },
        { name: "Kubernetes", icon: <GitBranch className="h-4 w-4 text-blue-400" /> },
        { name: "Jenkins", icon: <Settings className="h-4 w-4 text-red-500" /> },
      ],
    },
    {
      title: "Testing & Security",
      icon: <Shield className="h-5 w-5 text-red-500" />,
      items: [
        { name: "JUnit", icon: <Terminal className="h-4 w-4 text-green-600" /> },
        { name: "Selenium", icon: <Cpu className="h-4 w-4 text-blue-600" /> },
        { name: "Postman", icon: <Globe className="h-4 w-4 text-orange-500" /> },
        { name: "OAuth", icon: <Key className="h-4 w-4 text-green-500" /> },
        { name: "JWT Authentication", icon: <Lock className="h-4 w-4 text-blue-500" /> },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
      <Heading>Technologies We Use</Heading>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 text-sm sm:text-base flex items-center">
                    <div className="mr-3 flex-shrink-0">{item.icon}</div>
                   <Subheading><span>{item.name}</span></Subheading>
                    
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}