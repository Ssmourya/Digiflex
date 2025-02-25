import React from 'react';
import { motion } from 'framer-motion';
import WrapperContainer from '../../../Layout/WrapperContainer';

function TechnologyLogo({ icon, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <motion.img 
        src={icon} 
        alt={name} 
        whileHover={{ rotate: 360 }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
        className="w-20 h-20 transition-all duration-300" 
      />
      <p className="mt-2 text-gray-600 text-sm font-medium">{name}</p>
    </motion.div>
  );
}

const technologies = [
  {
    name: 'React',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://icon.icepanel.io/Technology/svg/Node.js.svg',
  },
  {
    name: 'Angular',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'Vue.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  },
  {
    name: 'Django',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
  },
  {
    name: 'TensorFlow',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'Flutter',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  },
  {
    name: 'AWS',
    icon: 'https://icon.icepanel.io/Technology/png-shadow-512/AWS.png',
  },
  {
    name: 'Redis',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'GraphQL',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Kubernetes',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Sass',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
  }
];

function Technologies() {
  return (
    <div className="min-h-screen ">
        <WrapperContainer>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise in Cutting-Edge Technologies
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We leverage the latest technologies to build powerful, scalable, and innovative solutions
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <TechnologyLogo
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      </WrapperContainer>
    </div>
  );
}

export default Technologies;