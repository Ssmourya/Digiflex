import React from 'react'
import About from './About'
import Benifits from './Benifits'
import TypesDigital360 from './TypesDigital360'
import { Salesforce360faq} from '../faqdata'
import Faq from '@/components/Faq'

const Body = () => {
  return (
   <>
   <About/>
   <Benifits/>
   <TypesDigital360/>
   <Faq faqs={Salesforce360faq} />
   </>
  )
}

export default Body