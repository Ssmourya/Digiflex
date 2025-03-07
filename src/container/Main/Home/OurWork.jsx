import React from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer';
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
import { Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
    title: "Tripocio Carnival",
    description: "A revolutionary travel booking platform that transforms the way people plan and experience their journeys. Built with cutting-edge technology, Tripocio Carnival features an intuitive interface for booking flights, hotels, and experiences. The platform incorporates AI-powered recommendations, real-time pricing updates, and seamless payment integration. Key features include interactive travel maps, personalized itinerary building, and a unique 'Memory Wall' where travelers can share their experiences.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "AI/ML"],
    duration: "6 months",
    client: "Tripocio Travel Solutions",
    preview: "A revolutionary travel booking platform that transforms the way people plan and experience their journeys. Built with cutting-edge technology...",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3",
    title: "Tradeworld247",
    description: "A sophisticated trading platform designed for 24/7 global market access. This comprehensive solution offers real-time market data, advanced charting tools, and automated trading capabilities. The platform features a secure authentication system, real-time notifications, and integration with multiple payment gateways. The dark-themed UI with neon accents provides excellent visibility for critical trading information while reducing eye strain during extended sessions.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "WebSocket", "Docker"],
    duration: "8 months",
    client: "TradeWorld Technologies",
    preview: "A sophisticated trading platform designed for 24/7 global market access. This comprehensive solution offers real-time market data, advanced charting tools...",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    title: "Arihant Capital",
    description: "A modern financial services platform that revolutionizes wealth management and investment tracking. The system provides comprehensive portfolio management, real-time market analysis, and automated investment recommendations. Features include customizable dashboards, detailed financial reports, and secure document management. The clean, minimalist design ensures that complex financial data is presented in an easily digestible format.",
    technologies: ["Angular", "Java Spring Boot", "Oracle", "Kubernetes", "Redux"],
    duration: "12 months",
    client: "Arihant Financial Services",
    preview: "A modern financial services platform that revolutionizes wealth management and investment tracking. The system provides comprehensive portfolio management...",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
    title: "Reerate App",
    description: "A cutting-edge real estate application that streamlines the property search and buying experience. With an intuitive interface, users can explore properties, view immersive 3D tours, and get AI-driven recommendations based on preferences.",
    technologies: ["Next.js", "Firebase", "GraphQL", "Redux", "Tailwind CSS"],
    duration: "7 months",
    client: "Reerate Technologies",
    preview: "A cutting-edge real estate application that streamlines the property search and buying experience. With an intuitive interface, users can explore properties...",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3",
    title: "Healthveda Organic",
    description: "An e-commerce platform dedicated to organic health products. The website features an AI-powered recommendation system, seamless checkout process, and personalized subscription plans.",
    technologies: ["Shopify", "React", "Node.js", "MongoDB", "Stripe"],
    duration: "5 months",
    client: "Healthveda Organic",
    preview: "An e-commerce platform dedicated to organic health products. The website features an AI-powered recommendation system, seamless checkout process...",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3",
    title: "Meta Sky Dubai",
    description: "A dynamic real estate and travel experience platform designed for Dubai enthusiasts. It provides real-time property listings, virtual tours, and AI-powered insights into Dubai's real estate market.",
    technologies: ["Vue.js", "Nuxt.js", "Firebase", "Tailwind CSS", "AWS"],
    duration: "9 months",
    client: "Meta Sky Dubai",
    preview: "A dynamic real estate and travel experience platform designed for Dubai enthusiasts. It provides real-time property listings, virtual tours...",
  },
];


export default function OurWork() {
  return (
    <div className='bg-white'>
      <WrapperContainer>
        <div className='pb-10'>
          <div className="text-center p-4 lg:p-8">
          <div className="inline-block">
              <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                OUR WORK
              </span>
            </div>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-blue-700">Portfolio</h2>
            <p className="mt-4 text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence with cutting-edge solutions.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            {projects.map((project) => (
              <Dialog
                key={project.id}
                transition={{
                  type: 'spring',
                  bounce: 0.05,
                  duration: 0.5,
                }}
              >
                <DialogTrigger
                  style={{ borderRadius: '12px' }}
                  className="flex w-full flex-col overflow-hidden border bg-white hover:bg-blue-50 max-w-sm"
                >
                  <DialogImage
                    src={project.url}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex flex-grow flex-row items-end justify-between p-4 lg:p-6">
                    <div>
                      <DialogTitle className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </DialogTitle>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {project.preview}
                      </p>
                    </div>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-900 transition-colors">
                      <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </div>
                </DialogTrigger>

                <DialogContainer className="pt-16 lg:pt-20">
                  <DialogContent className="relative flex h-full mx-auto flex-col overflow-y-auto rounded-3xl border dark:border-gray-800 bg-white dark:bg-gray-800 w-[90%] lg:w-[800px]">
                    <DialogImage
                      src={project.url}
                      alt={project.title}
                      className="h-[300px] lg:h-[400px] w-full object-cover"
                    />
                    <div className="p-6 lg:p-8">
                      <DialogTitle className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </DialogTitle>

                      <DialogDescription
                        className="space-y-6"
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 20 },
                        }}>
                        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies Used</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-6 lg:gap-8">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Duration</h3>
                              <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.duration}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</h3>
                              <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.client}</p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                    </div>
                    <DialogClose className="absolute right-4 lg:right-6 top-4 lg:top-6 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
}