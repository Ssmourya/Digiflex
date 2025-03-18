import Subheading from '@/Layout/Subheading';
import WrapperContainer from '@/Layout/WrapperContainer'
import Heading from '@/Layout/Heading'
import React from 'react'

const Process = () => {

    const data = [
        {
            step: "1",
            title: "Discovery & Data Assessment",
            description: "We analyze your business needs and evaluate available data to determine the feasibility and potential impact of ML solutions."
        },
        {
            step: "2",
            title: "Data Preparation & Feature Engineering",
            description: "We clean, transform, and enrich your data to create optimal features for model training."
        },
        {
            step: "3",
            title: "Model Development & Training",
            description: "We develop and train custom machine learning models tailored to your specific business problems."
        },
        {
            step: "4",
            title: "Testing & Validation",
            description: "We rigorously test models against various scenarios to ensure accuracy, robustness, and reliability."
        },
        {
            step: "5",
            title: "Deployment & Integration",
            description: "We deploy models into your existing infrastructure with minimal disruption to your operations."
        },
        {
            step: "6",
            title: "Monitoring & Optimization",
            description: "We continuously monitor model performance and refine models to maintain and improve accuracy over time."
        }
    ];

  return (
    <WrapperContainer>
       
        <div className="text-center mb-16">
            <Heading>Our Development Process</Heading>
            <p className="text-gray-600 max-w-2xl mx-auto">A systematic approach to delivering high-quality machine learning solutions</p>
        </div>

        <div className="max-w-4xl mx-auto">
            {
                data.map( (process, index) => (
                    <div key={index} className="flex mb-8 last:mb-0">
                        <div className="mr-6">
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {process.step}
                            </div>
                            {index < 5 && <div className="h-full w-0.5 bg-indigo-200 mx-auto mt-2"></div>}
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                            <p className="text-gray-600">{process.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
        
    </WrapperContainer>
  )
}

export default Process