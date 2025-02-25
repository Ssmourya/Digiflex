import React from 'react';
import cloud_infrastructure from "../../../../assets/cloud_infrastructure.jpeg"
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph"
// import { Fullscreen } from 'lucide-react';

const FeaturesList = ({ features }) => {
    return (
        <ul className="mb-4">
            {
                features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-2 text-lg">
                        <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                            />
                        </svg>
                        {feature}
                    </li>
                ))
            }
        </ul>
    );
};

const featuresData = [
  "Web & App Automation testing on Real Devices",
  "Automated Visual UI testing Cloud",
  "Unlimited Automated Accessibility Tests",
];

const ScalableAutomation = () => {
    return (
        <WrapperContainer>
        <div className="flex flex-col justify-between md:flex-row  w-11/12 mx-auto bg-white px-4">
            
            {/* Left Section */}
            <div className="md:w-1/2 md:pr-8 py-4">
                <Heading>
                    <div>Scalable Automation Cloud Infrastructure</div>
                </Heading>
                <Paragraph>
                    <span>
                    Effortlessly scale test configurations in the cloud and seamlessly test across diverse real devices, browsers, and OS versions.
                    </span>
                </Paragraph>
                
                <FeaturesList features={featuresData} />
                <button className="text-blue-500 hover:text-blue-600 font-medium py-2">
                    Get Started For Free 
                    <span className="ml-1">&rarr;</span>
                </button>
            </div>
            
            {/* Right Section */}
            <div className='p-5'>
                <img src={cloud_infrastructure} className='mx-auto rounded-xl' width={"1400px"} alt="" />
            </div>
        </div>
        </WrapperContainer>
  );
};

export default ScalableAutomation;
