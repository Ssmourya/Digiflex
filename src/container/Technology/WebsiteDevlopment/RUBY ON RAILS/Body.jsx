import Faq from "../../../../components/Faq";
import { RubyOnRailsServicesFAQData } from "../FAQData";
import Process from "./Process";
import RailsInfo from "./RailsInfo";
import RubyOnRailsModules from "./RubyOnRailsModules";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

  
  
  const Body = () => {
  return (
    <>



  <RailsInfo/>
  <Services/>
  <RubyOnRailsModules/>
  <Process />
  <WhyChooseUs/>

     <Faq faqs={RubyOnRailsServicesFAQData} />
    </>
  )
};

  export default Body;