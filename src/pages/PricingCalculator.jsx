import SEOHead from '../components/seo/SEOHead'
import PricingCalculator from '../components/business/PricingCalculator'

const PricingCalculatorPage = () => {
  return (
    <>
      <SEOHead 
        title="Pricing - DevCraft"
        description="Get an instant quote for your digital project. Transparent pricing for web development, mobile apps, and enterprise solutions."
      />
      <div className="min-h-screen bg-slate-900 text-white pt-32 pb-16">
        <div className="theme-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Project
              <span className="block theme-text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get an instant estimate for your digital project with transparent, 
              no-surprise pricing based on your specific requirements.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <PricingCalculator />
          </div>

          <div className="text-center mt-16 p-8 theme-card" style={{borderRadius: 'var(--radius-2xl)'}}>
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Quote?</h3>
            <p className="text-gray-300 mb-6">
              For complex enterprise projects or unique requirements, 
              schedule a consultation for a detailed proposal.
            </p>
            <a href="#contact" className="theme-button theme-button-primary inline-flex items-center space-x-2">
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingCalculatorPage