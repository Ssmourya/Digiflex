import React, { useState } from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-md transition-all duration-300 ${
      active ? "bg-blue-600 text-white shadow-md" : "text-blue-600 hover:bg-blue-50"
    }`}
  >
    {children}
  </button>
);

const TechLogo = ({ name, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex flex-col items-center gap-3">
      <Icon className="w-12 h-12" />
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  </div>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#47A248" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#00758F" d="M12 2L1 21h22z" />
  </svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12">
    <path fill="#336791" d="M12 2L2 12h20z" />
  </svg>
);

const ToolsTech = () => {
  const [activeTab, setActiveTab] = useState("Tools");

  const tabs = ["Tools", "Database", "Skills"];

  const techStacks = {
    Tools: [
      { name: "Vue CLI", icon: () => <span className="text-2xl">🔧</span> },
      { name: "Vuex", icon: () => <span className="text-2xl">📦</span> },
      { name: "Vue Router", icon: () => <span className="text-2xl">🛤️</span> },
      { name: "Vue.js", icon: () => <span className="text-2xl">🖥️</span> },
    ],
    Database: [
      { name: "MongoDB", icon: MongoDBLogo },
      { name: "PostgreSQL", icon: PostgreSQLLogo },
      { name: "MySQL", icon: MySQLLogo },
    ],
    Skills: [
      { name: "NuxtJS", icon: () => <span className="text-2xl">⚡</span> },
      { name: "Apollo", icon: () => <span className="text-2xl">🚀</span> },
      { name: "Vue Router", icon: () => <span className="text-2xl">🔗</span> },
      { name: "Axios", icon: () => <span className="text-2xl">🔄</span> },
    ],
  };

  return (
    <WrapperContainer>
      <div className="mx-auto relative">
        <div className="text-center mb-12">
          <Heading>Technologies we use</Heading>
          <Paragraph>
            Our developers are highly compatible with trending tools & technologies & provide custom-centric Vue.js development services as per the project requirement.
          </Paragraph>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </TabButton>
          ))}
        </div>

        {/* Tech Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techStacks[activeTab].map((tech, index) => (
            <TechLogo key={index} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ToolsTech;
