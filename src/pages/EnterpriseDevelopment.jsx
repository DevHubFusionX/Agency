import { Code, Server, Database, Shield, Cloud, Zap, CheckCircle, ArrowRight, Building, Users, TrendingUp } from 'lucide-react'

const EnterpriseDevelopment = () => {
  const services = [
    {
      icon: Server,
      title: "Microservices Architecture",
      description: "Scalable, distributed systems designed for enterprise-grade performance and reliability."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Big data solutions, ETL pipelines, and real-time analytics for data-driven decisions."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise security frameworks, GDPR compliance, and SOC 2 Type II certification."
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or GCP with zero-downtime deployment strategies."
    }
  ]

  const technologies = [
    "Java", "C#", ".NET", "Spring Boot", "Node.js", "Python", "Go", "Kubernetes", 
    "Docker", "AWS", "Azure", "GCP", "PostgreSQL", "MongoDB", "Redis", "Kafka"
  ]

  const benefits = [
    "99.99% uptime guarantee",
    "50% faster development cycles",
    "Enterprise-grade security",
    "24/7 monitoring & support",
    "Scalable to millions of users",
    "ISO 27001 compliance"
  ]

  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              <span className="theme-text-gradient">Enterprise</span> Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Build mission-critical applications that scale to millions of users. 
              Our enterprise development solutions power Fortune 500 companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center theme-animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg">
                Start Your Project
              </a>
              <a href="/portfolio" className="theme-button theme-button-secondary px-8 py-4 text-lg">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive enterprise development capabilities</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-400 text-lg">Enterprise-grade technologies for robust solutions</p>
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

      {/* Benefits */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Enterprise Development?</h2>
              <p className="text-gray-300 text-lg mb-8">
                We deliver enterprise solutions that meet the highest standards of performance, 
                security, and scalability required by Fortune 500 companies.
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
                <Building className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">500+</div>
                <div className="text-gray-400 text-sm">Enterprise Clients</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">50M+</div>
                <div className="text-gray-400 text-sm">Users Served</div>
              </div>
              <div className="theme-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">99.99%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">50%</div>
                <div className="text-gray-400 text-sm">Faster Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Enterprise?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our enterprise development solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg flex items-center space-x-2">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/blog" className="theme-button theme-button-secondary px-8 py-4 text-lg">
              Download Enterprise Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnterpriseDevelopment