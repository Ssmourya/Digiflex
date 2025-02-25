import React from 'react';
import { FolderIcon, DownloadIcon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const TestManagementSystem = () => {
    const features = [
        {
        icon: <FolderIcon className="w-8 h-8 text-blue-600" />,
        title: "Centralized test case repository",
        description: "Manage manual and automated test cases in a centrally organized repository using folders and tags. Create test cases with custom fields."
        },
        {
        icon: <DownloadIcon className="w-8 h-8 text-green-600" />,
        title: "One-click data import",
        description: "Import data from existing tools using APIs or from CSVs. Map CSV fields through smart parsing. Track import progress in real-time."
        },
        {
        icon: <FontAwesomeIcon icon={faJira} className="w-8 h-8 text-indigo-600" />,
        title: "Native Jira application",
        description: "Manage your test cases within Jira, and have your changes reflect seamlessly in test management with our native Jira application."
        },
        {
        icon: <FolderIcon className="w-8 h-8 text-purple-600" />,
        title: "Test run management",
        description: "Create and track manual & automated test runs. Upload test results from Testability, Observability. Parse JSON and BDD-XML reports."
        },
        {
        icon: <FolderIcon className="w-8 h-8 text-pink-600" />,
        title: "Hassle-free integrations",
        description: "Integrate with other BrowserStack products such as Test Observability, Automate, and test automation frameworks & CI/CD tools."
        },
        {
        icon: <FolderIcon className="w-8 h-8 text-orange-600" />,
        title: "Rich dashboard and reporting",
        description: "Get a high-level overview or drilled-down details on test cases, test runs, and other actionable insights for QA teams."
        }
    ];


    const Card = ({index, icon, title, description}) => {

        return(

            <div key={index} 
                className="group relative p-6 bg-white rounded-xl shadow-lg
                transition-all duration-300 ease-in-out 
                hover:shadow-2xl hover:scale-105
                border border-transparent hover:border-blue-200
                overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-blue-500 to-purple-600 
                    transform -translate-x-full 
                    group-hover:translate-x-0 
                    transition-transform duration-500"
                >

                </div>
                
                <div className="flex items-center mb-4 space-x-4">
                    <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
            
                <p className="text-lg leading-relaxed">
                    {description}
                </p>
                
            </div>
        )
    }

    return (
 <WrapperContainer>

 
        <div >
            
          <Heading>
            <div>
            Key features of Test Management System
            </div>
          </Heading>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    features.map((feature, index) => (
                        <Card index={index} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))
                }
            </div>

        </div>

 </WrapperContainer>
    );
};

export default TestManagementSystem;