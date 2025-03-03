import React from 'react';
import WrapperContainer from '../Layout/WrapperContainer'

const footerLinks = {
  'CONSULTING': [
    { name: 'Web Consulting', url: '/services/consulting/website-consulting-solutions' },
    { name: 'Mobile Consulting', url: '/services/consulting/mobile-web-app-consulting-services' },
    { name: 'Salesforce Consulting', url: '/services/consulting/salesforce-consulting-company' },
    { name: 'DevOps Consulting', url: '/services/consulting/devops-consulting-services' },
    { name: 'Testing Consulting', url: '/services/consulting/software-testing-consulting' },
    { name: 'AI Consulting', url: '/services/consulting/ai-consulting-experts' }
  ],
  'UI/UX': [
    { name: 'Brand Strategy', url: '/services/ui-ux/brandStrategy' },
    { name: 'Design Consulting', url: '/services/ui-ux/designconsulting' },
    { name: 'Product Design', url: '/services/ui-ux/productdesign' },
    { name: 'UX Research', url: '/services/ui-ux/uxresearch' },
    { name: 'UI Animation', url: '/services/ui-ux/uianimation' },
    { name: 'Design Testing', url: '/services/ui-ux/design-testing' }
  ],
  'CUSTOM APPS': [
    { name: 'Web Application Development', url: '/web-application-development' },
    { name: 'Mobile App Development', url: '/mobile-app-development' },
    { name: 'SaaS Development', url: '/saas-software-development' },
    { name: 'Integration & Migration', url: '/integration-and-migration-services' },
    { name: 'CEM Development', url: '/customer-experience-management-development' }
  ],
  'TESTING & QA': [
    { name: 'Software Test Management', url: '/services/testing/software-test-management' },
    { name: 'Test Automation', url: '/services/testing/test-automation' },
    { name: 'Performance Testing', url: '/services/testing/performance-testing' },
    { name: 'Security Testing', url: '/services/testing/security-testing' },
    { name: 'Selenium Testing', url: '/services/testing/selenium-automation-testing' }
  ],
  'CLOUD': [
    { name: 'Azure Cloud Services', url: '/microsoft-azure-cloud-services' },
    { name: 'AWS Cloud Services', url: '/aws-cloud-services' },
    { name: 'Google Cloud Platform', url: '/google-cloud-platform-services' },
    { name: 'Cloud Migration', url: '/legacy-to-cloud-migration-services' },
    { name: 'Cloud Native Development', url: '/cloud-native-development-services' },
    { name: 'Cloud Optimization', url: '/cloud-optimization-services' }
  ],
  'AI': [
    { name: 'AI App Development', url: '/ai-app-development' },
    { name: 'AI Software Development', url: '/ai-software-development' },
    { name: 'LLM Development', url: '/large-language-model-development' }
  ],
  'BLOCKCHAIN': [
    { name: 'Exchange Software', url: '/crypto-exchange-software-development' },
    { name: 'ICO Development', url: '/initial-coin-offering-ico-development' },
    { name: 'Cryptocurrency App', url: '/cryptocurrency-app-development' },
    { name: 'Smart Contract', url: '/smart-contract-development-services' },
    { name: 'NFT Marketplace', url: '/services/blockchain/nftmarketplacedevelopment' },
    { name: 'DeFi Development', url: '/services/blockchain/defidevelopmentservices' },
    { name: 'Web3 Development', url: '/web3-development-services' }
  ],
  'GAME DEVELOPMENT': [
    { name: 'Mobile Game Development', url: '/mobile-game-development' },
    { name: 'Unity3D Development', url: '/unity3d-game-development' },
    { name: 'Unreal Development', url: '/unreal-game-development' },
    { name: 'PC Game Development', url: '/pc-game-development-services' },
    { name: 'Game Art Services', url: '/game-art-design-services' },
    { name: 'VR/XR Simulation', url: '/vr-xr-simulation-development' },
    { name: 'Resource Augmentation', url: '/game-development-resource-augmentation' }
  ],
  'FRONTEND': [
    { name: 'Angular Development', url: '/tech/frontend/angular-development-services' },
    { name: 'React Development', url: '/tech/frontend/reactjs-development-services' },
    { name: 'Vue Development', url: '/tech/frontend/vuejs-development-services' },
    { name: 'Bootstrap Development', url: '/tech/frontend/bootstrap-development-services' },
    { name: 'KnockoutJS Development', url: '/tech/frontend/knockoutjs-development-services' },
    { name: 'NextJS Development', url: '/tech/frontend/nextjs-development-services' }
  ],
  'WEBSITE DEVELOPMENT': [
    { name: 'MERN Stack Development', url: '/mern-stack-development' },
    { name: 'Java Development', url: '/java-j2ee-development-services' },
    { name: 'Python Development', url: '/python-development-services' },
    { name: 'Website Development', url: '/website-development-services' }
  ],
  'MOBILE APP': [
    { name: 'iOS App Development', url: '/ios-app-development-services' },
    { name: 'Android App Development', url: '/android-app-development-services' },
    { name: 'React Native Development', url: '/react-native-app-development-services' },
    { name: 'Flutter Development', url: '/flutter-app-development-services' },
    { name: 'NativeScript Development', url: '/nativescript-app-development-services' },
    { name: 'Xamarin Development', url: '/xamarin-app-development-services' },
    { name: 'HTML5 App Development', url: '/html5-app-development-services' }
  ],
  'RESOURCES': [
    { name: 'About Us', url: '/about-us' },
    { name: 'Our Work', url: '/our-work' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Sitemap', url: '/sitemap' },
    { name: 'Contact Us', url: '/contact-us' }
  ]
};

const Navigation = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950 py-8">
      <WrapperContainer>
        <div className="text-white w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="mb-6">
                  <h2 className="text-sm font-bold mb-3 text-gray-200">
                    {category}
                  </h2>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default Navigation;