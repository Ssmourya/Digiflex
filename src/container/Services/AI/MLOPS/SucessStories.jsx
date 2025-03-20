import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

const SucessStories = () => {
  return (
    <WrapperContainer >
    <div >
        <div className="text-center">
            <Heading>Success Stories</Heading>
            <Paragraph>
                See how our MLOps consulting has helped organizations across industries
                transform their machine learning operations.
            </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    industry: 'Financial Services',
                    title: 'Fraud Detection Model Deployment',
                    outcome: '94% reduction in model deployment time',
                    description: 'Implemented an automated MLOps pipeline that reduced model deployment time from weeks to hours while enhancing compliance documentation.'
                },
                {
                    industry: 'Healthcare',
                    title: 'Patient Outcome Prediction Pipeline',
                    outcome: '3.2x increase in model iteration speed',
                    description: 'Created a compliant ML infrastructure that accelerated model development while meeting strict healthcare data security requirements.'
                },
                {
                    industry: 'E-commerce',
                    title: 'Recommendation Engine Optimization',
                    outcome: '40% improvement in infrastructure costs',
                    description: 'Redesigned the ML platform to optimize resource usage while increasing the frequency of model updates from weekly to hourly.'
                }
            ].map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6">
                        <span className="text-blue-100 text-sm font-medium">{caseStudy.industry}</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{caseStudy.title}</h3>
                        <div className="text-blue-600 font-semibold mb-4">{caseStudy.outcome}</div>
                        <p className="text-gray-600 mb-6">{caseStudy.description}</p>

                    </div>
                </div>
            ))}
        </div>
    </div>
</WrapperContainer>

  )
}

export default SucessStories