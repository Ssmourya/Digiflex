import React from "react";
import bg4 from "../../../../assets/bg4.png";
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";

const Thirds = () => {
  return (
    <div className="partner-section p-8 bg-white">
      {/* Partner Logos Section */}
      <div className="partner-logos text-center mb-8">
        <Heading>
          Empower Customer Engagement with Trusted Partners
        </Heading>
        <p className="text-lg text-gray-600 mb-6">
          Enhance your CEM strategy with leading tech partners and seamless integrations.
        </p>

        {/* Infinite Scrolling Logos */}
        <div className="logos-container overflow-hidden relative w-full">
          <div className="logos flex gap-8 whitespace-nowrap animate-scroll">
            <img
              src="https://i.pinimg.com/736x/48/e0/f3/48e0f3e95f00646880441f490bf008f5.jpg"
              alt="Accenture"
              className="max-w-[100px] h-auto"
            />
            <img
              src="https://i.pinimg.com/236x/c8/dc/e1/c8dce16663e5e2d215231332e9e6287e.jpg"
              alt="AWS"
              className="max-w-[100px] h-auto"
            />
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.cu4eSa20CWvBzOA2dsN3vAHaEK&pid=Api&P=0&h=180"
              alt="Cognizant"
              className="max-w-[100px] h-auto"
            />
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.yKW0vY2oXU2fll6NLaYvDgHaHa&pid=Api&P=0&h=180"
              alt="Deloitte"
              className="max-w-[100px] h-auto"
            />
            <img
              src="https://www.logotypes101.com/logos/277/E3C10AE4CF26940A139B8277DB970E4E/genesys_logo.png"
              alt="Genesys"
              className="max-w-[100px] h-auto"
            />
            <img
              src="https://download.logo.wine/logo/NICE_Ltd./NICE_Ltd.-Logo.wine.png"
              alt="NICE"
              className="max-w-[100px] h-auto"
            />
          </div>
        </div>

        {/* CTA Button */}
       
      </div>

      {/* AI Workspace Section */}
      <div className="ai-workspace flex gap-8 items-center flex-wrap">
        <div className="workspace-left flex-1">
          <img
            src={bg4}
            alt="AI Workspace"
            className="workspace-image max-w-[75%] rounded-lg shadow-md"
          />
        </div>
        <div className="workspace-right flex-1">
          <Heading >
            AI-Powered Customer Experience Management
          </Heading>
          <Subheading>
            Transforming Customer Journeys with Smart Automation
          </Subheading>
          <p className="text-lg text-gray-700">
            Streamline customer interactions with a unified AI-driven workspace. 
            Our CEM solutions enhance omnichannel engagement, automate workflows, 
            and provide intelligent case management to boost efficiency and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thirds;
