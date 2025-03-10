import React from 'react'
import Ai_software_hero from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_software_hero'
import Ai_software_intro from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_software_intro'
import Ai_software_services from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_software_services'
import Ai_TechnologiesUsed from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_TechnologiesUsed'
import Ai_IndustryServices from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_IndustryServices'
import Ai_software_choose from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_software_choose '
import Ai_faq from '../app/container/Services/AI/AI SOFTWARE DEVELOPMENT/Ai_faq'
import Faq from '../app/components/Faq'
import { faqsques } from '../app/container/Services/AI/Faqdata'

function Ai_software() {
  return (
    <>
        <Ai_software_hero/>
        <Ai_software_intro/>
        <Ai_software_services/>
        <Ai_TechnologiesUsed/>
        <Ai_IndustryServices/>
        <Ai_software_choose/>
        <Faq faqs={faqsques}/>
    </>
  )
}

export default Ai_software