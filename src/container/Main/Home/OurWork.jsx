import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '../../../components/ui/linear-dialog';
import { Plus, ExternalLink, Heart, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import WrapperContainer from '../../../Layout/WrapperContainer';

import image from '../../../assets/triposia.jpg'
import image1 from '../../../assets/stok.jpg'
import image2 from '../../../assets/Arihant.jpg'
import EcoPulse from '../../../assets/EcoPulse.jpg'
import HealthSync from '../../../assets/HealthSync.jpg'
import EduSphere from '../../../assets/EduSphere.jpg'


const projects = [
  {
    id: 1,
    url: image,
    title: 'Tripocio Carnival',
    description: 'A revolutionary travel booking platform that leverages AI to provide personalized travel recommendations based on user preferences, travel history, and budget constraints. The platform integrates with over 500 airlines and 100,000 hotels worldwide.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'],
    duration: '6 months',
    client: 'Tripocio Travel Solutions',
    likes: 128,
    category: 'Travel & Tourism'
  },
  {
    id: 2,
    url: image1,
    title: 'Tradeworld247',
    description: 'A sophisticated trading platform with real-time market data, automated trading strategies, and comprehensive portfolio management tools. Features include customizable dashboards, predictive analytics, and multi-currency support.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket', 'Docker'],
    duration: '8 months',
    client: 'TradeWorld Technologies',
    likes: 96,
    category: 'Finance'
  },
  {
    id: 3,
    url: image2,
    title: 'Arihant Capital',
    description: 'A modern financial services platform offering investment management, stock trading, and wealth advisory services. The platform includes advanced security features, regulatory compliance modules, and integrated payment gateways.',
    technologies: ['Angular', 'Java Spring Boot', 'Oracle', 'Kubernetes', 'Redux'],
    duration: '12 months',
    client: 'Arihant Financial Services',
    likes: 152,
    category: 'Finance'
  },
  {
    id: 4,
    url: EcoPulse,
    title: 'EcoPulse Energy',
    description: 'An innovative platform for renewable energy tracking and optimization that helps businesses monitor and reduce their carbon footprint. Includes features for energy usage analytics, sustainability reporting, and carbon offset calculations.',
    technologies: ['React', 'Django', 'GraphQL', 'PostgreSQL', 'Tailwind CSS'],
    duration: '9 months',
    client: 'EcoPulse Innovations',
    likes: 87,
    category: 'Energy & Environment'
  },
  {
    id: 5,
    url: HealthSync,
    title: 'HealthSync App',
    description: 'A comprehensive health management system integrating wearables and AI for personalized care. The app provides health analytics, medication reminders, telehealth consultations, and personalized wellness recommendations.',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Redux', 'TensorFlow'],
    duration: '10 months',
    client: 'HealthSync Solutions',
    likes: 204,
    category: 'Healthcare'
  },
  {
    id: 6,
    url: EduSphere,
    title: 'EduSphere Platform',
    description: 'A dynamic e-learning platform offering interactive courses and virtual classrooms. Features include progress tracking, gamified learning experiences, certificate generation, and interactive assessments.',
    technologies: ['Next.js', 'Express.js', 'MongoDB', 'Socket.io', 'Sass'],
    duration: '11 months',
    client: 'EduSphere Tech',
    likes: 176,
    category: 'Education'
  }
];

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(
        projects.filter(project => 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category === activeCategory && 
          (project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        )
      );
    }
  }, [activeCategory, searchQuery]);
  

  const handleDialogOpen = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const handleDialogClose = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    } else {
      setSelectedProject(filteredProjects[0]);
      setCurrentIndex(0);
    }
  };

  const handlePrevProject = () => {
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    } else {
      setSelectedProject(filteredProjects[filteredProjects.length - 1]);
      setCurrentIndex(filteredProjects.length - 1);
    }
  };

  const toggleLike = (id) => {
    setIsLiked(prev => ({...prev, [id]: !prev[id]}));
  };

  return (
    <div className="bg-black text-white py-16">
    <WrapperContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with animated gradient */}
        <div className="text-center relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 p-8 mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"></div>
          <div className="relative">
            <h2 className="text-sm md:text-base text-blue-300 uppercase font-bold tracking-widest mb-2">Showcasing Excellence</h2>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Our Portfolio</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence with innovative solutions that drive growth and engagement.
            </p>
          </div>
        </div>

        {/* Search and filter controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex overflow-x-auto py-2 space-x-2 w-full md:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger 
                onClick={() => handleDialogOpen(project, index)}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                <DialogImage 
                  src={project.url} 
                  alt={project.title} 
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="flex justify-between items-center">
                    <div>
                      <DialogTitle className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</DialogTitle>
                      <div className="flex space-x-2 mb-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs text-blue-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && <span className="text-xs text-blue-300">+{project.technologies.length - 3}</span>}
                      </div>
                    </div>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform group-hover:rotate-90">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 bg-gray-900/70 backdrop-blur-sm px-3 py-1 rounded-full z-20">
                  <span className="text-xs font-medium text-blue-300">{project.category}</span>
                </div>
              </DialogTrigger>

              <DialogContainer className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
                <DialogContent 
                  className="relative mx-auto w-[95%] lg:w-[900px] bg-gradient-to-b from-gray-900 to-black text-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative">
                    <DialogImage src={project.url} alt={project.title} className="h-[350px] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    
                    {/* Navigation arrows */}
                    <button 
                      onClick={(e) => {e.stopPropagation(); handlePrevProject();}}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2.5 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {e.stopPropagation(); handleNextProject();}}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2.5 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm mb-2">
                          {selectedProject?.category}
                        </span>
                        <DialogTitle className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          {selectedProject?.title}
                        </DialogTitle>
                      </div>
                      <div className="flex space-x-3">
                        <button 
                          onClick={(e) => {e.stopPropagation(); toggleLike(selectedProject?.id);}}
                          className={`p-2 rounded-full transition ${isLiked[selectedProject?.id] ? 'bg-pink-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                        >
                          <Heart className={`w-5 h-5 ${isLiked[selectedProject?.id] ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-gray-700 transition">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-gray-800 text-gray-400 rounded-full hover:bg-blue-700 transition">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <DialogDescription className="text-gray-300 my-4 leading-relaxed">
                      {selectedProject?.description}
                    </DialogDescription>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 bg-gray-800/50 rounded-xl p-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject?.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-blue-900/60 text-blue-300 rounded-lg text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-400">Project Duration</h3>
                          <p className="mt-1 text-white font-medium">{selectedProject?.duration}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-400">Client</h3>
                          <p className="mt-1 text-white font-medium">{selectedProject?.client}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-400">Engagement</h3>
                          <p className="mt-1 text-white font-medium">{selectedProject?.likes} likes</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-gray-800">
                      <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                        View case study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <DialogClose 
                    onClick={handleDialogClose}
                    className="absolute top-4 right-4 bg-black/50 p-2.5 rounded-full hover:bg-red-600 transition z-20" 
                  />
                </DialogContent>
              </DialogContainer>
            </Dialog>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Show all projects
            </button>
          </div>
        )}
        
        {/* Call to action section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Interested in working with us on your next project?</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20">
            Let's Talk
          </a>
        </div>
      </div>
      </WrapperContainer>
    </div>
  );
}