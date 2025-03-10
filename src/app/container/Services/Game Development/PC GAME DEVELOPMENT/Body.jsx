import React, { Suspense, lazy } from "react";
import { PC_develoopmentFAQData } from "../FAQData";

const PCgame_intro = lazy(() => import("./PCgame_intro"));
const PC_develoopment = lazy(() => import("./PC_develoopment"));
const GameDevelopmentProcess = lazy(() => import("./GameDevelopmentProcess"));
const GameDevTools = lazy(() => import("./GameDevTools"));
const Benefits = lazy(() => import("./Benefits"));
const Faq = lazy(() => import("../../../../components/Faq"));

const Body = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PCgame_intro />
      <PC_develoopment />
      <GameDevelopmentProcess />
      <GameDevTools />
      <Benefits />
      <Faq faqs={PC_develoopmentFAQData} />
    </Suspense>
  );
};

export default Body;
