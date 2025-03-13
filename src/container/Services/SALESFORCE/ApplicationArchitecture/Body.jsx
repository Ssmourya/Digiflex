import React from 'react'
import OurServices from './OurServices'
import WhyChoose from './WhyChoose'
import Technology from './Technology'
import { ApplicationArchitecturefaqs} from '../faqdata'
import Faq from '@/components/Faq'

const Body = () => {
  return (
    <>
    <OurServices/>
    <WhyChoose/>
    <Technology/>
    <Faq faqs={ ApplicationArchitecturefaqs} />
    </>
  )
}

export default Body