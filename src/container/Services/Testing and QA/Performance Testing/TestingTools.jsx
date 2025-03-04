import { CheckCircle, Bug, Feather, GitPullRequest, Code, Settings, Database, Monitor } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

export default function TestingTools() {
    return (
        <WrapperContainer>
            <Heading>
                Our Expertise In Some of The Leading Testing Tools
            </Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-20">
                {/** Card Data */}
                {[
                    { icon: GitPullRequest, color: "text-green-500", label: "GitPullRequest" },
                    { icon: Code, color: "text-orange-500", label: "Code" },
                    { icon: Database, color: "text-purple-500", label: "Database" },
                    { icon: Monitor, color: "text-green-600", label: "Monitor" },
                    { icon: CheckCircle, color: "text-green-500", label: "CheckCircle" },
                    { icon: Feather, color: "text-orange-500", label: "Feather" },
                    { icon: Settings, color: "text-gray-500", label: "Settings" },
                    { icon: Bug, color: "text-red-500", label: "Bug" },
                ].map(({ icon: Icon, color, label }, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                    >
                        <Icon className={`${color} w-16 h-16 mb-4`} />
                        <Paragraph className="text-lg font-medium text-gray-700">{label}</Paragraph>
                    </div>
                ))}
            </div>
        </WrapperContainer>
    );
}
