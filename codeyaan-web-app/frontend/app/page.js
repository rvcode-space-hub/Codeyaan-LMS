import React from 'react'
import HeroSection from './_components/HeroSection'
import FeatureSection from './_components/FeatureSection'
export default function page() {
  return (
    <div className='bg-blue-100/50 '>
      <section className='bg-purple-400 rounded-2xl'>
      <HeroSection />
      </section>

      {/* Feature Section */}
    <section className='py-10 px-6'>
        <FeatureSection />
      </section>
    </div>
  )
}
