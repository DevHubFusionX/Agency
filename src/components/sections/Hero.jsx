import { ArrowRight, Play, Star, CheckCircle, Sparkles, Users, Award, TrendingUp } from 'lucide-react'

const heroBenefits = [
  {
    icon: CheckCircle,
    title: 'ISO 27001 Certified',
    description: 'Enterprise-grade security architecture with infinite scalability'
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Development',
    description: 'Machine learning-driven development & deployment pipelines'
  },
  {
    icon: Award,
    title: '99.9% SLA Guarantee',
    description: 'White-glove support with guaranteed uptime and performance'
  }
]

const heroStats = [
  { number: '$2.5B+', label: 'Revenue Generated', color: 'text-blue-400' },
  { number: '50M+', label: 'End Users Served', color: 'text-blue-500' },
  { number: '99.99%', label: 'System Reliability', color: 'text-blue-600' },
  { number: '15+', label: 'Countries Deployed', color: 'text-blue-300' }
]

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden text-white" style={{backgroundColor: 'var(--section-bg)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl theme-animate-pulse-glow" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 blur-3xl theme-animate-pulse-glow" style={{borderRadius: 'var(--radius-full)', animationDelay: '1s'}}></div>
      </div>

      <div className="relative theme-container" style={{paddingTop: 'calc(var(--space-4xl) + var(--space-xl))', paddingBottom: 'var(--space-4xl)'}}>
        {/* Trust Badge */}
        <div className="text-center mb-12 theme-animate-fade-in">
          <div className="inline-flex items-center theme-glass px-6 py-3 mb-8 hover:bg-blue-500/10 transition-all" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)'}}>
            <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-100 text-sm font-medium">Partnering with Fortune 500 Companies Worldwide</span>
            <div className="flex ml-3 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Headline */}
          <div className="mb-12 theme-animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white" style={{fontFamily: 'var(--font-sans)'}}>
              Engineering
              <span className="block theme-text-gradient">
                Digital Innovation
              </span>
              At Enterprise Scale
            </h1>
            
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-gray-300">
              We architect sophisticated digital ecosystems that transform business operations. 
              Our enterprise-grade solutions deliver measurable ROI through cutting-edge technology, 
              strategic implementation, and continuous optimization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="/contact" className="group theme-button theme-button-primary theme-shadow-xl flex items-center justify-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
              </a>
              <a href="/portfolio" className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 font-semibold text-lg transition-all hover:bg-blue-500/10" style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)', borderColor: 'var(--primary-600)', color: 'var(--primary-400)'}}>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
                <span>View Portfolio</span>
              </a>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {heroBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={benefit.title} className="theme-animate-fade-in theme-card p-6 hover:bg-slate-700/50 transition-colors" style={{animationDelay: `${index * 200}ms`, transitionDuration: 'var(--duration-normal)', borderRadius: 'var(--radius-2xl)'}}>
                  <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-white" style={{fontFamily: 'var(--font-sans)'}}>{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center group theme-animate-fade-in theme-card p-6 hover:bg-slate-700/50 transition-all" style={{animationDelay: `${index * 150}ms`, transitionDuration: 'var(--duration-normal)', borderRadius: 'var(--radius-2xl)'}}>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`} style={{transitionDuration: 'var(--duration-normal)'}}>
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero