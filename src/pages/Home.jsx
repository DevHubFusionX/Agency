import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Portfolio from '../components/sections/Portfolio'
import Testimonials from '../components/sections/Testimonials'
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
      <Testimonials />
    </>
  )
}

export default Home