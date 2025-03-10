import React from "react";
import Azure_Hero from "../app/container/Services/Cloud/AZURE/Azure_Hero";
import Azure_info from "../app/container/Services/Cloud/AZURE/Azure_info";
import Azure_feature from "../app/container/Services/Cloud/AZURE/Azure_feature";
import Azure_services from "../app/container/Services/Cloud/AZURE/Azure_services";
import Azure_Card from "../app/container/Services/Cloud/AZURE/Azure_Card";
import Faq from "../app/components/Faq";
import { AzureCloudServicesFAQData } from "../app/container/Services/Cloud/Faqdata";

function Azure() {
  return (
    <>
      <Azure_Hero />
      <Azure_info />
      <Azure_feature />
      <Azure_services />
      <Azure_Card />
      <Faq faqs={AzureCloudServicesFAQData}/>
    </>
  );
}

export default Azure;
