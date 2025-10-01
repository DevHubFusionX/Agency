import { Award, ExternalLink, Github, Calendar, Users, TrendingUp, Building, Smartphone, Globe, Landmark, Heart, ShoppingCart, Factory, GraduationCap, Package } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    subtitle: "Enterprise Banking Platform",
    category: "FinTech",
    client: "Global Bank Corp",
    description: "Revolutionary digital banking solution serving 2M+ users across 15 countries. Built scalable microservices architecture handling $50B+ in transactions annually.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    metrics: {
      users: "2M+",
      transactions: "$50B+",
      growth: "300%"
    },
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Kubernetes"],
    duration: "18 months",
    results: [
      "Reduced transaction processing time by 85%",
      "Achieved 99.99% uptime with zero security breaches"
    ]
  },
  {
    id: 2,
    title: "MedConnect Pro",
    subtitle: "Telemedicine Ecosystem",
    category: "HealthTech",
    client: "MedTech Solutions",
    description: "HIPAA-compliant telehealth platform connecting 100K+ patients with healthcare providers. AI-powered diagnosis assistance and real-time video consultations.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    metrics: {
      patients: "100K+",
      availability: "24/7",
      rating: "4.9"
    },
    tech: ["Next.js", "WebRTC", "Python", "TensorFlow", "MongoDB"],
    duration: "14 months",
    results: [
      "Reduced patient wait times by 70%",
      "Processed 500K+ consultations with 98% success rate"
    ]
  },
  {
    id: 3,
    title: "RetailMax AI",
    subtitle: "E-commerce Intelligence Platform",
    category: "E-commerce",
    client: "Retail Giants Inc",
    description: "AI-driven e-commerce platform with predictive analytics, personalized recommendations, and automated inventory management for enterprise retailers.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    metrics: {
      revenue: "$2B+",
      conversion: "45%",
      customers: "5M+"
    },
    tech: ["React", "Python", "Redis", "Elasticsearch", "Docker"],
    duration: "12 months",
    results: [
      "Increased conversion rates by 45%",
      "Reduced cart abandonment by 60%"
    ]
  }
]

const Portfolio = () => {
  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              Our <span className="theme-text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Showcasing enterprise solutions that drive digital transformation
              and deliver measurable business impact across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20" style={{ backgroundColor: 'var(--slate-900)' }}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="theme-card overflow-hidden group hover:scale-105 transition-all">
                <div className="relative h-48 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 theme-gradient flex items-center justify-center" style={{ borderRadius: 'var(--radius-xl)' }}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-blue-300 text-sm font-medium">{project.subtitle}</p>
                      <div className="flex items-center space-x-2 text-blue-400 text-xs mt-1">
                        <Building className="w-3 h-3" />
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium">{project.client}</span>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/50 rounded-xl">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold theme-text-gradient">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-300 text-sm rounded-lg transition-colors">
                      <Award className="w-4 h-4" />
                      <span>Awards</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hidden md:block" style={{ backgroundColor: 'var(--slate-800)' }}>
        <div className="theme-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join Fortune 500 companies who trust DevCraft to deliver enterprise-grade solutions
            that drive digital transformation and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="theme-button theme-button-primary px-8 py-4 text-lg">
              Schedule Consultation
            </button>
            <button className="theme-button theme-button-secondary px-8 py-4 text-lg">
              View All Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio