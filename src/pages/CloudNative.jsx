import React from 'react'
import Native_hero from '../app/container/Services/Cloud/Cloud_Native/Native_hero'
import Native_intro from '../app/container/Services/Cloud/Cloud_Native/Native_intro'
import Native_components from '../app/container/Services/Cloud/Cloud_Native/Native_components'
import Native_services from '../app/container/Services/Cloud/Cloud_Native/Native_services'
import Native_advantage from '../app/container/Services/Cloud/Cloud_Native/Native_advantage'
import Native_usecase from '../app/container/Services/Cloud/Cloud_Native/Native_usecase'
import Native_feature from '../app/container/Services/Cloud/Cloud_Native/Native_feature'
import Faq from '../app/components/Faq'
import { CloudNativeServicesFAQData } from '../app/container/Services/Cloud/Faqdata'

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