import React from 'react'

const Fontheading = ({ children, className = '' }) => {
    return (
      <h1
        className={`text-2xl font-semibold text-black ${className}`}
      >
        {children}
      </h1>
    );
  };
  
export default Fontheading;