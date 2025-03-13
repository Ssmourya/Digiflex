import Heading from "@/Layout/Heading";
import WrapperContainer from "@/Layout/WrapperContainer";
import React from "react";
import Paragraph from "@/Layout/Paragraph";

function Migration_intro() {
  return (
    <>
      <WrapperContainer>
        <div>
          <Heading>
            AI-Powered Cloud Migration by Digiflex.ai
          </Heading>
          <Paragraph className="text-center">
              At <strong>Digiflex.ai</strong>, we specialize in seamless **AI-powered cloud migration**, ensuring smooth transitions from legacy systems to modern cloud environments. Our expertise spans **AWS, Microsoft Azure, and Google Cloud**, helping businesses achieve **scalability, security, and cost-efficiency**. By leveraging automation and AI-driven insights, we optimize IT infrastructure, minimize downtime, and enhance performance. Digiflex.ai ensures businesses can scale dynamically, reduce operational costs, and adopt cutting-edge cloud innovations for a competitive edge.
          </Paragraph>
        </div>
      </WrapperContainer>
    </>
  );
}

export default Migration_intro;