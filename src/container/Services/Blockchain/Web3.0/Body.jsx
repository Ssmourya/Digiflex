import React from 'react'
import DevelopmetServices from './DevelopmetServices'
import Process from './Process'
import Whyweb3 from './Whyweb3'
import {webfaq} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
   <>
   <DevelopmetServices/>
   <Process/>
   <Whyweb3/>
   <Faq faqs={webfaq} />
   </>
  )
}

export default Body