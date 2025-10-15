
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Brain, Code, Database, Globe, Mail, Linkedin, Github, ChevronDown, Download, FileText } from 'lucide-react'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [resumeOpen, setResumeOpen] = useState(false)

  const skills = [
    { name: 'Python', icon: Code, category: 'Programming' },
    { name: 'Machine Learning', icon: Brain, category: 'AI/ML' },
    { name: 'SQL', icon: Database, category: 'Database' },
    { name: 'Web Development', icon: Globe, category: 'Development' },
    { name: 'Data Analysis', icon: Brain, category: 'AI/ML' },
    { name: 'JavaScript', icon: Code, category: 'Programming' },
  ]
  const skillsRef = useRef(null)
  const certsRef = useRef(null)
  const resumeIframeRef = useRef(null)

    const scrollContainer = (ref, direction = 'right') => {
      const el = ref.current
      if (!el) return
      const scrollAmount = el.clientWidth * 0.7
      const left = direction === 'left' ? -scrollAmount : scrollAmount
      el.scrollBy({ left, behavior: 'smooth' })
    }
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Resume Generator',
      brief: 'Create professional resumes with AI-powered content generation, industry-specific optimization, and guaranteed ATS compatibility.',
      liveDemo: 'https://cerise-dizzy-90105487.figma.site/',
      github: 'https://github.com/your-username/sentiment-analysis',
      challenge: 'Crafting a compelling resume that stands out to recruiters and passes through Applicant Tracking Systems (ATS) is a significant hurdle for job seekers.',
      approach: 'My approach involved developing a web-based application that integrates AI-driven content generation and real-time ATS compatibility analysis.s',
      outcome: '',
      technologies: [''],
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'StudyMate',
      brief: 'Upload your study materials, chat with AI, generate quizzes and flashcards, and track your progress—all in one powerful platform.',
      liveDemo: 'https://v0-study-mate-edu-bot.vercel.app/',
      github: 'https://github.com/your-username/studymate',
      challenge: 'The goal was to enhance self-learning, improve retention, and help students grasp complex topics more effectively. This is achieved through summaries, quizzes, and interactive tools designed for accessibility, responsiveness, and intelligence.',
      approach: 'Built a time series forecasting model using Python and Prophet. Analyzed historical sales data to identify trends and seasonality patterns.',
      outcome: 'Developed a model that predicts sales with 92% accuracy. Created an interactive dashboard using Bokeh for stakeholders to visualize predictions.',
        technologies: ['React', 'Vite', 'Radix UI', 'shadcn/ui', 'Tailwind CSS', 'React Hook Form', 'CSS'],
  image: '/study-mate.png'
    },
    {
      id: 3,
      title: 'Technical Documentation Generator',
      brief: 'Generate professional technical documentation with AI-powered content generation, industry-specific optimization.',
      liveDemo: 'https://www.figma.com/make/b7MnWROUODyvNNJPepA8ru/Technical-Documentation-Generator?node-id=0-1&p=f&fullscreen=1',
      github: 'https://github.com/your-username/customer-segmentation',
      challenge: 'Marketing teams need to understand customer segments to create targeted campaigns.',
      approach: 'Applied K-Means clustering algorithm to segment customers based on purchase history and demographics. Used Python, Scikit-learn, and data visualization libraries.',
      outcome: 'Identified 5 distinct customer segments. Created comprehensive visualizations and recommendations for marketing strategies.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80'
    }
  ]

  const certifications = [
    { name: 'Artificial Intelligence (AI) Bootcamp', issuer: 'Coursera' },
    { name: 'CCNA: Introduction to Networks', issuer: 'Cisco' },
    { name: 'Introduction to Cybersecurity', issuer: 'Cisco' },
  ]

  const scrollToSection = (id) => {
    const sectionId = id.toLowerCase().replace(/\s+/g, '-')
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <div className="min-h-screen bg-black text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl flex items-center gap-2">
            
              BUHLE PALAZA
            </div>
            <div className="hidden md:flex gap-6">
              {['About', 'Projects', 'Skills', 'My Resume', 'Contact'].map((item) => (
                item === 'My Resume' ? (
                  <button
                    key={item}
                    onClick={() => setResumeOpen(true)}
                    className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

{/* About Me Snapshot */}
  <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="flex items-center gap-6">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-400 to-emerald-400 flex items-center justify-center shadow-2xl">
                  <div className="w-60 h-60 rounded-full bg-black flex items-center justify-center">
                    <img src="/Buhle%20Profile.png" alt="Buhle Palaza" className="w-40 h-40 rounded-full object-cover shadow-md" />
                  </div>
                </div>
                <div className="max-w-xs">
                  <h1 className="text-3xl font-extrabold text-white">HELLO, <br /> I am Buhle Palaza</h1>
                  <p className="text-sm text-neutral-300 mt-2">IT Support • Software Testing • AI/ML</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                I am an aspiring Software Tester with a foundation in IT Support and Software Development. After earning my Diploma in IT Support Services from Nelson Mandela University, I gained hands-on experience as a Systems Developer Intern at Loomee Group, where I built user-centered software solutions.
              </p>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                As a General Administrator Intern at Imizi Housing Utility NPC, I strengthened my organizational, communication, and teamwork skills — learning to approach projects with structure and attention to detail.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Currently, I’m part of the CAPACITI Advanced Digital Skills Programme, where I’m developing my testing skills and exploring AI through a 2-month Coursera Bootcamp, applying Python, data analysis, and machine learning to practical projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="py-20 px-6 bg-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.brief}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-700 text-slate-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center bg-black hover:bg-neutral-900 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 border border-neutral-800"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center bg-neutral-800 hover:bg-neutral-700 text-neutral-100 px-4 py-2 rounded-lg font-semibold transition-all duration-200 border border-neutral-700"
                    >
                      View Source
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
    <div className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-slate-300 hover:text-white text-2xl">
                  ×
                </button>
              </div>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-slate-300">{selectedProject.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">My Approach</h4>
                  <p className="text-slate-300">{selectedProject.approach}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">The Outcome</h4>
                  <p className="text-slate-300">{selectedProject.outcome}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-purple-700 text-purple-200 hover:bg-purple-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="p-6 border-t border-slate-100 flex gap-3">
                    {selectedProject.liveDemo && (
                      <a
                        href={selectedProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ff5a36] hover:bg-[#ff7149] text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-4 py-2 rounded-lg font-semibold transition-all duration-200"
                      >
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6" onClick={() => setResumeOpen(false)}>
          <div className="bg-slate-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 flex justify-between items-center border-b border-slate-800">
              <h3 className="text-2xl font-bold text-white">Resume — Buhle Palaza</h3>
              <div className="flex items-center gap-3">
                <a href="/Profile.pdf" download className="text-sm px-3 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md">Download (PDF)</a>
                <button onClick={() => setResumeOpen(false)} className="text-white text-xl">×</button>
              </div>
            </div>
            <div className="p-6 bg-slate-950 text-white">
              <iframe
                ref={resumeIframeRef}
                src="/resume-source.html"
                title="Resume Preview"
                className="w-full h-[70vh] bg-white rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Skills & Certifications */}
  <section id="skills" className="py-20 px-6 bg-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { category: 'Artificial Intelligence & Machine Learning', skills: ['AI/ML', 'Artificial Intelligence (AI) Bootcamp', 'Machine Learning Algorithms'] },
                  { category: 'Programming & Scripting', skills: ['SQL', 'HTML', 'CSS', 'JavaScript', 'Python'] },
                  { category: 'Networking & Systems', skills: ['Packet Tracer'] },
                  { category: 'Tools & Platforms', skills: ['No-code/Low-code platforms'] },
                ].map((group, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-slate-300 mb-2">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sidx) => (
                        <Badge key={sidx} variant="outline" className="border-purple-700 text-purple-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{cert.name}</p>
                          <p className="text-sm text-slate-300">{cert.issuer}</p>
                          <p className="text-xs text-slate-400 mt-1">{cert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Resume section removed per request */}

  {/* Contact Section */}
  <section id="contact" className="py-20 px-6 bg-transparent text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 text-slate-200">
            Let's connect and build something amazing together!
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:palazabb@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/buhle-palaza-48a3962b0/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/BuhleB" target="_blank" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <textarea 
                  placeholder="Message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                ></textarea>
                <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 px-6">
        <div className="container mx-auto text-center text-sm text-slate-400">
          <p>&copy; 2025 Buhle Palaza. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

