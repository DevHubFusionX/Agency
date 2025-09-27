import { Users, Award, Globe, Target, Zap, Building } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen theme-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="theme-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 theme-animate-fade-in">
              About <span className="theme-text-gradient">DevCraft</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 theme-animate-fade-in" style={{animationDelay: '0.2s'}}>
              Engineering digital excellence for Fortune 500 companies worldwide. 
              We transform complex business challenges into elegant, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-8">
                To empower enterprises with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital age.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 theme-gradient flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Vision 2030</h3>
                  <p className="text-gray-400">Leading digital transformation globally</p>
                </div>
              </div>
            </div>
            <div className="theme-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Innovation-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Excellence in Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Client-Centric Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Global Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-900)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-gray-400 text-lg">Delivering measurable results across industries</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-gradient mb-2">500+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-gradient mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-gradient mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-gradient mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20" style={{backgroundColor: 'var(--slate-800)'}}>
        <div className="theme-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">Visionary leaders driving innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="theme-card p-8 text-center">
              <div className="w-24 h-24 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-full)'}}>
                <Building className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sarah Chen</h3>
              <p className="text-emerald-400 mb-4">Chief Executive Officer</p>
              <p className="text-gray-400 text-sm">Former VP of Engineering at Microsoft, leading digital transformation initiatives.</p>
            </div>
            <div className="theme-card p-8 text-center">
              <div className="w-24 h-24 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-full)'}}>
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Marcus Rodriguez</h3>
              <p className="text-emerald-400 mb-4">Chief Technology Officer</p>
              <p className="text-gray-400 text-sm">20+ years in enterprise architecture, former Principal Engineer at Amazon.</p>
            </div>
            <div className="theme-card p-8 text-center">
              <div className="w-24 h-24 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-full)'}}>
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Priya Sharma</h3>
              <p className="text-emerald-400 mb-4">Chief Operations Officer</p>
              <p className="text-gray-400 text-sm">Global operations expert, former Director at Accenture with Fortune 500 experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About