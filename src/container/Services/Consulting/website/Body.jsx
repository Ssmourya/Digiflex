import React from "react";
import MethodologySection from "./MethodologySection";
import TypesAndExampleSection from "./TypesAndExampleSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import { BenefitsSection } from "./BenefitsSection";
import FAQ from "./FAQ";

function Body() {
  return (
    <>
      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Types and Example Section */}
      <TypesAndExampleSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Industries Section */}
      <IndustriesSection />

      <FAQ />
    </>
  );
}

export default Body;
