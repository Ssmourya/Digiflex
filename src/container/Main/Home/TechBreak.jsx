import React from 'react';
import Whyus from './WhyUs'
import Expertises from './Experties';
import Industries from './Industries'

const TechBreak = () => {
  return (
    <div>
      {/* First Section with Introduction */}
      <section>
        <div>
          <Whyus/>
        </div>
      </section>

      {/* Second Section */}
      <section className="sticky top-0">
        <div>
          <Expertises/>
        </div>
      </section>

      {/* Third Section */}
      <section className="sticky top-0">
        <div>
          <Industries/>
        </div>
      </section>
    </div>
  );
};

export default TechBreak;
