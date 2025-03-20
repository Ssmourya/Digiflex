"use client";
import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";

const AIServiceBody = () => {
  return (
    <section>
      <WrapperContainer>
        <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          {/* Why Us Section */}
          <Heading>
            🌟 Why Choose Us?
          </Heading>
          <p className="text-gray-600 text-lg leading-relaxed">
            With numerous AI service providers in the market, what makes us
            stand out? We deliver{" "}
            <span className="font-semibold text-gray-900">
              cutting-edge, customized AI solutions
            </span>{" "}
            tailored to meet your business needs.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                🚀 Expertise & Innovation
              </h4>
              <p className="text-gray-600 mt-3">
                Our team consists of AI specialists and data scientists who
                continuously innovate and push boundaries.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                📈 Proven Track Record
              </h4>
              <p className="text-gray-600 mt-3">
                We have successfully implemented AI solutions for businesses
                across multiple industries, delivering measurable results.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                🔧 Custom AI Solutions
              </h4>
              <p className="text-gray-600 mt-3">
                We design AI solutions that align with your specific business
                goals, ensuring seamless integration and maximum ROI.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg mt-8 leading-relaxed">
            Our mission is to empower businesses by leveraging AI to{" "}
            <span className="font-semibold text-gray-900">
              enhance productivity, drive automation, and unlock new
              opportunities.
            </span>{" "}
            Partner with us to experience AI at its best.
          </p>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AIServiceBody;
