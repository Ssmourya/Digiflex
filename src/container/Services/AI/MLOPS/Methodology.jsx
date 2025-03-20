import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
import { LineChart, Code, Database, Zap } from 'lucide-react';

const Methodology = () => {
  return (
    <WrapperContainer >
    <div >
        <div className="text-center mb-10">
            <Heading>Our MLOps Methodology</Heading>
            <Paragraph>
                We follow a proven, structured approach to transform your machine learning operations
                from experimental to production-ready.
            </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                {
                    phase: 'Discovery',
                    icon: LineChart,
                    color: 'bg-indigo-500',
                    description: 'We assess your current ML infrastructure, workflows, and pain points to identify optimization opportunities.'
                },
                {
                    phase: 'Architecture',
                    icon: Database,
                    color: 'bg-blue-500',
                    description: 'Our experts design a custom MLOps architecture aligned with your business goals and technical requirements.'
                },
                {
                    phase: 'Implementation',
                    icon: Code,
                    color: 'bg-green-500',
                    description: 'We build your MLOps platform incrementally, ensuring minimal disruption to your existing operations.'
                },
                {
                    phase: 'Enablement',
                    icon: Zap,
                    color: 'bg-amber-500',
                    description: 'Your team receives comprehensive training and documentation to maintain and extend the platform.'
                }
            ].map((phase, index) => (
                <div key={index} className="relative">
                    <div className={`${phase.color} w-16 h-16 relative z-10 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                        <phase.icon className="w-8 h-8" />
                    </div>

                    {index < 3 && (
                        <div className="hidden lg:block z-5 absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                    )}

                    <div className="text-center">
                        <Subheading className="text-xl  mb-3">Phase {index + 1}: {phase.phase}</Subheading>
                        <Paragraph className="text-gray-600">{phase.description}</Paragraph>
                    </div>
                </div>
            ))}
        </div>
    </div>
</WrapperContainer>

  )
}

export default Methodology