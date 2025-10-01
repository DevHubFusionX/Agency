import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while enterprise applications can take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "What's included in your development process?",
    answer: "Our process includes discovery, design, development, testing, deployment, and 3 months of support. We also provide training and documentation for your team."
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "We work with companies of all sizes, from startups to Fortune 500 enterprises. Our solutions are tailored to your specific needs and budget."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Node.js, Python, AWS, and modern web technologies. Our team stays current with the latest frameworks and best practices."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including bug fixes, security updates, performance monitoring, and feature enhancements."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-slate-900">
      <div className="theme-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center theme-gradient text-white px-6 py-3 mb-8 theme-shadow" style={{borderRadius: 'var(--radius-full)'}}>
            <HelpCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with us</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="theme-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ