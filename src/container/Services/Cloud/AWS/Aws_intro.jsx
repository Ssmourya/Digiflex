import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from '../../../../Layout/Paragraph';
import Heading from '../../../../Layout/Heading';

function Aws_intro() {
    const useCases = [
        { 
            title: "Big Data & Analytics", 
            description: "Real-time data processing using AWS services.", 
            extra: "AWS offers scalable storage, data lakes, and powerful analytics with services like Redshift, Athena, and EMR."
        },
        { 
            title: "AI & Machine Learning", 
            description: "Training and deploying ML models.", 
            extra: "AWS provides AI/ML services such as SageMaker, Rekognition, Polly, and Lex for advanced automation."
        },
        { 
            title: "IoT (Internet of Things)", 
            description: "Managing and analyzing IoT devices.", 
            extra: "AWS IoT Core enables secure connection and management of billions of IoT devices globally."
        },
        { 
            title: "Web Hosting", 
            description: "Hosting websites and applications with auto-scaling.", 
            extra: "AWS supports hosting with EC2, S3, CloudFront, and Route 53 for seamless global delivery."
        },
        { 
            title: "Enterprise Applications", 
            description: "SAP, Microsoft, and other enterprise workloads.", 
            extra: "AWS enables running business-critical applications with high performance, scalability, and security."
        },
        { 
            title: "Gaming", 
            description: "Scalable backend infrastructure for multiplayer games.", 
            extra: "AWS GameLift and other services offer high-speed, low-latency game server hosting."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <WrapperContainer>
                {/* AWS Introduction Section */}
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <Heading>
                        <h1>About AWS Cloud Services</h1>
                    </Heading>
                        <div >
                    <Paragraph>
                            AWS Cloud (Amazon Web Services Cloud) is the world's leading cloud computing platform, providing a vast set of services such as computing, storage, databases, networking, security, AI, and analytics. 
                            It enables businesses, developers, and enterprises to build, deploy, and manage applications on a global scale with high reliability, security, and cost efficiency.
                    </Paragraph>
                        </div>
                </div>

                {/* AWS Use Cases Section */}
                <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {useCases.map((useCase, index) => (
                                <div 
                                    key={index} 
                                    className="flex flex-col h-full border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
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
        </div>
    );
}

export default Aws_intro;