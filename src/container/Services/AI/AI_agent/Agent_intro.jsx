"use client";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";

const AIServiceBody = () => {
  return (
    <section>
      <WrapperContainer>
        <div className="container max-w-6xl mx-auto text-center">
          {/* Introduction Section */}
          <Heading>Introduction to AI </Heading>

          <p className="text-gray-600 text-lg leading-relaxed">
            Artificial Intelligence is not just a technology; it’s a revolution.
            Businesses across industries are leveraging AI to{" "}
            <span className="font-semibold text-gray-900">
              streamline operations, automate workflows, enhance customer
              experiences,
            </span>{" "}
            and drive data-driven decision-making. The future belongs to those
            who embrace AI innovations.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                📊 Data Insights
              </h4>
              <p className="text-gray-600 mt-3">
                AI unlocks the full potential of your data, transforming raw
                numbers into meaningful trends and actionable insights.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                🤖 Intelligent Automation
              </h4>
              <p className="text-gray-600 mt-3">
                Reduce human effort and eliminate repetitive tasks with
                AI-driven automation, improving efficiency and accuracy.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-800">
                💡 Future Innovation
              </h4>
              <p className="text-gray-600 mt-3">
                AI fosters innovation by enabling businesses to create smart
                applications, predictive models, and adaptive solutions.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-lg mt-8 leading-relaxed">
            We specialize in cutting-edge AI solutions, including{" "}
            <span className="font-semibold text-gray-900">
              machine learning, natural language processing (NLP), computer
              vision, and AI-powered automation.
            </span>{" "}
            Our expertise ensures that businesses not only keep up with the
            digital revolution but lead it.
          </p>

          <div className="mt-8 p-6 bg-blue-100 rounded-lg shadow-md text-gray-800">
            <h4 className="text-2xl font-semibold">
              🌍 Transform Your Business with AI
            </h4>
            <p className="mt-3 text-lg">
              AI is more than a tool—it’s a game-changer. Whether you’re looking
              to optimize operations, enhance user engagement, or build
              intelligent applications, our AI services are designed to take
              your business to the next level.
            </p>
          </div>
        </div>
      </WrapperContainer>
    </section>
  );
};

export default AIServiceBody;
