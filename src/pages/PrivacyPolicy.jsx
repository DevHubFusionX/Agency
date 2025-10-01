import SEOHead from '../components/seo/SEOHead'

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - DevCraft"
        description="Learn how DevCraft protects your privacy and handles your personal information."
      />
      <div className="min-h-screen bg-slate-900 text-white pt-32 pb-16">
        <div className="theme-container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                fill out a form, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• To provide and improve our services</li>
                <li>• To communicate with you about our services</li>
                <li>• To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@devcraft.com" className="text-blue-400 hover:text-blue-300">
                  privacy@devcraft.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy