import React, { useState } from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Fontheading from '../../../../Layout/Fontheading';

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
    <h2 className='mt-4 text-xl'>Organizations can choose different cloud migration approaches based on their needs:</h2>
    
    <div className="flex flex-col w-full mt-10  text-white">
      {strategies.map((strategy, index) => (
        <div key={index} className="w-full duration-300 border-b border-gray-600 relative overflow-hidden">
          <div
            className="p-4 cursor-pointer transition-transform duration-300 hover:translate-y-2 "
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          ><Fontheading>
            {strategy.title}
            </Fontheading>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-800 transition-opacity duration-300 text-xl opacity-100">
              {strategy.description}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    </WrapperContainer>
    </>
  )
}

export default Migration_type