import React from 'react'
import ProcessSmartContract from './ProcessSmartContract'
import SmartWork from './SmartWork'
import Benifits from './Benifits'
import {SmartContractfaqs} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
   <>
   <ProcessSmartContract/>
   <SmartWork/>
   <Benifits/>
   <Faq faqs={SmartContractfaqs} />
   </>
  )
}

export default Body