import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "🎮",
      title: "Access to Top Talent",
      desc: "Game development teams can quickly onboard skilled professionals to enhance their project without long hiring processes.",
    },
    {
      icon: "⚡",
      title: "Faster Development Cycles",
      desc: "Bringing in external experts ensures faster prototyping, development, and deployment of game features.",
    },
    {
      icon: "💰",
      title: "Cost Efficiency",
      desc: "Reduce overhead costs by hiring skilled game developers on-demand instead of maintaining a large in-house team.",
    },
    {
      icon: "📈",
      title: "Scalability",
      desc: "Easily scale development resources up or down based on project needs, avoiding resource constraints.",
    },
    {
      icon: "🌎",
      title: "Global Talent Pool",
      desc: "Access game development specialists from around the world with diverse skill sets and expertise.",
    },
    {
      icon: "🔄",
      title: "Flexibility",
      desc: "Adjust resource allocation dynamically to align with evolving project requirements and deadlines.",
    },
    {
      icon: "🔍",
      title: "Specialized Expertise",
      desc: "Gain access to experts in AI, VR, AR, and other cutting-edge gaming technologies for enhanced development.",
    },
    {
      icon: "🚀",
      title: "Focus on Core Business",
      desc: "Let your in-house team focus on strategic tasks while external experts handle development challenges.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      desc: "External professionals integrate smoothly with your in-house teams, following workflows and ensuring collaboration efficiency.",
    },
  ];

  return (
    <WrapperContainer>
      <Heading>
        <div>
          Real-Life Benefits of Resource Augmentation in Game Development
        </div>
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-2xl shadow-md"
          >
            <div className="text-4xl text-blue-500 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </WrapperContainer>
  );
}
