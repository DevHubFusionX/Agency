import SEOHead from '../components/seo/SEOHead'

const TermsOfService = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service - DevCraft"
        description="Read DevCraft's terms of service and understand our service agreements."
      />
      <div className="min-h-screen bg-slate-900 text-white pt-32 pb-16">
        <div className="theme-container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using DevCraft's services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <p className="text-gray-300 mb-4">
                DevCraft provides digital development services including web applications, 
                mobile applications, and enterprise software solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms, contact us at{' '}
                <a href="mailto:legal@devcraft.com" className="text-blue-400 hover:text-blue-300">
                  legal@devcraft.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsOfService