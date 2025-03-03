import React from "react";
import GameArtServices from "./GameArtServices";
import TopFeature from "./TopFeature";
import GameArtModules from "./GameArtModules";
import Faq from '../../../../components/Faq'

import { GameArtServicesFAQData } from "../FAQData";

const Body = () => {
  //alert(JSON.stringify(GameArtServicesFAQData))
  return (
    <div>
      <GameArtServices />
      <TopFeature />
      <GameArtModules />
      <Faq faqs={GameArtServicesFAQData} />
    
    </div>
  );
};

export default Body;
