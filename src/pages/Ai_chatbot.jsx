import React from 'react'
import Ai_chatbot_hero from '../app/container/Services/AI/AI_Chatbot/Ai_chatbot_hero'
import Ai_chatbot_intro from '../app/container/Services/AI/AI_Chatbot/Ai_chatbot_intro'
import Ai_chatbot_enterprise from '../app/container/Services/AI/AI_Chatbot/Ai_chatbot_enterprise '
import AIChatbotAdvantages from '../app/container/Services/AI/AI_Chatbot/AI_chatbot_advantages'

function Ai_chatbot() {
  return (
    <>
        <Ai_chatbot_hero/>
        <Ai_chatbot_intro/>
        <Ai_chatbot_enterprise/>
        <AIChatbotAdvantages/>
    </>
  )
}

export default Ai_chatbot