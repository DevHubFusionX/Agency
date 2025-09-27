import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Home, Code, Smartphone, Palette, Users, Award, Phone, ArrowRight, Menu, X, Building, Globe, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="theme-glass px-8 py-3 theme-shadow-xl" style={{borderRadius: 'var(--radius-full)'}}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 theme-gradient flex items-center justify-center theme-shadow" style={{borderRadius: 'var(--radius-2xl)'}}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight" style={{fontFamily: 'var(--font-sans)'}}>
                DevCraft
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link to="/" className="group flex items-center space-x-2 px-4 py-3 text-white/70 hover:text-emerald-300 hover:bg-white/10 transition-all whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)', fontSize: '0.875rem', fontWeight: '500'}}>
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
                <span>Home</span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="group flex items-center space-x-2 px-4 py-3 text-white/70 hover:text-emerald-300 hover: transition-all whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)', fontSize: '0.875rem', fontWeight: '500'}}>
                  <Code className="w-4 h-4 group-hover:scale-110 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
                  <span>Services</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} style={{transitionDuration: 'var(--duration-normal)'}} />
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 theme-glass theme-shadow-xl transition-all duration-300 ease-out transform origin-top ${servicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`} style={{borderRadius: 'var(--radius-2xl)', zIndex: 'var(--z-dropdown)', paddingTop: '8px', marginTop: '-8px'}}>
                  <div className="p-2">
                    <Link to="/enterprise-development" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-emerald-300 hover:bg-white/10 hover:scale-105 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                      <Code className="w-4 h-4 transition-transform hover:rotate-12" style={{transitionDuration: 'var(--duration-normal)'}} />
                      <span>Enterprise Development</span>
                    </Link>
                    <Link to="/web-development" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-emerald-300 hover:bg-white/10 hover:scale-105 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                      <Globe className="w-4 h-4 transition-transform hover:rotate-12" style={{transitionDuration: 'var(--duration-normal)'}} />
                      <span>Web Development</span>
                    </Link>
                    <Link to="/mobile-solutions" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-emerald-300 hover:bg-white/10 hover:scale-105 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                      <Smartphone className="w-4 h-4 transition-transform hover:rotate-12" style={{transitionDuration: 'var(--duration-normal)'}} />
                      <span>Mobile Solutions</span>
                    </Link>
                    <Link to="/digital-design" className="flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-emerald-300 hover:bg-white/10 hover:scale-105 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                      <Palette className="w-4 h-4 transition-transform hover:rotate-12" style={{transitionDuration: 'var(--duration-normal)'}} />
                      <span>Digital Design</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/portfolio" className="group flex items-center space-x-2 px-4 py-3 text-white/70 hover:text-emerald-300 hover:bg-white/10 transition-all whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)', fontSize: '0.875rem', fontWeight: '500'}}>
                <Award className="w-4 h-4 group-hover:scale-110 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
                <span>Portfolio</span>
              </Link>
              <Link to="/about" className="group flex items-center space-x-2 px-4 py-3 text-white/70 hover:text-emerald-300 hover:bg-white/10 transition-all whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)', fontSize: '0.875rem', fontWeight: '500'}}>
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
                <span>About</span>
              </Link>
            </nav>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="#contact" className="flex items-center space-x-2 px-4 py-2 text-white/80 hover:text-emerald-300 border border-white/20 hover:border-emerald-400 transition-all whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)', fontSize: '0.875rem', fontWeight: '500'}}>
                <Phone className="w-4 h-4" />
                <span>Schedule Call</span>
              </a>
              <a href="#quote" className="group theme-button theme-button-primary flex items-center space-x-2 px-6 py-3 whitespace-nowrap" style={{borderRadius: 'var(--radius-full)', fontSize: '0.875rem'}}>
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{transitionDuration: 'var(--duration-normal)'}} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 transition-colors ml-8" style={{borderRadius: 'var(--radius-full)', transitionDuration: 'var(--duration-normal)'}}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-60 lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`fixed right-0 top-0 h-full w-80 theme-shadow-2xl transition-transform duration-500 ease-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{backgroundColor: 'var(--slate-900)', borderLeft: '1px solid var(--gray-700)'}}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 theme-gradient flex items-center justify-center" style={{borderRadius: 'var(--radius-xl)'}}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white" style={{fontFamily: 'var(--font-sans)'}}>DevCraft</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white/60 hover:text-white transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link to="/enterprise-development" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Code className="w-5 h-5" />
                <span>Enterprise Development</span>
              </Link>
              <Link to="/web-development" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Globe className="w-5 h-5" />
                <span>Web Development</span>
              </Link>
              <Link to="/mobile-solutions" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Smartphone className="w-5 h-5" />
                <span>Mobile Solutions</span>
              </Link>
              <Link to="/digital-design" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Palette className="w-5 h-5" />
                <span>Digital Design</span>
              </Link>
              <Link to="/portfolio" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Award className="w-5 h-5" />
                <span>Portfolio</span>
              </Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Users className="w-5 h-5" />
                <span>About</span>
              </Link>
              <a href="#team" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Users className="w-5 h-5" />
                <span>Leadership Team</span>
              </a>
              <a href="#company" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Building className="w-5 h-5" />
                <span>About Company</span>
              </a>
              <a href="#global" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-4 text-white/80 hover:text-emerald-300 hover:bg-white/10 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Globe className="w-5 h-5" />
                <span>Global Presence</span>
              </a>
            </nav>
            
            <div className="mt-8 space-y-3">
              <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2 w-full p-4 text-white border border-white/20 hover:border-emerald-400 transition-all" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                <Phone className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </a>
              <a href="#quote" onClick={() => setIsOpen(false)} className="theme-button theme-button-primary w-full p-4 font-semibold flex items-center justify-center space-x-2" style={{borderRadius: 'var(--radius-xl)'}}>
                <span>Start Enterprise Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Footer */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm text-center">
                Engineering Digital Excellence
              </p>
              <p className="text-gray-500 text-xs text-center mt-1">
                Trusted by Fortune 500 Companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header