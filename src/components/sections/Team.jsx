import { Users, Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Former VP of Engineering at Microsoft with 15+ years in digital transformation.",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez", 
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Ex-Principal Engineer at Amazon, expert in scalable architecture.",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", 
    bio: "Award-winning designer with Fortune 500 experience.",
    social: { linkedin: "#", twitter: "#" }
  }
]

const Team = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="theme-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg">Experts who bring your vision to life</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="theme-card p-8 text-center group hover:bg-slate-700/50 transition-all">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team