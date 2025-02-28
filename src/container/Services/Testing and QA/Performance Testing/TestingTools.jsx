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
            
            <div className="grid grid-cols-4 gap-20">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <GitPullRequest className="text-green-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">GitPullRequest</Paragraph>
                </div>
                
                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Code className="text-orange-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Code</Paragraph>
                </div>
                
                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Database className="text-purple-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Database</Paragraph>
                </div>
                
                {/* Card 4 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Monitor className="text-green-600 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Monitor</Paragraph>
                </div>
                
                {/* Card 5 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">CheckCircle</Paragraph>
                </div>
                
                {/* Card 6 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Feather className="text-orange-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Feather</Paragraph>
                </div>
                
                {/* Card 7 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Settings className="text-gray-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Settings</Paragraph>
                </div>
                
                {/* Card 8 */}
                <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                    <Bug className="text-red-500 w-16 h-16 mb-4" />
                    <Paragraph className="text-lg font-medium text-gray-700">Bug</Paragraph>
                </div>
            </div>
        </WrapperContainer>
    );
}
