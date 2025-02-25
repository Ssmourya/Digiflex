import React from 'react';
import Automation from "../../../../assets/Automation.jpeg";
import Cybersecurity from "../../../../assets/Cybersecurity.jpeg";
import Shield from "../../../../assets/Shield.jpeg";
import WrapperContainer from '../../../../Layout/WrapperContainer';
const Card = ({ image, title, description, points }) => (
    <div className="relative w-72 bg-black border border-green-500 text-white rounded-xl overflow-hidden shadow-2xl group transition-all duration-300 hover:scale-105">
        <div className="relative">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-full p-4">
            
            <h3 className="font-bold text-xl text-white drop-shadow-lg mb-2 transform group-hover:translate-x-2 transition-transform">
                {title}
            </h3>
            
            <p className="text-sm text-white/80 mb-2">{description}</p>
            
            {/* Points */}
            <ul className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-md">
                {
                    Object.values(points).map((point, index) => (
                        <li key={index} className="mb-1">- {point}</li>
                    ))
                }
            </ul>
            
        </div>
        {/* Right-Side Arrow */}
        <div className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full shadow-lg group-hover:bg-white/80 group-hover:text-black transition-all duration-300">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </div>
);
  
  
  
const AccelerateBusiness = () => {

    const cards = [
        {
            image: Automation,
            title: "QA Advisory",
            description: "Guiding digital assurance to excellence",
            points: {
                p1: "Comprehensive digital assurance strategies",
                p2: "Custom testing plans tailored to your needs",
                p3: "Reliable insights to enhance performance",
            },
        },
        {
            image: Cybersecurity,
            title: "AI Powered Testing",
            description: "Smarter, faster, more reliable",
            points: {
                p1: "AI-driven test case generation",
                p2: "Automated bug detection with machine learning",
                p3: "Improved accuracy and reduced testing time",
            },
        },
        {
            image: Shield,
            title: "Quality Engineering",
            description: "Quality assured through our services",
            points: {
                p1: "Seamless integration into development workflows",
                p2: "Ensuring high-quality output at every stage",
                p3: "Focus on customer-centric quality improvement",
            },
        },
        {
            image: Automation,
            title: "Next Gen Apps Testing",
            description: "Assuring tomorrow's solutions",
            points: {
                p1: "Next-gen tools for modern application testing",
                p2: "Support for complex and dynamic systems",
                p3: "Uncompromised reliability in testing solutions",
            },
        },
        {
            image: Cybersecurity,
            title: "Enterprise Apps Testing",
            description: "Driving quality in platforms",
            points: {
                p1: "Scalable testing for large applications",
                p2: "Focus on enterprise security and compliance",
                p3: "Enhancing business continuity through testing",
            },
        },
        {
            image: Shield,
            title: "Data & Analytics Testing",
            description: "Confidence through data insights",
            points: {
                p1: "Testing for data integrity and accuracy",
                p2: "Advanced analytics validation processes",
                p3: "Support for data-driven decision-making",
            },
        },
        {
            image: Automation,
            title: "Automation Testing",
            description: "Scale with speed and quality",
            points: {
                p1: "Fast-track testing with automation frameworks",
                p2: "Improve coverage while reducing manual efforts",
                p3: "Integrate seamlessly into CI/CD pipelines",
            },
        },
        {
            image: Cybersecurity,
            title: "QA for AI Systems",
            description: "Reliable AI with comprehensive QA",
            points: {
                p1: "AI-specific test case strategies",
                p2: "Validation of machine learning models",
                p3: "Ensuring ethical and unbiased AI behavior",
            },
        },
        {
            image: Cybersecurity,
            title: "QA for AI Systems",
            description: "Reliable AI with comprehensive QA",
            points: {
                p1: "AI-specific test case strategies",
                p2: "Validation of machine learning models",
                p3: "Ensuring ethical and unbiased AI behavior",
            },
        },
        {
            image: Shield,
            title: "Data & Analytics Testing",
            description: "Confidence through data insights",
            points: {
                p1: "Testing for data integrity and accuracy",
                p2: "Advanced analytics validation processes",
                p3: "Support for data-driven decision-making",
            },
        },
        {
            image: Automation,
            title: "Automation Testing",
            description: "Scale with speed and quality",
            points: {
                p1: "Fast-track testing with automation frameworks",
                p2: "Improve coverage while reducing manual efforts",
                p3: "Integrate seamlessly into CI/CD pipelines",
            },
        },
        {
            image: Cybersecurity,
            title: "QA for AI Systems",
            description: "Reliable AI with comprehensive QA",
            points: {
                p1: "AI-specific test case strategies",
                p2: "Validation of machine learning models",
                p3: "Ensuring ethical and unbiased AI behavior",
            },
        },
    ];
  
    return (
        <WrapperContainer>

        
        <div className="bg-white w-11/12 mx-auto px-4">
            <h2 className="text-5xl font-semibold text-[#1A2E6F] mb-4">What we do ?</h2>
            <h1 className="text-4xl font-semibold text-[#1A2E6F] mb-6">Accelerate your business</h1>
            <p className="text-black mb-8 text-xl max-w-2xl">We strengthen enterprises for digital transformation.</p>
            <div className="flex space-x-8 mb-4">
                <button className="text-red-500 border-b-2 border-red-500 font-semibold">Digital Assurance</button>
                <button className="text-gray-500 hover:text-red-500">Digital Engineering</button>
            </div>
            <div className="grid grid-cols-4 gap-6">
            {
                cards.map( (card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description} 
                        points={card.points}
                    />
                ))
            }
            </div>
        </div>
        </WrapperContainer>
    );
  };
  
  export default AccelerateBusiness;
  