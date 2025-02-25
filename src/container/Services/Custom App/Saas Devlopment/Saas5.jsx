import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';

const Saas5 = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const insights = [
    {
      title: 'Revolutionizing SaaS with AI: Trends and Innovations',
      category: 'AI & SaaS',
      image: 'https://i.pinimg.com/736x/4a/55/4d/4a554d5c076fa38204fa413e127b0584.jpg'
    },
    {
      title: 'How Cloud Computing is Reshaping SaaS Platforms',
      category: 'Cloud & SaaS',
      image: 'https://i.pinimg.com/736x/0e/0f/8d/0e0f8d70105d9e274b6ddee24dd180d1.jpg'
    },
    {
      title: 'Scaling SaaS Applications for Global Enterprises',
      category: 'Enterprise SaaS',
      image: 'https://i.pinimg.com/736x/95/e1/3d/95e13df0b24a78549dfd3897cfd9e6e4.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What are SaaS Application Development Services?',
      answer: 'SaaS Application Development Services provide cloud-based software solutions that are accessible over the internet. These services include design, development, deployment, and maintenance of software applications that follow the Software-as-a-Service model.'
    },
    {
      question: 'What are the key benefits of SaaS solutions?',
      answer: 'SaaS solutions offer advantages such as cost-effectiveness, automatic updates, scalability, remote accessibility, and seamless integration with other cloud services. They help businesses reduce infrastructure costs and streamline operations.'
    },
    {
      question: 'How does SaaS ensure data security?',
      answer: 'SaaS applications implement security measures such as end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards (e.g., GDPR, HIPAA, SOC 2).'
    },
    {
      question: 'Can SaaS applications be customized?',
      answer: 'Yes, SaaS applications can be customized to meet specific business needs. This includes configurable user interfaces, API integrations, workflow automation, and custom reporting capabilities.'
    },
    {
      question: 'What makes a SaaS application scalable?',
      answer: 'A scalable SaaS application is designed to handle increased user demand without performance degradation. It uses cloud infrastructure, microservices architecture, load balancing, and optimized database management.'
    },
    {
      question: 'What support and maintenance services are provided for SaaS applications?',
      answer: 'SaaS applications require ongoing support including bug fixes, performance monitoring, feature updates, security patches, and 24/7 customer support to ensure smooth operation and user satisfaction.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="mb-12 text-center">
        <Heading className="text-4xl font-bold mb-4">
          Empowering Businesses with SaaS Innovation
        </Heading>
        <Subheading className="text-xl text-gray-600">
          Explore the Future of SaaS Development
        </Subheading>
      </div>

      {/* Insights Section */}
      <div className="mb-12">
        <Heading className="text-3xl font-bold mb-2">
          Industry Insights
        </Heading>
        <Subheading className="text-xl text-gray-600 mb-8">
          Stay Ahead with SaaS Trends and Innovations
        </Subheading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={insight.image} 
                alt={insight.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-2">{insight.category}</div>
                <Subheading className="text-lg font-medium">
                  {insight.title}
                </Subheading>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <Heading className="text-2xl font-bold mb-8">
          FAQs - SaaS Application Development Services
        </Heading>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === index ? 
                  <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                }
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Saas5;
