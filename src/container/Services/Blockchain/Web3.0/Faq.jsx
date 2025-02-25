import React, { useState } from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer';
import Heading from '../../../../Layout/Heading';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Web Development 3.0?",
      answer: "Web Development 3.0 refers to the next generation of web technologies that incorporate decentralization, blockchain integration, AI-driven automation, and enhanced user experiences."
    },
    {
      question: "How does blockchain impact Web Development 3.0?",
      answer: "Blockchain enables decentralized applications (DApps), smart contracts, and secure, trustless interactions, making the web more transparent and resistant to censorship."
    },
    {
      question: "What technologies are commonly used in Web Development 3.0?",
      answer: "Technologies like blockchain (Ethereum, Solana), smart contracts (Solidity, Rust), decentralized storage (IPFS, Arweave), and AI-powered tools are integral to Web Development 3.0."
    },
    {
      question: "How is AI transforming Web Development 3.0?",
      answer: "AI enhances automation, personalization, and decision-making in Web 3.0 by enabling smart recommendations, AI-powered chatbots, and automated web development tools."
    },
    {
      question: "What role do smart contracts play in Web Development 3.0?",
      answer: "Smart contracts automate transactions and agreements without intermediaries, making web interactions more secure, transparent, and efficient."
    },
    {
      question: "What is the significance of decentralized identity in Web 3.0?",
      answer: "Decentralized identity allows users to control their personal data and authentication without relying on centralized authorities, enhancing privacy and security."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    // padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    // minHeight: '100vh',
    padding:"40px"
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '50px',
    color: '#1a1a1a',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #2A2A72 0%, #009FFD 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: '10px 0',
  };

  const faqContainerStyle = {
    display: 'grid',
    gap: '16px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const faqItemStyle = (isOpen) => ({
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: isOpen 
      ? '0 10px 30px rgba(0, 0, 0, 0.1)'
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.4s ease',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  });

  const questionButtonStyle = (isOpen) => ({
    width: '100%',
    padding: '24px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: isOpen 
      ? 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'
      : '#ffffff',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '17px',
    fontWeight: '600',
    color: isOpen ? '#2A2A72' : '#333',
    position: 'relative',
    transition: 'all 0.3s ease',
    borderRadius: '16px',
  });

  const arrowStyle = (isOpen) => ({
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.4s ease',
    fontSize: '20px',
    color: isOpen ? '#2A2A72' : '#666',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isOpen ? 'rgba(42, 42, 114, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    borderRadius: '50%',
    marginLeft: '15px',
  });

  const answerStyle = (isOpen) => ({
    maxHeight: isOpen ? '500px' : '0',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    padding: isOpen ? '0 30px 24px' : '0 30px',
    color: '#555',
    lineHeight: '1.8',
    fontSize: '16px',
    opacity: isOpen ? 1 : 0,
  });

  return (
    <>
      <WrapperContainer>
        <div style={containerStyle}>
       <Heading>
        <div>
        Frequently Asked Questions-Web Development3.0
        </div>
       </Heading>
          <div style={faqContainerStyle}>
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} style={faqItemStyle(isOpen)}>
                  <button
                    onClick={() => toggleFaq(index)}
                    style={questionButtonStyle(isOpen)}
                  >
                    {faq.question}
                    <span style={arrowStyle(isOpen)}>↓</span>
                  </button>
                  <div style={answerStyle(isOpen)}>
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default Faq;
