import React from "react";
import ServicesSection from "./ServicesSection";
import PricingPlans from "./PricingPlans";
import GameAceBenefits from "./GameAceBenefits";
import MobileGameFAQ from "./MobileGameFAQ";

const Body = () => {
  return (
    <>
      <ServicesSection />

      <PricingPlans />
      <GameAceBenefits />
      <MobileGameFAQ />
    </>
  );
};

export default Body;
