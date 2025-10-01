import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { trackPageView } from './utils/analytics'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/common/LoadingScreen'
import ScrollToTop from './components/common/ScrollToTop'
import PageTransition from './components/common/PageTransition'
import GoogleAnalytics from './components/analytics/GoogleAnalytics'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import EnterpriseDevelopment from './pages/EnterpriseDevelopment'
import MobileSolutions from './pages/MobileSolutions'
import DigitalDesign from './pages/DigitalDesign'
import WebDevelopment from './pages/WebDevelopment'

import PricingCalculatorPage from './pages/PricingCalculator'

import ContactPage from './pages/Contact'
import './App.css'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/enterprise-development" element={<PageTransition><EnterpriseDevelopment /></PageTransition>} />
        <Route path="/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
        <Route path="/mobile-solutions" element={<PageTransition><MobileSolutions /></PageTransition>} />
        <Route path="/digital-design" element={<PageTransition><DigitalDesign /></PageTransition>} />

        <Route path="/pricing" element={<PageTransition><PricingCalculatorPage /></PageTransition>} />

        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <Router>
      <GoogleAnalytics trackingId={import.meta.env.VITE_GA_TRACKING_ID} />
      <ScrollToTop />
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  )
}

export default App
