import { CircleCheck, Server, Settings, FileBarChart } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading"

export default function PerformanceTestingDiagram() {

    const steps = [
        {
            number: "01",
            title: "Analyze",
            description: "Analyze servers, networks, applications, and end users.",
            bgColor: "bg-red-500"
        },
        {
            number: "02",
            title: "Tailor Solutions",
            description: "Tailor solutions based on business requirements and performance bottlenecks.",
            bgColor: "bg-black"
        },
        {
            number: "03",
            title: "Generate Reports",
            description: "Generate reports with data, metrics & measurements, trend analysis, and capacity planning.",
            bgColor: "bg-gray-400"
        }
    ];

    const Step = ({ number, title, description, bgColor }) => (
        <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 flex items-center justify-center ${bgColor} text-white rounded-full text-lg font-bold`}>
                {number}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <Paragraph className="text-start">{description}</Paragraph>
            </div>
        </div>
    );


    return (
        <WrapperContainer>
            
            
            {/* Title */}
            <Heading>
                Performance Testing Approach
            </Heading>

            <div className="flex items-center space-x-16">

                {/* Left - Central Icon */}
                <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-full w-40 h-40">
                    <Settings className="text-gray-600 w-16 h-16" />
                    <Paragraph className="text-lg font-medium text-gray-700 mt-2 text-center">Performance Testing</Paragraph>
                </div>

                {/* Right - Steps */}
                <div className="flex flex-col space-y-6">

                    {steps.map((step, index) => (
                        <Step
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            bgColor={step.bgColor}
                        />
                    ))}

                </div>
            </div>
        </WrapperContainer>
    );
}
