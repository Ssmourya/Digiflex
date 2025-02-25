import {
  Cpu,
  Users,
  Code,
  BarChart,
  Rocket,
  Headphones
} from "lucide-react";

export const FEATURE_ITEMS = [
  {
    title: "Innovation-Driven Solutions",
    description: "We utilize the latest technology and AI-powered strategies to keep you ahead.",
    header: (
      <div className="h-48 w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60"
          alt="Innovation" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <Cpu className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Customer-Centric Approach",
    description: "Your success is our priority, and we customize our services to fit your needs.",
    header: (
      <div className="h-48 w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=60"
          alt="Customer Service" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <Users className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Industry Expertise",
    description: "Our skilled professionals bring years of experience, ensuring top-quality results.",
    header: (
      <div className="h-48 w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60"
          alt="Expertise" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <Code className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Seamless Integration",
    description: "Our solutions integrate effortlessly into your business workflow, maximizing efficiency and productivity across all operations.",
    header: (
      <div className="h-48 w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60"
          alt="Integration" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <BarChart className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Scalability & Growth",
    description: "Whether you're a startup or an enterprise, our services grow with you.",
    header: (
      <div className="h-48 w-full">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60"
          alt="Growth" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <Rocket className="h-5 w-5 text-blue-500" />
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring your business never stops.",
    header: (
      <div className="h-48 w-full">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60"
          alt="Support" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
    ),
    icon: <Headphones className="h-5 w-5 text-blue-500" />
  }
];