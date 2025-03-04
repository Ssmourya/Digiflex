import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';
import Heading from '../../../../Layout/Heading';

const DevelopmentProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    { title: 'Conceptualization', description: 'Understanding your project needs and expectations, our team creates structured documentation and drafts an ideal service package that suits your budget and vision.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
    { title: 'Planning', description: 'We develop a structured plan for your PrestaShop eCommerce store, selecting the right tools, setting milestones, and ensuring a streamlined development process.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
    { title: 'UX & Theming', description: 'Our designers suggest or customize PrestaShop themes that align with your brand, ensuring a visually appealing and user-friendly experience.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg> },
    { title: 'Code Development', description: 'Our certified PrestaShop developers build the frontend and backend, ensuring smooth functionality, seamless performance, and integration with necessary services.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { title: 'Module Integration', description: 'We integrate essential PrestaShop modules to enhance store functionalities, including inventory management, logistics, marketing, and accounting tools.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg> },
    { title: 'Audit & Testing', description: 'Our team rigorously tests the store for performance, security, and user experience, ensuring it meets industry standards before going live.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
  ];

  return (
    <WrapperContainer>
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12">
          <Heading>Our PrestaShop eCommerce Development Process</Heading>
          <Paragraph className="text-center">
            We follow a structured approach to ensure seamless development, smooth functionality, and excellent user experience for your online store.
          </Paragraph>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md border border-gray-100 p-5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}>
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transition-all duration-300 ${activeStep === index ? 'h-full' : 'h-0'}`}></div>
              <div className="flex items-center mb-3">{step.icon}<Subheading className="ml-3">{step.title}</Subheading></div>
              <Paragraph>{step.description}</Paragraph>
              {activeStep === index && <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Learn More</button>}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default DevelopmentProcess;
