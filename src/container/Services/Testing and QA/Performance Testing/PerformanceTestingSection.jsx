import React from 'react';
import Website_Maintenance from "../../../../assets/Website_Maintenance.jpeg"
import WrapperContainer from "../../../../Layout/WrapperContainer"
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading"
import Paragraph from "../../../../Layout/Paragraph"

const PerformanceTestingSection = () => {
    return (
        <WrapperContainer>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Left side - Illustration */}
                <div className="w-full lg:w-2/5">
                    <div className="w-full">
                    <img src={Website_Maintenance} alt="" />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="w-full lg:w-3/5">
                    <Heading>
                        What Digiflex Offers for Performance Testing
                    </Heading>

                    <Paragraph className="text-start">
                        At Digiflex.ai, we specialize in crafting customized performance testing solutions to address the unique requirements and challenges of each application. Our approach involves close collaboration with clients to define performance benchmarks, establish testing goals, and develop a tailored strategy aligned with business objectives. Leveraging our expertise and cutting-edge tools, we meticulously identify performance bottlenecks, analyze root causes, and propose effective solutions for optimization. Whether you're launching a new application, scaling infrastructure, or addressing existing performance challenges, Digiflex.ai equips you with the insights and support necessary to ensure exceptional performance under any circumstances.
                    </Paragraph>
                </div>
            </div>
        </WrapperContainer> 
    );
};

export default PerformanceTestingSection;