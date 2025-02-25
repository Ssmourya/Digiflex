import React, { useState } from 'react'
import WrapperContainer from '../../../../Layout/WrapperContainer';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
        question: "What is a Smart Contract?",
        answer: "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It runs on blockchain networks and executes automatically when predefined conditions are met."
      },
      {
        question: "Which blockchain platforms support Smart Contracts?",
        answer: "Popular platforms include Ethereum, Binance Smart Chain, Solana, Polygon, and Hyperledger. Ethereum is the most widely used for smart contract development."
      },
      {
        question: "What programming languages are used for Smart Contracts?",
        answer: "Solidity (Ethereum), Rust (Solana), Vyper (Ethereum), and Chaincode (Hyperledger) are commonly used for developing smart contracts."
      },
      {
        question: "Are Smart Contracts secure?",
        answer: "Smart contracts are secure when properly written and audited. However, vulnerabilities like reentrancy attacks and overflow bugs can be exploited, so security audits are essential."
      },
      {
        question: "How do Smart Contracts execute transactions?",
        answer: "Once deployed on the blockchain, smart contracts execute automatically based on predefined conditions, eliminating the need for intermediaries."
      },
      {
        question: "Can Smart Contracts interact with external data?",
        answer: "Yes, through oracles like Chainlink, smart contracts can fetch external data (e.g., weather, stock prices) securely."
      },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    // padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
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
      <h1 style={headerStyle}>Frequently Asked Questions</h1>
      <div style={faqContainerStyle}>
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} style={faqItemStyle(isOpen)}>
              <button
                onClick={() => toggleFaq(index)}
                style={questionButtonStyle(isOpen)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)';
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.background = '#ffffff';
                  }
                }}
              >
                {faq.question}
                <span style={arrowStyle(isOpen)}>↓</span>
              </button>
              <div style={answerStyle(isOpen)}>
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </WrapperContainer>
    
    </>
   
  );
};

export default Faq;