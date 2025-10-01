import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
import Team from '../components/sections/Team'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'

import SEOHead from '../components/seo/SEOHead'
import StructuredData, { organizationData } from '../components/seo/StructuredData'

const Home = () => {
  return (
    <>
      <SEOHead />
      <StructuredData data={organizationData} />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />

    </>
  )
}

export default Home