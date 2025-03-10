import React from "react";
import { Check } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const Perks = () => {
  const perks = [
    {
      id: 1,
      text: "It comprises in-built code splitting and quicker page loading",
    },
    {
      id: 2,
      text: "NextJs comes with default server-side rendering that is beneficial for React-based websites that require SEO.",
    },
    {
      id: 3,
      text: "As a development platform, it promotes static and dynamic content sites",
    },
    {
      id: 4,
      text: "It is seamless leading easy to test, maintain, scale and integrate.",
    },
    {
      id: 5,
      text: "It can be utilized to create progressive web apps and mobile apps.",
    },
    {
      id: 6,
      text: "It supports small applications and offers support for microservices architecture.",
    },
    {
      id: 7,
      text: "Delivers a supreme user experience without compromising page performance.",
    },
    {
      id: 8,
      text: "NextJs works on any device and work can be done seamlessly.",
    },
  ];

  return (
    <WrapperContainer>
      <div className="mb-8">
        <Heading> Perks of Using NextJs Development Services:</Heading>
        <Subheading>Boost Ultimate User Experience</Subheading>
        <Paragraph>
          Choosing developers has never been easy before. Nextbrain offers
          flexible engagement models that fit your requirements. We have a core
          team of dedicated professionals who are capable of building your dream
          user interface with page speed and SEO efficiency.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {perks.map((perk) => (
          <div key={perk.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <Check className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-gray-700">{perk.text}</p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
};

export default Perks;
