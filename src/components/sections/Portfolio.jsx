import { ExternalLink, ArrowRight, TrendingUp, Users, DollarSign, Clock, Award, Star, Building, Zap } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: "FinanceFlow",
      subtitle: "Enterprise Banking Platform",
      description: "Revolutionary digital banking solution serving 2M+ users across 15 countries. Built scalable microservices architecture handling $50B+ in transactions annually.",
      category: "FinTech",
      client: "Global Bank Corp",
      duration: "18 months",
      team: "12 engineers",
      metrics: [
        { icon: Users, value: "2M+", label: "Active Users" },
        { icon: DollarSign, value: "$50B+", label: "Transactions" },
        { icon: TrendingUp, value: "300%", label: "Growth" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Kubernetes"],
      results: [
        "Reduced transaction processing time by 85%",
        "Achieved 99.99% uptime with zero security breaches",
        "Increased customer satisfaction from 3.2 to 4.8 stars"
      ]
    },
    {
      title: "MedConnect Pro",
      subtitle: "Telemedicine Ecosystem",
      description: "HIPAA-compliant telehealth platform connecting 100K+ patients with healthcare providers. AI-powered diagnosis assistance and real-time video consultations.",
      category: "HealthTech",
      client: "MedTech Solutions",
      duration: "14 months",
      team: "8 engineers",
      metrics: [
        { icon: Users, value: "100K+", label: "Patients" },
        { icon: Clock, value: "24/7", label: "Availability" },
        { icon: Star, value: "4.9", label: "Rating" }
      ],
      technologies: ["Next.js", "WebRTC", "Python", "TensorFlow", "MongoDB"],
      results: [
        "Reduced patient wait times by 70%",
        "Processed 500K+ consultations with 98% success rate",
        "Expanded healthcare access to rural areas"
      ]
    },
    {
      title: "RetailMax AI",
      subtitle: "E-commerce Intelligence Platform",
      description: "AI-driven e-commerce platform with predictive analytics, personalized recommendations, and automated inventory management for enterprise retailers.",
      category: "E-commerce",
      client: "Retail Giants Inc",
      duration: "12 months",
      team: "10 engineers",
      metrics: [
        { icon: DollarSign, value: "$2B+", label: "Revenue" },
        { icon: TrendingUp, value: "45%", label: "Conversion" },
        { icon: Users, value: "5M+", label: "Customers" }
      ],
      technologies: ["React", "Python", "Redis", "Elasticsearch", "Docker"],
      results: [
        "Increased conversion rates by 45%",
        "Reduced cart abandonment by 60%",
        "Generated $2B+ in additional revenue"
      ]
    }
  ]

  return (
    <section id="portfolio" className="relative theme-section overflow-hidden text-white" style={{backgroundColor: 'var(--section-bg)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 blur-3xl theme-animate-pulse-glow" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 blur-3xl theme-animate-pulse-glow" style={{borderRadius: 'var(--radius-full)', animationDelay: '1s'}}></div>
      </div>

      <div className="relative theme-container">
        {/* Header */}
        <div className="text-center theme-animate-fade-in" style={{marginBottom: 'var(--space-4xl)'}}>
          <div className="inline-flex items-center theme-glass px-6 py-3 mb-8" style={{borderRadius: 'var(--radius-full)'}}>
            <Award className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-100">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-sans)'}}>
            Transforming
            <span className="block theme-text-gradient">
              Industries Worldwide
            </span>
          </h2>
          
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            Discover how we've partnered with industry leaders to build revolutionary digital products 
            that drive measurable business growth and transform user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8" style={{marginBottom: 'var(--space-4xl)'}}>
          {projects.map((project, index) => (
            <div key={index} className="group theme-card p-8 hover:bg-slate-700/50 theme-animate-scale-in" style={{animationDelay: `${index * 200}ms`, borderRadius: 'var(--radius-3xl)', transitionDuration: 'var(--duration-slow)'}}>
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 text-sm font-medium" style={{borderRadius: 'var(--radius-full)'}}>
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors text-white" style={{fontFamily: 'var(--font-sans)', transitionDuration: 'var(--duration-normal)'}}>
                  {project.title}
                </h3>
                <div className="text-lg mb-3 text-gray-300">{project.subtitle}</div>
                <p className="leading-relaxed text-gray-300">{project.description}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-700/50 rounded-xl">
                {project.metrics.map((metric, metricIndex) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={metricIndex} className="text-center">
                      <IconComponent className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <div className="text-gray-400">Client</div>
                  <div className="font-medium text-white">{project.client}</div>
                </div>
                <div>
                  <div className="text-gray-400">Duration</div>
                  <div className="font-medium text-white">{project.duration}</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="text-sm mb-3 text-gray-400">Technologies</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700 text-gray-300 px-3 py-1 text-sm font-medium" style={{borderRadius: 'var(--radius-full)'}}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <div className="text-sm mb-3 text-gray-400">Key Results</div>
                <div className="space-y-2">
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 mt-2 flex-shrink-0" style={{borderRadius: 'var(--radius-full)'}}></div>
                      <span className="text-sm text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a href="#contact" className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold group/link transition-colors text-sm" style={{transitionDuration: 'var(--duration-normal)'}}>
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center theme-animate-fade-in" style={{animationDelay: '800ms'}}>
          <div className="theme-card p-12" style={{borderRadius: 'var(--radius-3xl)'}}>
            <Building className="w-12 h-12 mx-auto mb-6 text-emerald-400" />
            <h3 className="text-3xl font-bold mb-4 text-white" style={{fontFamily: 'var(--font-sans)'}}>
              Ready to Build Your Success Story?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's discuss how we can transform your vision into a market-leading digital product 
              that drives real business results.
            </p>
            <a href="#contact" className="theme-button theme-button-primary theme-shadow-xl flex items-center space-x-2" style={{display: 'inline-flex'}}>
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio