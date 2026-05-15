import React from 'react'
import ProtectedWealthSection from './components/ProtectedWealthSection'
import SecureOpeningSection from './components/SecureOpeningSection'
import InsolvencyProtectionSection from './components/InsolvencyProtectionSection'
import RegulationSection from './components/RegulationSection'
import SupportSection from './components/SupportSection'

const page = () => {
    return (
        <div>
            <ProtectedWealthSection />
            <SecureOpeningSection/>
            <InsolvencyProtectionSection/>
            <RegulationSection/>
            <SupportSection/>
        </div>
    )
}

export default page
