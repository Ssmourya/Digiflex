import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";

const ParaComponent = ({ section }) => {
    return (
        <div className="w-full md:w-[50%]">

            <Heading className="text-start">
                {section.title}
            </Heading>

            <Paragraph className="text-md text-start">{section.description}</Paragraph>

            {
                Object.values(section.points).map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-2 text-base md:text-lg text-gray-700">
                        <span className="text-blue-600 text-lg -mt-5">➜</span>
                        <Paragraph className="text-start">{point}</Paragraph>
                    </li>
                ))
            }
        </div>
    );
};

const ImageComponent = ({ section }) => {
    return (
        <div className=" md:w-[384px] sm:w-2/4 h-auto rounded-xl overflow-hidden">
            <img
                src={`/assets/${section.imageName}.jpeg`}
                alt="Key Image"
                loading="lazy"
                className="w-full h-full rounded-md object-contain shadow-lg"
            />
        </div>
    );
};

const Body = () => {
    const sections = [
        {
            title: "Scalable, trustworthy test operations",
            description:
                "Standardize and scale testing best practices across the business. Establish governance and traceability for all your testing, in one place.",
            points: {
                p1: "Migrate easily from spreadsheets and legacy test management solutions",
                p2: "Transition to Agile and support waterfall projects with a centralized test management solution",
                p3: "Agile test management with a real-time, event-driven Jira integration, plus support for Azure Boards, Rally, and more",
            },
            imageName: "Automation-2",
        },
        {
            title: "Do more with your test automation",
            description:
                "Scale, orchestrate, and accelerate test automation for any open source or proprietary tool. Support DevOps workflows and get complete visibility into CI/CD pipelines.",
            points: {
                p1: "Migrate easily from spreadsheets and legacy test management solutions",
                p2: "Build custom, event-driven workflows with any third-party tool, including ChatOps tools like Teams and Slack",
                p3: "Integrate with Jenkins, Azure Pipelines, Bamboo, or any other CI/CD tool",
            },
            imageName: "Cybersecurity",
        },
        {
            title: "Complete visibility into testing",
            description:
                "Powerful, flexible reporting for confident decision making. Easy sharing to drive collaboration between QA, development, and the business.",
            points: {
                p1: "Built-in reports on defects, test status, coverage, and velocity",
                p2: "Customizable dashboards to report on any release, project, or program across the business",
                p3: "Share via email or URL",
            },
            imageName: "Shield",
        },
    ];

    return (
        <WrapperContainer>
            <div>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-center gap-10 p-3"
                    >
                        {index % 2 === 0 ? (
                            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
                                <ImageComponent section={section} />
                                <ParaComponent section={section} />
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row-reverse justify-between items-center w-full gap-10">
                                <ImageComponent section={section} />
                                <ParaComponent section={section} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </WrapperContainer>
    );
};

export default Body;
