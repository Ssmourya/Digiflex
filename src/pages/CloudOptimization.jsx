import React from 'react'
import Optimization_hero from '../app/container/Services/Cloud/Cloud_Optimization/Optimization_hero'
import Optimization_overview from '../app/container/Services/Cloud/Cloud_Optimization/Optimization_overview'
import Optimization_work from '../app/container/Services/Cloud/Cloud_Optimization/Optimization_work'
import Optimization_strategies from '../app/container/Services/Cloud/Cloud_Optimization/Optimization_strategies'
import Optimization_benefits from '../app/container/Services/Cloud/Cloud_Optimization/Optimization_benefits'
import Faq from '../app/components/Faq'
import { CloudOptimizationFAQData } from '../app/container/Services/Cloud/Faqdata'

function CloudOptimization() {
  return (
    <>
    <Optimization_hero/>
    <Optimization_overview/>
    <Optimization_work/>
    <Optimization_strategies/>
    <Optimization_benefits/>
    <Faq faqs={CloudOptimizationFAQData}/>
    </>
  )
}

export default CloudOptimization