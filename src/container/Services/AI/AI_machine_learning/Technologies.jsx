import React from 'react'
import Image from 'next/image'
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

const Technologies = () => {

    const data = [
        { name: "TensorFlow", icon: "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" },
        { name: "PyTorch", icon: "/placeholder/100/100" },
        { name: "scikit-learn", icon: "/placeholder/100/100" },
        { name: "AWS SageMaker", icon: "/placeholder/100/100" },
        { name: "Google Cloud AI", icon: "/placeholder/100/100" },
        { name: "Azure ML", icon: "/placeholder/100/100" },
        { name: "Kubernetes", icon: "/placeholder/100/100" },
        { name: "Docker", icon: "/placeholder/100/100" },
        { name: "MLflow", icon: "/placeholder/100/100" },
        { name: "Kubeflow", icon: "/placeholder/100/100" },
        { name: "Spark", icon: "/placeholder/100/100" },
        { name: "DVC", icon: "/placeholder/100/100" }
    ];

    return (
        <WrapperContainer>
                    <div className="text-center mb-16">
                        <Heading>Technologies We Use</Heading>
                        <Paragraph>We leverage cutting-edge technologies to build robust machine learning solutions</Paragraph>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {
                            data.map((tech, index) => (
                                <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="mb-4 w-16 h-16 relative">
                                        <Image src={tech.icon} alt={tech.name} width={64} height={64} className="rounded" />
                                    </div>
                                    <h3 className="text-gray-800 font-medium text-center">{tech.name}</h3>
                                </div>
                            ))
                        }
                    </div>
        </WrapperContainer>
    )
}

export default Technologies