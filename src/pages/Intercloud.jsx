import React from 'react'
import Intercloud_hero from '../app/container/Services/Cloud/Intercloud_migratu/Intercloud_hero'
import Intercloud_intro from '../app/container/Services/Cloud/Intercloud_migratu/Intercloud_intro'
import Intercloud_type from '../app/container/Services/Cloud/Intercloud_migratu/Intercloud_type'
import Intercloudpopular from '../app/container/Services/Cloud/Intercloud_migratu/Intercloudpopular'
import Intercloud_need from '../app/container/Services/Cloud/Intercloud_migratu/Intercloud_need'
import Intercloud_approaches from '../app/container/Services/Cloud/Intercloud_migratu/Intercloud_approaches '
import Faq from '../app/components/Faq'
import { IntercloudMigrationFAQData } from '../app/container/Services/Cloud/Faqdata'



function Ntercloud() {
  return (
    <>
      <Intercloud_hero/>
      <Intercloud_intro/>
      <Intercloud_type/>
      <Intercloudpopular/> 
      <Intercloud_need/>
      <Intercloud_approaches/>
      <Faq faqs={IntercloudMigrationFAQData}/>
    </>
  )
}

export default Ntercloud