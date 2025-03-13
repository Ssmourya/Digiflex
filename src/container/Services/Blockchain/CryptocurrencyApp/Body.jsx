import React from 'react'
import CoverServices from './CoverServices'
import WhyChoose from './WhyChoose'
import TypeCryptocurrency from './TypeCryptocurrency'
import { CryptocurrencyAppfaqs} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
 <>
 <CoverServices/>
 <WhyChoose/>
 <TypeCryptocurrency/>
 <Faq faqs={ CryptocurrencyAppfaqs} />

 </>
  )
}

export default Body