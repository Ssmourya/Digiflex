import Image from "next/image";
import React from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const PerformanceTestingSection = () => {
  return (
    <WrapperContainer>
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left side - Illustration */}
        <div className="xs:w-1/2 sm:w-1/2 md:w- lg:w-2/5 mx-auto">
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/Website_Maintenance.jpeg"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            priority={false}
            alt="image"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-3/5">
          <Heading>What Digiflex Offers for Performance Testing</Heading>

          <Paragraph className="text-start">
            At Digiflex.ai, we specialize in crafting customized performance
            testing solutions to address the unique requirements and challenges
            of each application. Our approach involves close collaboration with
            clients to define performance benchmarks, establish testing goals,
            and develop a tailored strategy aligned with business objectives.
            Leveraging our expertise and cutting-edge tools, we meticulously
            identify performance bottlenecks, analyze root causes, and propose
            effective solutions for optimization. Whether you're launching a new
            application, scaling infrastructure, or addressing existing
            performance challenges, Digiflex.ai equips you with the insights and
            support necessary to ensure exceptional performance under any
            circumstances.
          </Paragraph>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default PerformanceTestingSection;
