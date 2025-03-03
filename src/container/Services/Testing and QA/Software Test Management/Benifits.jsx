import React from 'react';
import { motion } from 'framer-motion';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Subheading from '../../../../Layout/Subheading';
import Paragraph from '../../../../Layout/Paragraph';



const Card = ({index, icon, title, description}) => {
    return (
        <motion.div
            key={index}
            className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
            whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
        >
            <div className="text-3xl mb-4">{icon}</div>
            <Subheading className="mb-2">{title}</Subheading>
            <Paragraph className="text-start">{description}</Paragraph>
        </motion.div>
    )
}

const Benifits = () => {

    const benefits = [
        {
            icon: '💡', 
            title: 'Test smarter',
            description: 'Standardize testing across projects, and hit software delivery targets, with easy-to-use test management built for Agile teams.',
        },
        {
            icon: '⚡',
            title: 'Test faster',
            description: 'qTest Manager’s UI is built for fast test run planning and test execution, without limiting how these runs are organized into releases, cycles, and test suites.',
        },
        {
            icon: '📏',
            title: 'Test at scale',
            description: 'qTest is designed to scale as your organization grows, with enterprise-grade functionality, flexibility, reporting, and administrative features.',
        },
        {
            icon: '🔗',
            title: 'Best-in-class Jira integration',
            description: 'Streamline workflows and align testing with development with real-time, two-way updates at the defect and requirements levels.',
        },
        {
            icon: '🔄',
            title: 'Simple migration path',
            description: 'Whether you’re migrating from legacy tools or importing Excel spreadsheets, qTest provides a simple migration path that won’t affect testing timelines.',
        },
        {
            icon: '⚙️',
            title: 'Test management for enterprise DevOps',
            description: 'qTest Manager works to ensure quality throughout the DevOps process, keeping teams and testing tools connected.',
        },
    ];

    return (
    <WrapperContainer>
            <div>
                <motion.Heading
                    className="text-5xl font-semibold text-center text-[#1A2E6F] mb-20 "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                  <Heading> Benefits of Test Management</Heading> 
                </motion.Heading>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {
                        benefits.map((benefit, index) => (
                            <Card index={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
                        ))
                    }
                </motion.div>

            </div>
    </WrapperContainer>
    );
};

export default Benifits;
