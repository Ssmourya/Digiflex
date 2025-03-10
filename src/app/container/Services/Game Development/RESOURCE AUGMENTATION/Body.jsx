import React, { Suspense, lazy } from "react";
import { ResourceAugmentationFAQData } from "../FAQData";

const ResourceAugmentationServices = lazy(() => import("./ResourceAugmentationServices"));
const ResourceAugmentation = lazy(() => import("./ResourceAugmentation"));
const ResourceAugmentationBenefits = lazy(() => import("./ResourceAugmentationBenefits"));
const Faq = lazy(() => import("../../../../components/Faq"));

const Body = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ResourceAugmentationServices />
        <ResourceAugmentationBenefits />
        <ResourceAugmentation />
        <Faq faqs={ResourceAugmentationFAQData} />
      </Suspense>
    </div>
  );
};

export default Body;
