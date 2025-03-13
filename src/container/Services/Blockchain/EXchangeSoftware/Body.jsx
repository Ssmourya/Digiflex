import React from 'react'
import Cryptodevelopment from './Cryptodevelopment'
import TopFeature from './TopFeature'
import TypeCryptoexchange from './TypeCryptoexchange'
import DevelopmentModules from './DevelopmentModules'
import { EXchangefaq } from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
 <>
 <Cryptodevelopment/>
 <TopFeature/>
 <TypeCryptoexchange/>
 <DevelopmentModules/>
 <Faq faqs={ EXchangefaq } />

 </>
  )
}

export default Body