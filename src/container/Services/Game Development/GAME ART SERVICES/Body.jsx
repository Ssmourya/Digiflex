import React, { Suspense, lazy } from "react";
import { GameArtServicesFAQData } from "../FAQData";

const GameArtServices = lazy(() => import("./GameArtServices"));
const TopGameArtFeatures = lazy(() => import("./TopGameArtFeatures")); 
const GameArtModules = lazy(() => import("./GameArtModules"));
const Faq = lazy(() => import("@/components/Faq"));

const Body = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <GameArtServices />
      <TopGameArtFeatures />
      <GameArtModules />
      <Faq faqs={GameArtServicesFAQData} />
    </Suspense>
  </div>
);

export default Body;
