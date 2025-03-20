import React from 'react'
import Ai_chatbot_hero from '../container/Services/AI/AI_Chatbot/Ai_chatbot_hero'
import Ai_chatbot_intro from '../container/Services/AI/AI_Chatbot/Ai_chatbot_intro'
import Ai_chatbot_enterprise from '../container/Services/AI/AI_Chatbot/Ai_chatbot_enterprise '
import AIChatbotAdvantages from '../container/Services/AI/AI_Chatbot/AI_chatbot_advantages'
import AI_use_case from '@/container/Services/AI/AI_Chatbot/AI_use_case'
import AI_whychoose from '@/container/Services/AI/AI_Chatbot/AI_whychoose'
import Faq from '@/components/Faq'
import { AIChatbotFAQData } from '@/container/Services/AI/Faqdata'

function Ai_chatbot() {
  return (
    <>
        <Ai_chatbot_hero/>
        <Ai_chatbot_intro/>
        <Ai_chatbot_enterprise/>
        <AIChatbotAdvantages/>
        <AI_use_case/>
        <AI_whychoose/>
        <Faq faqs={AIChatbotFAQData}/>
    </>
  )
}

export default Ai_chatbot