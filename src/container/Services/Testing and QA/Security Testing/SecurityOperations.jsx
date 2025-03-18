import Image from "next/image";
import React from "react";

import WrapperContainer from "@/Layout/WrapperContainer";
import Paragraph from "@/Layout/Paragraph";
import Subheading from "@/Layout/Subheading";

const SecurityOperations = () => {
  return (
    <WrapperContainer className="flex flex-col md:flex-row gap-8 bg-white">
      {/* Security Operations Center */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full md:w-1/2">
        <div className="w-full h-64 mb-4">
          {" "}
          {/* Fixed height wrapper for image */}
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/security_1.jpeg"
            width={500}
            height={300}
            alt="Security Operations Center"
            className="rounded-xl w-full h-full object-cover"
            priority={false}
          />
        </div>
        <Subheading className="cursor-pointer">
          Security Operations Center
        </Subheading>
        <Paragraph className="mb-4">
          Digiflex Security Operations Center provides comprehensive support and
          protection throughout the entire lifecycle of cyber threats using AI,
          machine learning, and integrated automation systems. Our hybrid model
          allows businesses to integrate their existing security teams with
          Digiflex's cybersecurity experts or fully outsource their
          cybersecurity operations to us.
        </Paragraph>
        <a href="#" className="text-blue-600  font-semibold hover:underline">
          Explore Security Operations Center &gt;
        </a>
      </div>

      {/* Security Operations as a Platform */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full md:w-1/2">
        <div className="w-full h-64 mb-4">
          {" "}
          {/* Fixed height wrapper for image */}
          <Image
            src="https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:digiflex/security_2.jpeg"
            width={500}
            height={300}
            alt="Security Operations as a Platform"
            className="rounded-xl w-full h-full object-cover"
            priority={false}
          />
        </div>
        <Subheading className="cursor-pointer">
          Security Operations as a Platform
        </Subheading>
        <Paragraph className="mb-4">
          Security Operations as a platform provides a secure infrastructure
          that integrates key components of modern security, including SOAR,
          SIEM, endpoint detection response, and vulnerability management.
          Digiflex supports customers at any stage of their cyber resilience
          journey, offering centralized insights to quickly detect threats and
          automate responses.
        </Paragraph>
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          Explore Security Operations as a Platform &gt;
        </a>
      </div>
    </WrapperContainer>
  );
};

export default SecurityOperations;
