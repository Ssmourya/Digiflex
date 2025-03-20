import React from "react";
import Agent_hero from "../container/Services/AI/AI_agent/Agent_hero";
import Agent_intro from "../container/Services/AI/AI_agent/Agent_intro";
import Agent_why from "../container/Services/AI/AI_agent/Agent_why";
import Agent_experties from "../container/Services/AI/AI_agent/Agent_experties";
import Faq from "@/components/Faq";
import {AIAgentFAQData} from "../container/Services/AI/Faqdata"
const AI_agent = () => {
  return (
    <div>
      <Agent_hero />
      <Agent_intro />
      <Agent_why />
      <Agent_experties />
      <Faq faqs={AIAgentFAQData} />
    </div>
  );
};

export default AI_agent;
