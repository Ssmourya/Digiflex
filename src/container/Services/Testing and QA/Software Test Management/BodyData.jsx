import React from "react";
import Automation from "../../../../assets/Automation-2.jpeg";
import Cybersecurity from "../../../../assets/Cybersecurity.jpeg";
import Shield from "../../../../assets/Shield.jpeg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const ParaComponent = ({ section }) => {
    return (
        <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" w-full md:w-[50%]"
        >
            <Heading
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="text-2xl md:text-4xl lg:text-5xl text-[#1A2E6F] font-semibold leading-tight mb-6"
            >
                {section.title}
            </Heading>

            <p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mb-4 text-base md:text-lg"
            >
                <Paragraph>{section.description}</Paragraph>
            </p>

            {Object.values(section.points).map((point, pointIndex) => (
                <div key={pointIndex}>
                    <div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-base md:text-lg"
                    >
                        <Paragraph>
                            <span className="text-[#1A2E6F] font-bold">{'>> '}</span>
                            {point}
                        </Paragraph>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ImageComponent = ({ section }) => {
    return (
        <div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className=" md:w-[384px] sm:w-1/4 h-auto rounded-xl overflow-hidden"
        >
            <img
                src={section.image}
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
            image: Automation,
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
            image: Cybersecurity,
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
            image: Shield,
        },
    ];

    return (
        <WrapperContainer>
            <div>
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-center gap-10 p-6 md:p-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
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
