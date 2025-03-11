import React from 'react';
import { Box, Code, Database, Cloud, Shield } from 'lucide-react';
import Paragraph from '@/Layout/Paragraph';
import Heading from '@/Layout/Heading';

const TechnologiesSection = () => {
  const technologies = [
    {
      category: "Python Frameworks & Libraries",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      items: ["Django", "Flask", "FastAPI", "Pyramid", "Tornado"],
      image: "https://i.pinimg.com/736x/ea/14/d4/ea14d435f1ce719bd869db9163bf6b58.jpg"
    },
    {
      category: "AI & Data Science",
      icon: <Box className="w-8 h-8 text-blue-600" />,
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
      image: "https://i.pinimg.com/736x/b7/d3/d9/b7d3d9ed459566da143609bd43dd48ed.jpg"
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
      image: "https://i.pinimg.com/736x/03/7b/af/037baf52e06b9d51ae0b3045cbc82628.jpg"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      image: "https://i.pinimg.com/736x/39/f2/57/39f257d7c2087b3659335965a43536b4.jpg"
    },
    {
      category: "Testing & Security",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      items: ["PyTest", "Selenium", "Postman", "OAuth", "JWT Authentication"],
      image: "https://i.pinimg.com/736x/e0/35/86/e03586bcdf234865cd539536bb7b17af.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Heading>Technologies We Use</Heading>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <Paragraph>
            We leverage industry-leading technologies to deliver robust, scalable, and high-performance Python solutions.
          </Paragraph>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={tech.image} 
                  alt={`${tech.category} technologies`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="mx-auto mb-2">{tech.icon}</div>
                    <h3 className="font-bold text-xl">{tech.category}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;