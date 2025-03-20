import Heading from '@/Layout/Heading'; 
import Paragraph from '@/Layout/Paragraph'; 
import WrapperContainer from '@/Layout/WrapperContainer';
import { MessageCircle, Globe, Headphones, Repeat, Briefcase, Shield } from 'lucide-react';
import React from 'react';

const features = [
    { text: "AI-Powered Conversations: Our chatbots understand natural language, ensuring seamless human-like interactions.", icon: <MessageCircle className="text-green-600 w-20 h-20" /> },
    { text: "Multi-Platform Integration: Deploy chatbots on websites, mobile apps, WhatsApp, Facebook Messenger, Slack, and more.", icon: <Globe className="text-green-600 w-20 h-20" /> },
    { text: "24/7 Customer Support: Improve customer satisfaction with real-time, round-the-clock assistance.", icon: <Headphones className="text-green-600 w-20 h-20" /> },
    { text: "Automated Workflows: Reduce operational costs by automating repetitive tasks and inquiries.", icon: <Repeat className="text-green-600 w-20 h-20" /> },
    { text: "Custom & Industry-Specific Solutions: Tailored chatbot development for eCommerce, healthcare, finance, real estate, and other industries.", icon: <Briefcase className="text-green-600 w-20 h-20" /> },
    { text: "Scalability & Security: Our solutions are built to handle high traffic while ensuring data security.", icon: <Shield className="text-green-600 w-20 h-20" /> }
];

function Chatbot_develop_Services() {
    return (
        <section>
        <WrapperContainer>
          <Heading>Why Choose Our AI Chatbot Development Services?</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300"
              >
                {feature.icon}
                <Paragraph>
                {feature.text}
                </Paragraph>
              </div>
            ))}
          </div>
          </WrapperContainer>
        </section>
      );
}

export default Chatbot_develop_Services;
