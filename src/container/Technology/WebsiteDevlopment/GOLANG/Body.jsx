import GolangBenefits from "./GolangBenefits";
import Faq from '../../../../components/Faq'
import {GolangServicesFAQData} from '../FAQData'
import Benefits from "./Benefits";
import GolangServices from "./GolangServices";
import WhyChooseUs from "./WhyChooseUs";


const Body = () => {
  return (
    
    <>
    <GolangBenefits/>
    <Benefits/>
    <GolangServices/>
    <WhyChooseUs/>

    <Faq faqs={GolangServicesFAQData}/>

   
    </>

  );
};

export default Body;