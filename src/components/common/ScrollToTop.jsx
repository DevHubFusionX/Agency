import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SCROLL_DELAY = 300

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, SCROLL_DELAY)
    
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop