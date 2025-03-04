import { CircleCheck, Server, Settings, FileBarChart } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

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
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${bgColor} text-white rounded-full text-sm sm:text-lg font-bold`}>
                {number}
            </div>
            <div className="text-center sm:text-left">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{title}</h3>
                <Paragraph className="text-xs sm:text-sm">{description}</Paragraph>
            </div>
        </div>
    );

    return (
        <WrapperContainer>
            {/* Title */}
            <Heading className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                Performance Testing Approach
            </Heading>

            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-16 mt-8">

                {/* Left - Central Icon */}
                <div className="flex flex-col items-center p-4 sm:p-6 border-2 border-dashed border-gray-300 rounded-full w-24 h-24 sm:w-40 sm:h-40">
                    <Settings className="text-gray-600 w-12 h-12 sm:w-16 sm:h-16" />
                    <Paragraph className="text-xs sm:text-lg font-medium text-gray-700 mt-2 text-center">
                        Performance Testing
                    </Paragraph>
                </div>

                {/* Right - Steps */}
                <div className="flex flex-col space-y-4 sm:space-y-6">
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
