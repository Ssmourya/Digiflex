import React from 'react'
import HeroSection from '../app/container/Services/E-Commerce/Odoo Development/HeroSection'
import OdooServices from '../app/container/Services/E-Commerce/Odoo Development/OdooServices'
import CaseStudies from '../app/container/Services/E-Commerce/Odoo Development/CaseStudies'
import  OdooFAQ from '../app/container/Services/E-Commerce/Odoo Development/OdooFAQ'
import Development from '../app/container/Services/E-Commerce/Odoo Development/Development'

const OdooDevelopment = () => {
  return (
    <div>
      <HeroSection/>
      <OdooServices/>
      <CaseStudies/>
      <Development/>
      < OdooFAQ/>
    </div>
  )
}

export default OdooDevelopment
