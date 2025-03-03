import React from 'react'
import ServicesSection from './ServicesSection '
import WhyChooseUs from './WhyChooseUs'
import GameGenres from './GameGenres'
import { Unity3DGameFAQData } from '../FAQData'
import Faq from '../../../../components/Faq'



const Body = () => {
    return (
        <div>
          <ServicesSection />
          <WhyChooseUs/>
          <GameGenres/>
          <Faq faqs={Unity3DGameFAQData} />
      
      
        </div>
    )
}

export default Body;

