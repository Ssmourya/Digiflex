import React from 'react'
import { ArrowRight, Server, GitBranch, Repeat, Award, Users, LineChart, Shield, Code, Database, Zap } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
const Technologies = () => {
    return (
        <WrapperContainer className="mb-10">
            <div >
                <div className="text-center">
                    <Heading>Technologies We Work With</Heading>
                    <Paragraph>
                        Our MLOps experts are proficient in a wide range of technologies and tools to build
                        your optimal machine learning operations platform.
                    </Paragraph>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[
                        { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'] },
                        { category: 'Orchestration', items: ['Kubernetes', 'Docker', 'Airflow', 'Argo'] },
                        { category: 'ML Frameworks', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'] },
                        { category: 'MLOps Tools', items: ['MLflow', 'Kubeflow', 'DVC', 'Weights & Biases'] },
                        { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog'] },
                        { category: 'Feature Stores', items: ['Feast', 'Tecton', 'Hopsworks', 'Redis'] },
                        { category: 'Data Processing', items: ['Spark', 'Dask', 'Ray', 'Beam'] },
                        { category: 'Data Versioning', items: ['DVC', 'LakeFS', 'Pachyderm', 'Quilt'] }
                    ].map((tech, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="text-lg font-bold mb-4 text-blue-600">{tech.category}</h3>
                            <ul className="space-y-2">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 cursor-default">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </WrapperContainer>
    )
}

export default Technologies