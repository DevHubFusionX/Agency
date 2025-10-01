// Contact form validation rules
export const CONTACT_VALIDATION_RULES = {
  name: { required: true, message: 'Name is required' },
  email: { required: true, email: true },
  project: { required: true, message: 'Please select a project type' },
  message: { required: true, minLength: 10, message: 'Please provide project details (minimum 10 characters)' }
}

// Form initial values
export const CONTACT_INITIAL_VALUES = {
  name: '',
  email: '',
  company: '',
  project: '',
  budget: '',
  timeline: '',
  message: ''
}

// Static data arrays moved from components
export const HERO_BENEFITS = [
  {
    icon: 'CheckCircle',
    title: 'ISO 27001 Certified',
    description: 'Enterprise-grade security architecture with infinite scalability'
  },
  {
    icon: 'TrendingUp',
    title: 'AI-Powered Development',
    description: 'Machine learning-driven development & deployment pipelines'
  },
  {
    icon: 'Award',
    title: '99.9% SLA Guarantee',
    description: 'White-glove support with guaranteed uptime and performance'
  }
]

export const HERO_STATS = [
  { number: '$2.5B+', label: 'Revenue Generated', color: 'text-blue-400' },
  { number: '50M+', label: 'End Users Served', color: 'text-blue-500' },
  { number: '99.99%', label: 'System Reliability', color: 'text-blue-600' },
  { number: '15+', label: 'Countries Deployed', color: 'text-blue-300' }
]