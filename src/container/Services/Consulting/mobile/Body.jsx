import React from "react";
import Benefits from "./Benefits";
import Services from "./Services";
import WhyChoose from "./WhyChoose";
import Industries from "./Industries";
import WrapperContainer from "@/Layout/WrapperContainer";
import Heading from "@/Layout/Heading";
import Paragraph from "@/Layout/Paragraph";
import FAQ from "./FAQ";

function Body() {
  return (
    <div className="min-h-screen">
      <WrapperContainer>
        <Heading>A game-changing strategy for your app idea</Heading>
        <Paragraph>
          In today's competitive digital landscape, millions of apps flood the
          app stores, but only a few rise to the top, becoming editors'
          favorites or securing billion-dollar deals. The difference lies in
          having the right strategy a well-crafted approach that ensures a
          mobile app not only meets user expectations but also stands out in the
          market.
        </Paragraph>
      </WrapperContainer>

      <Benefits />
      <Services />
      <WhyChoose />
      <Industries />
      <FAQ/>
    </div>
  );
}

export default Body;
