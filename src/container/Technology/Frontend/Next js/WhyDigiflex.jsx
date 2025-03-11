import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import WrapperContainer from "@/Layout/WrapperContainer";

const WhyDigiflex = () => {
  const features = [
    {
      icon: "📅",
      value: "10+",
      label: "Years of Development Experience",
    },
    {
      icon: "👨‍💻",
      value: "300+",
      label: "Software Engineers & Technical Staff",
    },
    {
      icon: "🚀",
      value: "1200+",
      label: "Software Designed, Developed & Deployed",
    },
    {
      icon: "🏢",
      value: "4",
      label: "State of the Art Development Facilities",
    },
    {
      icon: "⭐",
      value: "800+",
      label: "Happy Customers",
    },
  ];

  return (
    <WrapperContainer>
      <div className="mx-auto text-center">
        <Heading>Why Digiflex?</Heading>{" "}
        <Paragraph>
          Make the most of a world-class team and infrastructure
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mt-2">
                {feature.value}
              </h3>
              <p className="text-gray-600 text-center">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default WhyDigiflex;
