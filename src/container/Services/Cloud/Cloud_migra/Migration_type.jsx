import React, { useState } from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Fontheading from '../../../../Layout/Fontheading';
import Subheading from '../../../../Layout/Subheading';

const strategies = [
    { title: "Rehosting (\"Lift and Shift\")", description: "Moving applications to the cloud without changes." },
    { title: "Replatforming (\"Lift, Tinker, and Shift\")", description: "Making minimal changes for optimization before migration." },
    { title: "Refactoring / Re-architecting", description: "Rebuilding applications to fully leverage cloud-native features." },
    { title: "Repurchasing", description: "Switching to a different product or service, often SaaS." },
    { title: "Retiring", description: "Decommissioning outdated or unnecessary applications." },
    { title: "Retaining", description: "Keeping some applications on-premise for strategic reasons." }
  ];

function Migration_type() {
    const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
    <WrapperContainer>
    <div> 
    <Heading>           
    <h1>Migration Strategies types (6 R's)</h1>
    </Heading>
    <Subheading className='text-center'>Organizations can choose different cloud migration approaches based on their needs:</Subheading>
    
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {strategies.map((industry, index) => (
              <div
                key={index}
                className="p-6 md:p-3 bg-white transform transition-all duration-500 hover:scale-105 group flex flex-col items-center text-center"
              >
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
          </div>
    </WrapperContainer>
    </>
  )
}

export default Migration_type
