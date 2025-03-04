import React from 'react';
import { ArrowRight, Lightbulb,  Code, Map, Link, Gauge } from 'lucide-react';
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";


const GameServices = () => {
  const services = [
    {
      id: 1,
      title: "Game Concept and Design",
      description: "Bring your game ideas to life with our expert design team. We specialize in creating immersive and engaging game concepts tailored to your vision.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
      details: [
        "Narrative and story development",
        "Gameplay mechanics and systems design",
        "Prototyping and playtesting",
        "User experience and interface planning"
      ]
    },
    {
      id: 2,
      title: "3D Asset Creation",
      description: "Craft stunning 3D models and environments. Our artists create high-quality assets optimized for Unreal Engine.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      details: [
        "Character and creature modeling",
        "Environment and prop creation",
        "Texturing and material design",
        "Asset optimization for performance"
      ]
    },
    {
      id: 3,
      title: "Gameplay Programming",
      description: "Implement robust and engaging gameplay mechanics. Our programmers bring your game to life with clean, efficient code.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-green-100",
      iconColor: "text-green-600",
      details: [
        "Player controls and interactions",
        "Game logic and rules",
        "UI/UX implementation",
        "Integration with Unreal Engine"
      ]
    },
    {
      id: 4,
      title: "Level Design and World Building",
      description: "Create immersive game worlds and levels. We design environments that enhance gameplay and storytelling.",
      icon: <Map className="w-8 h-8" />,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      details: [
        "Environment layout and architecture",
        "Lighting and atmosphere",
        "Interactive elements and puzzles",
        "Narrative integration"
      ]
    },
    {
      id: 5,
      title: "Multiplayer Implementation",
      description: "Enable seamless multiplayer experiences. We handle networking and synchronization for your game.",
      icon: <Link className="w-8 h-8" />,
      color: "bg-red-100",
      iconColor: "text-red-600",
      details: [
        "Networking architecture",
        "Player synchronization",
        "Matchmaking systems",
        "Latency optimization"
      ]
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Ensure your game runs smoothly across platforms. We optimize for frame rate, memory, and load times.",
      icon: <Gauge className="w-8 h-8" />,
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      details: [
        "Profiling and bottleneck identification",
        "Graphics optimization",
        "Memory management",
        "Platform-specific tuning"
      ]
    }
  ];

  return (
    <>
      <WrapperContainer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>
            <div>Our Services</div>
          </Heading>
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} className="relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className={`flex-shrink-0 p-6 rounded-full ${service.color} ${service.iconColor} mb-4 md:mb-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`mt-1 mr-3 ${service.iconColor}`}>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
};

export default GameServices;