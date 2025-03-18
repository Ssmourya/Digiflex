import React from 'react'
// import Hero from './Hero'
import Lifesycle from './Lifesycle'
import TestAutomation from './TestAutomation'
import Tools from './Tools'
import {Devopsfaq } from '../faqdata'
import Faq from '@/components/Faq'

const Body = () => {
  return (
   <>
   <Lifesycle/>
   <TestAutomation/>
   <Tools/>
   <Faq faqs={ Devopsfaq } />

   </>
  )
}

export default Body