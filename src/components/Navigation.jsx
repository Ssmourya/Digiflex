'use client'
import React from 'react';
import Link from 'next/link';
import WrapperContainer from '../Layout/WrapperContainer';

const footerLinks = {
  'CONSULTING': [
    { name: 'Web Consulting', url: '/website-consulting-solutions' },
    { name: 'Mobile Consulting', url: '/mobile-web-app-consulting-services' },
    { name: 'Salesforce Consulting', url: '/salesforce-consulting-company' },
    { name: 'DevOps Consulting', url: '/devops-consulting-services' },
    { name: 'Testing Consulting', url: '/software-testing-consulting' },
    { name: 'AI Consulting', url: '/ai-consulting-experts' }
  ],
  'UI/UX': [
    { name: 'Brand Strategy', url: '/brand-strategy-consulting' },
    { name: 'Design Consulting', url: '/design-consulting-services' },
    { name: 'Product Design', url: '/product-design-consulting' },
    { name: 'UX Research', url: '/ux-research-services' },
    { name: 'UI Animation', url: '/ui-design-and-animation-services' },
    { name: 'Design Testing', url: '/design-testing-services' }
  ],
  'CUSTOM APPS': [
    { name: 'Web Application Development', url: '/web-application-development' },
    { name: 'Mobile App Development', url: '/mobile-app-development' },
    { name: 'SaaS Development', url: '/saas-software-development' },
    { name: 'Integration & Migration', url: '/integration-and-migration-services' },
    { name: 'CEM Development', url: '/customer-experience-management-development' }
  ],
  'TESTING & QA': [
    { name: 'Software Test Management', url: '/software-test-management-services' },
    { name: 'Test Automation', url: '/test-automation-services' },
    { name: 'Performance Testing', url: '/performance-testing-services' },
    { name: 'Security Testing', url: '/security-testing-services' },
    { name: 'Selenium Testing', url: '/selenium-automation-testing-services' }
  ],
  'CLOUD': [
    { name: 'Azure Cloud Services', url: '/microsoft-azure-cloud-services' },
    { name: 'AWS Cloud Services', url: '/aws-cloud-services' },
    { name: 'Google Cloud Platform', url: '/google-cloud-platform-services' },
    { name: 'Cloud Migration', url: '/legacy-to-cloud-migration-services' },
    { name: 'Intercloud Migration', url: '/intercloud-migration-solutions' },
    { name: 'Cloud Native', url: '/cloud-native-development-services' },
    { name: 'Cloud Optimization', url: '/cloud-optimization-services' }
  ],
  'ARTIFICIAL INTELLIGENCE': [
  { name: 'AI App Development', url: '/ai-app-development' },
  { name: 'AI Software Development', url: '/ai-software-development' },
  { name: 'Large Language Model Development', url: '/large-language-model-development' },
  { name: 'Enterprise AI Chatbot Development', url: '/enterprise-ai-chatbot-development' }
  ],
  'BLOCKCHAIN': [
    { name: 'Exchange Software', url: '/crypto-exchange-software-development' },
    { name: 'ICO Development', url: '/initial-coin-offering-ico-development' },
    { name: 'Cryptocurrency App', url: '/cryptocurrency-app-development' },
    { name: 'Cryptocurrency Wallet', url: '/cryptocurrency-wallet-development' },
    { name: 'Smart Contract', url: '/smart-contract-development-services' },
    { name: 'NFT Marketplace', url: '/nftmarketplacedevelopment' },
    { name: 'DeFi Development', url: '/defidevelopmentservices' },
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
    { name: 'Angular Development', url: '/angular-development-services' },
    { name: 'React Development', url: '/reactjs-development-services' },
    { name: 'Vue Development', url: '/vuejs-development-services' },
    { name: 'Bootstrap Development', url: '/bootstrap-development-services' },
    { name: 'KnockoutJS Development', url: '/knockoutjs-development-services' },
    { name: 'NextJS Development', url: '/nextjs-development-services' }
],
  'WEBSITE DEVELOPMENT': [
    { name: 'MERN Stack Development', url: '/mern-stack-development' },
    { name: 'Java Development', url: '/java-j2ee-development-services' },
    { name: 'Python Development', url: '/python-development-services' },
    { name: '.NET Development', url: '/dotnet-development-services' },
    { name: 'Ruby on Rails', url: '/ruby-on-rails-development' },
    { name: 'Golang Development', url: '/golang-development-services' },
    { name: 'PHP Laravel', url: '/php-laravel-codeigniter-development' },
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

'E COMMERCE': [
  { name: 'Shopify Development', url: '/shopify-development-services' },
  { name: 'WooCommerce Development', url: '/woocommerce-development-services' },
  { name: 'OpenCart Development', url: '/opencart-development-services' },
  { name: 'Magento Development', url: '/magento-development-services' },
  { name: 'PrestaShop Development', url: '/prestashop-development-services' },
  { name: 'Odoo Development', url: '/odoo-development-services' }
],
  'RESOURCES': [
    { name: 'About Us', url: '/about-us' },
    { name: 'Our Work', url: '/our-work' },
    // { name: 'Blog', url: '/blog' },
    // { name: 'Careers', url: '/careers' },
    // { name: 'Sitemap', url: '/sitemap' },
    { name: 'Contact Us', url: '/contact-us' }
  ]
};

const Navigation = () => {
  return (
    <div className="flex justify-center items-center bg-blue-950">
      <WrapperContainer>
        <div className="text-white w-full">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="mb-6">
                  <h2 className="text-sm font-bold mb-3 text-gray-200">
                    {category}
                  </h2>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.url}
                          className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
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