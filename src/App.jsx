import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/common/LoadingScreen'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import EnterpriseDevelopment from './pages/EnterpriseDevelopment'
import MobileSolutions from './pages/MobileSolutions'
import DigitalDesign from './pages/DigitalDesign'
import WebDevelopment from './pages/WebDevelopment'
import './App.css'

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
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/enterprise-development" element={<EnterpriseDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-solutions" element={<MobileSolutions />} />
          <Route path="/digital-design" element={<DigitalDesign />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
