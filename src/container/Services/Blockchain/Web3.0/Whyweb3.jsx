import React from 'react';
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
import Subheading from "../../../../Layout/Subheading";

const Web3Features = () => {
  
  const features = [
    {
      title: "Better Security",
      description:
        "Web3 apps keep data safe because they don't depend on just one place for protection. They use a blockchain network which is more open and secure.",
    },
    {
      title: "Total Control",
      description:
        "Blockchain lets users make decisions about their data privacy and be involved in online dealings without giving up their privacy.",
    },
    {
      title: "Automated Contracts",
      description:
        "Web3 uses smart contracts that work on their own to make things more efficient, less risky, and more trustworthy.",
    },
    {
      title: "Interoperability",
      description:
        "Web3 lets different decentralized apps and blockchain networks work together smoothly to share data.",
    },
    {
      title: "Easier Updates",
      description:
        "Web3 technology makes it simpler to improve apps over time. You can change and upgrade without disrupting the service.",
    },
    {
      title: "Community Trust",
      description:
        "Web3 builds trust by allowing the community to check and agree on how apps work, leading to more reliable services.",
    },
  ];

  return (
    <WrapperContainer>
      <div>
        {/* Background decoration */}
        {/* <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div> */}
        
        <Heading>
         <div>
         Why Should You Go For Web3 Development?
         </div>
        </Heading>

        <div className="mt-16 relative z-10 space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative group ${index % 2 === 0 ? 'ml-0 md:ml-12' : 'ml-0 md:ml-24'}`}
            >
              {/* Unique feature layout instead of cards */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-l-4 border-blue-600 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Blue circle decoration */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-100 rounded-full"></div>
                
                {/* Number indicator */}
                <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-semibold -ml-2 -mt-2 shadow-md rounded-br-lg z-10">
                  {index + 1}
                </div>
                
                <div className="flex items-start">
                  <div className="ml-4">
                  <Subheading>
                    <div>
                    {feature.title}
                    </div>
                  </Subheading>
                   
                   <Paragraph>
                    <span>
                    {feature.description}
                    </span>
                   </Paragraph>
                  </div>
                </div>
                
                {/* Blue line decoration */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
              
              {/* Connecting line between features */}
              {index < features.length - 1 && (
                <div className="absolute h-8 w-1 bg-blue-100 left-5 bottom-0 z-0 transform translate-y-full hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </WrapperContainer>
  );
};

export default Web3Features;