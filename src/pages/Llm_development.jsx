import React from 'react'
import Llm_hero from '../app/container/Services/AI/Llm developement/Llm_hero'
import Llm_intro from '../app/container/Services/AI/Llm developement/Llm_intro'
import Llm_work from '../app/container/Services/AI/Llm developement/Llm_work'
import Llm_services from '../app/container/Services/AI/Llm developement/Llm_services'
import Llm_future from '../app/container/Services/AI/Llm developement/Llm_future'
import Llm_digiflex from '../app/container/Services/AI/Llm developement/Llm_digiflex'
import Faq from '../app/components/Faq'
import { LargeLanguageModelFAQData } from '../app/container/Services/AI/Faqdata'

function Llm_development() {
  return (
    <>
        <Llm_hero/>
        <Llm_intro/>
        <Llm_work/>
        <Llm_services/>
        <Llm_future/>
        <Llm_digiflex/>
        <Faq faqs={LargeLanguageModelFAQData}/>
    </>
  )
}

export default Llm_development