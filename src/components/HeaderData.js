import {
  BrainCircuit,
  Boxes,
  MoveUpRight,
  Cloudy,
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
  Shield,
  Palette,
  CreditCard,
  Layers,
  ChartBar,
} from "lucide-react";

import { FaAngular, FaBootstrap, FaReact, FaVuejs } from "react-icons/fa";
export const technologies = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    color: "text-blue-500",
    description:
      "Build high-performance mobile applications for various platforms.",
    features: [
      {
        icon: Smartphone,
        title: "IOS App",
        path: "/tech/mobile/ios",
      },
      {
        icon: Smartphone,
        title: "Android App",
        path: "/tech/AndroidAppDevlopment",
      },
      {
        icon: Smartphone,
        title: "React Native",
        path: "/tech/ReactNative",
      },
      {
        icon: Smartphone,
        title: "Flutter",
        path: "/tech/FlutterDevlopment",
      },
      {
        icon: Smartphone,
        title: "NativeScript",
        path: "/tech/NativeScript",
      },
      {
        icon: Smartphone,
        title: "Xamarin",
        path: "/tech/XamarinAppDevlopment",
      },
      {
        icon: Smartphone,
        title: "HTMl APP",
        path: "/tech/HtmlDevlopment",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "website-dev",
    icon: Globe,
    title: "Website",
    color: "text-blue-500",
    description:
      "Responsive and optimized websites tailored to your business needs.",
    features: [
      {
        icon: Code,
        title: "Frontend Development",
        path: "/services/website-dev/frontend",
      },
      {
        icon: Server,
        title: "Backend Development",
        path: "/services/website-dev/backend",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        path: "/services/website-dev/ecommerce",
      },
      {
        icon: Cloud,
        title: "Hosting & Maintenance",
        path: "/services/website-dev/hosting",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: "frontend",
    icon: Code,
    title: "Frontend Technologies",
    color: "text-purple-500",
    description:
      "Modern frontend frameworks and libraries for building responsive web applications.",
    features: [
      {
        icon: FaAngular,
        title: "Angular",
        path: "/tech/frontend/angular",
      },
      {
        icon: FaReact,
        title: "React.js",
        path: "/tech/frontend/react",
      },
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
      { icon: Globe, title: "MEAN Stack", path: "/mean-stack-development" },
      {
        icon: Globe,
        title: "Java/J2EE",
        path: "/java-j2ee-development-services",
      },
      { icon: Globe, title: "Python", path: "/tech/web/python" },
      { icon: Globe, title: ".NET", path: "/tech/web/dotnet" },
      {
        icon: Globe,
        title: "Ruby on Rails (ROR)",
        path: "/tech/web/ruby-on-rails",
      },
      { icon: Globe, title: "Golang", path: "/tech/web/golang" },
      {
        icon: Globe,
        title: "PHP: Laravel",
        path: "/tech/web/laravel",
      },
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
      {
        icon: Cloud,
        title: "Microsoft Azure",
        path: "/tech/devops/azure",
      },
      {
        icon: Cloud,
        title: "CI/CD Automation",
        path: "/tech/devops/cicd",
      },
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
      {
        icon: Cloud,
        title: "Force.com",
        path: "/tech/salesforce/force-com",
      },
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

export const mainNavItems = [
  {
    label: "Services",
    href: "#",
    hasDropdown: true,
    dropdownType: "services",
  },
  {
    label: "Products",
    href: "#",
    hasDropdown: true,
    dropdownType: "products",
  },
  // {
  //     label: "Industries",
  //     href: "#",
  //     hasDropdown: true,
  //     dropdownType: "industries",
  // },
  // {   label: "Clients",
  //     href: "#"
  // },
  // {
  //     label: "Insights",
  //     href: "#",
  //     hasDropdown: true,
  //     dropdownType: "insights",
  // },
  // {
  //     label: "Approach",
  //     href: "#"
  // },
  // {   label: "About us",
  //     href: "about-us"
  // },
];

export const services = [
    {
        id: "consulting",
        icon: Globe,
        title: "Consulting",
        color: "text-pink-500",
        description: "Modern web applications built with React, Next.js, and other cutting-edge technologies.",
        features: [
            { icon: Code, title: "Mobile & Web App Consulting", path: "/mobile-web-app-consulting-services" },
            { icon: Server, title: "Website Consulting", path: "/website-consulting-solutions" },
            { icon: Globe, title: "Salesforce Consulting", path: "/salesforce-consulting-company" },
            { icon: ShoppingBag, title: "DevOps Consulting", path: "/devops-consulting-services" },
            { icon: LineChart, title: "Testing Consulting", path: "/software-testing-consulting" },
            { icon: Clock, title: "AI Consulting", path: "/ai-consulting-experts" },
        ],
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "uiux",
        icon: Smartphone,
        title: "UI/UX",
        color: "text-blue-500",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: [
            { icon: Trello, title: "Brand Strategy", path: "/brand-strategy-consulting" },
            { icon: Smartphone, title: "Design Consulting", path: "/design-consulting-services" },
            { icon: Blocks, title: "Product Design", path: "/product-design-consulting" },
            { icon: Rocket, title: "UX Research", path: "/ux-research-services" },
            { icon: Code, title: "UI & Animation", path: "/ui-design-and-animation-services" },
            { icon: Cloud, title: "Design Testing", path: "/design-testing-services" },
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "custom-apps",
        icon: ShoppingCart,
        title: "Custom Apps",
        color: "text-green-500",
        description: "Full-featured e-commerce solutions with secure payment processing.",
        features: [
            { icon: ShoppingCart, title: "Mobile App Development", path: "/mobile-app-development" },
            { icon: Database, title: "Web Application Development", path: "/web-application-development" },
            { icon: ShoppingBag, title: "Website Development", path: "/website-development-services" },
            { icon: LineChart, title: "SaaS Development", path: "/saas-software-development" },
            { icon: Globe, title: "Blockchain Development", path: "/blockchain-development-services" },
            { icon: Server, title: "Integration and Migration", path: "/integration-and-migration-services" },
            { icon: Server, title: "CEM Development", path: "/customer-experience-management-development" },
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "testing",
        icon: Cpu,
        title: "Testing & QA",
        color: "text-yellow-500",
        description: "Cutting-edge solutions using AI, ML, and blockchain technologies.",
        features: [
            { icon: Cpu, title: "Software Test Management", path: "/software-test-management-services" },
            { icon: Database, title: "Test Automation", path: "/test-automation-services" },
            { icon: Code, title: "Performance Testing", path: "/performance-testing-services" },
            { icon: Server, title: "Security Testing Services", path: "/security-testing-services" },
            { icon: Globe, title: "Selenium Automation Testing", path: "/selenium-automation-testing-services" },
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "cloud",
        icon: Cloudy,
        title: "Cloud",
        color: "text-[#00C8D5]",
        description: "Cloud services offer online computing resources like storage, servers, and software, enabling scalability and cost-efficiency.",
        features: [
            { icon: Cloud, title: "Google Cloud", path: "/google-cloud-platform-services" },
            { icon: Cloud, title: "Azure Cloud", path: "/microsoft-azure-cloud-services" },
            { icon: Server, title: "AWS", path: "/aws-cloud-services" },
            { icon: MoveUpRight, title: "Cloud Migration", path: "/legacy-to-cloud-migration-services" },
            { icon: MoveUpRight, title: "Intercloud Migration", path: "/intercloud-migration-solutions" },
            { icon: Boxes, title: "Cloud Native", path: "/cloud-native-development-services" },
            { icon: Database, title: "Cloud Optimization", path: "/cloud-optimization-services" },
        ],
        image: "https://img.freepik.com/premium-vector/cloud-computing-technology-with-circuit-cloud-white-background-vector-illustration_493806-13570.jpg",
    },
    {
        id: "ai",
        icon: BrainCircuit,
        title: "AI",
        color: "text-[#00C8D5]",
        description: "AI development involves machine learning, deep learning, NLP, and computer vision.",
        features: [
            { icon: Cloud, title: "Google Cloud AI", path: "/ai-app-development" },
            { icon: Cloud, title: "AI Software Development", path: "/ai-software-development" },
            { icon: Cloud, title: "LLM Development", path: "/large-language-model-development" },
        ],
        image: "https://img.freepik.com/premium-vector/cloud-computing-technology-with-circuit-cloud-white-background-vector-illustration_493806-13570.jpg",
    },
    {
        id: "blockchain",
        icon: Cpu,
        title: "Blockchain",
        color: "text-yellow-500",
        description: "Cutting-edge solutions using blockchain technologies.",
        features: [
            { icon: Cpu, title: "Exchange Software", path: "/crypto-exchange-software-development" },
            { icon: Database, title: "Initial Coin Offering", path: "/initial-coin-offering-ico-development" },
            { icon: Currency, title: "Cryptocurrency App", path: "/cryptocurrency-app-development" },
            { icon: Wallet, title: "Cryptocurrency Wallet", path: "/cryptocurrency-wallet-development" },
            { icon: Signature, title: "Smart Contract", path: "/smart-contract-development-services" },
            { icon: MessageSquareLock, title: "NFT Marketplace", path: "/services/blockchain/nftmarketplacedevelopment" },
            { icon: ServerIcon, title: "DeFi Development Services", path: "/services/blockchain/defidevelopmentservices" },
            { icon: ServerIcon, title: "Web3 Development", path: "/web3-development-services" },
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
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
            path: "/mobile-game-development",
          },
          {
            title: "Unity3D Game Development",
            icon: Joystick,
            path: "/unity3d-game-development",
          },
          {
            title: "Unreal Game Development",
            icon: Joystick,
            path: "/unreal-game-development",
          },
          {
            title: "PC Game Development",
            icon: Monitor,
            path: "/pc-game-development-services",
          },
          {
            title: "Game Art Services",
            icon: PenTool,
            path: "/game-art-design-services",
          },
          {
            title: "VR/XR Simulation",
            icon: Glasses,
            path: "/vr-xr-simulation-development",
          },
          {
            title: "Resource Augmentation",
            icon: UserCheck,
            path: "/game-development-resource-augmentation",
          },
        ],
        image:
          "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
  
    {
        id: "devops",
        icon: Server,
        title: "DevOps",
        color: "text-gray-500",
        description: "Automation, CI/CD, and cloud infrastructure solutions for seamless deployment and monitoring.",
        features: [
            { icon: Cloud, title: "CI/CD Implementation", path: "/services/devops/ci-cd" },
            { icon: Server, title: "Infrastructure as Code", path: "/services/devops/infrastructure-as-code" },
            { icon: Shield, title: "Security & Compliance", path: "/services/devops/security-compliance" },
            { icon: Cloud, title: "Cloud Automation", path: "/services/devops/cloud-automation" },
            { icon: Database, title: "Monitoring & Logging", path: "/services/devops/monitoring-logging" }
        ],
        image: "https://images.unsplash.com/photo-1581092446327-3f94ee1dfd84?auto=format&fit=crop&w=600&q=80",
    },
   
    {
        id: "frontend-scripting",
        icon: Code,
        title: "Frontend",
        color: "text-orange-500",
        description: "Modern UI solutions using React, Vue, and advanced JavaScript frameworks.",
        features: [
            { icon: Code, title: "React Development", path: "/tech/frontend/reactjs-development-services" },
            { icon: Code, title: "Angular Development", path: "/tech/frontend/angular-development-services" },
            { icon: Code, title: "Vue.js Development", path: "/tech/frontend/vuejs-development-services" },
            { icon: Code, title: "Bootstrap Development", path: "/tech/frontend/bootstrap-development-services" },
            { icon: Code, title: "Knockout.js Development", path: "/tech/frontend/knockoutjs-development-services" },
            { icon: Code, title: "Next.js Development", path: "/tech/frontend/nextjs-development-services" }
        ],
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "e-commerce",
        icon: ShoppingCart,
        title: "Ecommerce",
        color: "text-green-500",
        description: "Scalable e-commerce platforms with secure payment and inventory management.",
        features: [
            { icon: ShoppingBag, title: "Custom E-commerce Development", path: "/services/e-commerce/custom-dev" },
            { icon: CreditCard, title: "Payment Gateway Integration", path: "/services/e-commerce/payment-integration" },
            { icon: ChartBar, title: "Analytics & SEO", path: "/services/e-commerce/analytics-seo" }
        ],
        image: "https://images.unsplash.com/photo-1530658011974-0f42ea1cfbcc?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "salesforce",
        icon: Database,
        title: "Salesforce",
        color: "text-indigo-500",
        description: "End-to-end Salesforce implementation and customization services.",
        features: [
            { icon: Database, title: "Application Architecture Design", path: "/application-architecture-design" },
            { icon: Database, title: "Consulting Assessment", path: "/salesforce-consulting-assessment" },
            { icon: Database, title: "CRM Implementation", path: "/services/salesforce/crm" },
            { icon: Server, title: "Salesforce Customization", path: "/services/salesforce/customization" },
            { icon: Cloud, title: "Cloud Integration", path: "/services/salesforce/cloud-integration" }
        ],
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "website-development",
        icon: Globe,
        title: "Website Development",
        color: "text-blue-500",
        description:
            "Full-stack website development using modern frameworks and languages.",
        features: [
            { icon: Globe, title: "MERN Stack", path: "/mern-stack-development" },
            { icon: Globe, title: "Java/J2EE", path: "/java-j2ee-development-services" },
            { icon: Globe, title: "Python", path: "/python-development-services" },
            { icon: Globe, title: ".NET", path: "/dotnet-development-services" },
            {
                icon: Globe,
                title: "Ruby on Rails (ROR)",
                path: "/ruby-on-rails-development",
            },
            { icon: Globe, title: "Golang", path: "/golang-development-services" },
            {
                icon: Globe,
                title: "PHP: Laravel",
                path: "/php-laravel-codeigniter-development",
            },
            {
                icon: Globe,
                title: "PHP: CodeIgniter",
                path: "/tech/web/codeigniter",
            },
        ],
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "mobile-app",
        icon: Smartphone,
        title: "Mobile App",
        color: "text-indigo-500",
        description: "Building high-performance mobile applications for iOS and Android using the latest technologies.",
        features: [
            { icon: Smartphone, title: "iOS App Development", path: "/ios-app-development-services" },
            { icon: Smartphone, title: "Android App Development", path: "/android-app-development-services" },
            { icon: Layers, title: "React Native Development", path: "/react-native-app-development-services" },
            { icon: Layers, title: "Flutter Development", path: "/flutter-app-development-services" },
            { icon: Layers, title: "NativeScript Development", path: "/nativescript-app-development-services" },
            { icon: Layers, title: "Xamarin Development", path: "/xamarin-app-development-services" },
            { icon: Layers, title: "HTML5 Development", path: "/html5-app-development-services" }
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    }
];

export const serviceCategories = [
  {
    id: "consulting",
    title: "Consulting",
    hasDropdown: true,
    dropdownType: "consulting",
  },
  { id: "uiux", title: "UI/UX", hasDropdown: true, dropdownType: "uiux" },
  {
    id: "custom-apps",
    title: "Custom Apps",
    hasDropdown: true,
    dropdownType: "custom-apps",
  },
  {
    id: "testing",
    title: "Testing",
    hasDropdown: true,
    dropdownType: "testing",
  },
  {
    id: "salesforce",
    title: "Salesforce",
    hasDropdown: true,
    dropdownType: "salesforce",
  },
  { id: "cloud", title: "Cloud", hasDropdown: true, dropdownType: "cloud" },
  {
    id: "game-dev",
    title: "Game Development",
    hasDropdown: true,
    dropdownType: "game-dev",
  },
  {
    id: "blockchain",
    title: "Blockchain",
    hasDropdown: true,
    dropdownType: "blockchain",
  },
  {
    id: "e-commerce",
    title: "Ecommerce",
    hasDropdown: true,
    dropdownType: "e-commerce",
  },
  { id: "ai", title: "AI Development", hasDropdown: true, dropdownType: "ai" },
  {
    id: "mobile-app",
    title: "Mobile App",
    hasDropdown: true,
    dropdownType: "mobile-app",
  },
  {
    id: "frontend-scripting",
    title: "Frontend",
    hasDropdown: true,
    dropdownType: "frontend-scripting",
  },
  {
    id: "website-dev",
    title: "Website",
    hasDropdown: true,
    dropdownType: "website-dev",
  },
  { id: "devops", title: "DevOps", hasDropdown: true, dropdownType: "devops" },
];

export const productCategories = [
  {
    id: "white-lebal",
    title: "White Lebal",
    hasDropdown: true,
    dropdownType: "white-lebal",
  },
  {
    id: "ready-made",
    title: " Ready Made",
    hasDropdown: true,
    dropdownType: "ready-made",
  },
];
