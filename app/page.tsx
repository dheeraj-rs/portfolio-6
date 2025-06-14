'use client';

import { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Briefcase,
  Send,
  Server,
  Brain,
  Rocket,
  Shield,
  Monitor,
  Cloud
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Custom cursor movement
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Add hover effect to cursor
      const target = e.target as HTMLElement;
      const cursor = document.querySelector('.cursor');
      if (target.closest('a, button, .ripple-effect')) {
        cursor?.classList.add('hover');
      } else {
        cursor?.classList.remove('hover');
      }
    };

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Smooth scroll animation for elements
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };

    // Ripple effect
    const createRipple = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rippleContainer = target.closest('.ripple-effect');
      if (rippleContainer) {
        const ripple = document.createElement('span');
        const rect = rippleContainer.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        rippleContainer.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('click', createRipple);

    // Initial scroll animation check
    handleScrollAnimation();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollAnimation);
      window.removeEventListener('click', createRipple);
    };
  }, []);

  const skills = [
    { icon: <Code />, name: 'Frontend Development', description: 'React, Next.js, TypeScript, Vue.js, Angular' },
    { icon: <Server />, name: 'Backend Development', description: 'Node.js, Express, Python, Django, FastAPI' },
    { icon: <Database />, name: 'Database Management', description: 'PostgreSQL, MongoDB, Redis, MySQL' },
    { icon: <Cloud />, name: 'Cloud & DevOps', description: 'AWS, Docker, Kubernetes, CI/CD' },
    { icon: <Smartphone />, name: 'Mobile Development', description: 'React Native, Flutter, iOS, Android' },
    { icon: <Brain />, name: 'AI & Machine Learning', description: 'TensorFlow, PyTorch, OpenAI, Computer Vision' },
    { icon: <Shield />, name: 'Cybersecurity', description: 'Security Audits, Penetration Testing, OWASP' },
    { icon: <Palette />, name: 'UI/UX Design', description: 'Figma, Adobe XD, Sketch, Prototyping' },
  ];

  const projects = [
    {
      title: 'AI-Powered E-Commerce Platform',
      description: 'A revolutionary e-commerce platform with AI-driven product recommendations, real-time inventory management, advanced analytics dashboard, and seamless payment integration. Features include voice search, AR product visualization, and personalized shopping experiences.',
      tech: ['Next.js', 'TypeScript', 'TensorFlow', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/dheerajrs',
      live: 'https://demo-ecommerce.dheerajrs.dev'
    },
    {
      title: 'Real-Time Collaboration Suite',
      description: 'Enterprise-grade collaboration platform with real-time document editing, video conferencing, project management tools, and advanced security features. Supports 10,000+ concurrent users with 99.9% uptime.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC', 'Docker'],
      github: 'https://github.com/dheerajrs',
      live: 'https://collab-suite.dheerajrs.dev'
    },
    {
      title: 'Smart City IoT Dashboard',
      description: 'Comprehensive IoT dashboard for smart city management featuring real-time data visualization, predictive analytics, traffic optimization, and environmental monitoring. Processes 1M+ data points daily.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'InfluxDB', 'Grafana', 'Kubernetes'],
      github: 'https://github.com/dheerajrs',
      live: 'https://smart-city.dheerajrs.dev'
    },
    {
      title: 'Blockchain-Based Supply Chain',
      description: 'Transparent supply chain management system using blockchain technology for product traceability, authenticity verification, and automated smart contracts. Reduces fraud by 95% and increases transparency.',
      tech: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Node.js'],
      github: 'https://github.com/dheerajrs',
      live: 'https://supply-chain.dheerajrs.dev'
    },
    {
      title: 'AI Medical Diagnosis Assistant',
      description: 'Advanced medical diagnosis assistant using computer vision and machine learning to analyze medical images, provide preliminary diagnoses, and assist healthcare professionals with 94% accuracy rate.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/dheerajrs',
      live: 'https://medical-ai.dheerajrs.dev'
    },
    {
      title: 'Quantum Computing Simulator',
      description: 'Web-based quantum computing simulator with visual circuit builder, quantum algorithm implementations, and educational resources. Supports up to 20-qubit simulations with real-time visualization.',
      tech: ['React', 'TypeScript', 'Python', 'Qiskit', 'WebAssembly', 'Three.js'],
      github: 'https://github.com/dheerajrs',
      live: 'https://quantum-sim.dheerajrs.dev'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Water Background Layers */}
      <div className="water-bg"></div>
      <div className="water-layer"></div>
      <div className="water-layer"></div>
      <div className="water-layer"></div>
      
      {/* Floating Bubbles */}
      <div className="bubbles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>

      {/* Custom Cursor */}
      <div 
        className="cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />

      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#" className="logo">DHEERAJ R S</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <Menu />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="logo">DHEERAJ R S</span>
          <button className="mobile-nav-close" onClick={closeMobileMenu}>
            <X />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="hero-title">DHEERAJ R S</h1>
          <p className="hero-subtitle">Full-Stack Software Engineer</p>
          <p className="hero-role">Crafting Next-Generation Digital Solutions</p>
          <a href="#projects" className="hero-cta ripple-effect">Explore My Innovation</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title animate-on-scroll">About Me</h2>
          <div className="about-content animate-on-scroll">
            <div className="about-text">
              <p>
                I'm Dheeraj R S, a passionate Full-Stack Software Engineer with over 6 years of experience 
                in building scalable, high-performance applications. I specialize in modern web technologies, 
                cloud architecture, and AI-driven solutions that solve real-world problems.
              </p>
              <p>
                My expertise spans across frontend frameworks like React and Vue.js, backend technologies 
                including Node.js and Python, and cloud platforms such as AWS and Azure. I have a proven 
                track record of delivering enterprise-grade applications that serve millions of users.
              </p>
              <p>
                I'm passionate about emerging technologies like AI/ML, blockchain, and quantum computing. 
                When I'm not coding, I contribute to open-source projects, mentor junior developers, 
                and share knowledge through technical blogs and speaking engagements.
              </p>
              <p>
                My mission is to leverage technology to create innovative solutions that make a positive 
                impact on society while pushing the boundaries of what's possible in software development.
              </p>
            </div>
            <div className="about-image">
              <User size={150} color="rgba(0, 255, 255, 0.6)" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Technical Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card animate-on-scroll ripple-effect">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card animate-on-scroll">
                <div className="project-image">
                  <Rocket size={80} color="rgba(0, 255, 255, 0.6)" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link ripple-effect" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.live} className="project-link ripple-effect" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Let's Build Something Amazing</h2>
          <div className="contact-content animate-on-scroll">
            <p className="contact-intro">
              Ready to transform your ideas into reality? I'm always excited to work on innovative projects 
              that challenge the status quo and create meaningful impact. Let's collaborate and build the future together.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Your Email"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Project Type (Web App, Mobile App, AI Solution, etc.)"
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  className="form-textarea" 
                  placeholder="Tell me about your project vision, goals, and requirements..."
                  required
                />
              </div>
              <button type="submit" className="form-submit ripple-effect">
                <Send size={22} />
                Start Our Journey
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a href="https://github.com/dheerajrs" className="social-link ripple-effect" target="_blank" rel="noopener noreferrer">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/dheerajrs" className="social-link ripple-effect" target="_blank" rel="noopener noreferrer">
                <Linkedin size={28} />
              </a>
              <a href="mailto:dheeraj@example.com" className="social-link ripple-effect">
                <Mail size={28} />
              </a>
            </div>
            <p className="copyright">
              © 2024 Dheeraj R S. Engineered with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}