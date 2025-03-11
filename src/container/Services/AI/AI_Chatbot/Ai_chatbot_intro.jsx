import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';
import Paragraph from '@/Layout/Paragraph';

function AiChatbotIntro() {
  return (
    <WrapperContainer>
      <div >
        <Heading className="text-center">
          Introduction to Enterprise AI Chatbots
        </Heading>
        <div className="mt-4">
          <p className="text-sm md:text-base lg:text-lg text-center ">
            "In today’s fast-paced digital world, businesses require intelligent automation to enhance customer service, 
            streamline operations, and improve productivity. Enterprise AI Chatbots are advanced AI-powered solutions designed 
            to provide real-time assistance, automate repetitive tasks, and enhance customer engagement across multiple platforms.
            <br /><br />
            At Digiflex.ai, we specialize in developing cutting-edge AI chatbots that seamlessly integrate with enterprise systems, 
            offering scalable and intelligent automation solutions for businesses of all sizes."
          </p>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default AiChatbotIntro;