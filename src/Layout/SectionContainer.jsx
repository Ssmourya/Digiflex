import React from "react";

const SectionContainer = ({ children, className = "" }) => {
  return (
    <section className={`py-10 sm:py-12 md:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
