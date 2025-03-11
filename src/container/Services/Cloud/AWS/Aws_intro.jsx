import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Paragraph from '@/Layout/Paragraph';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';

function Aws_intro() {
    const useCases = [
        { 
            title: "Big Data & Analytics", 
            description: "Real-time data processing with Digiflex.ai-powered AWS solutions.", 
            extra: "Digiflex.ai leverages AWS services like Redshift, Athena, and EMR to offer scalable storage, data lakes."
        },
        { 
            title: "AI & Machine Learning", 
            description: "Training and deploying ML models with Digiflex.ai expertise.", 
            extra: "With AWS SageMaker, Rekognition, Polly, and Lex, Digiflex.ai enables businesses to integrate AI-driven automation seamlessly."
        },
        { 
            title: "IoT (Internet of Things)", 
            description: "Managing and analyzing IoT devices with Digiflex.ai solutions.", 
            extra: "Digiflex.ai utilizes AWS IoT Core to provide secure connections and efficient management for billions of IoT devices."
        },
        { 
            title: "Web Hosting", 
            description: "Hosting websites and applications with Digiflex.ai-managed AWS infrastructure.", 
            extra: "Digiflex.ai ensures reliable hosting with AWS EC2, S3, CloudFront, and Route 53 for seamless global delivery."
        },
        { 
            title: "Enterprise Applications", 
            description: "Running SAP, Microsoft, and other enterprise workloads with Digiflex.ai solutions.", 
            extra: "Digiflex.ai optimizes business-critical applications using AWS for high performance, scalability, and security."
        },
        { 
            title: "Gaming", 
            description: "Scalable backend infrastructure for multiplayer games powered by Digiflex.ai.", 
            extra: "Using AWS GameLift and other services, Digiflex.ai delivers high-speed, low-latency game server hosting."
        }
    ];

    return (
            <WrapperContainer>
        
                {/* AWS Introduction Section */}
                
                    <Heading>
                        <h1>About AWS Cloud Services by Digiflex.ai</h1>
                    </Heading>
                    <div className='text-center'>
                       <Subheading>
                       Digiflex.ai leverages AWS Cloud to deliver secure, scalable, and cost-efficient solutions, empowering businesses to build, deploy, and manage applications with advanced computing, AI, and analytics services.
                        </Subheading>
                    </div>

                {/* AWS Use Cases Section */}
                <div className="w-full mt-5 sm:mt-10 mb-4 sm:mb-10">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {useCases.map((useCase, index) => (
                <div 
                    key={index} 
                    className="h-40 sm:h-56 lg:h-48 flex flex-col border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                    {/* Header */}
                    <div className="bg-blue-900 text-white font-bold p-3 sm:p-4 text-center text-sm sm:text-base">
                        {useCase.title}
                    </div>
                    
                    {/* Content */}
                    <div className="p-3 sm:p-4 flex-grow">
                        <p className="text-gray-700 font-semibold text-sm sm:text-base">
                            {useCase.description}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm mt-2">
                            {useCase.extra}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

    
            </WrapperContainer>
    );
}

export default Aws_intro;