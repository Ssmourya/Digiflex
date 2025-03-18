import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';
import WrapperContainer from '@/Layout/WrapperContainer';
import Image from 'next/image';

import React from 'react'

const CaseStudy = () => {

    const data = [
        {
            title: "Retail Demand Forecasting",
            industry: "Retail",
            description: "Reduced inventory costs by 23% and stockouts by 45% through ML-powered demand forecasting",
            image: "/api/placeholder/400/300"
        },
        {
            title: "Fraud Detection System",
            industry: "Finance",
            description: "Improved fraud detection accuracy by 87% while reducing false positives by 62%",
            image: "/api/placeholder/400/300"
        },
        {
            title: "Predictive Maintenance",
            industry: "Manufacturing",
            description: "Cut downtime by 35% and maintenance costs by 28% using predictive ML models",
            image: "/api/placeholder/400/300"
        }
    ];

    return (
        <WrapperContainer>
                    
            <div className="text-center">
                <Heading>Case Studies</Heading>
                <Paragraph>See how we've helped businesses achieve remarkable results with machine learning</Paragraph>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data.map((study, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image src={study.image} alt={study.title} layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium mb-3">{study.industry}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{study.title}</h3>
                                <p className="text-gray-600 mb-4">{study.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </WrapperContainer>
    )
}

export default CaseStudy