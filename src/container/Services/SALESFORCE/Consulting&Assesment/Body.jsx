import React from 'react'
import WhyChoose from './WhyChoose'
import ConsultingService from './ConsultingService'
import { Consultingfaqs} from '../faqdata'
import Faq from '@/components/Faq'

const Body = () => {
  return (
 <>
 <WhyChoose/>
 <ConsultingService/>
 <Faq faqs={ Consultingfaqs} />
 
 </>
  )
}

export default Body