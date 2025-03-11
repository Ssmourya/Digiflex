import React from "react";

const WrapperContainer = ({ children, className = "" }) => {
  return (
    <div className={`w-full mx-auto px-4 sm:px-5 pt-12 sm:pt-16 md:pt-20 max-w-[1275px]  ${className}`}>
      {children}
    </div>
  );
};

export default WrapperContainer;