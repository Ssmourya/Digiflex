import React from 'react';
import { MoveRight } from 'lucide-react';
import AutomationTesting from '../app/container/Services/UI-UX/DesignTestingsection/Automation';
import Engagementsection from '../app/container/Services/UI-UX/DesignTestingsection/Engagementmodel';
import Futuresection from '../app/container/Services/UI-UX/DesignTestingsection/Future';
import ComprehensiveSection from '../app/container/Services/UI-UX/DesignTestingsection/Comprehensive';
import Hero from '../app/container/Services/UI-UX/DesignTestingsection/Hero';

function DesignTesting() {
    return (
        <>
            {/* Section-wise Pages */}
            <section>
                <Hero/>
                <AutomationTesting/>
                <Engagementsection/>
                <Futuresection/>
                <ComprehensiveSection/>
            </section>
           </>
    );
}

export default DesignTesting;
