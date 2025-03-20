import PhpLaravelServices from "./PhpLaravelServices";
import Tools from "./Tools";
import PhpLaravelTools from "./PhpLaravelTools";
import Faq from "../../../../components/Faq";
import { LaravelServicesFAQData } from "../FAQData";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  return (
    <>
      <PhpLaravelServices />
      <Tools />
      <PhpLaravelTools />
      <WhyChooseUs/>
      <Faq faqs={LaravelServicesFAQData} />
    </>
  );
};

export default Body;
