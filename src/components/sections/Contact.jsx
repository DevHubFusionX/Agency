import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@devcraft.com",
      subtitle: "We respond within 2 hours",
      action: "mailto:hello@devcraft.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      subtitle: "Schedule an appointment",
      action: "#"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      details: "Free Consultation",
      subtitle: "30-minute strategy session",
      action: "#"
    }
  ]

  return (
    <section id="contact" className="relative theme-section overflow-hidden text-white" style={{backgroundColor: 'var(--section-bg)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
      </div>

      <div className="relative theme-container">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center theme-gradient text-white px-6 py-3 mb-8 theme-shadow" style={{borderRadius: 'var(--radius-full)'}}>
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'var(--font-sans)'}}>
            Ready to Build
            <span className="block theme-text-gradient">
              Something Amazing?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your project and explore how we can transform your vision into a 
            market-leading digital solution that drives real business results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'var(--font-sans)'}}>
                Let's Start the Conversation
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you're a startup with a groundbreaking idea or an enterprise looking to 
                modernize your digital infrastructure, we're here to help you succeed.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a 
                    key={index} 
                    href={info.action}
                    className="group theme-card p-6 hover:bg-slate-700/50 transition-all" style={{borderRadius: 'var(--radius-2xl)', transitionDuration: 'var(--duration-normal)'}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 theme-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                          {info.title}
                        </h4>
                        <div className="text-white font-medium mb-1">{info.details}</div>
                        <div className="text-sm text-gray-400">{info.subtitle}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" style={{transitionDuration: 'var(--duration-normal)'}} />
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Why Choose Us */}
            <div className="theme-gradient p-8 text-white" style={{borderRadius: 'var(--radius-3xl)'}}>
              <h4 className="text-2xl font-bold mb-6" style={{fontFamily: 'var(--font-sans)'}}>Why Partner With DevCraft?</h4>
              <div className="space-y-4">
                {[
                  "Enterprise-grade security and scalability from day one",
                  "Dedicated project manager and 24/7 technical support",
                  "Agile development with weekly progress updates",
                  "Post-launch optimization and continuous improvement"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="theme-card p-8" style={{borderRadius: 'var(--radius-3xl)'}}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'var(--font-sans)'}}>
                Tell Us About Your Project
              </h3>
              <p className="text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" 
                    style={{borderRadius: 'var(--radius-xl)'}}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    style={{borderRadius: 'var(--radius-xl)'}}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  style={{borderRadius: 'var(--radius-xl)'}}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Type *
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  style={{borderRadius: 'var(--radius-xl)'}}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="enterprise">Enterprise Solution</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="saas">SaaS Product</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    style={{borderRadius: 'var(--radius-xl)'}}
                  >
                    <option value="">Select Budget</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    style={{borderRadius: 'var(--radius-xl)'}}
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-4 bg-slate-700 border border-gray-600 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  style={{borderRadius: 'var(--radius-xl)'}}
                  placeholder="Tell us about your project goals, target audience, key features, and any specific requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full theme-gradient text-white p-4 font-semibold text-lg hover:scale-105 transition-all theme-shadow-xl flex items-center justify-center space-x-2"
                style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              <p className="text-sm text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact