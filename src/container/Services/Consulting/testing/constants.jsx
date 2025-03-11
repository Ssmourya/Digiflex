import {
  Home,
  Heart,
  Globe2,
  Factory,
  Shield,
  Briefcase,
  Truck,
  Fuel,
  Wheat,
  GraduationCap,
  Car,
  Wrench,
  ShieldEllipsis,
  Cog,
  Globe,
  RefreshCw,
  Smartphone,
  LayoutTemplate,
  Monitor,
  Settings,
  Laptop,
  MousePointer,
  ClipboardList,
  Clock,
  AlertCircle,
  Target,
  PanelsTopLeft,
} from "lucide-react";

export const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const reasons = [
  {
    title: "Insufficient product quality",
    description:
      "The goal of every software testing department is to bring the quality of the software product to the highest standard, but sometimes it takes more than hiring QA experts to make it happen. This is where the insights from testing consultants can be particularly useful.",
  },
  {
    title: "Missed release deadlines",
    description:
      "In the modern, highly competitive software market, the timing of the release can matter as much as the quality of your solution. If your team consistently misses deadlines for any reason whatsoever, working with a QA consultant will get things back on track.",
  },
  {
    title: "High cost of testing",
    description:
      "Optimize your testing costs with expert guidance. Our consultants will analyze your current testing processes, identify inefficiencies, and implement cost-effective solutions without compromising quality. We'll help you streamline your testing operations and maximize your ROI.",
  },
  {
    title: "Lost opportunities for growth",
    description:
      "Don't let testing bottlenecks hold back your business growth. Our consultants will help you identify and capitalize on opportunities for scaling your testing operations. We'll implement best practices that allow your testing capabilities to grow alongside your business.",
  },
  {
    title: "Plans for certification",
    description:
      "Navigate the certification process efficiently with expert guidance. Our consultants will help you prepare for and achieve industry certifications by implementing the necessary processes, documentation, and quality standards required for successful certification.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Project Requirements",
    color: "bg-blue-600",
    icon: ClipboardList,
    items: [
      "Evaluate project needs and objectives.",
      "Examine the project report for insights.",
      "Understand the full scope of the project.",
      "Interview key stakeholders and testers to gather critical input.",
    ],
  },
  {
    step: "02",
    title: "Setting Timelines",
    color: "bg-blue-600",
    icon: Clock,
    items: [
      "Identify potential QA bottlenecks and challenges.",
      "Evaluate key risks, limitations, and dependencies.",
      "Define measurable KPIs for success.",
      "Allocate tasks and establish clear timelines for execution.",
    ],
  },
  {
    step: "03",
    title: "Resolve Issues",
    color: "bg-blue-600",
    icon: AlertCircle,
    items: [
      "Implement a robust QA approach tailored to the project.",
      "Track and mitigate risks associated with changes.",
      "Execute action plans and ensure seamless implementation.",
      "Facilitate knowledge transfer to empower the team.",
    ],
  },
  {
    step: "04",
    title: "Address Problems",
    color: "bg-blue-600",
    icon: Target,
    items: [
      "Supervise and guide the team work for quality assurance.",
      "Identify and analyze underlying problems.",
      "Conduct thorough result analysis to measure outcomes.",
      "Prepare comprehensive documentation for future reference.",
    ],
  },
];

export const tabs = [
  { id: "full-cycle", label: "Full-Cycle Services" },
  { id: "platform", label: "By Platform" },
  { id: "type", label: "By Type" },
];

export const servicesData = {
  "full-cycle": [
    {
      title: "Manual Testing",
      description:
        "Achieve maximum precision and attention to detail with Digiflex.ai manual testing services, ensuring flawless results and a seamless user experience for your software projects.",
      icon: ShieldEllipsis,
    },
    {
      title: "Testing Automation",
      description:
        "At Digiflex.ai, we automate thousands of tests to deliver all-encompassing coverage, ensuring your software is robust, reliable, and ready for any challenge.",
      icon: Cog,
    },
    {
      title: "Testing Outsourcing",
      description:
        "Outsource your testing needs to Digiflex.ai team of skilled experts, ensuring high-quality results and seamless integration with your development process.",
      icon: Globe,
    },
  ],
  platform: [
    {
      title: "API Testing",
      description:
        "At Digiflex.ai, we ensure the seamless functionality, security, and performance of your APIs. Our comprehensive testing process verifies data integrity, response accuracy, and system reliability.",
      icon: RefreshCw,
    },
    {
      title: "Mobile Testing",
      description:
        "At Digiflex.ai, we ensure your mobile app delivers a flawless user experience. Our expert testing covers functionality, performance, security, and compatibility across devices and platforms.",
      icon: Smartphone,
    },
    {
      title: "Web Testing",
      description:
        "Expand your reach and engage more customers with a high-quality web application. At Digiflex.ai, we ensure your web solutions are thoroughly tested for performance and functionality.",
      icon: PanelsTopLeft,
    },
  ],
  type: [
    {
      title: "Functional Testing",
      description:
        "At Digiflex.ai, we ensure your application performs exactly as intended. Our functional testing process verifies core features and ensures seamless operation.",
      icon: Settings,
    },
    {
      title: "Compatibility",
      description:
        "At Digiflex.ai, we ensure your software functions flawlessly across all devices, operating systems, and platforms with rigorous compatibility testing.",
      icon: Laptop,
    },
    {
      title: "Usability",
      description:
        "At Digiflex.ai, we ensure your software delivers an intuitive and engaging user experience. Our usability testing identifies friction points and enhances accessibility.",
      icon: MousePointer,
    },
  ],
};

export const descriptions = {
  "full-cycle":
    "Partnering with a dedicated external team for quality assurance eliminates the need to build an in-house QA department, saving you time and resources.",
  platform:
    "Software is everywhere, and its crucial for your testing team to be proficient across various platforms and environments.",
  type: "With dozens of testing types available, it takes a team of experts to identify and implement the most relevant ones for your project.",
};

export const industries = [
  { title: "Real Estate", icon: Home },
  { title: "Healthcare", icon: Heart },
  { title: "Telecommunications", icon: Globe2 },
  { title: "Manufacturing", icon: Factory },
  { title: "Insurance", icon: Shield },
  { title: "Business and Productivity", icon: Briefcase },
  { title: "Distribution", icon: Truck },
  { title: "Oil and Gas", icon: Fuel },
  { title: "Agriculture", icon: Wheat },
  { title: "E-Learning", icon: GraduationCap },
  { title: "Construction", icon: Wrench },
  { title: "Automotive", icon: Car },
];

export const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  tabContent: {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  },
};
