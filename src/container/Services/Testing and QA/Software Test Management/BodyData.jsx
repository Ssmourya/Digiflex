import React from "react";
import { motion } from 'framer-motion';
import  Automation from "../../../../assets/Automation.jpeg"
import  Cybersecurity from "../../../../assets/Cybersecurity.jpeg"
import  Shield from "../../../../assets/Shield.jpeg"
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
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
            <div >
                {sections.map((section, index) => (
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
                                    // Even indices: Image on left
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="overflow-hidden w-[40%] rounded-xl "
                                        >
                                            <img src={section.image} width={"400px"} alt="Key Image" loading="lazy" className="rounded-md shadow-lg" />
                                        </motion.div>

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
                                                {section.title}
                                            </motion.Heading>

                                            <motion.Paragraph
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 1.5 }}
                                                className="text-xl mb-6 mx-auto"
                                            >
                                                {section.description}
                                            </motion.Paragraph>

                                            {
                                                Object.values(section.points).map((point, pointIndex) => (
                                                    <div key={pointIndex}>
                                                        <motion.p
                                                            initial={{ opacity: 0 }}
                                                            whileInView={{ opacity: 1 }}
                                                            transition={{ duration: 1.5 }}
                                                            className="text-lg mb-1 mx-auto"
                                                        >
                                                            <span className="text-[#1A2E6F] text-xl font-bold">{'>> '}</span>
                                                            {point}
                                                        </motion.p>
                                                    </div>
                                                ))
                                            }
                                        </motion.div>
                                    </>
                                ) : (
                                    // Odd indices: Image on right
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1 }}
                                            className="px-10 w-[65%]"
                                        >
                                            <motion.h1
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 1.2 }}
                                                className="text-4xl md:text-5xl text-[#1A2E6F] font-semibold leading-tight mb-8"
                                            >
                                                {section.title}
                                            </motion.h1>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 1.5 }}
                                                className="text-xl mb-6 mx-auto"
                                            >
                                                {section.description}
                                            </motion.p>

                                            {Object.values(section.points).map((point, pointIndex) => (
                                                <div key={pointIndex}>
                                                    <motion.p
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        transition={{ duration: 1.5 }}
                                                        className="text-lg mb-1 mx-auto"
                                                    >
                                                        <span className="text-[#1A2E6F] text-1xl font-bold">{'>> '}</span>
                                                        {point}
                                                    </motion.p>
                                                    
                                                
                                                </div>
                                            ))}
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            className="overflow-hidden w-[40%] rounded-xl "
                                        >
                                            <img src={section.image} width={"400px"} alt="Key Image" loading="lazy" className="rounded-md shadow-lg" />
                                        </motion.div>
                                    </>
                                )
                            }
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>

        </WrapperContainer>
    );
}

export default Body;
