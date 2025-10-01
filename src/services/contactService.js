const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.message || 'Failed to submit form')
  }
  
  return data
}

// Fallback mock for development without backend
export const submitContactFormMock = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  if (!formData.email || !formData.name || !formData.message) {
    throw new Error('Required fields are missing')
  }
  
  return {
    success: true,
    message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    id: Date.now().toString()
  }
}