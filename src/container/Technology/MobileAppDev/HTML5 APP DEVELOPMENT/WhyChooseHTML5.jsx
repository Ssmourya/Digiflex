import Image from "next/image";
import { Globe2, Rocket, Film, Search } from "lucide-react";
import Heading from "@/Layout/Heading";
import Subheading from "@/Layout/Subheading";

export default function WhyChooseHTML5() {
  const benefits = [
    {
      icon: <Globe2 className="h-8 w-8 text-primary" />,
      title: "Cross-Platform Compatibility",
      description: "Works on Web, Mobile, and Desktop",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Faster Development & Cost-Effective",
      description: "Streamlined process for efficient app creation",
    },
    {
      icon: <Film className="h-8 w-8 text-primary" />,
      title: "Rich Multimedia Support",
      description: "Audio, Video, and Animations",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO & Mobile-Friendliness",
      description: "Optimized for search engines and mobile devices",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="md:w-[350px]">
            <Image
              src="/assets/Ghtml.png"
              width={500}
              height={300}
              alt="Why Choose HTML5"
              className="rounded-lg shadow-lg w-full object-cover"
              priority={false}
            />
          </div>
          {/* Benefits Section */}
          <div className="md:w-1/2">
            <Heading className="text-center">
              Why Choose digiflex.ai for HTML5 App Development?
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <Subheading>{benefit.title}</Subheading>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
