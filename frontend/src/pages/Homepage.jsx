import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/footer'
import Example from './About'
import Team from './components/Team'

import FeatureSection from './components/features'

export default function Homepage() {
  return (
    <div>
     
    <Hero/>
    <FeatureSection/>
   
    <Team/>
    </div>
  )
}
