import React from 'react'

const Fontheading = ({ children, className = '' }) => {
    return (
      <h1
        className={`text-2xl font-semibold text-blue-700 ${className}`}
      >
        {children}
      </h1>
    );
  };
  
export default Fontheading;