import React from 'react'

import Layout from '../layout/Layout'
import { HeroSection, AboutSection, ExperienceSection, ServicesSection, HireSection } from '../sections/index'

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      {/* <ExampleSection /> */}
      <HireSection />
    </Layout>
  )
}

export default index