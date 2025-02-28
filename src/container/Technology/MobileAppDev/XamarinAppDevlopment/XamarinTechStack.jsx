import React from 'react';
import Heading from "../../../../Layout/Heading";
import Subheading from "../../../../Layout/Subheading";
import Paragraph from '../../../../Layout/Paragraph';
const techStackData = [
  {
    icon: '💻',
    title: 'Programming Language',
    description: 'C#',
  },
  {
    icon: '🛠️',
    title: 'Frameworks & Tools',
    description: '.NET, Xamarin.Forms, Xamarin.Native (Xamarin.iOS, Xamarin.Android)',
  },
  {
    icon: '🎨',
    title: 'UI Components',
    description: 'Native iOS & Android UI, Material Design, Cupertino',
  },
  {
    icon: '☁️',
    title: 'Backend Services',
    description: 'Microsoft Azure, Firebase, Google Cloud, AWS',
  },
  {
    icon: '🗄️',
    title: 'Databases',
    description: 'SQL Server, SQLite, Firestore, Realm',
  },
  {
    icon: '🐞',
    title: 'Testing & Debugging',
    description: 'Xamarin Test Cloud, NUnit, App Center',
  },
];

const XamarinTechStack = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading>
            🔹  Our Xamarin Tech Stack
          </Heading>
          <p className="text-gray-700 text-lg">
            Empowering mobile solutions with Digiflex.ai a robust and modern tech stack.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techStackData.map((tech, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Overlapping Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full shadow-lg">
                  <span className="text-3xl text-white">{tech.icon}</span>
                </div>
              </div>
              {/* Card Content */}
              <div className="mt-10 text-center">
                
                  <Subheading>{tech.title}</Subheading>
              
                <Paragraph className="text-gray-600">{tech.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default XamarinTechStack;
