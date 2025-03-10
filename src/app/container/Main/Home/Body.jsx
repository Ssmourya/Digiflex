"use client"

import React from "react";
import WhyUsSection from "./WhyUs";
import  WhatWeOffer  from './WhatWeOffer';
import Timeline from './Timeline';
import Introduction from './Intro';
import CaseStudies from './CaseStudy';
import IndustriesCarousel from "./Industries";
import OurWork from "./OurWork";
import TeamSection from "./OurTeam";
import Technologies from "./Technologies";
import AwardsSection from "./Awards";


const BentoGridFeatures = () => {
  return (
    
      <div className="relative z-10 bg-white">
        {/* Introduction */}
        <Introduction />

        {/* Why us */}
        <WhyUsSection />

        {/* Technologies */}
        <Technologies/>

        {/* Industries */}
        <IndustriesCarousel />

        {/* Timeline */}
        <Timeline />

        {/* Case Study */}
        <CaseStudies />

        {/* What we offer */}
        <WhatWeOffer />

        {/* Our Work */}
        <OurWork />
        
        <AwardsSection/>

        {/* Our Team */}
        <TeamSection />

      </div>
  );
};

export default BentoGridFeatures;
