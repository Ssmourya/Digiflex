import React from 'react'
import GameServices from './GameServices';
import UnrealBenefits from './UnrealBenefits';
import UnrealTeam from './UnrealTeam'
import { UnrealGameFAQData } from '../FAQData';
import Faq from '../../../../components/Faq'
import WhyChoose from './WhyChoose';

const Body = () => {
    return (
        <div>
            <GameServices />
            <UnrealBenefits />
            <WhyChoose />
            <UnrealTeam />
            <Faq faqs={UnrealGameFAQData} />
    
        </div>
    )
}

export default Body
