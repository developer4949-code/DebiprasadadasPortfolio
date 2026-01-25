import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, FileText, Menu, X, Quote } from 'lucide-react';
import profileImage from './B123048_profile.png';
import logo from './logo-p.png';
import iiitLogo from './iiit_logo_fevicon.png';
import SkillIcon from './components/SkillIcon';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Debi Prasad Das';

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Continuous typewriter effect for name
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;
    
    const type = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(type, 100);
        } else {
          // Wait 2 seconds before starting to delete
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
        }
      } else {
        // Deleting backward
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedName(fullName.substring(0, currentIndex));
          timeoutId = setTimeout(type, 50); // Faster when deleting
        } else {
          // Start typing again after a short pause
          isDeleting = false;
          timeoutId = setTimeout(() => {
            type();
          }, 500);
        }
      }
    };

    // Start typing
    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
  };

  return (
    <div className="min-h-screen bg-[#0F1419] text-white overflow-x-hidden relative">
      {/* FAANG-style subtle animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="faang-gradient faang-gradient-1"></div>
        <div className="faang-gradient faang-gradient-2"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${activeSection !== 'hero' ? 'bg-[#0F1419]/95 backdrop-blur-xl shadow-xl border-b border-white/5' : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`flex items-center gap-3 transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
              {/* Logo */}
              <img
                src={logo}
                alt="Debi Prasad Das Portfolio Logo"
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                }}
              />
              <div className="h-10 flex items-center gap-2 hidden">
                <div className="w-8 h-8 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  DP
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#8847FD] to-[#FE45CB] bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
              }`}>
              {['Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#4285F4] ${activeSection === item.toLowerCase() ? 'text-[#4285F4]' : 'text-gray-400'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#4285F4] transform transition-all duration-300 ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                </button>
              ))}

              {/* View Resume Button */}
              <a
                href="https://drive.google.com/file/d/18_I3BP88IjjHfhc8vZGsSPsosixL64h6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#4285F4] rounded-lg text-white font-medium hover:bg-[#3367D6] hover:shadow-lg hover:shadow-[#4285F4]/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 faang-button"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-300 hover:text-[#4285F4] transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
            <div className="py-4 space-y-4 border-t border-gray-700 mt-4">
              {[ 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-[#4285F4] hover:bg-[#4285F4]/10 rounded-lg ${activeSection === item.toLowerCase() ? 'text-[#4285F4] bg-[#4285F4]/10' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}

              {/* Mobile View Resume Button */}
              <a
                href="https://drive.google.com/file/d/18_I3BP88IjjHfhc8vZGsSPsosixL64h6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-[#4285F4] rounded-lg text-white font-medium hover:bg-[#3367D6] hover:shadow-lg hover:shadow-[#4285F4]/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 faang-button"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

  <section id="hero" className="min-h-screen flex items-center justify-center relative pt-14 pb-8 overflow-hidden">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full relative z-10">
    <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Main card – entrance with subtle scale + blur */}
      <div 
        className={`
          relative mx-auto p-5 sm:p-7 lg:p-8 
          bg-gradient-to-br from-[#4285F4]/7 via-[#34A853]/4 to-[#FBBC04]/7
          rounded-3xl border border-white/10 backdrop-blur-xl 
          overflow-hidden shadow-2xl faang-card
          transition-all duration-1000 ease-out
          ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'}
        `}
      >
        {/* Softer, breathing background blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#4285F4] rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#EA4335] rounded-full blur-3xl animate-[pulse_14s_ease-in-out_infinite_2s]"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#34A853] rounded-full blur-3xl animate-[pulse_16s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-5 gap-6 lg:gap-10 items-center">
          {/* Left content – staggered entrance */}
          <div className="md:col-span-3 space-y-5 text-center md:text-left">
            {/* Name – typewriter + glow finish */}
            <h1 
              className={`
                text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-white faang-title tracking-tight
                transition-all duration-700
                ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: '0.4s' }}
            >
              {displayedName}
              {displayedName.length > 0 && displayedName.length === fullName.length && (
                <span className="animate-[glow_2s_ease-in-out_infinite] text-[#4285F4]">|</span>
              )}
            </h1>

            {/* Subtitle – fade in after name */}
            <p 
              className={`
                text-lg sm:text-xl lg:text-2xl text-gray-200 font-light
                transition-all duration-700
                ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: '1.0s' }}
            >
              Full-stack Developer & Cloud Enthusiast
            </p>

            {/* About text – staggered lines */}
            <div className="space-y-4 text-base lg:text-lg leading-relaxed font-mono text-gray-100">
              <p className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '1.3s' }}>
                Full-stack developer & cloud enthusiast. Experienced in building real-world apps using Java, Spring Boot, React.js, Firebase, Android and RESTful APIs. Comfortable with Docker, GitHub Actions, AWS basics and Kubernetes fundamentals.
              </p>
              <p className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '1.5s' }}>
                Passionate about clean code and solving practical problems. I enjoy exploring new cloud/mobile tools and contributing to open-source.
              </p>
            </div>

            {/* Contact info – fade in */}
            <div 
              className={`flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mt-5 text-sm lg:text-base transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '1.8s' }}
            >
              <div className="flex items-center gap-2 text-[#a5d6ff] hover:text-[#60a5fa] transition-colors">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
                dddebiprasaddas2004@gmail.com
              </div>
              <div className="flex items-center gap-2 text-[#bbf7d0] hover:text-[#86efac] transition-colors">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                +91-8260057716
              </div>
              <div className="flex items-center gap-2 text-[#fef08a] hover:text-[#fde047] transition-colors">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                Bhubaneswar, India
              </div>
            </div>

            {/* Social icons – scale in */}
            <div 
              className={`flex justify-center md:justify-start gap-5 mt-5 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: '2.0s' }}
            >
              <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 bg-white/6 rounded-full flex items-center justify-center border border-white/12 hover:border-[#a5d6ff]/60 hover:bg-[#a5d6ff]/10 hover:scale-110 transition-all duration-300">
                <Github className="w-5 h-5 text-[#a5d6ff]" />
              </a>
              <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 bg-white/6 rounded-full flex items-center justify-center border border-white/12 hover:border-[#60a5fa]/60 hover:bg-[#60a5fa]/10 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-[#60a5fa]" />
              </a>
            </div>

            {/* Buttons – staggered entrance + ripple hover */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-7 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '2.2s' }}
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-3 bg-[#4285F4] rounded-lg font-medium text-white overflow-hidden hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#4285F4]/40 transform hover:scale-[1.03] transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-white/20 scale-0 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-3 border border-white/25 rounded-lg font-medium text-white overflow-hidden hover:bg-white/5 hover:border-white/40 transform hover:scale-[1.03] transition-all duration-300"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-white/10 scale-0 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></span>
              </button>
            </div>
          </div>

          {/* Profile image – slide in from right + subtle glow */}
          <div 
            className={`md:col-span-2 flex justify-center md:justify-end mt-8 md:mt-0 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 group/photo">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC04] rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-2 bg-[#0F1419] rounded-full flex items-center justify-center overflow-hidden border-4 border-white/15 shadow-2xl transition-all duration-500 group-hover/photo:shadow-[#4285F4]/30 group-hover/photo:scale-[1.02]">
                <img 
                  src={profileImage} 
                  alt="Debi Prasad Das" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="text-8xl hidden">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator – gentle bounce */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
    <ChevronDown className="w-7 h-7 text-[#4285F4] opacity-80" />
  </div>
</section>
      {/* Education Section - NEW PLACEMENT */}
      <section id="education" className="py-20 bg-[#141920]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education Card with Quote-style Animation */}
            <div className="quote-card quote-card-right">
              <div className="relative p-8 bg-gradient-to-br from-[#FBBC04]/10 to-[#EA4335]/10 rounded-2xl border border-[#FBBC04]/30 backdrop-blur-sm overflow-hidden group faang-card">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBBC04] rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#EA4335] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    {/* IIIT Bhubaneswar Logo */}
                    <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 border-2 border-[#FF8C00] p-1 shadow-lg shadow-[#FF8C00]/20">
                      <img 
                        src={iiitLogo} 
                        alt="IIIT Bhubaneswar Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#FBBC04] transition-colors duration-300">
                        International Institute of Information Technology, Bhubaneswar
                      </h3>
                      <p className="text-lg text-gray-300 mb-2">
                        B.Tech in Computer Science and Engineering
                      </p>
                      <p className="text-gray-400 mb-4">2023 - 2027</p>

                      <div className="space-y-3 pt-4 border-t border-[#FBBC04]/20">
                        <div className="flex items-center gap-2 text-[#FBBC04]">
                          <span className="text-sm font-medium">CGPA:</span>
                          <span className="text-gray-300">8.86/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-[#FBBC04] rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-[#EA4335] rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-16 w-1 h-1 bg-[#FBBC04] rounded-full animate-float-particle" style={{ animationDelay: '3.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0F1419] relative overflow-hidden skills-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
          </div>

          {/* Three Category Rollers */}
          <div className="space-y-12">
            {/* Frontend Skills Roller */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#4285F4] flex items-center gap-3">
                <Code className="w-6 h-6" />
                Frontend Development
              </h3>
              <div className="relative overflow-hidden py-4">
                <div className="skills-roller">
                  <div className="skills-track skills-track-frontend">
                    {[
                      "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI (Basics)"
                    ].map((skill, index) => (
                      <div key={`frontend-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#4285F4]/30 hover:border-[#4285F4]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                      "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI (Basics)"
                    ].map((skill, index) => (
                      <div key={`frontend-dup-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#4285F4]/30 hover:border-[#4285F4]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills Roller */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#34A853] flex items-center gap-3">
                <Server className="w-6 h-6" />
                Backend Development
              </h3>
              <div className="relative overflow-hidden py-4">
                <div className="skills-roller">
                  <div className="skills-track skills-track-backend">
                    {[
                      "Java (Spring Boot)", "Node.js (Learning)", "RESTful APIs", "JWT", "MVC Architecture"
                    ].map((skill, index) => (
                      <div key={`backend-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#34A853]/30 hover:border-[#34A853]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                      "Java (Spring Boot)", "Node.js (Learning)", "RESTful APIs", "JWT", "MVC Architecture"
                    ].map((skill, index) => (
                      <div key={`backend-dup-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#34A853]/30 hover:border-[#34A853]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud & Database Skills Roller */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#FBBC04] flex items-center gap-3">
                <Database className="w-6 h-6" />
                Cloud & Database
              </h3>
              <div className="relative overflow-hidden py-4">
                <div className="skills-roller">
                  <div className="skills-track skills-track-cloud">
                    {[
                      "Firebase Firestore", "Realtime Database", "MySQL", "MongoDB (Learning)", 
                      "AWS (EC2, S3, Lambda, IAM)", "GitHub Actions", "Docker", "Kubernetes (Basics)", "Firebase Hosting"
                    ].map((skill, index) => (
                      <div key={`cloud-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#FBBC04]/30 hover:border-[#FBBC04]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {[
                      "Firebase Firestore", "Realtime Database", "MySQL", "MongoDB (Learning)", 
                      "AWS (EC2, S3, Lambda, IAM)", "GitHub Actions", "Docker", "Kubernetes (Basics)", "Firebase Hosting"
                    ].map((skill, index) => (
                      <div key={`cloud-dup-${skill}-${index}`} className="skill-roller-item">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-full border border-[#FBBC04]/30 hover:border-[#FBBC04]/60 transition-all duration-300 hover:scale-105 faang-card">
                          <SkillIcon skill={skill} size="md" />
                          <span className="text-gray-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="py-20 bg-[#141920]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Featured Projects
      </h2>
      <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
  {
    title: "News-Driven Stock Alert App – Cloud Financial Platform",
    description: "Real-time financial alert system with sentiment analysis and automated notifications using event-driven microservices.",
    tech: ["Kotlin", "Jetpack Compose", "Spring Boot", "AWS (SES, SNS, DynamoDB, Elastic Beanstalk, Pinpoint)", "Room DB", "WorkManager"],
    image: "https://portfolio-gules-seven-wbw6ip079v.vercel.app/1.png",
    githubUrl: "https://github.com/developer4949-code/stock-alert-app",
    impact: "Empowers traders with real-time insights and automated decision support."
  },
  {
    title: "Fill It – Ride-Sharing for Tanker Fulfillment",
    description: "Scalable backend for real-time tanker ride-matching and lifecycle management with geolocation logic.",
    tech: ["Java 8+", "Spring Boot", "Gradle", "Firebase", "Google Groups", "Docker"],
    image: "https://portfolio-gules-seven-wbw6ip079v.vercel.app/3.png",
    githubUrl: "https://github.com/developer4949-code/FILL-IT-App",
    impact: "Improves gig economy efficiency and reduces logistics delays."
  },
  {
    title: "Institution Student Management System (ISMS)",
    description: "Comprehensive academic management platform with 50+ REST APIs, document handling and role-based access.",
    tech: ["Java 21", "Spring Boot 3.4", "Firebase", "Gradle", "Google Drive API", "OpenCV"],
    image: "https://portfolio-gules-seven-wbw6ip079v.vercel.app/2.png.jpg",
    githubUrl: "https://github.com/developer4949-code/ISMS-Fullstack",
    impact: "Reduces manual admin work and improves data accuracy in institutions."
  },
  {
    title: "SuchnaSangam – Government Grievance & Alert Portal",
    description: "Real-time citizen grievance and district-level alert system with secure role-based access.",
    tech: ["Java 17", "Spring Boot 3.5.0", "Firebase", "Gradle", "Google Cloud APIs", "Docker", "Lombok"],
    image: "https://portfolio-gules-seven-wbw6ip079v.vercel.app/1.png", // using same as stock alert for now – change if you have specific one
    githubUrl: "https://github.com/developer4949-code/Suchna-Sangam-Fullstack",
    impact: "Promotes transparency and faster resolution of public complaints."
  },
  {
    title: "Quiz System – Android Quiz Application",
    description: "Interactive Android quiz app with admin/user modes and real-time content management.",
    tech: ["Java", "Android SDK", "Firebase", "Material Design", "ViewBinding", "Lottie"],
    image: "https://raw.githubusercontent.com/developer4949-code/quizoo/refs/heads/master/Screenshot%202026-01-25%20102707.png",
    githubUrl: "https://github.com/developer4949-code/quizoo",
    impact: "Makes learning engaging and provides easy quiz management for educators."
  },
  {
    title: "MindWeave – AI-Ready Journaling App",
    description: "Modern Android journaling app built with Jetpack Compose — clean UI, secure auth, and future-ready architecture for AI-powered insights.",
    tech: ["Kotlin", "Jetpack Compose", "Jetpack Navigation", "Gradle"],
    image: "https://raw.githubusercontent.com/developer4949-code/MindWeave/refs/heads/main/mindweave-preview.png",
    githubUrl: "https://github.com/developer4949-code/MindWeave",
    impact: "Helps users build consistent self-reflection habits with a beautiful, privacy-focused experience — future AI features will deliver emotional insights and smart prompts."
  }
].map((project) => (
  <div
    key={project.title}
    className="group relative bg-white/4 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/8 hover:border-[#4285F4]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4285F4]/15 transform hover:-translate-y-1"
  >
    {/* Image with animation */}
    <div className="relative overflow-hidden max-h-80 sm:max-h-96 md:max-h-[28rem] bg-[#0F1419]/40">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-auto max-h-[28rem] sm:max-h-[32rem] md:max-h-[36rem] object-contain mx-auto transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
  />
  {/* Optional subtle overlay — keep if you like the effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419]/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
</div>

    {/* Content */}
    <div className="p-6 sm:p-7 md:p-8">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-gray-300 mb-5 leading-relaxed text-base">
        {project.description}
      </p>

      {/* Impact */}
      <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
        <p className="text-gray-200 text-sm leading-relaxed">
          {project.impact}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2.5 mb-7">
        {project.tech.map((tech, techIndex) => (
          <span
            key={tech}
            className="px-3.5 py-1.5 bg-[#4285F4]/10 text-[#60A5FA] rounded-full text-xs sm:text-sm font-medium border border-[#4285F4]/20 transition-all duration-300 hover:bg-[#4285F4]/20 hover:border-[#4285F4]/40"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#34A853] font-medium transition-colors duration-300"
      >
        <Github className="w-5 h-5" />
        View on GitHub
      </a>
    </div>

    {/* Subtle background glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  </div>
      ))}
    </div>
  </div>
</section>

      {/* Certifications Section - NEW SEPARATE SECTION */}
      <section id="certifications" className="py-20 bg-[#0F1419]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
          </div>

          {/* Certifications with Different Color Animations */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AWS Cloud Practitioner Essentials",
                subtitle: "AWS Cloud Practitioner Essentials",
                platform: "AWS Skill Builder",
                year: "Dec 2025",
                icon: "☁️",
                gradient: "from-[#4285F4]/10 to-[#34A853]/10",
                borderColor: "border-[#4285F4]/30",
                bgColor1: "bg-[#4285F4]",
                bgColor2: "bg-[#34A853]",
                textColor: "text-[#4285F4]",
                particleColor1: "bg-[#4285F4]",
                particleColor2: "bg-[#34A853]"
              },
              {
                title: "AWS Cloud Quest: Cloud Practitioner",
                subtitle: "AWS Cloud Quest: Cloud Practitioner",
                platform: "AWS Training and Certification",
                year: "Dec 2025",
                icon: "☁️",
                gradient: "from-[#34A853]/10 to-[#FBBC04]/10",
                borderColor: "border-[#34A853]/30",
                bgColor1: "bg-[#34A853]",
                bgColor2: "bg-[#FBBC04]",
                textColor: "text-[#34A853]",
                particleColor1: "bg-[#34A853]",
                particleColor2: "bg-[#FBBC04]"
              },
              {
                title: "Spring Boot REST API Development",
                subtitle: "Spring Boot REST API Development",
                platform: "Spring Academy",
                year: "2024",
                icon: "☕",
                gradient: "from-[#FBBC04]/10 to-[#EA4335]/10",
                borderColor: "border-[#FBBC04]/30",
                bgColor1: "bg-[#FBBC04]",
                bgColor2: "bg-[#EA4335]",
                textColor: "text-[#FBBC04]",
                particleColor1: "bg-[#FBBC04]",
                particleColor2: "bg-[#EA4335]"
              },
              {
                title: "Android Development",
                subtitle: "The Complete Android Oreo Developer Course",
                platform: "Udemy",
                year: "2023",
                icon: "📱",
                gradient: "from-[#EA4335]/10 to-[#8847FD]/10",
                borderColor: "border-[#EA4335]/30",
                bgColor1: "bg-[#EA4335]",
                bgColor2: "bg-[#8847FD]",
                textColor: "text-[#EA4335]",
                particleColor1: "bg-[#EA4335]",
                particleColor2: "bg-[#8847FD]"
              }
            ].map((cert, index) => (
              <div key={cert.title} className="quote-card">
                <div className={`relative p-8 bg-gradient-to-br ${cert.gradient} rounded-2xl border ${cert.borderColor} backdrop-blur-sm overflow-hidden group faang-card`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-0 left-0 w-32 h-32 ${cert.bgColor1} rounded-full blur-3xl animate-pulse`}></div>
                    <div className={`absolute bottom-0 right-0 w-40 h-40 ${cert.bgColor2} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1.5s' }}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${cert.gradient} border ${cert.borderColor} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-semibold mb-2 text-white group-hover:${cert.textColor} transition-colors duration-300`}>
                          {cert.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">{cert.subtitle}</p>
                        <div className={`flex items-center justify-between pt-3 border-t ${cert.borderColor}`}>
                          <span className={`${cert.textColor} text-sm font-medium`}>{cert.platform}</span>
                          <span className="text-gray-400 text-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div className={`absolute top-6 right-6 w-2 h-2 ${cert.particleColor1} rounded-full animate-float-particle`} style={{ animationDelay: '0s' }}></div>
                  <div className={`absolute top-12 left-12 w-1.5 h-1.5 ${cert.particleColor2} rounded-full animate-float-particle`} style={{ animationDelay: '1.5s' }}></div>
                  <div className={`absolute bottom-8 right-12 w-1 h-1 ${cert.particleColor1} rounded-full animate-float-particle`} style={{ animationDelay: '3s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 bg-[#141920] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Inspirational Tech Wisdom
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Left Quote Card - Tech Focus */}
            <div className="quote-card quote-card-left">
              <div className="relative p-8 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 rounded-2xl border border-[#4285F4]/30 backdrop-blur-sm overflow-hidden group faang-card">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#4285F4] rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#34A853] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute top-4 right-4 text-[#4285F4]/20">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6 italic">
                    "The only way to do great work is to love what you do."
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#4285F4]/20">
                    <div className="w-12 h-12 rounded-full bg-[#4285F4]/20 flex items-center justify-center border border-[#4285F4]/30">
                      <span className="text-[#4285F4] font-bold text-lg">SJ</span>
                    </div>
                    <div>
                      <p className="text-[#4285F4] font-semibold">Steve Jobs</p>
                      <p className="text-gray-400 text-sm">Co-founder of Apple</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-2 h-2 bg-[#4285F4] rounded-full animate-float-particle" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-[#34A853] rounded-full animate-float-particle" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-8 left-12 w-1 h-1 bg-[#4285F4] rounded-full animate-float-particle" style={{ animationDelay: '3s' }}></div>
              </div>
            </div>

            {/* Right Quote Card - Peace/Innovation */}
            <div className="quote-card quote-card-right">
              <div className="relative p-8 bg-gradient-to-br from-[#FBBC04]/10 to-[#EA4335]/10 rounded-2xl border border-[#FBBC04]/30 backdrop-blur-sm overflow-hidden group faang-card">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBBC04] rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#EA4335] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
                <div className="absolute top-4 left-4 text-[#FBBC04]/20">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6 italic">
                    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#FBBC04]/20">
                    <div className="w-12 h-12 rounded-full bg-[#FBBC04]/20 flex items-center justify-center border border-[#FBBC04]/30">
                      <span className="text-[#FBBC04] font-bold text-lg">BG</span>
                    </div>
                    <div>
                      <p className="text-[#FBBC04] font-semibold">Bill Gates</p>
                      <p className="text-gray-400 text-sm">Co-founder of Microsoft</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-[#FBBC04] rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-16 left-16 w-1.5 h-1.5 bg-[#EA4335] rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-16 w-1 h-1 bg-[#FBBC04] rounded-full animate-float-particle" style={{ animationDelay: '3.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0F1419]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-[#4285F4] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#4285F4]/50 transition-all duration-300 faang-card">
                <div className="w-12 h-12 bg-[#4285F4] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">dddebiprasaddas2004@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#4285F4]/50 transition-all duration-300 faang-card">
                <div className="w-12 h-12 bg-[#4285F4] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+91-8260057716</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#4285F4]/50 hover:bg-[#4285F4]/10 transition-all duration-300 faang-card">
                  <Github className="w-6 h-6 text-[#4285F4]" />
                </a>
                <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:border-[#4285F4]/50 hover:bg-[#4285F4]/10 transition-all duration-300 faang-card">
                  <Linkedin className="w-6 h-6 text-[#4285F4]" />
                </a>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xovlwakw"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#4285F4]/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#4285F4]/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-[#4285F4]/50 focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                required
              ></textarea>
              <input type="hidden" name="_subject" value="New message from portfolio site" />
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-[#4285F4] rounded-lg font-semibold hover:bg-[#3367D6] hover:shadow-lg hover:shadow-[#4285F4]/30 transform hover:scale-[1.02] transition-all duration-300 faang-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-[#0F1419]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Debi Prasad Das. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
