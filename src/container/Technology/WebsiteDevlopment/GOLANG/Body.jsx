import GolangBenefits from "./GolangBenefits";
import Faq from '../../../../components/Faq'
import {GolangServicesFAQData} from '../FAQData'
import Benefits from "./Benefits";
import GolangServices from "./GolangServices";


const Body = () => {
  return (
    
    <>
    <GolangBenefits/>
    <Benefits/>
    <GolangServices/>

    <Faq faqs={GolangServicesFAQData}/>

   
    </>

  );
};

export default Body;