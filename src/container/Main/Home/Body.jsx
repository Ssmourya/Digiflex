import React from "react";
import { motion } from "framer-motion";

import { BentoGridItem } from "../../../components/ui/Bento-grid";
import { WhatWeOffer } from "./WhatWeOffer";
import Timeline from "./Timeline";
import Introduction from "./Intro";

import CaseStudies from "./CaseStudy";

import OurWork from "./OurWork";
import TeamSection from "./OurTeam";
import Recognitions from "./Recognition";
import StandOut from "./StandOut";
import ScrollSections from "./ScrollSections";
import Contact from './Contact'
import Navigation from "./Navigation";

const MotionBentoGridItem = motion(BentoGridItem);

const BentoGridFeatures = () => {
  return (
    <div className="relative z-10">
      
      <Introduction/>

      
      <ScrollSections />
     
      <Timeline />

     
      <CaseStudies />

      <StandOut />

     
      <WhatWeOffer/>

      {/* Our Work */}
      <OurWork />

      {/* Our Team */}
      <TeamSection />

      {/* Recognition */}
      <Recognitions />

      <Contact/>
      <Navigation/>
    </div>
  );
};

export default BentoGridFeatures;
