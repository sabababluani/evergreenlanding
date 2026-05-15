import React from 'react'
import ExpertiseSection from './components/ExpertiseSection'
import FutureSection from './components/FutureSection'
import QualityPriceSection from './components/QualityPriceSection'
import ResponsibilitySection from './components/ResponsibilitySection'

function page() {
  return (
    <div>
      <ExpertiseSection/>
      <FutureSection/>
      <QualityPriceSection/>
      <ResponsibilitySection/>
    </div>
  )
}

export default page
