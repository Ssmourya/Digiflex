// 'use client'
import React from 'react'
import WalletServices from './WalletServices'
import TypesWallet from './TypesWallet'
import Features from './Features'
import Security from './Security'
 import {Walletfaq} from '../Faqdata'
import Faq from '@/components/Faq'


const Body = () => {
  // alert(JSON.stringify(Walletfaq))
  return (
    <>
    <WalletServices/>
    <TypesWallet/>
    <Features/>
    <Security/>
  
    <Faq faqs={Walletfaq} />

  

    </>
  )
}

export default Body