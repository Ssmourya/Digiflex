import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Boxes,
  MoveUpRight,
  Search,
  Cloudy ,
  X,
  Menu,
  Globe,
  Smartphone,
  ShoppingCart,
  Database,
  Cpu,
  Trello,
  Blocks,
  Cloud,
  Code,
  Server,
  LineChart,
  Rocket,
  ShoppingBag,
  Clock,
  Joystick,
  Monitor,
  PenTool,
  Glasses,
  UserCheck,
  Signature,
  Currency,
  Wallet,
  MessageSquareLock,
  ServerIcon,
  Code2Icon,
  CodeSquareIcon,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import logo from "../assets/digiflex.png";
import image from "../assets/mobileappdev.jpg"
import { FaAngular, FaBootstrap, FaReact, FaVuejs, FaApple, FaAndroid,  FaCode, FaMicrosoft, FaHtml5 } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeItems, setActiveItems] = useState({
    services: "Consulting",
    technology: "frontend",
    industries: "healthcare",
    insights: "blog",
  });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);
  const navRef = useRef(null);



  const navItems = [
    {
      label: "Services",
      href: "#",
      hasDropdown: true,
      dropdownType: "services",
    },
    {
      label: "Technology",
      href: "#",
      hasDropdown: true,
      dropdownType: "technology",
    },
    {
      label: "Industries",
      href: "#",
      hasDropdown: true,
      dropdownType: "industries",
    },
    { label: "Clients", href: "#" },
    {
      label: "Insights",
      href: "#",
      hasDropdown: true,
      dropdownType: "insights",
    },
    { label: "Approach", href: "#" },
    { label: "About us", href: "about-us" },
  ];
  const services = [
    {
      id: "Consulting",
      icon: Globe,
      title: "Consulting",
      color: "text-pink-500",
      description:
        "Modern web applications built with React, Next.js, and other cutting-edge technologies.",
      features: [
        {
          icon: Code,
          title: "Mobile & Web App Consulting",
          path: "/services/consulting/mobile-consulting",
        },
        {
          icon: Server,
          title: "Website Consulting",
          path: "/services/consulting/web-consulting",
        },
        {
          icon: Globe,
          title: "Salesforce Consulting",
          path: "/services/consulting/salesforce-consulting",
        },
        {
          icon: ShoppingBag,
          title: "DevOps Consulting",
          path: "/services/consulting/devops-consulting",
        },
        {
          icon: LineChart,
          title: "Testing Consulting",
          path: "/services/consulting/testing-consulting",
        },
        {
          icon: Clock,
          title: "AI Consulting",
          path: "/services/consulting/ai-consulting",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "UI/UX",
      icon: Smartphone,
      title: "UI/UX",
      color: "text-blue-500",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        {
          icon: Trello,
          title: "Brand Strategy",
          path: "/services/ui-ux/BrandStrategy",
        },
        {
          icon: Smartphone,
          title: "Design Consulting",
          path: "/services/ui-ux/designconsulting",
        },
        {
          icon: Blocks,
          title: "Product Design",
          path: "/services/ui-ux/productdesign",
        },
        {
          icon: Rocket,
          title: "UX Research",
          path: "/services/ui-ux/uxresearch",
        },
        {
          icon: Code,
          title: "UI & Animation",
          path: "/services/ui-ux/uianimation",
        },
        {
          icon: Cloud,
          title: "Design Testing",
          path: "/services/ui-ux/design-testing",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "Apps",
      icon: ShoppingCart,
      title: "Custom Apps",
      color: "text-green-500",
      description:
        "Full-featured e-commerce solutions with secure payment processing.",
      features: [
        {
          icon: ShoppingCart,
          title: "Mobile App Development",
          path: "/services/custom-apps/MobileAppDevlopment",
        },
        {
          icon: Database,
          title: "Web Application Development",
          path: "/services/custom-apps/webApplicationDevlopment",
        },
        {
          icon: ShoppingBag,
          title: "Website Development",
          path: "/services/custom-apps/WebsiteDevlopment",
        },
        {
          icon: LineChart,
          title: "SaaS Development",
          path: "/services/custom-apps/SaasDevlopment",
        },
        {
          icon: Globe,
          title: "Blockchain Development",
          path: "/services/custom-apps/block-chain",
        },
        {
          icon: Server,
          title: "Integration and Migration",
          path: "/services/custom-apps/IntregrationandMigration",
        },
        {
          icon: Server,
          title: "CEM Development",
          path: "/services/custom-apps/cem-devlopment",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "QA",
      icon: Cpu,
      title: "Testing & QA",
      color: "text-yellow-500",
      description:
        "Cutting-edge solutions using AI, ML, and blockchain technologies.",
      features: [
        {
          icon: Cpu,
          title: "Software Test Management",
          path: "/services/testing/software-test-management",
        },
        {
          icon: Database,
          title: "Test Automation",
          path: "/services/testing/test-automation",
        },
        {
          icon: Code,
          title: "Performance Testing",
          path: "/services/testing/performance-testing",
        },
        {
          icon: Server,
          title: "Security Testing Services",
          path: "/services/testing/security-testing",
        },
        {
          icon: Globe,
          title: "Selenium Automation Testing",
          path: "/services/testing/selenium-automation-testing",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    { id: 'CS', 
      icon: Cloudy, 
      title: 'Cloud',
      color: 'text-[#00C8D5]',
      description: 'Cloud services offer online computing resources like storage, servers, and software, enabling scalability and cost-efficiency. ',
      features: [
        { icon: Cloud, title: 'Google Cloud', path: '/services/cloud/google_components' },
        { icon: Cloud, title: 'Azure Cloud', path: '/services/cloud/azure'},
        { icon: Server, title: 'AWS', path: '/services/cloud/AWS'},      
        { icon: MoveUpRight, title: 'Cloud Migration', path: '/services/cloud/cloud_migration'},
        { icon: MoveUpRight, title: 'Intercloud Migration', path: '/services/cloud/intercloud_Migration'},
        { icon: Boxes, title: 'Cloud Native', path: '/services/cloud/CloudNative'},
        { icon: Database, title: 'Cloud Optimization', path: '/services/cloud/CloudOptimization'},    

        ],
      image: 'https://img.freepik.com/premium-vector/cloud-computing-technology-with-circuit-cloud-white-background-vector-illustration_493806-13570.jpg'
    },

    { id: 'AI', 
      icon: BrainCircuit, 
      title: 'AI DEVELOPMENT',
      color: 'text-[#00C8D5]',
      description: 'AI development involves machine learning, deep learning, NLP, and computer vision. Key steps: data collection, model training, testing, and deployment. Used in automation, healthcare, finance, and robotics.',
      features: [
        { icon: Cloud, title: 'Google Cloud', path: '/services/AI/Ai_development' },  

        ],
      image: 'https://img.freepik.com/premium-vector/cloud-computing-technology-with-circuit-cloud-white-background-vector-illustration_493806-13570.jpg'
    },

    {
      id: "BlockchainDev",
      icon: Cpu,
      title: "Blockchain Development",
      color: "text-yellow-500",
      description: "Cutting-edge solutions using blockchain technologies.",
      features: [
        {
          icon: Cpu,
          title: "Exhange Software",
          path: "/services/blockchain/exchangesoftware",
        },
        {
          icon: Database,
          title: "Initial Coin Offering",
          path: "/services/blockchain/initialcoinoffering",
        },
        {
          icon: Currency,
          title: "Cryptocurrency App",
          path: "/services/blockchain/cryptocurrency",
        },
        {
          icon: Wallet,
          title: "Cryptocurrency Wallet",
          path: "/services/blockchain/cryptocurrencywallet",
        },
        {
          icon: Signature,
          title: "Smart Contract",
          path: "/services/blockchain/smartcontractdevelopment",
        },
        {
          icon: MessageSquareLock,
          title: "Nft Marketplace",
          path: "/services/blockchain/nftmarketplacedevelopment",
        },
    
        {
          icon: ServerIcon,
          title: "Defi Development Services",
          path: "/services/blockchain/defidevelopmentservices",
        },
        {
          icon: ServerIcon,
          title: "Web3 Development",
          path: "/services/blockchain/web3development",
        },


      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },

    {
      id: "GameDev",
      icon: Joystick,
      title: "Game Development",
      color: "text-purple-500",
      description:
        "Immersive game development services for mobile, PC, and VR/AR experiences.",
      features: [
        {
          title: "Mobile Game Development",
          icon: Smartphone,
          path: "/services/game-development/mobile-game-development",
        },
        {
          title: "Unity3D Game Development",
          icon: Joystick,
          path: "/services/game-development/unity3d-game-development",
        },
        {
          title: "Unreal Game Development",
          icon: Joystick,
          path: "/services/game-development/unreal-game-development",
        },
        {
          title: "PC Game Development",
          icon: Monitor,
          path: "/services/game-development/pc-game-development",
        },
        {
          title: "Game Art Services",
          icon: PenTool,
          path: "/services/game-development/game-art-services",
        },
        {
          title: "VR/XR Simulation",
          icon: Glasses,
          path: "/services/game-development/vr-xr-simulation",
        },
        {
          title: "Resource Augmentation",
          icon: UserCheck,
          path: "/services/game-development/resource-augmentation",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  // Technology dropdown content
  const technologies = [
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile App Development",
      color: "text-blue-500",
      description:
        "Build high-performance mobile applications for various platforms.",
      features: [
        {
          icon: FaApple,
          title: "IOS App",
          path: "/tech/mobile/ios",
        },
        {
          icon: FaAndroid,
          title: "Android App",
          path: "/tech/AndroidAppDevlopment",
        },
        {
          icon: FaReact,
          title: "React Native",
          path: "/tech/ReactNative",
        },
        { icon: FaFlutter, title: "Flutter", path: "/tech/FlutterDevlopment" },
        {
          icon: FaCode,
          title: "NativeScript",
          path: "/tech/NativeScript",
        },
        {
          icon: FaMicrosoft,
          title: "Xamarin",
          path: "/tech/XamarinAppDevlopment",
        },
        {
          icon: FaHtml5,
          title: "HTMl APP",
          path: "/tech/HtmlDevlopment",
        },
      ],
      image: image,
    },
    {
      id: "frontend",
      icon: Code,
      title: "Frontend Technologies",
      color: "text-purple-500",
      description:
        "Modern frontend frameworks and libraries for building responsive web applications.",
      features: [
        { icon: FaAngular, title: "Angular", path: "/tech/frontend/angular" },
        { icon: FaReact, title: "React.js", path: "/tech/frontend/react" },
        { icon: FaVuejs, title: "Vue.js", path: "/tech/frontend/vue" },
        {
          icon: FaBootstrap,
          title: "Bootstrap",
          path: "/tech/frontend/bootstrap",
        },
        {
          icon: Code2Icon,
          title: "Knockout.js",
          path: "/tech/frontend/knockout",
        },
        {
          icon: CodeSquareIcon,
          title: "Next.js",
          path: "/tech/frontend/nextjs",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "website-development",
      icon: Globe,
      title: "Website Development",
      color: "text-blue-500",
      description:
        "Full-stack website development using modern frameworks and languages.",
      features: [
        { icon: Globe, title: "MEAN Stack", path: "/tech/web/mean" },
        { icon: Globe, title: "Java/J2EE", path: "/tech/web/java" },
        { icon: Globe, title: "Python", path: "/tech/web/python" },
        { icon: Globe, title: ".NET", path: "/tech/web/dotnet" },
        {
          icon: Globe,
          title: "Ruby on Rails (ROR)",
          path: "/tech/web/ruby-on-rails",
        },
        { icon: Globe, title: "Golang", path: "/tech/web/golang" },
        { icon: Globe, title: "PHP: Laravel", path: "/tech/web/laravel" },
        {
          icon: Globe,
          title: "PHP: CodeIgniter",
          path: "/tech/web/codeigniter",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },

    {
      id: "devops",
      icon: Cloud,
      title: "DevOps & Cloud Services",
      color: "text-yellow-500",
      description:
        "Scalable cloud platforms and DevOps solutions for continuous integration and deployment.",
      features: [
        {
          icon: Cloud,
          title: "Amazon Web Services (AWS)",
          path: "/tech/devops/aws",
        },
        {
          icon: Cloud,
          title: "Google App Engine",
          path: "/tech/devops/google-app-engine",
        },
        { icon: Cloud, title: "Microsoft Azure", path: "/tech/devops/azure" },
        { icon: Cloud, title: "CI/CD Automation", path: "/tech/devops/cicd" },
        {
          icon: Cloud,
          title: "Serverless Computing",
          path: "/tech/devops/serverless",
        },
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2b3BzfGVufDB8fDB8fHww",
    },

    {
      id: "salesforce",
      icon: Cloud,
      title: "Salesforce Solutions",
      color: "text-blue-600",
      description:
        "Comprehensive Salesforce solutions for CRM, automation, and business intelligence.",
      features: [
        {
          icon: Cloud,
          title: "Sales Cloud",
          path: "/tech/salesforce/sales-cloud",
        },
        {
          icon: Cloud,
          title: "Marketing Cloud & Pardot",
          path: "/tech/salesforce/marketing-cloud",
        },
        {
          icon: Cloud,
          title: "Service Cloud",
          path: "/tech/salesforce/service-cloud",
        },
        {
          icon: Cloud,
          title: "Community/Experience Cloud",
          path: "/tech/salesforce/community-cloud",
        },
        { icon: Cloud, title: "Force.com", path: "/tech/salesforce/force-com" },
        {
          icon: Cloud,
          title: "Einstein Analytics & Discovery",
          path: "/tech/salesforce/einstein-analytics",
        },
        {
          icon: Cloud,
          title: "Commerce Cloud",
          path: "/tech/salesforce/commerce-cloud",
        },
        {
          icon: Cloud,
          title: "Revenue Cloud/CPQ",
          path: "/tech/salesforce/revenue-cloud",
        },
        {
          icon: Cloud,
          title: "Lightning Experience",
          path: "/tech/salesforce/lightning-experience",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1558623869-d6f8763a24f9?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Get dropdown content based on type
  const getDropdownContent = (type) => {
    switch (type) {
      case "services":
        return services;
      case "technology":
        return technologies;
      default:
        return [];
    }
  };

  const handleMouseEnter = (dropdownType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownType);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleFeatureClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    setActiveMobileSubMenu(null);
  };

  const handleItemSelect = (type, id) => {
    setActiveItems((prev) => ({
      ...prev,
      [type]: id,
    }));
  };

  const toggleMobileDropdown = (type) => {
    setActiveMobileDropdown(activeMobileDropdown === type ? null : type);
    setActiveMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (id) => {
    setActiveMobileSubMenu(activeMobileSubMenu === id ? null : id);
  };

  // Get active content data
  const getActiveContentData = (type) => {
    const content = getDropdownContent(type);
    return content.find((item) => item.id === activeItems[type]) || content[0];
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Dropdown component
  const DropdownContent = ({ type }) => {
    const content = getDropdownContent(type);
    const activeContentData = getActiveContentData(type);

    if (!content.length) return null;

    return (
      <div 
  className="absolute lg:w-[75vw] md:w-[90vw] top-8 mt-3 left-0 transform -translate-x-1/2 max-w-7xl bg-white shadow-xl rounded-lg overflow-hidden z-60" 
  onMouseEnter={() => handleMouseEnter(type)} 
  onMouseLeave={handleMouseLeave}
> 
  <div className="grid grid-cols-12 p-4 md:p-8"> 
    <div className="col-span-12 md:col-span-3 bg-gray-50 rounded-lg p-4"> 
      <h3 className="text-lg font-semibold mb-4 text-gray-900"> 
        {type.charAt(0).toUpperCase() + type.slice(1)} 
      </h3> 
      <div className="space-y-2"> 
        {content.map((item) => ( 
          <button 
            key={item.id} 
            className={`flex items-center w-full gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200 ${ 
              item.id === activeItems[type] ? "bg-white shadow-sm" : "" 
            }`} 
            onMouseEnter={() => handleItemSelect(type, item.id)} 
          > 
            <item.icon className={`h-5 w-5 ${item.color}`} /> 
            <span className="text-sm font-medium text-gray-700"> 
              {item.title} 
            </span> 
          </button> 
        ))} 
      </div> 
    </div>

  <div className="col-span-12 md:col-span-9 p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {activeContentData.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {activeContentData.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeContentData.features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors"
              onClick={handleFeatureClick}
            >
              <feature.icon className={`h-5 w-5 ${activeContentData.color}`} />
              <span>{feature.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:block rounded-lg overflow-hidden">
        <img
          src={activeContentData.image}
          alt={activeContentData.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-950 text-white" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-x-4">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline mr-auto">
            <img src={logo} alt="logo" className="h-6" />
          </Link>

          {!isSearchActive ? (
            <>
              {/* Desktop Navigation Items */}
              <div className="hidden lg:flex items-center space-x-5">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <div
                      className="flex items-center space-x-1 cursor-pointer"
                      onMouseEnter={
                        item.hasDropdown
                          ? () => handleMouseEnter(item.dropdownType)
                          : undefined
                      }
                      onMouseLeave={
                        item.hasDropdown ? handleMouseLeave : undefined
                      }
                    >
                      <Link
                        to={item.href}
                        className="text-white hover:text-gray-300 transition-colors text-xs"
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      )}
                    </div>

                    {item.hasDropdown &&
                      activeDropdown === item.dropdownType && (
                        <DropdownContent type={item.dropdownType} />
                      )}
                  </div>
                ))}
              </div>

              {/* Right side items - visible on desktop and tablet */}
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={() => setIsSearchActive(true)}
                  className="text-white hover:text-gray-300"
                >
                  <Search className="h-5 w-5" />
                </button>
                <Link
                  to="/contact-us"
                  className="border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors text-sm"
                >
                  CONTACT US
                </Link>
              </div>

              {/* Mobile and tablet burger menu */}
              <div className="lg:hidden flex items-center space-x-4">
                <button
                  onClick={() => setIsSearchActive(true)}
                  className="text-white hover:text-gray-300 md:hidden"
                >
                  <Search className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-gray-300"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center ml-4 md:ml-8">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Business Intelligence"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 ml-4"
                autoFocus
              />
              <button className="bg-[#6B7CFF] px-4 md:px-6 py-2 text-sm mr-2 md:mr-4 hover:bg-[#5A6AE6] transition-colors">
                SEARCH
              </button>
              <button
                onClick={() => setIsSearchActive(false)}
                className="text-white hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile and Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 bg-blue-950">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(item.dropdownType)}
                        className="flex items-center justify-between w-full py-2 px-4 text-white hover:bg-blue-900 transition-colors text-sm"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeMobileDropdown === item.dropdownType ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeMobileDropdown === item.dropdownType && (
                        <div className="pl-4 py-2 bg-blue-900">
                          {getDropdownContent(item.dropdownType).map((content) => (
                            <div key={content.id} className="mb-2">
                              <button
                                onClick={() => toggleMobileSubMenu(content.id)}
                                className="flex items-center justify-between w-full py-2 px-4 text-white hover:bg-blue-800 transition-colors text-sm"
                              >
                                <div className="flex items-center">
                                  <content.icon className={`h-4 w-4 ${content.color} mr-2`} />
                                  <span>{content.title}</span>
                                </div>
                                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                                  activeMobileSubMenu === content.id ? 'rotate-90' : ''
                                }`} />
                              </button>
                              
                              {activeMobileSubMenu === content.id && (
                                <div className="pl-4 py-2 bg-blue-800">
                                  {content.features.map((feature, index) => (
                                    <Link
                                      key={index}
                                      to={feature.path}
                                      className="flex items-center py-2 px-4 text-white hover:bg-blue-700 transition-colors text-sm"
                                      onClick={handleFeatureClick}
                                    >
                                      <feature.icon className={`h-4 w-4 mr-2 ${content.color}`} />
                                      <span>{feature.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 px-4 text-white hover:bg-blue-900 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="py-4 px-4">
                <Link
                  to="/contact-us"
                  className="block border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-600 hover:text-white transition-colors text-sm text-center"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
