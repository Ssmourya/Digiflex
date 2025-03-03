import React from 'react';
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from '../../../../Layout/Paragraph';
import Subheading from '../../../../Layout/Subheading';

const TeamMemberCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-xl group text-center border border-gray-300 shadow-md hover:shadow-2xl hover:border-white hover:bg-blue-500 transform hover:-translate-y-1">
    <div className="mb-4 w-12 h-12 mx-auto text-[#f59e0b] group-hover:text-white group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A] group-hover:text-white transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600 mt-2 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
      {description}
    </p>
  </div>
);

const UnrealTeam = () => {
  const teamMembers = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
      title: "Game Designer",
      description: "Defines the game's core mechanics, world-building, and player experience. Works closely with narrative designers to develop the plot and gameplay."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><path d="M12 2l7 20-7-5-7 5z" /></svg>,
      title: "Unreal Tech Lead",
      description: "Expert in Unreal Engine, responsible for game architecture, coding, and mentoring developers. Ensures high-quality code and optimal performance."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
      title: "QA Specialist",
      description: "Ensures game quality by identifying design inconsistencies, bugs, and errors. Works closely with developers to enhance gameplay and user experience."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><path d="M4 4h16v16H4z" /></svg>,
      title: "3D Artist",
      description: "Creates high-quality 3D assets, characters, and environments, ensuring the game world is visually stunning and immersive."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><path d="M12 2L19 21H5L12 2z" /></svg>,
      title: "Animator",
      description: "Brings characters and objects to life with fluid and realistic animations, ensuring smooth and engaging gameplay."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" /></svg>,
      title: "Audio Engineer",
      description: "Designs and implements immersive sound effects and music to enhance the player's emotional and auditory experience."
    }
  ];

  return (
    <WrapperContainer>
      <div className="text-center mb-16">
        <Heading>Unreal Engine Development Team</Heading>
        <Subheading>
          iLogos' expert game dev team thrives on challenges. With over 17 years in the industry, we handle projects of any complexity. Our highly skilled members, committed to continuous learning and professional growth, are ready for any task.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} icon={member.icon} title={member.title} description={member.description} />
        ))}
      </div>
    </WrapperContainer>
  );
};

export default UnrealTeam;