import React from "react";

const Subheading = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-xl font-semibold text-blue-600 mb-4 mt-4  ${className}`}
    >
      {children}
    </h3>
  );
};

export default Subheading;
