import { useEffect } from 'react'

const SEOHead = ({ 
  title = 'DevCraft - Digital Innovation Agency',
  description = 'Transform your business with enterprise-grade digital solutions. We architect sophisticated web applications, mobile apps, and digital ecosystems that drive measurable ROI.',
  keywords = 'digital agency, web development, mobile apps, enterprise software, digital transformation, React development, custom software',
  ogImage = '/og-image.jpg',
  url = 'https://devcraft.com'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }
    
    // Standard meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', 'website', true)
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
    
  }, [title, description, keywords, ogImage, url])

  return null
}

export default SEOHead