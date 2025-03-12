import Image from "next/image";
import React from "react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";
import Paragraph from "@/Layout/Paragraph";

const Thirds = () => {
  return (
    <div className="partner-section p-6 md:p-8 bg-white">
      {/* Partner Logos Section */}
      <div className="partner-logos text-center mb-8">
        <Heading>Empower Customer Engagement with Trusted Partners</Heading>
        <Paragraph>
          Enhance your CEM strategy with leading tech partners and seamless
          integrations.
        </Paragraph>

        {/* Infinite Scrolling Logos */}
        <div className="logos-container overflow-hidden relative w-full">
          <div className="logos flex gap-8 whitespace-nowrap animate-scroll">
            <Image
              src="https://i.pinimg.com/736x/48/e0/f3/48e0f3e95f00646880441f490bf008f5.jpg"
              width={500}
              height={300}
              alt="Accenture"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
            <Image
              src="https://i.pinimg.com/236x/c8/dc/e1/c8dce16663e5e2d215231332e9e6287e.jpg"
              width={500}
              height={300}
              alt="AWS"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
            <Image
              src="https://tse4.mm.bing.net/th?id=OIP.cu4eSa20CWvBzOA2dsN3vAHaEK&pid=Api&P=0&h=180"
              width={500}
              height={300}
              alt="Cognizant"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
            <Image
              src="https://tse2.mm.bing.net/th?id=OIP.yKW0vY2oXU2fll6NLaYvDgHaHa&pid=Api&P=0&h=180"
              width={500}
              height={300}
              alt="Deloitte"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
            <Image
              src="https://www.logotypes101.com/logos/277/E3C10AE4CF26940A139B8277DB970E4E/genesys_logo.png"
              width={500}
              height={300}
              alt="Genesys"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
            <Image
              src="https://download.logo.wine/logo/NICE_Ltd./NICE_Ltd.-Logo.wine.png"
              width={500}
              height={300}
              alt="NICE"
              className="max-w-[80px] md:max-w-[100px] h-auto"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* AI Workspace Section */}
      <div className="ai-workspace flex flex-col md:flex-row gap-8 items-center">
        <div className="workspace-left flex-1 flex justify-center">
          <Image
            src="/assets/bg4.png"
            alt="AI Workspace"
            className="w-full max-w-sm md:max-w-[75%] rounded-lg shadow-md"
            priority={false}
          />
        </div>
        <div className="workspace-right flex-1 text-center md:text-left">
          <Heading>AI-Powered Customer Experience Management</Heading>
          <Subheading>
            Transforming Customer Journeys with Smart Automation
          </Subheading>
          <Paragraph>
            Streamline customer interactions with a unified AI-driven workspace.
            Our CEM solutions enhance omnichannel engagement, automate
            workflows, and provide intelligent case management to boost
            efficiency and customer satisfaction.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Thirds;
