"use client"
import { useState } from 'react';
import { ArrowRight, Server, GitBranch, Repeat, Award, Users, LineChart, Shield, Code, Database, Zap } from 'lucide-react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Subheading from '@/Layout/Subheading';
import Paragraph from '@/Layout/Paragraph';

export default function MLOpsConsulting() {
    const [activeTab, setActiveTab] = useState('infrastructure');
    return (
        <div className='mb-10'>
            {/* WrapperContainer 1: Services with Tabs */}
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

            {/* WrapperContainer 2: Case Studies with Cards */}
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

            {/* WrapperContainer 3: Methodology & Approach - NEW */}
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

            {/* WrapperContainer 4: Technologies & Tools - NEW */}
            <WrapperContainer className>
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
                            { category: 'Experimentation', items: ['Neptune', 'Comet.ml', 'Sacred', 'AzureML'] }
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

        </div>
    );
}