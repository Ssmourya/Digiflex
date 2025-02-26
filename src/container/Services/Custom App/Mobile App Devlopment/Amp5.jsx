import React from "react";
import { ArrowRight } from "lucide-react";
import Subheading from "../../../../Layout/Subheading";
import Heading from "../../../../Layout/Heading";

const Amp5 = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create responsive, robust, and visually appealing websites that drive engagement and convert visitors. Leveraging modern technologies, we build scalable and secure online platforms tailored to your business needs.",
      image:
        "https://i.pinimg.com/736x/c4/c6/96/c4c696d43555c08f806375759e1b7528.jpg",
      imageAlt: "Illustration of a website layout on a screen",
    },
    {
      title: "Mobile App Development",
      description:
        "Our mobile solutions deliver high-performance applications for both iOS and Android. From concept to launch, we ensure seamless integration and an engaging user experience that keeps your customers connected on the go.",
      image:
        "https://i.pinimg.com/736x/02/52/e3/0252e3a3282f752ab9c0e97400eb7778.jpg",
      imageAlt: "Smartphone displaying a mobile app interface",
    },
    {
      title: "UI/UX Design",
      description:
        "Exceptional digital experiences begin with outstanding design. We craft intuitive interfaces and engaging visuals that not only captivate users but also enhance functionality across both web and mobile platforms.",
      image:
        "https://i.pinimg.com/736x/3c/84/b1/3c84b1fce43b376966b1603fd03ee9ac.jpg",
      imageAlt: "Design sketches and digital prototypes",
    },
    {
      title: "Backend Development",
      description:
        "Our backend solutions power your applications with secure, scalable, and high-performance architectures. We build APIs, databases, and server-side logic to ensure smooth data handling and seamless integration.",
      image:
        "https://i.pinimg.com/736x/42/30/19/42301916530a75fe575782261c97b403.jpg",
      imageAlt: "Backend architecture and data flow illustration",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage the power of the cloud for scalable, secure, and cost-effective application hosting. We specialize in cloud integration, deployment, and management across platforms like AWS, Azure, and Google Cloud.",
      image:
        "https://i.pinimg.com/736x/f9/93/13/f99313c49834e61a831469b3878073e5.jpg",
      imageAlt: "Cloud computing concept illustration",
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Ensure the reliability and performance of your applications with our comprehensive QA and testing services. From manual testing to automation, we detect and resolve issues before deployment.",
      image:
        "https://i.pinimg.com/736x/4a/5b/93/4a5b9318391a0f1ea85e2d6ff24d09e9.jpg",
      imageAlt: "Testing process and debugging illustration",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container px-4 mx-auto">
        {/* Main Heading */}
        
        <Heading> Web and Mobile App Development</Heading>
         
 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col items-center md:items-start space-y-4 shadow-lg transition-transform transform hover:scale-105 text-center md:text-left"
            >
              {/* Image Section */}
              <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.imageAlt}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text Content */}
              <Subheading>{service.title}</Subheading>
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Button */}
              <button className="bg-[#3730A3] text-white px-6 py-2 rounded-md flex items-center hover:bg-teal-700 transition-all duration-300 self-center md:self-start">
                Learn More <ArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amp5;
