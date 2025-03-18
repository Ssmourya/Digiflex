import React from "react";
import Copilot_why from "@/container/Services/AI/AI_copilot/Copilot_why";
import Copilot_experties from "@/container/Services/AI/AI_copilot/Copilot_experties";
import Copilot_innovation from "@/container/Services/AI/AI_copilot/Copilot_innovation";
import Faq from "@/components/Faq";
import {AICopilotFAQData} from "../container/Services/AI/Faqdata"
import Copilot_hero from "@/container/Services/AI/AI_copilot/Copilot_hero";



const AI_copilot = () => {
  return (
    <div>
      <Copilot_hero />
      <Copilot_why />
      <Copilot_experties />
      <Copilot_innovation />
      <Faq faqs={AICopilotFAQData} />
    </div>
  );
};

export default AI_copilot;
