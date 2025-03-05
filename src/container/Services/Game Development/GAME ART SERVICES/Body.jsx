import React from "react";
import GameArtServices from "./GameArtServices";
import TopGameArtFeatures from "./TopGameArtFeatures";
import GameArtModules from "./GameArtModules";
import Faq from "../../../../components/Faq";
import { GameArtServicesFAQData } from "../FAQData";

const Body = () => (
  <div>
    <GameArtServices />
    <TopGameArtFeatures />
    <GameArtModules />
    <Faq faqs={GameArtServicesFAQData} />
  </div>
);

export default Body;
