import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

function Services({ services, activeService, setActiveService }) {
  return (
    <WrapperContainer>
      <div className="text-6xl font-bold mb-8 text-center">
        <Heading>AI consulting services</Heading>
      </div>
      <Paragraph>
        Partner with Digiflex.ai, a trusted AI consulting company, to harness
        cutting-edge AI solutions that enhance customer experiences and drive
        business success.
      </Paragraph>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Services List */}
        <div className="space-y-2">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                activeService === key
                  ? "bg-blue-50 shadow-md"
                  : "hover:bg-gray-50"
              }`}
              onMouseEnter={() => setActiveService(key)}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Services Image Section */}
        <div className="relative rounded-3xl overflow-hidden h-[600px]">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeService === key ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/50" />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-white/90">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
}

export default Services;
