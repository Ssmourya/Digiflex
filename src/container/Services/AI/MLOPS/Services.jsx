"use client"
import { useState } from 'react';
import React from 'react'
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';
import { Server, GitBranch, Repeat, Award, Users} from 'lucide-react';

const Services = () => {
    const [activeTab, setActiveTab] = useState('infrastructure');
    return (
        <WrapperContainer >
            <div >
                <Heading >Our MLOps Services</Heading>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {[
                        { id: 'infrastructure', label: 'Infrastructure', icon: Server },
                        { id: 'cicd', label: 'CI/CD Pipelines', icon: GitBranch },
                        { id: 'monitoring', label: 'Model Monitoring', icon: Repeat },
                        { id: 'governance', label: 'ML Governance', icon: Award },
                        { id: 'training', label: 'Team Training', icon: Users }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                    {activeTab === 'infrastructure' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">ML Infrastructure Setup & Optimization</h3>
                            <p className="text-gray-600">
                                We design and implement robust infrastructure for training, deploying, and
                                operating machine learning models at scale, optimized for your specific needs.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Kubernetes-based model serving',
                                    'GPU cluster optimization',
                                    'Cost-efficient resource allocation',
                                    'Cloud-native ML architecture',
                                    'Distributed training environments',
                                    'Custom infrastructure design'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                                            <Server className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'cicd' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">CI/CD for Machine Learning</h3>
                            <p className="text-gray-600">
                                Implement automated pipelines for testing, deploying, and rolling back machine learning models
                                with enterprise-grade reliability and speed.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Automated model testing',
                                    'ML-specific deployment pipelines',
                                    'Feature store integration',
                                    'Dataset versioning',
                                    'Integrated experiment tracking',
                                    'Model registry implementation'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                                            <GitBranch className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'monitoring' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">Model Monitoring & Observability</h3>
                            <p className="text-gray-600">
                                Establish comprehensive monitoring systems to track model performance, detect drift,
                                and ensure your ML systems remain reliable in production.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Model performance tracking',
                                    'Data drift detection',
                                    'Custom alerting systems',
                                    'Automated retraining triggers',
                                    'A/B testing frameworks',
                                    'ML-specific observability tools'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                                            <Repeat className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'governance' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">ML Governance & Compliance</h3>
                            <p className="text-gray-600">
                                Establish frameworks for responsible AI development with documentation,
                                lineage tracking, and compliance measures tailored to your industry.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Model documentation systems',
                                    'Reproducibility frameworks',
                                    'Audit trail implementation',
                                    'Regulatory compliance measures',
                                    'Responsible AI practices',
                                    'Model lineage tracking'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                                            <Award className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === 'training' && (
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800">Team Training & Enablement</h3>
                            <p className="text-gray-600">
                                Empower your data scientists and engineers with the skills and knowledge
                                needed to maintain and extend your MLOps capabilities.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'MLOps best practices workshop',
                                    'Tool-specific training',
                                    'Custom documentation creation',
                                    'Knowledge transfer sessions',
                                    'Hands-on implementation support',
                                    'ML platform adoption program'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-md text-blue-700 mr-3">
                                            <Users className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </WrapperContainer>
    )
}

export default Services