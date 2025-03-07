import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";

import CEMDEVELOPMENT from "./pages/CemDevelopment";
import IntregrationandMigration from "./pages/IntregrationAndMigration";
import BlockChainDevlopment from "./pages/BlockChainDevlopment";
import SAASDEVELOPMENT from "./pages/SaasDevelopment";
import WebsiteDevlopment from "./pages/WebsiteDevlopment";
import MobileAppDevlopment from "./pages/MobileAppDevlopment";
import WebApplicationDevlopment from "./pages/WebApplicationDevlopment";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ReviewsSection } from "./components/Reviews";

import SoftwareTestManagement from "./pages/SoftwareTestManagement";
import TestAutomation from "./pages/TestAutomation";
import PerformanceTesting from "./pages/PerformanceTesting";
import SecurityTesting from "./pages/SecurityTesting";
import SeleniumAutomationTesting from "./pages/SeleniumAutomationTesting";

import WebConsulting from "./pages/WebConsulting";
import MobileConsulting from "./pages/MobileConsulting";
import SalesforceConsulting from "./pages/SalesforceConsulting";
import DevopsConsulting from "./pages/DevopsConsulting";
import TestingConsulting from "./pages/TestingConsulting";
import AiConsulting from "./pages/AiConsulting";

import BrandStrategy from "./pages/BrandStrategy";
import DesignConsulting from "./pages/DesignConsulting";
import ProductDesign from "./pages/ProductDesign";
import UxResearch from "./pages/UxResearch";
import UiAnimation from "./pages/UiAnimation";
import DesignTesting from "./pages/DesignTesting";

// Game Development start here
import MobileGameDevelopment from "./pages/MobileGameDevelopment";
import Unity3dGameDevelopment from "./pages/Unity3dGameDevelopment";
import VR_XRSimulation from "./pages/VR_XRSimulation";
import ResourceAugmentation from "./pages/ResourceAugmentation";
import UnrealGameDevelopment from "./pages/UnrealGameDevelopment";
import GameArtServices from "./pages/GameArtServices";
import PCGameDevelopment from "./pages/PCGameDevelopment";

// Game Development end here

// Blockchain start
import ExchangeShoftware from "./pages/ExchangeShoftware";
import InitialCoinOffering from "./pages/InitialCoinOffering";
import CryptocurrencyApp from "./pages/CryptocurrencyApp";
import CryptocurrencyWallet from "./pages/CryptocurrencyWallet";
import SmartContractDevelopment from "./pages/SmartContractDevelopment";
import DefiDevelopment from "./pages/DefiDevelopment";
import Web3 from "./pages/Web3";
import NftMarketplace from "./pages/NftMarketplace";
// Blockchain end

// salesforce start
import ApplicationArchitecture from "./pages/ApplicationArchitecture";
import ConsultingAssesment from "./pages/ConsultingAssesment";


// Frontend Technology

import AngularDevelopment from "./pages/AngularDevelopment";
import ReactDevelopment from "./pages/ReactDevelopment";
import VueDevelopment from "./pages/VueDevelopment";
import BootstrapDevelopment from "./pages/BootstrapDevelopment";
import KnowkoutjsDevelopment from "./pages/KnowkoutjsDevelopment";
import NextjsDevelopment from "./pages/NextjsDevelopment";

// Mobile App Devlopment

import IosDevelopmentTech from "./pages/IosDevelopmentTech";
import AndroidAppDevlopment from "./pages/AndroidAppDevlopment";
import ReactNative from "./pages/ReactNative";
import FlutterAppDevlopment from "./pages/FlutterAppDevlopment";
import NativeScript from "./pages/NativeScript";
import XamarinAppDEvlopment from "./pages/XamarinAppDevelopment";
import HtmlDevlopment from "./pages/HtmlAppDevlopment"
import CloudOptimization from './pages/CloudOptimization';

//websitedevelopment

import WebsiteTechDevlopmet from './pages/Mern'
import Java from "./pages/JavaDevelopemt"
import PythonDevelopment from "./pages/PythonDevelopment";

//Cloud

import Azure from "./pages/Azure";
import Cloud_Migration from "./pages/Cloud_Migration";
import Google from "./pages/Google";
import Intercloud_Migration from "./pages/Intercloud";
import AWS from "./pages/AWS";
import CloudNative from "./pages/CloudNative";


import Ai_development from "./pages/Ai_development"
import Ai_software from "./pages/Ai_software";
import Llm_development from "./pages/Llm_development"
import Ai_chatbot from "./pages/Ai_chatbot";


import Shopify from "./pages/Shopifydevlopment";
import Woo from './pages/WooDevelopment';
import Opencart from "./pages/OpencartDevelopment";
import Magento from './pages/MagentoDevelopment'
import Pestrashop from "./pages/PestrashopDevelopment";
import Odoo from './pages/OdooDevelopment';



function App() {
  const location = useLocation();

  useEffect(() => {
    // This will run on every route change
    console.log("Route changed to:", location.pathname);

    // Example: Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // This matches any single-segment path
  const match = useMatch("/:path");
  
  // Check if we're on about-us or contact-us pages
  const isAboutOrContactPage = 
    match?.params.path === "about-us" || 
    match?.params.path === "contact-us";

  return (
    <div className=" w-full ">
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route
          path="/software-test-management-services"
          element={<SoftwareTestManagement />}
        />
        <Route
          path="/test-automation-services"
          element={<TestAutomation />}
        />
        <Route
          path="/performance-testing-services"
          element={<PerformanceTesting />}
        />
        <Route
          path="/security-testing-services"
          element={<SecurityTesting />}
        />
        <Route
          path="/selenium-automation-testing-services"
          element={<SeleniumAutomationTesting />}
        />

        <Route
          path="/integration-and-migration-services"
          element={<IntregrationandMigration />}
        />
        <Route
          path="/customer-experience-management-development"
          element={<CEMDEVELOPMENT/>}
        />
        <Route
          path="saas-software-development"
          element={<SAASDEVELOPMENT/>}
        />
        <Route
          path="/website-development-services"
          element={<WebsiteDevlopment />}
        />
        <Route
          path="/blockchain-development-services"
          element={<BlockChainDevlopment />}
        />
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevlopment />}
        />
        <Route
          path="/web-application-development"
          element={<WebApplicationDevlopment />}
        />

        <Route
          path="/mobile-web-app-consulting-services"
          element={<MobileConsulting />}
        />
        <Route
          path="/website-consulting-solutions"
          element={<WebConsulting />}
        />
        <Route
          path="/salesforce-consulting-company"
          element={<SalesforceConsulting />}
        />
        <Route
          path="/devops-consulting-services"
          element={<DevopsConsulting />}
        />
        <Route
          path="/software-testing-consulting"
          element={<TestingConsulting />}
        />
        <Route
          path="/ai-consulting-experts"
          element={<AiConsulting />}
        />

        <Route
          path="/brand-strategy-consulting"
          element={<BrandStrategy />}
        />
        <Route
          path="/design-consulting-services"
          element={<DesignConsulting />}
        />
        <Route
          path="/product-design-consulting"
          element={<ProductDesign />}
        />
        <Route path="/ux-research-services" element={<UxResearch />} />
        <Route path="/ui-design-and-animation-services" element={<UiAnimation />} />
        <Route
          path="/design-testing-services"
          element={<DesignTesting />}
        />
        {/* Blockchain development start*/}
        <Route
          path="/crypto-exchange-software-development"
          element={<ExchangeShoftware />}
        />
        <Route
          path="/initial-coin-offering-ico-development"
          element={<InitialCoinOffering />}
        />
        <Route
          path="/cryptocurrency-app-development"
          element={<CryptocurrencyApp />}
        />

        <Route
          path="/smart-contract-development-services"
          element={<SmartContractDevelopment />}
        />

        <Route
          path="/cryptocurrency-wallet-development"
          element={<CryptocurrencyWallet />}
        />

        <Route
          path="/services/blockchain/nftmarketplacedevelopment"
          element={<NftMarketplace />}
        />

        <Route
          path="/services/blockchain/defidevelopmentservices"
          element={<DefiDevelopment />}
        />


<Route path="/web3-development-services" element={<Web3/>}/>

{/* Blockchain development end */}

{/* salesforce start */}
<Route path="/application-architecture-design" element={<ApplicationArchitecture/>} />
<Route path="/salesforce-consulting-assessment" element={<ConsultingAssesment/>} />


  {  /* Frontend Technology */}
  <Route
  path="/angular-development-services"
  element={<AngularDevelopment />}
  />
  <Route
  path="/reactjs-development-services"
  element={<ReactDevelopment />}
  />
  <Route
  path="/vuejs-development-services"
  element={<VueDevelopment />}
  />
  <Route
  path="/bootstrap-development-services"
  element={<BootstrapDevelopment />}
  />
  <Route 
  path="/knockoutjs-development-services"
  element={<KnowkoutjsDevelopment />}
  />
  <Route
  path="/nextjs-development-services"
  element={<NextjsDevelopment />}
  />

        {/* Mobile Technology */}
        <Route path="/ios-app-development-services" element={<IosDevelopmentTech />} />
        <Route
          path="/android-app-development-services"
          element={<AndroidAppDevlopment />}
        />
        <Route path="/react-native-app-development-services" element={<ReactNative />} />
        <Route
          path="/flutter-app-development-services"
          element={<FlutterAppDevlopment />}
        />
        <Route path="/nativescript-app-development-services" element={<NativeScript />} />
        <Route
          path="/xamarin-app-development-services"
          element={<XamarinAppDEvlopment />}
        />
        <Route
        path="/html5-app-development-services"
        element={<HtmlDevlopment/>}
      />
       {/* Website Development */}
      <Route
      path="/mern-stack-development"
      element={<WebsiteTechDevlopmet/>}
    />
      <Route
      path="/java-j2ee-development-services"
      element={<Java/>}
    />
      <Route
      path="/python-development-services"
      element={<PythonDevelopment/>}
    />
        {/* Game development */}

        <Route
          path="/mobile-game-development"
          element={<MobileGameDevelopment />}
        />
        <Route
          path="/unity3d-game-development"
          element={<Unity3dGameDevelopment />}
        />
        <Route
          path="/unreal-game-development"
          element={<UnrealGameDevelopment />}
        />
        <Route
          path="/pc-game-development-services"
          element={<PCGameDevelopment />}
        />
        <Route
          path="/game-art-design-services"
          element={<GameArtServices />}
        />
        <Route
          path="/vr-xr-simulation-development"
          element={<VR_XRSimulation />}
        />
        <Route 
          path="/game-development-resource-augmentation"
          element={<ResourceAugmentation />}
        />

      {/* Cloud */}
      <Route path="/microsoft-azure-cloud-services" element={<Azure/>} />
      <Route path="/legacy-to-cloud-migration-services" element={<Cloud_Migration/>}/>
      <Route path="/google-cloud-platform-services" element={<Google/>} />
      <Route path="/intercloud-migration-solutions" element={<Intercloud_Migration/>}/>
      <Route path="/aws-cloud-services" element={<AWS/>}/>
      <Route path="/cloud-native-development-services" element={<CloudNative/>}/>
      <Route path="/cloud-optimization-services" element={<CloudOptimization/>}/>

        {/*Ai app*/}

      <Route path="/ai-app-development" element={<Ai_development/>}/>
      <Route path="/ai-software-development" element={<Ai_software/>}/>
      <Route path="/large-language-model-development" element={<Llm_development/>}/>
      <Route path="/enterprise-ai-chatbot-development" element={<Ai_chatbot/>}/>        

       {/*E-Commerce*/}

      <Route path="/shopify-development-services" element={<Shopify/>} />
      <Route path="/woocommerce-development-services" element={<Woo/>}/>
      <Route path="/opencart-development-services" element={<Opencart/>}/>
      <Route path="/magento-development-services" element={<Magento/>}/>
      <Route path="/prestashop-development-services" element={<Pestrashop/>}/>
      <Route path="/odoo-development-services" element={<Odoo/>}/>

      </Routes>

      {!isAboutOrContactPage && (
        <>
          <ReviewsSection />
          <Contact />
        </>
      )}
      <Navigation/>
      <Footer />
    </div>
    
  );
}

export default App;
