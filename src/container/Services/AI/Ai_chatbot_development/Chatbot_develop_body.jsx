import React from 'react'
import Chatbot_develop_intro from './Chatbot_develop_intro'
import Chatbot_develop_Services from './Chatbot_develop_Services'
import Chatbot_services from './Chatbot_services'
import Chatbot_Industries from './Chatbot_Industries '
import Faq from '@/components/Faq'
import { chatbotdevelopmentFAQData } from '../Faqdata'

function Chatbot_develop_body() {
  return (<>
    <Chatbot_develop_intro/>
    <Chatbot_develop_Services/>
    <Chatbot_services/>
    <Chatbot_Industries/>
    <Faq faqs={chatbotdevelopmentFAQData}/>
    </>
  )
}

export default Chatbot_develop_body