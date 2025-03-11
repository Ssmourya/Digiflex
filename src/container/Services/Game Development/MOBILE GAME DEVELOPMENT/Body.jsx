import React, { Suspense, lazy } from "react";
import { MobileGameFAQData } from "../FAQData";

const ServicesSection = lazy(() => import("./ServicesSection"));
const PricingPlans = lazy(() => import("./PricingPlans"));
const GameAceBenefits = lazy(() => import("./GameAceBenefits"));
const Faq = lazy(() => import("@/components/Faq"));

const Body = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ServicesSection />
    <PricingPlans />
    <GameAceBenefits />
    <Faq faqs={MobileGameFAQData} />
  </Suspense>
);

export default Body;
