import { useEffect } from 'react'

const StructuredData = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

// Organization structured data
export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DevCraft",
  "description": "Digital Innovation Agency specializing in enterprise-grade web applications, mobile apps, and digital transformation solutions.",
  "url": "https://devcraft.com",
  "logo": "https://devcraft.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@devcraft.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/company/devcraft",
    "https://twitter.com/devcraft",
    "https://github.com/devcraft"
  ]
}

export default StructuredData