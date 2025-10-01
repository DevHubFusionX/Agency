import { Search, Lightbulb, Code, Rocket } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your business goals, target audience, and technical requirements to create a strategic roadmap.",
    duration: "1-2 weeks"
  },
  {
    icon: Lightbulb,
    title: "Design & Planning", 
    description: "Our team creates wireframes, prototypes, and technical architecture tailored to your needs.",
    duration: "2-3 weeks"
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your solution using agile methodology with regular updates and feedback sessions.",
    duration: "4-12 weeks"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support, monitoring, and optimization.",
    duration: "Ongoing"
  }
]

const Process = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="theme-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-400 text-lg">How we turn your vision into reality</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 theme-gradient mx-auto flex items-center justify-center mb-4" style={{borderRadius: 'var(--radius-2xl)'}}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white text-sm font-bold flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
              <span className="text-blue-400 text-sm font-medium">{step.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process