import React from 'react'
import Aiappintro from '../app/container/Services/AI/Ai_app/Aiappintro'
import Aiapptransformation from '../app/container/Services/AI/AI_app/Aiapptransformation'
import Ai_app_services from '../app/container/Services/AI/AI_app/Ai_app_services'
import Ai_digiflex_development from '../app/container/Services/AI/AI_app/Ai_digiflex_development'
import Ai_app_Industries from '../app/container/Services/AI/AI_app/Ai_app_Industries '
import AITechStack from '../app/container/Services/AI/AI_app/AITechStack'
import Aiapphero from '../app/container/Services/AI/AI_app/Aiapphero'
import Faq from '../app/components/Faq';
import { AIPoweredAppsFAQData } from '../app/container/Services/AI/Faqdata'

function Ai_development() {
  return (
    <>
        <Aiapphero/>
        <Aiappintro/>
        <Aiapptransformation/>
        <Ai_app_services/>
        <Ai_digiflex_development/>
        <Ai_app_Industries/>
        <AITechStack/>
        <Faq faqs={AIPoweredAppsFAQData}/>
    </>
  )
}

export default Ai_development