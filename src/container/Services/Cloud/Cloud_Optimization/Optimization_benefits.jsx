import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const features = [
  {
    title: "Cost management",
  },
  {
    title: "Improved efficiency",
  },
  {
    title: "Enhance productivity",
  },
  {
    title: "Increased visibility",
  },
];

function Optimization_benefits() {
  return (
    <>
      <WrapperContainer>
        <Heading>
          <h1>Benefits of cloud optimization</h1>
        </Heading>
        <div className="flex flex-wrap justify-center items-center mt-[40px]">
          <div className="flex flex-wrap gap-10 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 flex items-center justify-center bg-blue-500 text-white rounded-full text-center font-semibold transition-transform duration-300 hover:translate-y-4">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    {feature.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
        <WrapperContainer>
        <Heading>Important of Cloud Optimization</Heading>
        <p className="text-center">
        <Paragraph>
          Cloud optimization plays a crucial role in ensuring businesses
          maximize the value of their cloud investments by balancing cost,
          performance, and scalability. As organizations increasingly rely on
          cloud services, inefficient resource management can lead to
          unnecessary expenses and underutilized infrastructure. By implementing
          optimization strategies such as rightsizing, autoscaling, and load
          balancing, companies can ensure that cloud resources align with actual
          usage needs, preventing over-provisioning while maintaining high
          performance. Additionally, cloud optimization helps combat cloud
          sprawl by regularly auditing and eliminating idle or redundant
          resources, reducing waste and improving overall efficiency. Security
          and compliance are also enhanced, as optimized cloud environments
          minimize vulnerabilities and ensure adherence to industry regulations.
          Furthermore, effective cloud management supports sustainability
          efforts by reducing energy consumption and promoting environmentally
          friendly computing practices. 
        </Paragraph>
          </p>
          <div className="mb-20"> 
          <p className="text-center">
          <Paragraph>
          By leveraging cost-saving techniques
          such as reserved instances, spot instances, and efficient data
          transfer methods, businesses can further reduce operational expenses.
          Ultimately, cloud optimization enables organizations to be more agile,
          competitive, and innovative, allowing them to focus on growth and
          delivering high-quality services while keeping costs under control.
          </Paragraph>
          </p>
          </div>
        </WrapperContainer>
    </>
  );
}

export default Optimization_benefits;
