import React from 'react'
import Services from './Services'
import Features from './Features'
import TechStack from './TechStack'
import { Maintenancefaqs} from '../faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
   <>
   <Services/>
   <Features/>
   <TechStack/>
   <Faq faqs={Maintenancefaqs } />
   </>
  )
}

export default Body