import React from "react";
import ServicesSection from "./ServicesSection";
import PricingPlans from "./PricingPlans";
import GameAceBenefits from "./GameAceBenefits";
import Faq from "../../../../components/Faq";
import { MobileGameFAQData } from "../FAQData";

const Body = () => {
  return (
    <>
      <ServicesSection />

      <PricingPlans />
      <GameAceBenefits />
      <Faq faqs={MobileGameFAQData} />
    </>
  );
};

export default Body;
