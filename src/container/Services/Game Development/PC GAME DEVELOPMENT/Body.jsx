import React from "react";
import PCgame_intro from "./PCgame_intro";
import PC_develoopment from "./PC_develoopment";
import GameDevelopmentProcess from "./GameDevelopmentProcess";
import GameDevTools from "./GameDevTools";
import Benefits from "./Benefits";
import { PC_develoopmentFAQData } from "../FAQData";
import Faq from '../../../../components/Faq'


const Body = () => {
  return (
    <div>
      <PCgame_intro />
      <PC_develoopment />
      <GameDevelopmentProcess />
      <GameDevTools />
      <Benefits />
      <Faq faqs={PC_develoopmentFAQData} />
    </div>
  );
};

export default Body;
