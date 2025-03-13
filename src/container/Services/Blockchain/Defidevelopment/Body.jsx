import React from 'react'
import DefiDevelopment from './DefiDevelopment'
import DefiBenifits from './DefiBenifits'
import DefiTechnology from './DefiTechnology'
import Feature from './Feature'
import { Defifaqs} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
    <>
    <DefiDevelopment/>
    <DefiBenifits/>
    <DefiTechnology/>
    <Feature/>
    <Faq faqs={ Defifaqs} />
    </>
  )
}

export default Body