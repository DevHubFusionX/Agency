import { Globe, Server, Code2, Zap, Shield, Rocket, CheckCircle, ArrowRight, Users, TrendingUp, Award, Clock } from 'lucide-react'

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Scalable web applications built with modern frameworks and best practices."
    },
    {
      icon: Server,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and testing."
    },
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Responsive, interactive user interfaces with modern JavaScript frameworks."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience."
    }
  ]

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "TypeScript", "Node.js",
    "Express", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"
  ]

  const benefits = [
    "99.9% uptime guarantee",
    "Sub-second page load times",
    "SEO-optimized architecture",
    "Mobile-first responsive design",
    "Progressive Web App capabilities",
    "Enterprise-grade security"
  ]

  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              <span className="theme-text-gradient">Web</span> Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Build powerful, scalable web applications that drive business growth. 
              From custom websites to complex web platforms, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center theme-animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg">
                Start Web Project
              </a>
              <a href="/portfolio" className="theme-button theme-button-secondary px-8 py-4 text-lg">
                View Web Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Web Development Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive web solutions for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="theme-card p-6 text-center group hover:scale-105 transition-all">
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Modern Web Technologies</h2>
            <p className="text-gray-400 text-lg">Cutting-edge frameworks and tools for superior web development</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-emerald-600/20 text-emerald-300 rounded-full border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Metrics */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Web Excellence</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our web development solutions deliver exceptional performance, security, 
                and user experience that drives business success and user engagement.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="theme-card p-6 text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">10M+</div>
                <div className="text-gray-400 text-sm">Monthly Visitors</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">&lt; 1s</div>
                <div className="text-gray-400 text-sm">Load Time</div>
              </div>
              <div className="theme-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">300%</div>
                <div className="text-gray-400 text-sm">Performance Boost</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">100</div>
                <div className="text-gray-400 text-sm">Lighthouse Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Performance */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 theme-gradient mx-auto mb-8 flex items-center justify-center" style={{borderRadius: 'var(--radius-full)'}}>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Security & Performance First</h2>
            <p className="text-gray-300 text-lg mb-8">
              Every web application we build follows security best practices with SSL encryption, 
              OWASP compliance, and performance optimization for lightning-fast user experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">SSL</div>
                <div className="text-gray-400">Encrypted Connections</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">OWASP</div>
                <div className="text-gray-400">Security Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">CDN</div>
                <div className="text-gray-400">Global Distribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Web Presence?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with powerful web applications that engage users and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg flex items-center space-x-2">
              <span>Start Web Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/blog" className="theme-button theme-button-secondary px-8 py-4 text-lg">
              Download Web Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment