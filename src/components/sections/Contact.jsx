import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react'
import { useFormValidation } from '../../hooks/useFormValidation'
import { submitContactForm } from '../../services/contactService'
import { CONTACT_VALIDATION_RULES, CONTACT_INITIAL_VALUES } from '../../utils/constants'
import FormField from '../ui/FormField'
import LoadingSpinner from '../ui/LoadingSpinner'

const Contact = () => {
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
      
      // Handle specific error types
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

  const projectOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'enterprise', label: 'Enterprise Solution' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'saas', label: 'SaaS Product' },
    { value: 'other', label: 'Other' }
  ]

  const budgetOptions = [
    { value: '25k-50k', label: '$25k - $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: '100k-250k', label: '$100k - $250k' },
    { value: '250k+', label: '$250k+' }
  ]

  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3months', label: '1-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6months+', label: '6+ months' }
  ]

  return (
    <section id="contact" className="relative theme-section overflow-hidden text-white" style={{backgroundColor: 'var(--section-bg)'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-3xl" style={{borderRadius: 'var(--radius-full)'}}></div>
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
                        <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors" style={{transitionDuration: 'var(--duration-normal)'}}>
                          {info.title}
                        </h4>
                        <div className="text-white font-medium mb-1">{info.details}</div>
                        <div className="text-sm text-gray-400">{info.subtitle}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" style={{transitionDuration: 'var(--duration-normal)'}} />
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
                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0" />
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
              {submitStatus.message && (
                <div className={`p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

              <FormField
                label="Company Name"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Your Company"
              />

              <FormField
                label="Project Type"
                name="project"
                type="select"
                value={values.project}
                onChange={handleChange}
                error={errors.project}
                placeholder="Select Project Type"
                options={projectOptions}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  label="Budget Range"
                  name="budget"
                  type="select"
                  value={values.budget}
                  onChange={handleChange}
                  placeholder="Select Budget"
                  options={budgetOptions}
                />
                <FormField
                  label="Timeline"
                  name="timeline"
                  type="select"
                  value={values.timeline}
                  onChange={handleChange}
                  placeholder="Select Timeline"
                  options={timelineOptions}
                />
              </div>

              <FormField
                label="Project Details"
                name="message"
                type="textarea"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Tell us about your project goals, target audience, key features, and any specific requirements..."
                rows={5}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full theme-gradient text-white p-4 font-semibold text-lg hover:scale-105 transition-all theme-shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{borderRadius: 'var(--radius-xl)', transitionDuration: 'var(--duration-normal)'}}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
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