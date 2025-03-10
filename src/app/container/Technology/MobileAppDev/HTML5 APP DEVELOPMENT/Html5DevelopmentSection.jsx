import React from "react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Paragraph from "../../../../Layout/Paragraph";
import Heading from "../../../../Layout/Heading";
const Html5DevelopmentSection = () => {
  return (
    <WrapperContainer>
    
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="md:w-1/2 text-center md:text-left">
        <Heading>
          Why Customers Choose Us for HTML5 Development
        </Heading>
        <Paragraph>
          Here are just some of the ways that we stand out as a company when it
          comes to our experience with HTML5 Web Development.
        </Paragraph>
        <ul className="text-black space-y-2">
          <li>✔ Agile HTML5 development methodology</li>
          <li>✔ Award-winning and creative HTML5 solutions</li>
          <li>✔ Collaborative, transparent, and communicative client-focused approach</li>
          <li>✔ Cross-platform HTML5-based mobile solutions</li>
          <li>✔ Deep expertise in related techs CSS3 and JavaScript</li>
          <li>✔ Experts in HTML5 frameworks: SproutCore, AngularJS, Ember.js & PhoneGap</li>
          <li>✔ In-house, front-end specialists including: BAs, UX/UI & Designers</li>
          <li>✔ Proven track record of successful HTML5 project delivery</li>
          <li>✔ Rigorous quality assurance (QA) testing before “Go-Live”</li>
          <li>✔ Shorter development times translating to lower costs for customers</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get In Touch
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
          alt="HTML5 Development"
          className="w-80 md:w-full"
        />
      </div>
    </section>
    </WrapperContainer>
  );
};

export default Html5DevelopmentSection;
