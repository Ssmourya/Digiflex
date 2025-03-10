import React from 'react';
import { Code, Brain, BarChart, Terminal, Server, Cpu, DollarSign, Cloud } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';

const PythonServices = () => {
  const services = [
    {
      title: "Custom Web Development",
      icon: <Code className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/5f/08/50/5f08505655b858d52ea4ef07a6fa58d5.gif",
      imageAlt: "Web development with Python",
      features: [
        "Scalable web applications using Django, Flask, and FastAPI.",
        "Secure, high-performance solutions for startups and enterprises."
      ]
    },
    {
      title: "AI & Machine Learning Solutions",
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/736x/e1/4e/bd/e14ebd1396c089ca5d97d0e53a6cd3c5.jpg",
      imageAlt: "AI and machine learning",
      features: [
        "AI-powered applications using TensorFlow, PyTorch, and Scikit-learn.",
        "NLP, image processing, and predictive analytics."
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif",
      imageAlt: "Data science visualization",
      features: [
        "Data visualization with Matplotlib, Seaborn, and Plotly.",
        "Big data processing using Pandas, NumPy, and Apache Spark."
      ]
    },
    {
      title: "Automation & Scripting",
      icon: <Terminal className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/35/67/0a/35670af51512742752528ad7bad1d94b.gif",
      imageAlt: "Python automation",
      features: [
        "Custom automation scripts for business processes.",
        "Web scraping using BeautifulSoup & Scrapy."
      ]
    },
    {
      title: "API Development & Integration",
      icon: <Server className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/ad/3a/a1/ad3aa168b76a1846c56edad68c218242.gif",
      imageAlt: "API development",
      features: [
        "RESTful and GraphQL API development with Flask & FastAPI.",
        "Seamless integration with third-party services."
      ]
    },
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/7c/4e/b6/7c4eb6fa3c754c7aab0863f107f15f3a.gif",
      imageAlt: "IoT devices",
      features: [
        "Python solutions for IoT devices using Raspberry Pi.",
        "Smart automation and embedded software development."
      ]
    },
    {
      title: "Python for FinTech & Blockchain",
      icon: <DollarSign className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/37/9e/be/379ebe8f2a043833bededd41d4987cbd.gif",
      imageAlt: "FinTech solutions",
      features: [
        "Financial software solutions with Python.",
        "Smart contract development for blockchain applications."
      ]
    },
    {
      title: "Python Cloud Solutions",
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      image: "https://i.pinimg.com/originals/25/3a/62/253a62e3cfa5806d1a4f0331bfdc79aa.gif",
      imageAlt: "Cloud computing",
      features: [
        "Cloud-based Python applications using AWS, Google Cloud, and Azure.",
        "Serverless and microservices architecture."
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
    <WrapperContainer>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
        <Heading>             Our Python Development Services
        </Heading>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div> 
         
       
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.imageAlt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <Subheading>{service.title}</Subheading>
                  
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">✔️</span>
                     <Paragraph>{feature}</Paragraph>
                      
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    </section>
  );
};

export default PythonServices;