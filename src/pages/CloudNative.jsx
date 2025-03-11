import React from 'react'
import Native_hero from '../container/Services/Cloud/Cloud_Native/Native_hero'
import Native_intro from '../container/Services/Cloud/Cloud_Native/Native_intro'
import Native_components from '../container/Services/Cloud/Cloud_Native/Native_components'
import Native_services from '../container/Services/Cloud/Cloud_Native/Native_services'
import Native_advantage from '../container/Services/Cloud/Cloud_Native/Native_advantage'
import Native_usecase from '../container/Services/Cloud/Cloud_Native/Native_usecase'
import Native_feature from '../container/Services/Cloud/Cloud_Native/Native_feature'
import Faq from '../components/Faq'
import { CloudNativeServicesFAQData } from '../container/Services/Cloud/Faqdata'

function CloudNative() {
  return (
    <>
        <Native_hero/>
        <Native_intro/>
        <Native_components/>
        <Native_services/>
        <Native_advantage/>
        <Native_usecase/>
        <Native_feature/>
        <Faq faqs={CloudNativeServicesFAQData}/>
    </>
  )
}

export default CloudNative