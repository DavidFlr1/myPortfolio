import React from 'react'

import Layout from '../layout/Layout'
import { HeroSection, AboutSection, ExperienceSection, ServicesSection, ExampleSection, ContactSection } from '../sections/index'

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      services<br/>
      examples<br/>
      <ContactSection />
    </Layout>
  )
}

export default index