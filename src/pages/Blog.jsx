import { useState } from 'react'
import SEOHead from '../components/seo/SEOHead'
import LazyImage from '../components/ui/LazyImage'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Enterprise Web Development',
      excerpt: 'Exploring emerging technologies and trends shaping enterprise web development in 2024.',
      category: 'development',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/blog/enterprise-web.jpg'
    },
    {
      id: 2,
      title: 'Mobile-First Design: Best Practices',
      excerpt: 'Essential strategies for creating mobile-first designs that convert and engage users.',
      category: 'design',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/blog/mobile-first.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world case studies of successful digital transformation projects and their impact.',
      category: 'business',
      author: 'Mike Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/blog/digital-transformation.jpg'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' }
  ]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <SEOHead
        title="Blog - DevCraft"
        description="Stay updated with the latest insights on web development, mobile apps, digital transformation, and technology trends."
      />
      <div className="min-h-screen bg-slate-900 text-white pt-32 pb-16">
        <div className="theme-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights &
              <span className="block theme-text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on technology, development best practices,
              and digital transformation strategies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-medium transition-all ${selectedCategory === category.id
                    ? 'theme-gradient text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="theme-card overflow-hidden hover:bg-slate-700/50 transition-all group" style={{ borderRadius: 'var(--radius-2xl)' }}>
                <div className="aspect-video overflow-hidden">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>

                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="theme-gradient p-12 text-white text-center mt-16" style={{ borderRadius: 'var(--radius-3xl)' }}>
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on technology and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                style={{ borderRadius: 'var(--radius-xl)' }}
              />
              <button className="bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap" style={{ borderRadius: 'var(--radius-xl)' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog