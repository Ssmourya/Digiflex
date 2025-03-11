import React from 'react';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

export default function DevelopmentProcess() {
  const processSteps = [
    { step: "Requirement Analysis", image: "https://i.pinimg.com/originals/76/da/28/76da282fad5a3e279c6b163688f5345b.gif" },
    { step: "UI/UX Design", image: "https://i.pinimg.com/originals/26/3e/02/263e02e428c2e7d838996346bdb5e772.gif" },
    { step: "Development", image: "https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" },
    { step: "Testing", image: "https://i.pinimg.com/originals/5b/83/ef/5b83ef5ba73ca499f556bce1859dd9ab.gif" },
    { step: "Deployment", image: "https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" },
    { step: "Maintenance & Support", image: "https://i.pinimg.com/originals/20/ed/06/20ed06db283022697f34602fdba35ae3.gif" },
  ];

  return (
    <>  <section className="bg-white text-black py-12 px-6">
    
      <div className="max-w-6xl mx-auto text-center">
      <Heading>Our Development Process</Heading>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center transition transform duration-300 hover:scale-105">
                <img 
                  src={step.image} 
                  alt={step.step} 
                  className="w-32 h-32 object-cover rounded-full shadow-lg" 
                />
                <Paragraph>{step.step}</Paragraph>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block">
                  <span className="text-3xl animate-pulse">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </section>
    
    </>
  
  );
}
