import react from "react";
// import security from "../images/security.jpg"
import left_logo from "../../../../assets/left-logo.jpeg"

import WrapperContainer from "../../../../Layout/WrapperContainer"
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading"
import Paragraph from "../../../../Layout/Paragraph"


const Overview = () => {
    
    const sections = [
        {
            title: "The OS for QA Teams",
            description: "Digiflex.ai's Quality OS is the only centralized QA platform that empowers you to build, connect, and optimize all your testing processes. Test more efficiently, gain real-time visibility at scale, and strengthen confidence in QA. It's time to transform your vision of faster, frictionless releases into reality.",
            secondHeading : "Build",
            secondDescription : "Orchestrate your testing in a way that works for your team. With the Quality OS, you can centralize test management and plan to build repeatable, scalable workflows that fit any development pipeline.", 
        }
    ];

    
    const ImageComponent = () => {
        return (
            <div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="overflow-auto w-full sm:w-3/4 md:w-1/2 lg:w-[30%] flex justify-center items-center mb-8 md:mb-0 p-4"
>
    <img 
        src={left_logo} 
        alt="Company Logo" 
        loading="lazy" 
        className="rounded-xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
    />
</div>

        )
    }

    const DiamondSection = ({secondHeading, secondDescription }) => {
        return (
            <div className="relative flex flex-row items-start space-x-4 w-full max-w-md">
            
                <div className="relative mt-6">
                    {/* Line */}
                    <div className="absolute left-[0.3rem] h-full w-[2px] bg-black"></div>

                    <div className="flex flex-col space-y-5">
                        {/* Diamonds */}
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                    </div>
                </div>
        
                {/* Text content */}
                <div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Subheading>{secondHeading}</Subheading>
                    <Paragraph className="text-start">{secondDescription}</Paragraph>
                </div>
            </div>
        );
    };
      
    const ParaComponent = ({title, description, secondHeading, secondDescription}) => {
        return (
            <div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 lg:w-[65%]"
            >
                <Heading
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-3xl sm:text-4xl font-semibold text-[#1A2E6F] leading-tight mb-6 md:mb-8"
                >
                    <Subheading>{title}</Subheading>
                </Heading>

                <Paragraph
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-lg sm:text-xl text-black mb-6 mx-auto"
                >
                    <Paragraph className="text-start">{description}</Paragraph>
                </Paragraph>

                <DiamondSection secondHeading={secondHeading} secondDescription={secondDescription}/>
            </div>
        )
    }

    return (
        <WrapperContainer>
            <div className="relative bg-white flex flex-col items-center justify-center px-4 sm:px-6">
                <div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    {/* Centered Overview */}
                    <Heading
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center text-[#1A2E6F]"
                    >
                        <Heading>Overview</Heading> 
                    </Heading>

                    {/* Underline */}
                    <div className="w-40 h-1 bg-[#64a2e2] mt-2"></div>
                </div>

                {/* Sections */}
                {
                    sections.map((section, index) => (
                        <div 
                            key={index} 
                            className="flex justify-center items-center w-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex flex-col lg:flex-row justify-between items-center py-6 sm:py-8 md:py-10 w-full">
                                {
                                    index % 2 === 0 ? (
                                        <>
                                            <ImageComponent/>
                                            <ParaComponent 
                                                title={section.title} 
                                                description={section.description} 
                                                secondHeading={section.secondHeading} 
                                                secondDescription={section.secondDescription}
                                            />
                                        </>
                                    ) : (
                                        <> 
                                            <div className="flex flex-col lg:flex-row w-full">
                                                <ParaComponent 
                                                    title={section.title} 
                                                    description={section.description} 
                                                    secondHeading={section.secondHeading} 
                                                    secondDescription={section.secondDescription}
                                                />
                                                <ImageComponent/>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </WrapperContainer>   
    )
}

export default Overview;