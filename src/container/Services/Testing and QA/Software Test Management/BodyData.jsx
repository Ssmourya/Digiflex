import React from "react";
import { motion } from 'framer-motion';
import  Automation from "../../../../assets/Automation-2.jpeg"
import  Cybersecurity from "../../../../assets/Cybersecurity.jpeg"
import  Shield from "../../../../assets/Shield.jpeg"
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";


const ParaComponent = ({section}) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="px-10 w-[65%]"
    >
        <motion.Heading
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl text-[#1A2E6F] md:text-6xl font-semibold leading-tight mb-8 flex"
        >
            <Heading>{section.title}</Heading>
        </motion.Heading>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-5 mx-auto"
        >
            <Paragraph className="text-start">{section.description}  </Paragraph> 
        </motion.p>

        {
            Object.values(section.points).map((point, pointIndex) => (
                <div key={pointIndex}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-lg mx-auto"
                    >
                        <Paragraph className="text-start">
                            <span className="text-[#1A2E6F] text-lh font-bold">{'>> '}</span>
                            {point}
                        </Paragraph>
                    </motion.div>
                </div>
            ))
        }
    </motion.div>
    )
}

const ImageComponent = ({section}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="overflow-hidden w-[40%] h-[40%] rounded-xl object-cover"
        >
            <img src={section.image}  alt="Key Image" loading="lazy" className="w-full h-full rounded-md object-contain shadow-lg" />
        </motion.div>
    )
}
const Body = () => {

    const sections = [
        {
            title: "Scalable, trustworthy test operations",
            description: "Standardize and scale testing best practices across the business. Establish governance and traceability for all your testing, in one place.",
            points: {
                p1: "Migrate easily from spreadsheets and legacy test management solutions",
                p2: "Transition to Agile and support waterfall projects with a centralized test management solution",
                p3: "Agile test management with a real-time, event-driven Jira integration, plus support for Azure Boards, Rally, and more"
            },
            image: Automation // Add your image here
        },
        {
            title: "Do more with your test automation",
            description: "Scale, orchestrate, and accelerate test automation for any open source or proprietary tool. Support DevOps workflows and get complete visibility into CI/CD pipelines.",
            points: {
                p1: "Migrate easily from spreadsheets and legacy test management solutions",
                p2: "Build custom, event-driven workflows with any third-party tool, including ChatOps tools like Teams and Slack",
                p3: "Integrate with Jenkins, Azure Pipelines, Bamboo, or any other CI/CD tool"
            },
            image: Cybersecurity // Add your image here
        },
        {
            title: "Complete visibility into testing",
            description: "Powerful, flexible reporting for confident decision making. Easy sharing to drive collaboration between QA, development, and the business.",
            points: {
                p1: "Built-in reports on defects, test status, coverage, and velocity",
                p2: "Customizable dashboards to report on any release, project, or program across the business",
                p3: "Share via email or URL"
            },
            image: Shield // Add your image here
        },
    ];

    return (
        
        <WrapperContainer>
            <div>
                <div>
                    {
                        sections.map((section, index) => (
                            <motion.div 
                                key={index} 
                                className='flex justify-center items-center w-11/12 mx-auto'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <motion.div className='flex flex-col md:flex-row justify-between items-center p-10'>
                                    {
                                        index % 2 === 0 ? (
                                            <>
                                                <ImageComponent section={section} />
                                                <ParaComponent section={section} />
                                            </>
                                        ) : (
                                            <>
                                                <ParaComponent section={section} />
                                                <ImageComponent section={section} />
                                            </>
                                        )
                                    }
                                </motion.div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </WrapperContainer>
    );
}

export default Body;
