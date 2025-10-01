import { useState } from 'react'
import { Calculator, Check } from 'lucide-react'

const PricingCalculator = () => {
  const [selections, setSelections] = useState({
    projectType: '',
    complexity: '',
    timeline: '',
    features: []
  })

  const pricing = {
    projectType: {
      'web-app': { base: 25000, label: 'Web Application' },
      'mobile-app': { base: 35000, label: 'Mobile Application' },
      'enterprise': { base: 75000, label: 'Enterprise Solution' }
    },
    complexity: {
      'simple': { multiplier: 1, label: 'Simple' },
      'medium': { multiplier: 1.5, label: 'Medium' },
      'complex': { multiplier: 2.2, label: 'Complex' }
    },
    timeline: {
      'standard': { multiplier: 1, label: 'Standard (3-6 months)' },
      'fast': { multiplier: 1.3, label: 'Fast Track (1-3 months)' }
    },
    features: {
      'auth': { cost: 5000, label: 'User Authentication' },
      'payment': { cost: 8000, label: 'Payment Integration' },
      'admin': { cost: 12000, label: 'Admin Dashboard' },
      'api': { cost: 6000, label: 'API Integration' }
    }
  }

  const calculatePrice = () => {
    if (!selections.projectType || !selections.complexity || !selections.timeline) return 0
    
    const base = pricing.projectType[selections.projectType].base
    const complexity = pricing.complexity[selections.complexity].multiplier
    const timeline = pricing.timeline[selections.timeline].multiplier
    const features = selections.features.reduce((sum, feature) => sum + pricing.features[feature].cost, 0)
    
    return Math.round((base * complexity * timeline) + features)
  }

  const handleFeatureToggle = (feature) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const estimatedPrice = calculatePrice()

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Column - Form */}
      <div className="space-y-8">
        <div className="theme-card p-6" style={{borderRadius: 'var(--radius-2xl)'}}>
          <h3 className="text-lg font-semibold text-white mb-4">Project Type</h3>
          <div className="grid gap-3">
            {Object.entries(pricing.projectType).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelections(prev => ({ ...prev, projectType: key }))}
                className={`p-4 text-left border transition-all ${
                  selections.projectType === key
                    ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
                style={{borderRadius: 'var(--radius-lg)'}}
              >
                <div className="font-medium">{value.label}</div>
                <div className="text-sm opacity-75">Starting at ${value.base.toLocaleString()}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="theme-card p-6" style={{borderRadius: 'var(--radius-2xl)'}}>
          <h3 className="text-lg font-semibold text-white mb-4">Complexity</h3>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(pricing.complexity).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelections(prev => ({ ...prev, complexity: key }))}
                className={`p-3 text-center border transition-all ${
                  selections.complexity === key
                    ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
                style={{borderRadius: 'var(--radius-lg)'}}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>

        <div className="theme-card p-6" style={{borderRadius: 'var(--radius-2xl)'}}>
          <h3 className="text-lg font-semibold text-white mb-4">Timeline</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(pricing.timeline).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelections(prev => ({ ...prev, timeline: key }))}
                className={`p-3 text-center border transition-all ${
                  selections.timeline === key
                    ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
                style={{borderRadius: 'var(--radius-lg)'}}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>

        <div className="theme-card p-6" style={{borderRadius: 'var(--radius-2xl)'}}>
          <h3 className="text-lg font-semibold text-white mb-4">Additional Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(pricing.features).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleFeatureToggle(key)}
                className={`p-3 text-left border transition-all ${
                  selections.features.includes(key)
                    ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                    : 'border-gray-600 text-gray-300 hover:border-gray-500'
                }`}
                style={{borderRadius: 'var(--radius-lg)'}}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">{value.label}</span>
                  {selections.features.includes(key) && <Check className="w-4 h-4" />}
                </div>
                <div className="text-xs opacity-75 mt-1">+${value.cost.toLocaleString()}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Results */}
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <div className="theme-card p-8" style={{borderRadius: 'var(--radius-2xl)'}}>
          <div className="flex items-center space-x-3 mb-6">
            <Calculator className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Estimate</h3>
          </div>

          {estimatedPrice > 0 ? (
            <div className="text-center">
              <div className="text-4xl font-bold theme-text-gradient mb-4">
                ${estimatedPrice.toLocaleString()}
              </div>
              <div className="text-gray-300 mb-6">Estimated Project Cost</div>
              
              <div className="space-y-3 text-sm text-gray-400 mb-6">
                <div className="flex justify-between">
                  <span>Base Cost:</span>
                  <span>${pricing.projectType[selections.projectType]?.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Complexity:</span>
                  <span>{pricing.complexity[selections.complexity]?.multiplier}x</span>
                </div>
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span>{pricing.timeline[selections.timeline]?.multiplier}x</span>
                </div>
                {selections.features.length > 0 && (
                  <div className="flex justify-between">
                    <span>Features:</span>
                    <span>+${selections.features.reduce((sum, f) => sum + pricing.features[f].cost, 0).toLocaleString()}</span>
                  </div>
                )}
              </div>
              
              <div className="text-xs text-gray-500 mb-6">
                *Final pricing may vary based on specific requirements
              </div>
              
              <a href="#contact" className="theme-button theme-button-primary w-full">
                Get Detailed Quote
              </a>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">💡</div>
              <p>Select your project requirements to see an estimate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator