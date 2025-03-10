const fs = require('fs');
const path = require('path');

// List of all routes and their corresponding component names
const routes = [
  // Testing services
  { path: 'software-test-management-services', component: 'SoftwareTestManagement' },
  { path: 'test-automation-services', component: 'TestAutomation' },
  { path: 'performance-testing-services', component: 'PerformanceTesting' },
  { path: 'security-testing-services', component: 'SecurityTesting' },
  { path: 'selenium-automation-testing-services', component: 'SeleniumAutomationTesting' },
  
  // Development services
  { path: 'integration-and-migration-services', component: 'IntregrationandMigration' },
  { path: 'customer-experience-management-development', component: 'CEMDEVELOPMENT' },
  { path: 'saas-software-development', component: 'SAASDEVELOPMENT' },
  { path: 'website-development-services', component: 'WebsiteDevlopment' },
  { path: 'blockchain-development-services', component: 'BlockChainDevlopment' },
  { path: 'mobile-app-development', component: 'MobileAppDevlopment' },
  { path: 'web-application-development', component: 'WebApplicationDevlopment' },
  
  // Consulting services
  { path: 'mobile-web-app-consulting-services', component: 'MobileConsulting' },
  { path: 'website-consulting-solutions', component: 'WebConsulting' },
  { path: 'salesforce-consulting-company', component: 'SalesforceConsulting' },
  { path: 'devops-consulting-services', component: 'DevopsConsulting' },
  { path: 'software-testing-consulting', component: 'TestingConsulting' },
  { path: 'ai-consulting-experts', component: 'AiConsulting' },
  
  // Design services
  { path: 'brand-strategy-consulting', component: 'BrandStrategy' },
  { path: 'design-consulting-services', component: 'DesignConsulting' },
  { path: 'product-design-consulting', component: 'ProductDesign' },
  { path: 'ux-research-services', component: 'UxResearch' },
  { path: 'ui-design-and-animation-services', component: 'UiAnimation' },
  { path: 'design-testing-services', component: 'DesignTesting' },
  
  // Blockchain services
  { path: 'crypto-exchange-software-development', component: 'ExchangeShoftware' },
  { path: 'initial-coin-offering-ico-development', component: 'InitialCoinOffering' },
  { path: 'cryptocurrency-app-development', component: 'CryptocurrencyApp' },
  { path: 'smart-contract-development-services', component: 'SmartContractDevelopment' },
  { path: 'cryptocurrency-wallet-development', component: 'CryptocurrencyWallet' },
  { path: 'services/blockchain/nftmarketplacedevelopment', component: 'NftMarketplace' },
  { path: 'services/blockchain/defidevelopmentservices', component: 'DefiDevelopment' },
  { path: 'web3-development-services', component: 'Web3' },
  
  // Salesforce services
  { path: 'application-architecture-design', component: 'ApplicationArchitecture' },
  { path: 'salesforce-consulting-assessment', component: 'ConsultingAssesment' },
  
  // Frontend Technology
  { path: 'angular-development-services', component: 'AngularDevelopment' },
  { path: 'reactjs-development-services', component: 'ReactDevelopment' },
  { path: 'vuejs-development-services', component: 'VueDevelopment' },
  { path: 'bootstrap-development-services', component: 'BootstrapDevelopment' },
  { path: 'knockoutjs-development-services', component: 'KnowkoutjsDevelopment' },
  { path: 'nextjs-development-services', component: 'NextjsDevelopment' },
  
  // Mobile Technology
  { path: 'ios-app-development-services', component: 'IosDevelopmentTech' },
  { path: 'android-app-development-services', component: 'AndroidAppDevlopment' },
  { path: 'react-native-app-development-services', component: 'ReactNative' },
  { path: 'flutter-app-development-services', component: 'FlutterAppDevlopment' },
  { path: 'nativescript-app-development-services', component: 'NativeScript' },
  { path: 'xamarin-app-development-services', component: 'XamarinAppDEvlopment' },
  { path: 'html5-app-development-services', component: 'HtmlDevlopment' },
  
  // Website Development
  { path: 'mern-stack-development', component: 'WebsiteTechDevlopmet' },
  { path: 'java-j2ee-development-services', component: 'Java' },
  { path: 'python-development-services', component: 'PythonDevelopment' },
  
  // Game development
  { path: 'mobile-game-development', component: 'MobileGameDevelopment' },
  { path: 'unity3d-game-development', component: 'Unity3dGameDevelopment' },
  { path: 'unreal-game-development', component: 'UnrealGameDevelopment' },
  { path: 'pc-game-development-services', component: 'PCGameDevelopment' },
  { path: 'game-art-design-services', component: 'GameArtServices' },
  { path: 'vr-xr-simulation-development', component: 'VR_XRSimulation' },
  { path: 'game-development-resource-augmentation', component: 'ResourceAugmentation' },
  
  // Cloud
  { path: 'microsoft-azure-cloud-services', component: 'Azure' },
  { path: 'legacy-to-cloud-migration-services', component: 'Cloud_Migration' },
  { path: 'google-cloud-platform-services', component: 'Google' },
  { path: 'intercloud-migration-solutions', component: 'Intercloud_Migration' },
  { path: 'aws-cloud-services', component: 'AWS' },
  { path: 'cloud-native-development-services', component: 'CloudNative' },
  { path: 'cloud-optimization-services', component: 'CloudOptimization' },
  
  // AI app
  { path: 'ai-app-development', component: 'Ai_development' },
  { path: 'ai-software-development', component: 'Ai_software' },
  { path: 'large-language-model-development', component: 'Llm_development' },
  { path: 'enterprise-ai-chatbot-development', component: 'Ai_chatbot' },
  
  // E-Commerce
  { path: 'shopify-development-services', component: 'Shopify' },
  { path: 'woocommerce-development-services', component: 'Woo' },
  { path: 'opencart-development-services', component: 'Opencart' },
  { path: 'magento-development-services', component: 'Magento' },
  { path: 'prestashop-development-services', component: 'Pestrashop' },
  { path: 'odoo-development-services', component: 'Odoo' }
];

// Base directory for the app folder
const appDir = path.join(__dirname, 'src', 'app');

// Template for page.js files
const createPageTemplate = (componentName) => `import ${componentName} from '../../pages/${componentName}';

export default function ${componentName}Page() {
  return (
    <main>
      <${componentName} />
    </main>
  );
}`;

// Create directories and page.js files
routes.forEach(({ path: routePath, component }) => {
  // Handle nested routes
  const routeDir = path.join(appDir, routePath);
  
  // Skip if directory already exists
  if (fs.existsSync(routeDir)) {
    console.log(`Directory already exists: ${routeDir}`);
    
    // Check if page.js already exists
    const pagePath = path.join(routeDir, 'page.js');
    if (fs.existsSync(pagePath)) {
      console.log(`Page file already exists: ${pagePath}`);
      return;
    }
  } else {
    // Create directory
    fs.mkdirSync(routeDir, { recursive: true });
    console.log(`Created directory: ${routeDir}`);
  }
  
  // Create page.js file
  const pagePath = path.join(routeDir, 'page.js');
  fs.writeFileSync(pagePath, createPageTemplate(component));
  console.log(`Created page file: ${pagePath}`);
});

console.log('All Next.js page files have been created!');
