import React from 'react';
import { 
    Slack, 
    MessageSquare, 
    Mail, 
    Video, 
    Github, 
    Gitlab, 
    GitBranch, 
    Terminal, 
    Trello, 
    FileText, 
    Calendar, 
    ListTodo, 
    Cloud, 
    Database, 
    Server, 
    Network, 
    BarChart, 
    LineChart, 
    Activity, 
    Timer, 
    Shield, 
    Lock, 
    Key, 
    UserCheck 
} from 'lucide-react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';

const IntegrationShowcase = () => {
    const categories = [
        {
            title: "Communication",
            icons: [
                { icon: Slack, name: "Slack" },
                { icon: MessageSquare, name: "Microsoft Teams" },
                { icon: Mail, name: "Gmail" },
                { icon: Video, name: "Zoom" }
            ]
        },
        {
            title: "Development",
            icons: [
                { icon: Github, name: "GitHub" },
                { icon: Gitlab, name: "GitLab" },
                { icon: GitBranch, name: "Bitbucket" },
                { icon: Terminal, name: "Jenkins" }
            ]
        },
        {
            title: "Project Management",
            icons: [
                { icon: Trello, name: "Trello" },
                { icon: FileText, name: "Confluence" },
                { icon: Calendar, name: "Asana" },
                { icon: ListTodo, name: "Monday.com" }
            ]
        },
        {
            title: "Cloud Services",
            icons: [
                { icon: Cloud, name: "AWS" },
                { icon: Database, name: "Azure" },
                { icon: Server, name: "Google Cloud" },
                { icon: Network, name: "DigitalOcean" }
            ]
        },
        {
            title: "Analytics & Monitoring",
            icons: [
                { icon: BarChart, name: "Datadog" },
                { icon: LineChart, name: "Grafana" },
                { icon: Activity, name: "New Relic" },
                { icon: Timer, name: "Splunk" }
            ]
        },
        {
            title: "Security & Identity",
            icons: [
                { icon: Shield, name: "Okta" },
                { icon: Lock, name: "Auth0" },
                { icon: Key, name: "LastPass" },
                { icon: UserCheck, name: "OneLogin" }
            ]
        }
    ];

    return (
        <div className='pb-20'>
        <WrapperContainer>
            <div className="mx-auto">
                <Heading>
                    Enterprise-Ready Integrations
                    </Heading>
                <Paragraph>
                <div className="text-center mb-16">
                    <p>
                        Connect your essential tools and automate workflows with our pre-built integrations
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                        Browse integration marketplace
                        <span className="ml-1">→</span>
                    </a>
                </div>
                </Paragraph>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        categories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="space-y-4">
                                <h3 className="text-lg font-semibold text-[#1A2E6F] mb-4">
                                    {category.title}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        category.icons.map((item, iconIndex) => (
                                            <div 
                                                key={`${categoryIndex}-${iconIndex}`}
                                                className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-200 hover:shadow-lg group gap-2"
                                            >
                                                <item.icon 
                                                    className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" 
                                                    strokeWidth={1.5}
                                                />
                                                <span className="text-sm text-center font-medium text-gray-600 group-hover:text-gray-900">
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </WrapperContainer>
        </div>
    );
};

export default IntegrationShowcase;
