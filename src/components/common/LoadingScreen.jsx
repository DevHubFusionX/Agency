import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timer
    
    timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`} style={{backgroundColor: 'var(--slate-950)'}}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 theme-gradient mx-auto flex items-center justify-center mb-6 animate-pulse" style={{borderRadius: 'var(--radius-3xl)', boxShadow: 'var(--shadow-2xl)'}}>
            <Zap className="w-12 h-12 text-white animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{fontFamily: 'var(--font-sans)'}}>
            DevCraft
          </h1>
          <p className="text-emerald-300 font-medium">Engineering Digital Excellence</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 overflow-hidden" style={{borderRadius: 'var(--radius-full)'}}>
            <div 
              className="h-full theme-gradient transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
              }}
            />
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="text-gray-300 text-sm">
          <div className="flex items-center justify-center space-x-1">
            <span>Initializing</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen