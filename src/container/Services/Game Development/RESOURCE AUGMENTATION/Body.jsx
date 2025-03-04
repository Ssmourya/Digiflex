import React from "react";
import ResourceAugmentationServices from "./ResourceAugmentationServices";
import ResourceAugmentation from "./ResourceAugmentation";
import { ResourceAugmentationFAQData } from "../FAQData";
import Faq from '../../../../components/Faq'
import ResourceAugmentationBenefits from "./ResourceAugmentationBenefits";

const Body = () => {
  return (
    <div>
      <ResourceAugmentationServices />
      <ResourceAugmentationBenefits />
      <ResourceAugmentation />
      <Faq faqs={ResourceAugmentationFAQData} />
    
    </div>
  );
};

export default Body;
