import React from "react";
import ResourceAugmentationServices from "./ResourceAugmentationServices";
import BenefitsSection from "./BenefitsSection";
import ResourceAugmentation from "./ResourceAugmentation";
import { ResourceAugmentationFAQData } from "../FAQData";
import Faq from '../../../../components/Faq'


const Body = () => {
  return (
    <div>
      <ResourceAugmentationServices />
      <BenefitsSection />
      <ResourceAugmentation />
      <Faq faqs={ResourceAugmentationFAQData} />
    
    </div>
  );
};

export default Body;
