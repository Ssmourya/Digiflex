import Image from "next/image";
import react from "react";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const Overview = () => {
  const section = {
    title: "The OS for QA Teams",
    description:
      "Digiflex.ai's Quality OS is the only centralized QA platform that empowers you to build, connect, and optimize all your testing processes. Test more efficiently, gain real-time visibility at scale, and strengthen confidence in QA. It's time to transform your vision of faster, frictionless releases into reality.",
    secondHeading: "Build",
    secondDescription:
      "Orchestrate your testing in a way that works for your team. With the Quality OS, you can centralize test management and plan to build repeatable, scalable workflows that fit any development pipeline.",
  };

  const ImageComponent = () => {
    return (
      <div className="overflow-auto w-full sm:w-3/4 md:w-1/2 lg:w-[30%] flex justify-center items-center mb-8 md:mb-0 p-4">
        <Image
          src="/assets/left-logo.jpeg"
          width={500}
          height={300}
          alt="Company Logo"
          loading="lazy"
          className="rounded-xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
          priority={false}
        />
      </div>
    );
  };

  const DiamondSection = ({ secondHeading, secondDescription }) => {
    return (
      <div className="relative flex flex-row items-start space-x-4 w-full max-w-md">
        <div className="relative mt-6">
          {/* Line */}
          <div className="absolute left-[0.3rem] h-full w-[2px] bg-blue-700"></div>

          <div className="flex flex-col space-y-5">
            {/* Diamonds */}
            <div className="w-3 h-3 bg-blue-700 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-700 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-700 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-700 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-700 transform rotate-45"></div>
          </div>
        </div>

        {/* Text content */}
        <div>
          <Subheading>{secondHeading}</Subheading>
          <Paragraph className="text-start">{secondDescription}</Paragraph>
        </div>
      </div>
    );
  };

  const ParaComponent = ({
    title,
    description,
    secondHeading,
    secondDescription,
  }) => {
    return (
      <div className="px-4 sm:px-6 md:px-10 w-full md:w-1/2 lg:w-[65%]">
        <Subheading>{title}</Subheading>
        <Paragraph className="text-start">{description}</Paragraph>
        <DiamondSection
          secondHeading={secondHeading}
          secondDescription={secondDescription}
        />
      </div>
    );
  };

  return (
    <WrapperContainer>
      <div className="relative bg-white flex flex-col items-center justify-center">
        <Heading>Overview</Heading>

        <div
          className="flex justify-center items-center w-full"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center  w-full">
            <ImageComponent />
            <ParaComponent
              title={section.title}
              description={section.description}
              secondHeading={section.secondHeading}
              secondDescription={section.secondDescription}
            />
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Overview;
