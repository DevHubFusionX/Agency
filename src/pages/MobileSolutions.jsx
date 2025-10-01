import { Smartphone, Tablet, Watch, Wifi, Battery, Shield, CheckCircle, ArrowRight, Download, Users, Star } from 'lucide-react'

const MobileSolutions = () => {
  const platforms = [
    {
      icon: Smartphone,
      title: "Native iOS & Android",
      description: "High-performance native apps with platform-specific optimizations and seamless user experiences."
    },
    {
      icon: Tablet,
      title: "Cross-Platform Development",
      description: "React Native and Flutter solutions for faster deployment across multiple platforms."
    },
    {
      icon: Watch,
      title: "Wearable Integration",
      description: "Apple Watch and WearOS applications with health monitoring and IoT connectivity."
    },
    {
      icon: Wifi,
      title: "Progressive Web Apps",
      description: "Modern PWAs with offline capabilities and native app-like experiences."
    }
  ]

  const features = [
    "Offline-first architecture",
    "Real-time synchronization",
    "Biometric authentication",
    "Push notifications",
    "In-app purchases",
    "Analytics integration"
  ]

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", 
    "Firebase", "AWS Amplify", "GraphQL", "Redux", "MobX", "SQLite"
  ]

  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              <span className="theme-text-gradient">Mobile</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Create powerful mobile experiences that engage millions of users. 
              From native apps to cross-platform solutions, we deliver mobile excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center theme-animate-fade-in" style={{animationDelay: '0.4s'}}>
              <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg">
                Start Mobile Project
              </a>
              <a href="/portfolio" className="theme-button theme-button-secondary px-8 py-4 text-lg">
                View Mobile Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mobile Platforms</h2>
            <p className="text-gray-400 text-lg">Comprehensive mobile development across all platforms</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <div key={platform.title} className="theme-card p-6 text-center group hover:scale-105 transition-all">
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{platform.title}</h3>
                <p className="text-gray-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Mobile Features</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our mobile solutions include cutting-edge features that enhance user engagement 
                and drive business growth through superior mobile experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="theme-card p-6 text-center">
                <Download className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">10M+</div>
                <div className="text-gray-400 text-sm">App Downloads</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Users className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">5M+</div>
                <div className="text-gray-400 text-sm">Active Users</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Star className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">4.8</div>
                <div className="text-gray-400 text-sm">App Store Rating</div>
              </div>
              <div className="theme-card p-6 text-center">
                <Battery className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold theme-text-gradient mb-2">30%</div>
                <div className="text-gray-400 text-sm">Better Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mobile Technologies</h2>
            <p className="text-gray-400 text-lg">Modern frameworks and tools for superior mobile development</p>
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

      {/* Security & Performance */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 theme-gradient mx-auto mb-8 flex items-center justify-center" style={{borderRadius: 'var(--radius-full)'}}>
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our mobile solutions implement bank-level security with end-to-end encryption, 
              secure authentication, and compliance with GDPR, HIPAA, and SOC 2 standards.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">256-bit</div>
                <div className="text-gray-400">AES Encryption</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">99.9%</div>
                <div className="text-gray-400">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold theme-text-gradient mb-2">&lt; 100ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Mobile?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your business with powerful mobile solutions that engage users and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="theme-button theme-button-primary px-8 py-4 text-lg flex items-center space-x-2">
              <span>Start Mobile Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/blog" className="theme-button theme-button-secondary px-8 py-4 text-lg">
              Download Mobile Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobileSolutions