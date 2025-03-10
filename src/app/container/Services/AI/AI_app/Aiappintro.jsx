import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';
import Paragraph from '../../../../Layout/Paragraph';
import Aiappintroimg from '../../../../../../public/assets/Aiappintro.png';

function Aiappintro() {
  return (
    <div>
    <WrapperContainer>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1'>
          <Heading>
            <span>
            <h1 className='text-left'>
              Welcome to Quest Digiflex.ai – Pioneering AI App Development
              </h1>
              </span>
          </Heading>
          <Paragraph>
            <span>
            <p className='text-xl text-left text-black leading-7'>
              At Digiflex.ai, we transform businesses with cutting-edge AI-powered applications that enhance efficiency, automate processes, and unlock new opportunities. Our team of expert developers, data scientists, and AI engineers specialize in crafting intelligent applications that revolutionize industries.
              </p>
              </span>
          </Paragraph>
        </div>
        <div className='flex-1'>
          <img src={Aiappintroimg} alt='AI App Intro' className='w-full h-auto rounded-lg shadow-lg' />
        </div>
      </div>
    </WrapperContainer>
    </div>
  );
}

export default Aiappintro;
