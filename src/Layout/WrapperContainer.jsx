import React from "react";

const WrapperContainer = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1275px] w-full mx-auto px-5 pt-20 ${className}`}>
    {children}
  </div>
  );
};

export default WrapperContainer;
