import React from 'react';
import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';

const toolsData = [
  { category: "Game Engines", tools: ["Unity", "Unreal Engine", "Godot"] },
  { category: "Programming", tools: ["Visual Studio", "JetBrains Rider"] },
  { category: "3D Modeling", tools: ["Blender", "Maya", "3ds Max"] },
  { category: "2D Art & UI", tools: ["Photoshop", "GIMP", "Krita"] },
  { category: "Audio Editing", tools: ["Audacity", "FL Studio", "Ableton"] },
  { category: "Version Control", tools: ["Git", "GitHub", "GitLab"] },
];

const GameDevTools = () => {
  return (
    <WrapperContainer>
    
        <Heading>
          Tools & Software for PC Game Development
        </Heading>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Category</th>
                <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Software/Tools</th>
              </tr>
            </thead>
            <tbody>
              {toolsData.map((item, index) => (
                <tr
                  key={index}
                  className="border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="border border-gray-300 px-6 py-3 font-semibold">{item.category}</td>
                  <td className="border border-gray-300 px-6 py-3">
                    {item.tools.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
    </WrapperContainer>
  );
}

export default GameDevTools;