import { useState } from 'react'
import { Zap, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github, Globe, Award, Users, Clock, Shield, ChevronDown } from 'lucide-react'

const footerSections = [
  {
    title: "Enterprise Solutions",
    links: [
      { name: "Web Application Development", href: "#web-dev" },
      { name: "Mobile Application Engineering", href: "#mobile-dev" },
      { name: "Cloud Infrastructure & DevOps", href: "#devops" },
      { name: "Digital Transformation Consulting", href: "#consulting" }
    ]
  },
  {
    title: "Industry Expertise",
    links: [
      { name: "Financial Technology (FinTech)", href: "#fintech" },
      { name: "Healthcare & Telemedicine", href: "#healthcare" },
      { name: "E-commerce & Retail Technology", href: "#ecommerce" },
      { name: "Enterprise Software Solutions", href: "#enterprise" }
    ]
  },
  {
    title: "Professional Services",
    links: [
      { name: "Strategic Technology Consulting", href: "#strategy" },
      { name: "Digital Product Design & UX", href: "#design" },
      { name: "Quality Assurance & Testing", href: "#qa" },
      { name: "Ongoing Support & Maintenance", href: "#support" }
    ]
  },
  {
    title: "Company Information",
    links: [
      { name: "About Our Leadership Team", href: "#about" },
      { name: "Client Success Stories", href: "#case-studies" },
      { name: "Technology Partnership Program", href: "#partners" },
      { name: "Career Opportunities", href: "#careers" }
    ]
  }
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn Professional Network" },
  { icon: Twitter, href: "#", label: "Twitter Technology Updates" },
  { icon: Github, href: "#", label: "GitHub Open Source Projects" },
  { icon: Globe, href: "#", label: "Corporate Website" }
]

const certifications = [
  { icon: Award, text: "ISO 27001 Certified Security" },
  { icon: Shield, text: "SOC 2 Type II Compliant" },
  { icon: Users, text: "Certified Agile Practitioners" },
  { icon: Clock, text: "24/7 Enterprise Support" }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <footer className="relative text-white overflow-hidden" style={{backgroundColor: 'var(--slate-950)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="theme-container" style={{paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-2xl)'}}>
          {/* Footer Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 theme-gradient flex items-center justify-center shadow-xl" style={{borderRadius: 'var(--radius-2xl)'}}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white" style={{fontFamily: 'var(--font-sans)'}}>DevCraft</h2>
                <p className="text-blue-300 font-medium">Engineering Digital Excellence</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming enterprise visions into scalable digital solutions through innovative technology, 
              strategic implementation, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Certifications & Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800/50 hover:bg-slate-700/50 transition-colors" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                  <IconComponent className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-300">{cert.text}</span>
                </div>
              )
            })}
          </div>

          {/* Footer Links Grid */}
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {footerSections.map((section, index) => (
              <div key={index}>
                <button 
                  onClick={() => toggleSection(index)}
                  className="lg:pointer-events-none w-full flex items-center justify-between text-lg font-bold text-white mb-6 lg:mb-6" 
                  style={{fontFamily: 'var(--font-sans)'}}
                >
                  <span>{section.title}</span>
                  <ChevronDown className={`w-5 h-5 lg:hidden transition-transform ${openSections[index] ? 'rotate-180' : ''}`} />
                </button>
                <ul className={`space-y-4 lg:block ${openSections[index] ? 'block' : 'hidden'}`}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-blue-300 transition-colors text-sm leading-relaxed group flex items-start space-x-2"
                        style={{transitionDuration: 'var(--duration-normal)'}}
                      >
                        <ArrowRight className="w-3 h-3 mt-1 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" style={{transitionDuration: 'var(--duration-normal)'}} />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center space-x-4 p-6 bg-slate-800/30 hover:bg-slate-700/30 transition-colors" style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)'}}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center" style={{borderRadius: 'var(--radius-xl)'}}>
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Enterprise Inquiries</h4>
                <p className="text-gray-300 text-sm">enterprise@devcraft.com</p>
                <p className="text-gray-400 text-xs">Response within 2 business hours</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-slate-800/30 hover:bg-slate-700/30 transition-colors" style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)'}}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center" style={{borderRadius: 'var(--radius-xl)'}}>
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Strategic Consultation</h4>
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                <p className="text-gray-400 text-xs">Monday - Friday, 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-slate-800/30 hover:bg-slate-700/30 transition-colors" style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)'}}>
              <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center" style={{borderRadius: 'var(--radius-xl)'}}>
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Global Headquarters</h4>
                <p className="text-gray-300 text-sm">San Francisco, California</p>
                <p className="text-gray-400 text-xs">Serving clients worldwide</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'var(--font-sans)'}}>
                Technology Leadership Insights
              </h3>
              <p className="text-gray-300 mb-8">
                Subscribe to receive quarterly insights on emerging technologies, industry best practices, 
                and strategic digital transformation methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your professional email address"
                  className="flex-1 px-6 py-4 bg-slate-800 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{borderRadius: 'var(--radius-xl)'}}
                />
                <button className="theme-button theme-button-primary px-8 py-4 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700">
          <div className="theme-container py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} DevCraft Technologies, LLC. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Registered trademark. Patent pending technology solutions.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm font-medium">Connect with us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a 
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition-all group"
                        style={{borderRadius: 'var(--radius-lg)', transitionDuration: 'var(--duration-normal)'}}
                      >
                        <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" style={{transitionDuration: 'var(--duration-normal)'}} />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-blue-300 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-blue-300 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                  Terms of Service
                </a>
                <a href="#security" className="text-gray-400 hover:text-blue-300 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer