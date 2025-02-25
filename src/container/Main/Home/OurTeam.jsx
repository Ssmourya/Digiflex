import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

const teamMembers = [
  {
    id: 1,
    name: 'Tuhinanshu Jain',
    role: 'Managing Director',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/ttj3.png'
  },
  {
    id: 2,
    name: 'Hemraj Prajapat',
    role: 'Marketing Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/hemusir111.png'
  },
  {
    id: 3,
    name: 'Tanish Sharma',
    role: 'Project Manager',
    image: 'https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/tanishsir.jpeg'
  },
  {
    id: 4,
    name: 'Shubham Jat',
    role: 'Business Development Manager',
    image: 'https://digiflex.ai/img/1704269389180.jpg'
  }
];

function LeadershipTeam() {
  return (
    <div className="bg-black text-white py-20 flex flex-col items-center text-center px-6">
    <WrapperContainer>
    
      <div className="mb-16 relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6 tracking-wide">
          Our Leadership Team
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Meet the exceptional individuals who drive our vision forward and lead us to success with innovation and excellence.
        </p>
      </div>
      </WrapperContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="group text-center transform transition-all duration-300 hover:-translate-y-2">
            <div className="relative mx-auto w-64 h-64 mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 group-hover:border-blue-500/80 transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              <div className="absolute inset-3 overflow-hidden rounded-full shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/50 group-hover:border-blue-500 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
            
            <div className="mt-6 relative">
              <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-gray-400 mt-2 font-medium tracking-wide">
                {member.role}
              </p>
              
              <div className="flex justify-center space-x-3 mt-6">
                <a href="#" className="p-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Facebook size={16} />
                </a>
                <a href="#" className="p-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Twitter size={16} />
                </a>
                <a href="#" className="p-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default LeadershipTeam;