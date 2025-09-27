import { Palette, Figma, Monitor, Smartphone, Eye, Layers, CheckCircle, ArrowRight, Users, Award, TrendingUp, Zap } from 'lucide-react'

const DigitalDesign = () => {
  const services = [
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers with intuitive interfaces."
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description: "Native mobile experiences optimized for iOS and Android platforms."
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency across all digital touchpoints."
    },
    {
      icon: Eye,
      title: "Brand Identity",
      description: "Comprehensive brand identity design that resonates with your target audience."
    }
  ]

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "After Effects",
    "Principle", "Framer", "InVision", "Zeplin", "Abstract", "Miro"
  ]

  const benefits = [
    "35% increase in user engagement",
    "50% reduction in bounce rate",
    "40% faster user task completion",
    "25% increase in conversion rates",
    "Accessibility compliance (WCAG 2.1)",
    "Mobile-first responsive design"
  ]

  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              <span className="theme-text-gradient">Digital</span> Design
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Create stunning digital experiences that captivate users and drive business growth. 
              Our design solutions combine aesthetics with functionality for maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center theme-animate-fade-in" style={{animationDelay: '0.4s'}}>
              <button className="theme-button theme-button-primary px-8 py-4 text-lg">
                Start Design Project
              </button>
              <button className="theme-button theme-button-secondary px-8 py-4 text-lg">
                View Design Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Design Services</h2>
            <p className="text-gray-400 text-lg">Comprehensive digital design solutions for modern businesses</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="theme-card p-6 text-center group hover:scale-105 transition-all">
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

      {/* Design Process */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Design Process</h2>
            <p className="text-gray-400 text-lg">Proven methodology for exceptional design outcomes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl" style={{borderRadius: 'var(--radius-full)'}}>
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Research</h3>
              <p className="text-gray-400">User research, competitor analysis, and market insights to inform design decisions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl" style={{borderRadius: 'var(--radius-full)'}}>
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ideate</h3>
              <p className="text-gray-400">Wireframing, prototyping, and concept development with stakeholder collaboration.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl" style={{borderRadius: 'var(--radius-full)'}}>
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-400">High-fidelity designs with interactive prototypes and design system creation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl" style={{borderRadius: 'var(--radius-full)'}}>
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Validate</h3>
              <p className="text-gray-400">User testing, feedback integration, and iterative improvements for optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Benefits */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Design Excellence</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our design solutions deliver measurable business impact through user-centered design 
                principles and cutting-edge design tools and methodologies.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="theme-card p-6 text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">2M+</div>
                <div className="text-gray-400 text-sm">Users Designed For</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">50+</div>
                <div className="text-gray-400 text-sm">Design Awards</div>
              </div>
              <div className="theme-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">35%</div>
                <div className="text-gray-400 text-sm">Engagement Increase</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">40%</div>
                <div className="text-gray-400 text-sm">Faster Completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Design Tools & Software</h2>
            <p className="text-gray-400 text-lg">Industry-leading tools for professional design workflows</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span key={tool} className="px-6 py-3 bg-emerald-600/20 text-emerald-300 rounded-full border border-emerald-600/30 hover:bg-emerald-600/30 transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's create exceptional digital experiences that engage users and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="theme-button theme-button-primary px-8 py-4 text-lg flex items-center space-x-2">
              <span>Start Design Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="theme-button theme-button-secondary px-8 py-4 text-lg">
              Download Design Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalDesign