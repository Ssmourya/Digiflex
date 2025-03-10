"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WrapperContainer from '../../../Layout/WrapperContainer'

const technologies = [
  // Frontend
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Sass',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000',
    category: 'Frontend'
  },
  {
    name: 'Svelte',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Material UI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    category: 'Frontend'
  },
  
  // Backend
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'Backend'
  },
  {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    category: 'Backend'
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'Backend'
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
    category: 'Backend'
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    category: 'Backend'
  },
  {
    name: 'Laravel',
    icon: 'https://img.icons8.com/?size=100&id=lRjcvhvtR81o&format=png&color=000000',
    category: 'Backend'
  },
  {
    name: 'NestJS',
    icon: 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000',
    category: 'Backend'
  },
  {
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
    category: 'Backend'
  },
  {
    name: 'Flask',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    category: 'Backend'
  },
  
  // Database
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'Database'
  },
  {
    name: 'Redis',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    category: 'Database'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'Database'
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    category: 'Database'
  },
  {
    name: 'Cassandra',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    category: 'Database'
  },
  {
    name: 'DynamoDB',
    icon: 'https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg',
    category: 'Database'
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    category: 'Database'
  },
  {
    name: 'Neo4j',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
    category: 'Database'
  },
  {
    name: 'Elasticsearch',
    icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
    category: 'Database'
  },
  
  // E-commerce
  {
    name: 'Shopify',
    icon: 'https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000',
    category: 'E-commerce'
  },
  {
    name: 'WooCommerce',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
    category: 'E-commerce'
  },
  {
    name: 'Magento',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
    category: 'E-commerce'
  },
  {
    name: 'Stripe',
    icon: 'https://img.icons8.com/?size=100&id=vArWbbq0EbTM&format=png&color=000000',
    category: 'E-commerce'
  },
  {
    name: 'RazerPay',
    icon: 'https://cdn.iconscout.com/icon/free/png-512/free-razorpay-logo-icon-download-in-svg-png-gif-file-formats--payment-gateway-brand-logos-icons-1399875.png',
    category: 'E-commerce'
  },
  {
    name: 'BigCommerce',
    icon: 'https://img.icons8.com/?size=100&id=Nmy7xin7TGr7&format=png&color=000000',
    category: 'E-commerce'
  },
  {
    name: 'PrestaShop',
    icon: 'https://www.svgrepo.com/show/303591/prestashop-logo.svg',
    category: 'E-commerce'
  },
  {
    name: 'OpenCart',
    icon: 'https://www.svgrepo.com/show/354138/opencart.svg',
    category: 'E-commerce'
  },
  {
    name: 'Snipcart',
    icon: 'https://cdn.brandfetch.io/idCDrQ2fFe/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1739912495912',
    category: 'E-commerce'
  },
  {
    name: 'Algolia',
    icon: 'https://www.svgrepo.com/show/393977/algolia.svg',
    category: 'E-commerce'
  },
  
// Blockchain
{
  name: 'Ethereum',
  icon: 'https://img.icons8.com/?size=100&id=IhWBOFHtv6vx&format=png&color=000000s',
  category: 'Blockchain'
},
{
  name: 'Solidity',
  icon: 'https://cdn.worldvectorlogo.com/logos/solidity.svg',
  category: 'Blockchain'
},
{
  name: 'Web3.js',
  icon: 'https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png',
  category: 'Blockchain'
},
{
  name: 'Truffle',
  icon: 'https://trufflesuite.com/img/truffle-logo-dark.svg',
  category: 'Blockchain'
},
{
  name: 'Hardhat',
  icon: 'https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png',
  category: 'Blockchain'
},
{
  name: 'IPFS',
  icon: 'https://www.svgrepo.com/show/306249/ipfs.svg',
  category: 'Blockchain'
},
{
  name: 'Polkadot',
  icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
  category: 'Blockchain'
},
{
  name: 'Chainlink',
  icon: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
  category: 'Blockchain'
},
{
  name: 'Polygon',
  icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
  category: 'Blockchain'
},
{
  name: 'Solana',
  icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  category: 'Blockchain'
},

// AI/ML
{
  name: 'TensorFlow',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  category: 'AI/ML'
},
{
  name: 'PyTorch',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  category: 'AI/ML'
},
{
  name: 'Keras',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
  category: 'AI/ML'
},
{
  name: 'Scikit-learn',
  icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  category: 'AI/ML'
},
{
  name: 'Pandas',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  category: 'AI/ML'
},
{
  name: 'NumPy',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  category: 'AI/ML'
},
{
  name: 'Hugging Face',
  icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  category: 'AI/ML'
},
{
  name: 'OpenCV',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  category: 'AI/ML'
},
{
  name: 'NLTK',
  icon: 'https://miro.medium.com/max/592/0*zKRz1UgqpOZ4bvuA',
  category: 'AI/ML'
},
{
  name: 'Jupyter',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg',
  category: 'AI/ML'
},

// API
{
  name: 'GraphQL',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  category: 'API'
},
{
  name: 'REST API',
  icon: 'https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg',
  category: 'API'
},
{
  name: 'Apollo',
  icon: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg',
  category: 'API'
},
{
  name: 'Swagger',
  icon: 'https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png',
  category: 'API'
},

// Languages
{
  name: 'TypeScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  category: 'Languages'
},
{
  name: 'JavaScript',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  category: 'Languages'
},
{
  name: 'Java',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  category: 'Languages'
},
{
  name: 'C#',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  category: 'Languages'
},
{
  name: 'Go',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  category: 'Languages'
},
{
  name: 'Rust',
  icon: 'https://img.icons8.com/?size=100&id=XWesbnSd4AUa&format=png&color=000000',
  category: 'Languages'
},
{
  name: 'PHP',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  category: 'Languages'
},
{
  name: 'Ruby',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
  category: 'Languages'
},

// Testing
{
  name: 'Jest',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  category: 'Testing'
},
{
  name: 'Cypress',
  icon: 'https://img.icons8.com/?size=100&id=pJJ2NWzMYOWV&format=png&color=000000',
  category: 'Testing'
},
{
  name: 'Selenium',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
  category: 'Testing'
},
{
  name: 'Mocha',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
  category: 'Testing'
},

// Tools
{
  name: 'Git',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  category: 'Tools'
},
{
  name: 'Webpack',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
  category: 'Tools'
},
{
  name: 'Vite',
  icon: 'https://vitejs.dev/logo.svg',
  category: 'Tools'
},
{
  name: 'Figma',
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  category: 'Tools'
}
];

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  
  const tabs = ['Frontend', 'Backend', 'Database', 'E-commerce', 'Blockchain', 'AI/ML', 'Other'];
  
  const getFilteredTechnologies = (tab) => {
    let filtered = [];
    
    if (tab === 'Other') {
      // Combine API, Languages, Testing, and Tools categories
      const otherTechs = technologies.filter(tech => 
        ['API', 'Languages', 'Testing', 'Tools'].includes(tech.category)
      );
      // Take only 10 items
      filtered = otherTechs.slice(0, 10);
    } else {
      // Filter by the selected category and take only 10 items
      filtered = technologies
        .filter(tech => tech.category === tab)
        .slice(0, 10);
    }
    
    return filtered;
  };

  const filteredTechnologies = getFilteredTechnologies(activeTab);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="pt-16 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* New Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-2">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              TECH STACK
            </span>
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Expertise in Cutting-Edge Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We leverage the latest technologies to build powerful, scalable, and innovative solutions
          </motion.p>
        </motion.div>
        
        {/* Tabs - Centered */}
        <motion.div 
          className="flex flex-wrap justify-center border-b border-gray-200 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              className={`px-4 py-3 text-lg font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Technology Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredTechnologies.map((tech) => (
            <motion.div 
              key={tech.name} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#3b82f6"
              }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 text-center">{tech.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;