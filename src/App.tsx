import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, Mail, Phone, MapPin, Github, Linkedin, 
  FileText, Menu, X, Code, Database, Server 
} from 'lucide-react';
import profileImage from './B123048_profile.png';
import logo from './logo-p.png';
import iiitLogo from './iiit_logo_fevicon.png';
import SkillIcon from './components/SkillIcon';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Debi Prasad Das';

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;
      
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      if (!isDeleting) {
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(type, 100);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
          setDisplayedName(fullName.substring(0, currentIndex));
          timeoutId = setTimeout(type, 50);
        } else {
          isDeleting = false;
          timeoutId = setTimeout(type, 500);
        }
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F1419] text-white overflow-x-hidden relative">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-green-900/5 to-yellow-900/10 animate-gradient" />
      </div>

      {/* ─── NAVBAR ──────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 backdrop-blur-xl border-b border-white/10
        ${activeSection !== 'hero' ? 'bg-[#0F1419]/95 shadow-xl' : 'bg-[#0F1419]/85'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`flex items-center gap-3 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}>
              <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {['Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-[#60A5FA]' 
                      : 'text-gray-300 hover:text-[#93C5FD]'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/18_I3BP88IjjHfhc8vZGsSPsosixL64h6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#60A5FA] text-white rounded-lg font-medium hover:bg-[#3B82F6] transition-all shadow-md hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-6 border-t border-gray-800">
              <div className="flex flex-col space-y-5">
                {['Education', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left px-4 py-3 text-gray-200 hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="https://drive.google.com/file/d/18_I3BP88IjjHfhc8vZGsSPsosixL64h6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 py-3 bg-[#60A5FA] text-white rounded-lg text-center font-medium flex items-center justify-center gap-2"
                >
                  <FileText size={18} />
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ─── HERO + ABOUT CARD ───────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid md:grid-cols-5 gap-10 items-center bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-10 shadow-2xl">

              {/* Left - Text Content (3/5 columns on desktop) */}
              <div className="md:col-span-3 space-y-7">
                <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                  {displayedName}
                  {displayedName && <span className="text-[#60A5FA] animate-pulse">|</span>}
                </h1>

                <p className="text-xl sm:text-2xl text-gray-200">
                  Full-stack Developer & Cloud Enthusiast
                </p>

                <div className="space-y-5 text-gray-100 text-[1.05rem] leading-relaxed">
                  <p>
                    Full-stack developer and cloud enthusiast with experience building real-world applications in logistics, citizen services, and education sectors.
                  </p>
                  <p>
                    Skilled in <strong className="text-[#93C5FD]">Java</strong>, <strong className="text-[#93C5FD]">React.js</strong>, <strong className="text-[#93C5FD]">Spring Boot</strong>, Android + Firebase, RESTful APIs, Docker, GitHub Actions and AWS services.
                  </p>
                  <p>
                    Passionate about clean architecture, scalable systems and solving meaningful real-world problems through technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 mt-6 text-base">
                  <div className="flex items-center gap-2.5 text-[#93C5FD]">
                    <Mail size={20} />
                    <span>dddebiprasaddas2004@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#6EE7B7]">
                    <Phone size={20} />
                    <span>+91-8260057716</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#FDE047]">
                    <MapPin size={20} />
                    <span>Bhubaneswar, India</span>
                  </div>
                </div>

                <div className="flex gap-6 mt-8">
                  <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer" className="text-[#93C5FD] hover:text-white transition-colors">
                    <Github size={32} strokeWidth={1.8} />
                  </a>
                  <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer" className="text-[#60A5FA] hover:text-white transition-colors">
                    <Linkedin size={32} strokeWidth={1.8} />
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3.5 bg-[#60A5FA] rounded-xl font-semibold hover:bg-[#3B82F6] transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40"
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3.5 border border-slate-500 rounded-xl font-semibold hover:bg-slate-800/50 transition-all"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              {/* Right - Profile Image (2/5 columns on desktop) */}
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/40 to-[#34D399]/30 rounded-full animate-pulse-slow blur-xl" />
                  <div className="absolute inset-3 bg-[#0F1419] rounded-full border-4 border-slate-600/60 overflow-hidden shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Debi Prasad Das"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#93C5FD]" />
        </div>
      </section>

      {/* The rest of your sections remain here unchanged */}
      {/* Education, Skills, Projects, Certifications, Contact, Footer */}
      {/* ... paste your existing code for these sections ... */}

    </div>
  );
}

export default App;
