import { Award, ExternalLink, Github, Calendar, Users, TrendingUp, Building, Smartphone, Globe, Landmark, Heart, ShoppingCart, Factory, GraduationCap, Package } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Global Banking Platform",
      category: "Enterprise Development",
      client: "Fortune 100 Financial Institution",
      description: "Complete digital transformation of legacy banking systems serving 50M+ customers worldwide.",
      icon: Landmark,
      metrics: {
        users: "50M+",
        uptime: "99.99%",
        performance: "40% faster"
      },
      tech: ["React", "Node.js", "AWS", "Microservices"],
      year: "2023"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Mobile Solutions",
      client: "Leading Healthcare Provider",
      description: "HIPAA-compliant mobile platform connecting patients, doctors, and healthcare facilities.",
      icon: Heart,
      metrics: {
        users: "2M+",
        satisfaction: "98%",
        efficiency: "60% improvement"
      },
      tech: ["React Native", "Python", "Azure", "AI/ML"],
      year: "2023"
    },
    {
      id: 3,
      title: "E-Commerce Marketplace",
      category: "Digital Design",
      client: "Global Retail Corporation",
      description: "Multi-vendor marketplace platform handling millions of transactions daily.",
      icon: ShoppingCart,
      metrics: {
        revenue: "$2B+",
        vendors: "100K+",
        conversion: "35% increase"
      },
      tech: ["Vue.js", "Java", "GCP", "Kubernetes"],
      year: "2022"
    },
    {
      id: 4,
      title: "Smart Manufacturing IoT",
      category: "Enterprise Development",
      client: "Industrial Manufacturing Leader",
      description: "IoT-enabled manufacturing optimization platform with real-time analytics.",
      icon: Factory,
      metrics: {
        efficiency: "45% increase",
        downtime: "70% reduction",
        savings: "$50M annually"
      },
      tech: ["Angular", "C#", "Azure IoT", "Machine Learning"],
      year: "2022"
    },
    {
      id: 5,
      title: "Educational Learning Platform",
      category: "Mobile Solutions",
      client: "International Education Network",
      description: "AI-powered personalized learning platform for K-12 and higher education.",
      icon: GraduationCap,
      metrics: {
        students: "5M+",
        engagement: "85% increase",
        completion: "92% rate"
      },
      tech: ["React", "Python", "TensorFlow", "AWS"],
      year: "2023"
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      category: "Digital Design",
      client: "Global Logistics Company",
      description: "End-to-end supply chain visibility and optimization platform.",
      icon: Package,
      metrics: {
        shipments: "10M+ tracked",
        accuracy: "99.5%",
        cost_reduction: "25% savings"
      },
      tech: ["Next.js", "Go", "PostgreSQL", "Docker"],
      year: "2022"
    }
  ]

  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              Our <span className="theme-text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Showcasing enterprise solutions that drive digital transformation 
              and deliver measurable business impact across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="theme-card p-8 group hover:scale-105 transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 theme-gradient flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-2 text-emerald-400 text-sm">
                        <Building className="w-4 h-4" />
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Client: {project.client}</p>
                  <p className="text-gray-300">{project.description}</p>
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

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-xs rounded-full border border-emerald-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-300 text-sm rounded-lg transition-colors">
                    <Award className="w-4 h-4" />
                    <span>Awards</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
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
              View All Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio