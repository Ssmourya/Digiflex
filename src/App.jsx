import { Route, Routes, useLocation, useMatch } from "react-router-dom";
import { useEffect } from "react";

import Home from './pages/Home'
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";

import CemDevlopment from "./pages/Cem-devlopment";
import IntregrationandMigration from "./pages/Intregration-and-Migration";
import BlockChainDevlopment from "./pages/BlockChainDevlopment";
import SaasDeclopment from "./pages/Saas-Devlopment";
import WebsiteDevlopment from "./pages/WebsiteDevlopment";
import MobileAppDevlopment from "./pages/Mobile-App-Devlopment";
import WebApplicationDevlopment from "./pages/WebApplicationDevlopment";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ReviewsSection} from "./components/Reviews";

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
import PCGameDevelopment from './pages/PCGameDevelopment';

// Game Development end here

import ExchangeShoftware from "./pages/ExchangeShoftware";
import InitialCoinOffering from "./pages/InitialCoinOffering";
import CryptocurrencyApp from "./pages/CryptocurrencyApp";
import CryptocurrencyWallet from "./pages/CryptocurrencyWallet";
import SmartContractDevelopment from "./pages/SmartContractDevelopment";
import DefiDevelopment from "./pages/DefiDevelopment";
import Web3 from "./pages/Web3";
import NftMarketplace from "./pages/NftMarketplace";

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
import XamarinAppDEvlopment from "./pages/XamarinAppDEvlopment";
import HtmlDevlopment from "./pages/HtmlAppDevlopment"
import CloudOptimization from './pages/CloudOptimization';
import WebsiteTechDevlopmet from './pages/WebsiteTechDevlopmet'

//Cloud

import Azure from "./pages/Azure";
import Cloud_Migration from "./pages/Cloud_Migration";
import Google from "./pages/Google";
import Intercloud_Migration from "./pages/Intercloud";
import AWS from "./pages/AWS";
import CloudNative from "./pages/CloudNative"

function App() {
  const location = useLocation();

  useEffect(() => {
    // This will run on every route change
    console.log("Route changed to:", location.pathname);

    // Example: Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

   const match = useMatch("/:path");

if (match?.params.path === "about-us" || match?.params.path === "contact-us") {
  console.log(match);
}

   
   
  

  return (
    <div className=" w-full">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route
          path="/services/testing/software-test-management"
          element={<SoftwareTestManagement />}
        />
        <Route
          path="/services/testing/test-automation"
          element={<TestAutomation />}
        />
        <Route
          path="/services/testing/performance-testing"
          element={<PerformanceTesting />}
        />
        <Route
          path="/services/testing/security-testing"
          element={<SecurityTesting />}
        />
        <Route
          path="/services/testing/selenium-automation-testing"
          element={<SeleniumAutomationTesting />}
        />

        <Route
          path="/services/custom-apps/IntregrationandMigration"
          element={<IntregrationandMigration />}
        />
        <Route
          path="/services/custom-apps/cem-devlopment"
          element={<CemDevlopment />}
        />
        <Route
          path="/services/custom-apps/SaasDevlopment"
          element={<SaasDeclopment />}
        />
        <Route
          path="/services/custom-apps/WebsiteDevlopment"
          element={<WebsiteDevlopment />}
        />
        <Route
          path="/services/custom-apps/block-chain"
          element={<BlockChainDevlopment />}
        />
        <Route
          path="/services/custom-apps/MobileAppDevlopment"
          element={<MobileAppDevlopment />}
        />
        <Route
          path="/services/custom-apps/webApplicationDevlopment"
          element={<WebApplicationDevlopment />}
        />

        <Route
          path="/services/consulting/mobile-consulting"
          element={<MobileConsulting />}
        />
        <Route
          path="/services/consulting/web-consulting"
          element={<WebConsulting />}
        />
        <Route
          path="/services/consulting/salesforce-consulting"
          element={<SalesforceConsulting />}
        />
        <Route
          path="/services/consulting/devops-consulting"
          element={<DevopsConsulting />}
        />
        <Route
          path="/services/consulting/testing-consulting"
          element={<TestingConsulting />}
        />
        <Route
          path="/services/consulting/ai-consulting"
          element={<AiConsulting />}
        />

        <Route
          path="/services/ui-ux/brandStrategy"
          element={<BrandStrategy />}
        />
        <Route
          path="/services/ui-ux/designconsulting"
          element={<DesignConsulting />}
        />
        <Route
          path="/services/ui-ux/productdesign"
          element={<ProductDesign />}
        />
        <Route path="/services/ui-ux/uxresearch" element={<UxResearch />} />
        <Route path="/services/ui-ux/uianimation" element={<UiAnimation />} />
        <Route
          path="/services/ui-ux/design-testing"
          element={<DesignTesting />}
        />
         {/* Blockchain development start*/}
        <Route
          path="/services/blockchain/exchangesoftware"
          element={<ExchangeShoftware />}
        />
        <Route
          path="/services/blockchain/initialcoinoffering"
          element={<InitialCoinOffering />}
        />
        <Route
          path="/services/blockchain/cryptocurrency"
          element={<CryptocurrencyApp />}
        />

        <Route
          path="/services/blockchain/smartcontractdevelopment"
          element={<SmartContractDevelopment />}
        />

        <Route
          path="/services/blockchain/cryptocurrencywallet"
          element={<CryptocurrencyWallet />}
        />

<Route path="/services/blockchain/nftmarketplacedevelopment" element={<NftMarketplace/>}/> 

<Route path="/services/blockchain/defidevelopmentservices" element={<DefiDevelopment/>}/>


<Route path="/services/blockchain/web3development" element={<Web3/>}/>

{/* Blockchain development end */}


        {/* Frontend Technology */}
        <Route path="/tech/frontend/angular" element={<AngularDevelopment />} />
        <Route path="/tech/frontend/react" element={<ReactDevelopment />} />
        <Route path="/tech/frontend/vue" element={<VueDevelopment />} />
        <Route
          path="/tech/frontend/bootstrap"
          element={<BootstrapDevelopment />}
        />
        <Route
          path="/tech/frontend/knockout"
          element={<KnowkoutjsDevelopment />}
        />
        <Route path="/tech/frontend/nextjs" element={<NextjsDevelopment />} />

        {/* Mobile Technology */}
        <Route path="/tech/mobile/ios" element={<IosDevelopmentTech />} />
        <Route
          path="/tech/AndroidAppDevlopment"
          element={<AndroidAppDevlopment />}
        />
        <Route path="/tech/ReactNative" element={<ReactNative />} />
        <Route
          path="/tech/FlutterDevlopment"
          element={<FlutterAppDevlopment />}
        />
        <Route path="/tech/NativeScript" element={<NativeScript />} />
        <Route
          path="/tech/XamarinAppDevlopment"
          element={<XamarinAppDEvlopment />}
        />
        <Route
        path="/tech/HtmlDevlopment"
        element={<HtmlDevlopment/>}
      />
      <Route
      path="/tech/web/mean"
      element={<WebsiteTechDevlopmet/>}
    />
        {/* Game development */}

        <Route
          path="/services/game-development/mobile-game-development"
          element={<MobileGameDevelopment />}
        />
        <Route
          path="/services/game-development/unity3d-game-development"
          element={<Unity3dGameDevelopment />}
        />
        <Route
          path="/services/game-development/unreal-game-development"
          element={<UnrealGameDevelopment />}
        />
        <Route
          path="/services/game-development/pc-game-development"
          element={<PCGameDevelopment />}
        />
        <Route
          path="/services/game-development/game-art-services"
          element={<GameArtServices />}
        />
        <Route
          path="/services/game-development/vr-xr-simulation"
          element={<VR_XRSimulation />}
        />
        <Route 
          path="/services/game-development/resource-augmentation"
          element={<ResourceAugmentation />}
        />
      

      {/* Cloud */}
      <Route path="/services/cloud/azure" element={<Azure/>} />
      <Route path="/services/cloud/cloud_migration" element={<Cloud_Migration/>}/>
      <Route path="/services/cloud/google_components" element={<Google/>} />
      <Route path="/services/cloud/intercloud_Migration" element={<Intercloud_Migration/>}/>
      <Route path="/services/cloud/AWS" element={<AWS/>}/>
      <Route path="/services/cloud/CloudNative" element={<CloudNative/>}/>
      <Route path="/services/cloud/CloudOptimization" element={<CloudOptimization/>}/>

      </Routes>

      {!match && <ReviewsSection />}
      {!match && <Contact />}
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;