import { FaCode, FaBuilding, FaShoppingCart, FaExchangeAlt, FaCloud, FaDatabase, FaJsSquare, FaExpand, FaUsers, FaRocket } from "react-icons/fa";
import Heading from '../../../../Layout/Heading'
import WhyChooseMern from "./TechnologiesWeUse";
import WrapperContainer from "../../../../Layout/WrapperContainer";
export default function MernStackServices() {
  return (
    <>    
    
    <section className="bg-white  py-12 px-6">
   
      <div className="max-w-4xl mx-auto text-center">
      <Heading>Our MERN Stack Services</Heading>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-4"
            >
              <service.icon className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
   
        
    <section className="bg-white text-black py-12 px-6">

      <div className="max-w-4xl mx-auto text-center">
      
      <Heading>Why Choose MERN Stack?</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-4"
            >
              <reason.icon className="text-white text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
     
    <WhyChooseMern/>
    </>

  );
}

const services = [
  { title: "Custom Web Applications", description: "Develop full-stack web applications tailored to business needs.", icon: FaCode },
  { title: "Enterprise Applications", description: "Scalable and secure applications for enterprises.", icon: FaBuilding },
  { title: "E-commerce Development", description: "Build e-commerce platforms using MERN stack.", icon: FaShoppingCart },
  { title: "API Development & Integration", description: "RESTful and GraphQL APIs.", icon: FaExchangeAlt },
  { title: "MERN Stack Migration", description: "Migrate applications to the MERN stack.", icon: FaDatabase },
  { title: "SaaS Application Development", description: "Cloud-based solutions for businesses.", icon: FaCloud },
];

const reasons = [
  { title: "Single language (JavaScript) for front-end and back-end.", icon: FaJsSquare },
  { title: "High scalability and flexibility.", icon: FaExpand },
  { title: "Open-source technologies with strong community support.", icon: FaUsers },
  { title: "Faster development and deployment.", icon: FaRocket },
];
