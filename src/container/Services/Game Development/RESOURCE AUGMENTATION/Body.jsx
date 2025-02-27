import React from "react";
import ResourceAugmentationServices from "./ResourceAugmentationServices";
import BenefitsSection from "./BenefitsSection";
import ResourceAugmentation from "./ResourceAugmentation";
import ResourceAugmentationFAQ from "./ResourceAugmentationFAQ";

const Body = () => {
  return (
    <div>
      <ResourceAugmentationServices />
      <BenefitsSection />
      <ResourceAugmentation />
      <ResourceAugmentationFAQ />
    </div>
  );
};

export default Body;
