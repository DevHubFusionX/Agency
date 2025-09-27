import { Code2, Smartphone, Palette, Shield, ArrowRight, CheckCircle2, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Enterprise Web Development",
      description: "Scalable web applications and SaaS platforms built with cutting-edge technologies. From MVP to enterprise-grade solutions that handle millions of users.",
      icon: Code2,
      gradient: "from-emerald-500 to-teal-500",
      features: ["React/Next.js", "Microservices", "Cloud Native", "API Integration"],
      metrics: "500+ Projects Delivered"
    },
    {
      title: "Mobile App Development",
      description: "Native iOS and Android applications that deliver exceptional performance. Cross-platform solutions that reduce development time by 60%.",
      icon: Smartphone,
      gradient: "from-teal-500 to-cyan-500",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Success"],
      metrics: "50M+ Downloads Generated"
    },
    {
      title: "Product Design & UX",
      description: "User-centered design that converts. We combine data-driven insights with creative excellence to deliver interfaces that users love.",
      icon: Palette,
      gradient: "from-orange-500 to-amber-500",
      features: ["User Research", "Design Systems", "Prototyping", "Conversion Optimization"],
      metrics: "40% Average Conversion Lift"
    },
    {
      title: "DevOps & Infrastructure",
      description: "Bulletproof infrastructure and deployment pipelines. We ensure 99.99% uptime with automated scaling, monitoring, and security.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
      features: ["AWS/Azure", "CI/CD Pipelines", "Monitoring", "Security Audits"],
      metrics: "99.99% Uptime Guaranteed"
    }
  ]

  return (
    <section id="services" className="relative theme-section overflow-hidden text-white" style={{backgroundColor: 'var(--section-bg)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
      </div>

      <div className="relative theme-container">
        {/* Header */}
        <div className="text-center theme-animate-fade-in" style={{marginBottom: 'var(--space-4xl)'}}>
          <div className="inline-flex items-center theme-gradient text-white px-6 py-3 mb-8 theme-shadow-xl" style={{borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-sans)'}}>
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">ENTERPRISE SOLUTIONS</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-sans)'}}>
            Technology That
            <span className="block theme-text-gradient">
              Drives Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We architect digital solutions that transform businesses. Our full-stack expertise 
            delivers measurable outcomes through innovative technology and strategic implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8" style={{marginBottom: 'var(--space-4xl)'}}>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="group relative theme-card p-8 hover:bg-slate-700/50 theme-animate-scale-in" style={{animationDelay: `${index * 150}ms`, borderRadius: 'var(--radius-3xl)', transitionDuration: 'var(--duration-slow)'}}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} style={{borderRadius: 'var(--radius-3xl)', transitionDuration: 'var(--duration-slow)'}}></div>
                
                <div className="relative">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} flex items-center justify-center theme-shadow group-hover:scale-110 transition-transform`} style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)'}}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors" style={{fontFamily: 'var(--font-sans)', transitionDuration: 'var(--duration-normal)'}}>
                          {service.title}
                        </h3>
                        <div className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.metrics}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" style={{transitionDuration: 'var(--duration-normal)'}} />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center theme-animate-fade-in" style={{animationDelay: '600ms'}}>
          <div className="theme-gradient p-12 text-white" style={{borderRadius: 'var(--radius-3xl)'}}>
            <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'var(--font-sans)'}}>
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can accelerate your growth 
              and deliver measurable results for your organization.
            </p>
            <a href="#contact" className="theme-button bg-white text-emerald-600 hover:bg-gray-100 theme-shadow-xl flex items-center space-x-2" style={{display: 'inline-flex'}}>
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services