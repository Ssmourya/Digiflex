import React from 'react'
import Google_hero from '../app/container/Services/Cloud/google_components/Google_hero';
import Google_info from '../app/container/Services/Cloud/google_components/Google_info';
import Google_Services from '../app/container/Services/Cloud/google_components/Google_Services'
import Google_Hosting from '../app/container/Services/Cloud/google_components/Google_Hosting'
import Google_Advantage from '../app/container/Services/Cloud/google_components/Google_Advantage'
import Faq from '../app/components/Faq';
import { GoogleCloudServicesFAQData } from '../app/container/Services/Cloud/Faqdata';

function Google() {
  return (
    <>
        <Google_hero/>
        <Google_info/>
        <Google_Services/>
        <Google_Hosting/>
        <Google_Advantage/>
        <Faq faqs={GoogleCloudServicesFAQData}/>
    </>
  )
}

export default Google