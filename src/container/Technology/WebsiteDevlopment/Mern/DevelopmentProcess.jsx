import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import CaseStudiesPortfolio from './CaseStudiesPortfolio';
import Subheading from '../../../../Layout/Subheading';

export default function DevelopmentProcess() {
  const processSteps = [
    { step: "Requirement Analysis", image: "https://i.pinimg.com/736x/86/4f/96/864f96ed2d48d852f8b4faf7bf8643b5.jpg" },
    { step: "UI/UX Design", image: "https://i.pinimg.com/736x/ef/ec/17/efec17aac3e7cf1478fc871fe80306f9.jpg" },
    { step: "Development", image: "https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg" },
    { step: "Testing", image: "https://i.pinimg.com/736x/2e/7b/d6/2e7bd673aaf90ab9eda41ecc19477532.jpg" },
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
                <Subheading className="mt-4 font-semibold">{step.step}</Subheading>
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
    <CaseStudiesPortfolio/>
    </>
  );
}
