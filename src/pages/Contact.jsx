import { useState } from 'react'
import { Phone, Mail, MapPin, MessageSquare, Clock, Users, Award, ArrowRight, CheckCircle, Send } from 'lucide-react'
import SEOHead from '../components/seo/SEOHead'
import { useFormValidation } from '../hooks/useFormValidation'
import { submitContactForm } from '../services/contactService'
import { CONTACT_VALIDATION_RULES, CONTACT_INITIAL_VALUES } from '../utils/constants'
import FormField from '../components/ui/FormField'

const ContactPage = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  
  const {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateAll,
    reset
  } = useFormValidation(CONTACT_INITIAL_VALUES, CONTACT_VALIDATION_RULES)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      if (!validateAll()) {
        setSubmitStatus({ type: 'error', message: 'Please fix the errors above.' })
        return
      }

      setIsSubmitting(true)
      setSubmitStatus({ type: '', message: '' })

      const result = await submitContactForm(values)
      console.info('Contact form submitted successfully:', {
        timestamp: new Date().toISOString(),
        projectType: values.project
      })
      setSubmitStatus({ type: 'success', message: result.message })
      reset()
    } catch (error) {
      console.error('Contact form submission failed:', {
        error: error.message,
        timestamp: new Date().toISOString()
      })
      
      let errorMessage = 'Something went wrong. Please try again.'
      if (error.name === 'TypeError' || error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setSubmitStatus({ type: 'error', message: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead 
        title="Contact Us - DevCraft"
        description="Get in touch with DevCraft for your next digital project. We're here to help transform your vision into reality."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="theme-container text-center">
            <div className="inline-flex items-center theme-gradient text-white px-6 py-3 mb-8 theme-shadow" style={{borderRadius: 'var(--radius-full)'}}>
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="block theme-text-gradient">Amazing Together</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your vision into reality? We're here to help you create 
              digital solutions that drive real business results.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-slate-800">
          <div className="theme-container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 theme-card hover:bg-slate-700/50 transition-all" style={{borderRadius: 'var(--radius-2xl)'}}>
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Ready to discuss your project?</p>
                <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 font-semibold">+1 (555) 123-4567</a>
                <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="text-center p-8 theme-card hover:bg-slate-700/50 transition-all" style={{borderRadius: 'var(--radius-2xl)'}}>
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Send us your project details</p>
                <a href="mailto:hello@devcraft.com" className="text-blue-400 hover:text-blue-300 font-semibold">hello@devcraft.com</a>
                <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
              </div>

              <div className="text-center p-8 theme-card hover:bg-slate-700/50 transition-all" style={{borderRadius: 'var(--radius-2xl)'}}>
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Meet our team in person</p>
                <p className="text-blue-400 font-semibold">San Francisco, CA</p>
                <p className="text-sm text-gray-400 mt-2">Schedule an appointment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="theme-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <div className="theme-card p-8" style={{borderRadius: 'var(--radius-3xl)'}}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus.message && (
                    <div className={`p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="Full Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="John Doe"
                      required
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="Company"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      error={errors.company}
                      placeholder="Your Company"
                    />
                    <FormField
                      label="Project Type"
                      name="project"
                      type="select"
                      value={values.project}
                      onChange={handleChange}
                      error={errors.project}
                      options={[
                        { value: 'web-app', label: 'Web Application' },
                        { value: 'mobile-app', label: 'Mobile Application' },
                        { value: 'enterprise', label: 'Enterprise Solution' },
                        { value: 'ecommerce', label: 'E-commerce Platform' },
                        { value: 'saas', label: 'SaaS Product' },
                        { value: 'other', label: 'Other' }
                      ]}
                      required
                    />
                  </div>

                  <FormField
                    label="Project Description"
                    name="message"
                    type="textarea"
                    value={values.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell us about your project, goals, and requirements..."
                    rows={6}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full theme-button theme-button-primary flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-800">
          <div className="theme-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Partner With DevCraft?</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fast Response</h3>
                <p className="text-gray-300">We respond to all inquiries within 2 hours during business hours</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Work directly with senior developers and designers, not junior staff</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 theme-gradient mx-auto mb-6 flex items-center justify-center" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">500+ successful projects with measurable business impact</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage