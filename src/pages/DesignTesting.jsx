import React from 'react';
import { MoveRight } from 'lucide-react';
import AutomationTesting from '../container/Services/UI-UX/DesignTestingsection/Automation';
import Engagementsection from '../container/Services/UI-UX/DesignTestingsection/Engagementmodel';
import Futuresection from '../container/Services/UI-UX/DesignTestingsection/Future';
import ComprehensiveSection from '../container/Services/UI-UX/DesignTestingsection/Comprehensive';
import Hero from '../container/Services/UI-UX/DesignTestingsection/Hero';

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
