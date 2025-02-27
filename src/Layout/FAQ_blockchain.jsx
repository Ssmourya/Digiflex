import React from 'react'

const FAQ_blockchain = ({ children, className = '' }) => {
    return (
      <h3
        className={`text-[18.72px] font-bold text-center mb-6 text-blue-700 ${className}`}
      >
        {children}
      </h3>
    );
  };
export default  FAQ_blockchain;