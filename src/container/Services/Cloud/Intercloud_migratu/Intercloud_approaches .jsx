import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer'
import Heading from '@/Layout/Heading'
import Fontheading from '@/Layout/Fontheading';
import Subheading from '@/Layout/Subheading';

const advantages = [
  {
    title: "AI-Powered Automation",
    description: "Enhance operational efficiency with intelligent automation, reducing manual efforts and errors.",
    Pros: "Increases productivity, ensures accuracy.",
    Cons: "Requires initial setup and training."
  },
  {
    title: "Multi-Platform Integration",
    description: "Seamlessly connect with websites, mobile apps, and enterprise software like CRM and ERP.",
    Pros: "Enhances accessibility and scalability.",
    Cons: "Needs proper API configuration."
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Track user interactions, gather valuable data, and optimize performance with real-time analytics.",
    Pros: "Improves decision-making and strategic planning.",
    Cons: "Requires proper data management."
  },
  {
    title: "24/7 Availability",
    description: "Ensure uninterrupted customer support and business operations with AI-driven solutions.",
    Pros: "Provides round-the-clock assistance.",
    Cons: "May need human intervention for complex queries."
  },
  {
    title: "Scalability & Customization",
    description: "Tailor-made AI solutions that grow with your business needs.",
    Pros: "Supports business expansion seamlessly.",
    Cons: "Customization may take time."
  },
  {
    title: "Enhanced Security Measures",
    description: "AI-driven security protocols safeguard business data and transactions.",
    Pros: "Protects against cyber threats and breaches.",
    Cons: "Requires continuous updates."
  },
  {
    title: "Cloud-Based Deployment",
    description: "Deploy AI solutions on the cloud for accessibility and high performance.",
    Pros: "Reduces infrastructure costs and increases reliability.",
    Cons: "Dependent on internet connectivity."
  },
  {
    title: "AI-Powered Decision Making",
    description: "Leverage AI algorithms to analyze data and suggest the best business strategies.",
    Pros: "Boosts efficiency and accuracy in decision-making.",
    Cons: "Might require human validation for critical decisions."
  }
];

function AI_Solutions_Digiflex () {
  return (
    <>
      <WrapperContainer>
        <Heading>
          AI Solutions by Digiflex.ai
        </Heading>
        <Subheading className='text-center'>
          Digiflex.ai provides cutting-edge AI solutions to enhance business efficiency, optimize performance, and drive innovation across multiple industries.
        </Subheading>
        <div className=''>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <Fontheading>
                    {item.title}
                  </Fontheading>
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  )
}

export default AI_Solutions_Digiflex