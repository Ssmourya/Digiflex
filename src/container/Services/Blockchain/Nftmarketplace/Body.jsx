import React from 'react'
import NftServices from './NftServices'
import DevelopmentServices from './DevelopmentServices'
import Tools from './Tools'
import {Nftfaqs} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  return (
    <>
    <NftServices/>
    <DevelopmentServices/>
    <Tools/>
    <Faq faqs={Nftfaqs} />
    
    </>
  )
}

export default Body