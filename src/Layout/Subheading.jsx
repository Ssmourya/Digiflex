import React from "react";

const Subheading = ({ as: Tag = "h3", children, className = "" }) => {
  return (
    <Tag
      className={`text-xl font-semibold text-blue-600 mb-4 mt-4 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Subheading;
