import React from "react";
import { Rocket, Lightbulb, Target, Code, Zap, Cpu } from "lucide-react"; // Importing Lucide icons
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";
import WrapperContainer from "@/Layout/WrapperContainer";

const cardData = [
    {
        id: 1,
        image: "/assets/Next_Gen_Technologies.jpeg",
        alt: "Next Gen Technologies",
        heading: "Adapting Next Gen Technologies",
        icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        description:
            "We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.",
    },
    {
        id: 2,
        image: "/assets/Innovation.jpeg",
        alt: "Innovation",
        heading: "Leading through innovation",
        icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
        description:
            "We prioritize groundbreaking innovation in all our solutions, driving continuous improvements and staying ahead in an ever-changing technological landscape.",
    },
    {
        id: 3,
        image: "/assets/Focusing-Business.jpeg",
        alt: "Customer Outcomes",
        heading: "Focusing on the Customer's Business Outcomes",
        icon: <Target className="w-6 h-6 text-red-500" />,
        description:
            "Our primary goal is to deliver impactful business outcomes by focusing on customer-centric solutions that drive growth and enhance operational efficiency.",
    },
    {
        id: 4,
        image: "/assets/Digital_Engineering.jpeg",
        alt: "Engineering DNA",
        heading: "Digital Engineering with Quality DNA",
        icon: <Code className="w-6 h-6 text-green-500" />,
        description:
            "We incorporate a culture of quality into every stage of the engineering process, ensuring high-quality digital solutions that meet the needs of today's businesses.",
    },
    {
        id: 5,
        image: "/assets/agile.jpeg",
        alt: "Scaling with Agility",
        heading: "Scaling with Agility",
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        description:
            "Our agile approach allows us to rapidly adapt to changes, scale effectively, and deliver timely solutions that meet the dynamic demands of the market.",
    },
    {
        id: 6,
        image: "/assets/Next_Gen_Technologies.jpeg",
        alt: "Next Gen Technologies",
        heading: "Adapting Next Gen Technologies",
        icon: <Cpu className="w-6 h-6 text-indigo-600" />,
        description:
            "We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.",
    },
];

const Card = ({ image, alt, heading, description, icon }) => {
    return (
        <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
            {/* Image Section */}
            <div className="h-48 w-full">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>
            {/* Content Section */}
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">{icon}</div>
                    <Subheading className="ml-3 text-xl font-semibold">{heading}</Subheading>
                </div>
                <Paragraph className="text-md">{description}</Paragraph>
            </div>
        </div>
    );
};

const DigitalTransformation = () => {
    return (
        <WrapperContainer>
            {/* Header Section */}
            <div className="mb-8 flex flex-col lg:flex-row lg:justify-between gap-8">
                <Heading>
                    Fuelling your digital transformation and assurance goals
                </Heading>
                <Paragraph>
                    We lead with innovation to deliver resilient solutions with maximum impact.
                    We instill quality throughout the product development lifecycle with end-to-end
                    service capabilities, converging development and quality assurance domains.
                </Paragraph>
            </div>
            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card) => (
                    <Card
                        key={card.id}
                        image={card.image}
                        alt={card.alt}
                        heading={card.heading}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
        </WrapperContainer> 
    );
};

export default DigitalTransformation;
