import { ArrowRight, Calendar, MessageSquare } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20">
      <div className="theme-container">
        <div className="theme-gradient p-12 text-white text-center" style={{borderRadius: 'var(--radius-3xl)'}}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how we can transform your vision into a powerful digital solution 
            that drives real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2" style={{borderRadius: 'var(--radius-xl)'}}>
              <MessageSquare className="w-5 h-5" />
              <span>Get Started Today</span>
            </a>
            <a href="/contact" className="border-2 border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2" style={{borderRadius: 'var(--radius-xl)'}}>
              <Calendar className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
          </div>
          
          <div className="mt-8 text-sm opacity-75">
            <p>Free consultation • No commitment required • Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA