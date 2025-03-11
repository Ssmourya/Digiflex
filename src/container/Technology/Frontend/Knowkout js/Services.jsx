import {
  FaDesktop,
  FaChartBar,
  FaCogs,
  FaTools,
  FaUserCircle,
  FaPlug,
  FaShoppingCart,
} from "react-icons/fa";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const services = [
  {
    title: "Knockout.js Web Application Development",
    description:
      "Knockout.js is a simple, fast, extensible, and data-centric JavaScript library that works with HTML document elements using a clean underlying view model.",
    icon: <FaDesktop className="text-4xl text-orange-500" />,
  },
  {
    title: "Knockout.js Dashboard Development",
    description:
      "Our proficient Knockout.js developers leverage the feature-rich Knockout.js to create outstanding dynamic dashboards.",
    icon: <FaChartBar className="text-4xl text-orange-500" />,
  },
  {
    title: "Custom Knockout.js Development",
    description:
      "Our team of top-notch Knockout.js developers and designers rely on the latest functionalities to implement robust and unique designs.",
    icon: <FaCogs className="text-4xl text-orange-500" />,
  },
  {
    title: "Knockout.js Maintenance & Support",
    description:
      "We integrate your existing web or mobile platforms with ease to help you scale up your business and achieve greater heights.",
    icon: <FaTools className="text-4xl text-orange-500" />,
  },
  {
    title: "Knockout.js UI/UX Development",
    description:
      "Knockout.js enables us to create stunning and interactive UI/UX designs to elevate your business and overcome challenges.",
    icon: <FaUserCircle className="text-4xl text-orange-500" />,
  },

  {
    title: "Knockout.js E-commerce Development",
    description:
      "We create feature-rich shopping carts with high-end features that offer excellent e-commerce solutions.",
    icon: <FaShoppingCart className="text-4xl text-orange-500" />,
  },
];

const Services = () => {
  return (
    <WrapperContainer>
      <div className="container mx-auto px-6">
        <Heading>
          We Offer Innovative and Highly Scalable Knockout.JS Development
          Services
        </Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Services;
