import "./hexagon.css";
import WrapperContainer from "../../../../Layout/WrapperContainer"
import Heading from "../../../../Layout/Heading"
import Subheading from "../../../../Layout/Subheading"
import Paragraph from "../../../../Layout/Paragraph"

const steps = [
    { id: "01", title: "Threat Modelling" },
    { id: "02", title: "Gather Requirements" },
    { id: "03", title: "Penetration Testing" },
    { id: "04", title: "Code Review" },
    { id: "05", title: "Testing During Development" },
    { id: "06", title: "Security Audits" },
    { id: "07", title: "Incident Response Planning" },
    { id: "08", title: "Continual Monitoring" },
    { id: "09", title: "Data Encryption" },
    { id: "10", title: "Access Control" },
    { id: "11", title: "User Education" },
    { id: "12", title: "Backup and Recovery" },
];

const tools = [
    "AppScan", "Checkmarx", "HP WebInspect", "Acunetix", "ZAP", "BurpSuite", "Tenable Nessus", "Sonar", "Snyk"
];
export default function SecurityApproach() {
    return (
        <WrapperContainer ClassName="px-4 py-12 bg-white text-center">
            
            <Heading>
                Our Approach To Ensure Complete Security
            </Heading>
            
            <div className="flex flex-wrap max-w-5xl mx-auto gap-2 mt-10">
                {
                    steps.map((step, index) => (
                        <div key={step.id} className={`hexagon ${index % 2 === 0 ? "mt-20" : ""}`}>
                            <div className="hexagon-inner">
                                <span className="text-5xl font-semibold text-purple-900">{step.id}</span>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <Subheading className="mt-10">Tools We Use</Subheading>
            <Paragraph className="mb-4">We leverage the latest and best tools for web test automation.</Paragraph>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    tools.map((tool) => (
                        <div key={tool} className="px-4 py-2 border rounded-lg shadow-sm text-blue-600 border-blue-600">
                            {tool}
                        </div>
                    ))
                }
            </div>
        </WrapperContainer>
    );
}
