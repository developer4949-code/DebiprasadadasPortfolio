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
                      <div key={frontend-${skill}-${index}} className="skill-roller-item">
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
                      <div key={frontend-dup-${skill}-${index}} className="skill-roller-item">
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
                      <div key={backend-${skill}-${index}} className="skill-roller-item">
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
                      <div key={backend-dup-${skill}-${index}} className="skill-roller-item">
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
                      <div key={cloud-${skill}-${index}} className="skill-roller-item">
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
                      <div key={cloud-dup-${skill}-${index}} className="skill-roller-item">
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
          <div className="space-y-8">
            {[
              {
                title: "News-Driven Stock Alert App – Cloud Financial Platform",
                description: "Developed a real-time financial alert and sentiment monitoring app for traders and investors. Built event-driven microservices with AWS Elastic Beanstalk and integrated SES/SNS for asynchronous notifications. Implemented sentiment analysis and data-driven triggers to automate alert generation.",
                tech: ["Kotlin", "Jetpack Compose", "Spring Boot", "AWS (SES, SNS, DynamoDB, Elastic Beanstalk, Pinpoint)", "Room DB", "WorkManager"],
                image: "💹",
                githubUrl: "https://github.com/developer4949-code/stock-alert-app",
                highlights: [
                  "Real-time financial alert and sentiment monitoring for traders and investors",
                  "Event-driven microservices using AWS Elastic Beanstalk",
                  "SES/SNS integration for asynchronous notifications",
                  "Automated alert generation via sentiment analysis and data triggers",
                  "Supports 1000+ concurrent alerts per day with 40% improved accuracy"
                ],
                impact: "Empowers investors with real-time insights, enhances financial decision-making, and supports automation in trading ecosystems."
              },
              {
                title: "Fill It – Ride-Sharing for Tanker Fulfillment",
                description: "Engineered a scalable backend for real-time trip lifecycle management using Spring Boot. Implemented geolocation-based trip matching with Haversine formula and real-time status tracking. Integrated Firebase Authentication for secure role-based access (customer and driver).",
                tech: ["Java 8+", "Spring Boot", "Gradle", "Firebase", "Google Groups", "Docker"],
                image: "🚚",
                githubUrl: "https://github.com/developer4949-code/FILL-IT-App",
                highlights: [
                  "Real-time trip lifecycle: creation, matching, and completion",
                  "Geolocation-based trip matching with Haversine formula",
                  "Secure OAuth and Firebase-based authentication",
                  "Cloud-native architecture with Docker deployment",
                  "Scalable microservices with monitoring capabilities"
                ],
                impact: "Enables reliable ride-sharing infrastructure, protects user data, promotes economic flexibility for gig workers, and eases traffic congestion through shared mobility."
              },
              {
                title: "Institution Student Management System (ISMS)",
                description: "Built 50+ RESTful APIs to manage academics, attendance, and fee records with robust validation and async processing. Integrated Google Drive API for dynamic document upload and OpenCV for student image preprocessing. Secured platform with Firebase Authentication and custom access control mapped to user roles.",
                tech: ["Java 21", "Spring Boot 3.4", "Firebase", "Gradle", "Google Drive API", "OpenCV"],
                image: "🏫",
                githubUrl: "https://github.com/developer4949-code/ISMS-Fullstack",
                highlights: [
                  "50+ RESTful APIs for comprehensive academic management",
                  "Role-based access with secure Firebase authentication",
                  "Async operations for grievance and policy workflows",
                  "Email notifications and Google Drive integration",
                  "Modular architecture: controllers, services, models, configs"
                ],
                impact: "Streamlined data management, secure handling of sensitive academic data, integration with cloud tools for better availability, and automation reduces manual errors and bottlenecks."
              },
              {
                title: "SuchnaSangam – Government Grievance & Alert Portal",
                description: "Built a real-time grievance and alert portal for citizens and officials using Firebase Realtime Database. Implemented district-wise alert broadcasting and grievance tracking with role-based access controls. Enabled secure document sharing and status updates for grievances across citizens, officials, and admins.",
                tech: ["Java 17", "Spring Boot 3.5.0", "Firebase", "Gradle", "Google Cloud APIs", "Docker", "Lombok"],
                image: "📢",
                githubUrl: "https://github.com/developer4949-code/Suchna-Sangam-Fullstack",
                highlights: [
                  "Real-time grievance and alert portal for citizens and officials",
                  "District-wise alert broadcasting and grievance tracking",
                  "Role-based access controls and secure document sharing",
                  "Highly modular and service-oriented backend",
                  "Cloud-native with Docker deployment capabilities"
                ],
                impact: "Bridges digital gaps, enables real-time grievance redressal, promotes accountability and transparency, and drives community empowerment."
              },
              {
                title: "Quiz System – Android Quiz Application",
                description: "Built an Android quiz app with Firebase Authentication supporting separate admin and user experiences. Managed dynamic quiz content, scores, and subjects using Firebase Realtime Database. Designed interactive UI using Material Design, ViewBinding, and Lottie animations for smooth UX.",
                tech: ["Java", "Android SDK", "Firebase", "Material Design", "ViewBinding", "Lottie"],
                image: "📱",
                githubUrl: "https://github.com/developer4949-code/quizoo",
                highlights: [
                  "Separate admin and user experiences with Firebase Authentication",
                  "Dynamic quiz content management with real-time updates",
                  "Interactive UI with Material Design and Lottie animations",
                  "Score tracking and subject-based quiz organization",
                  "Offline-capable with Firebase Realtime Database sync"
                ],
                impact: "Enhances learning experiences through interactive assessments, provides educators with powerful quiz management tools, and creates engaging educational content delivery."
              },
              {
                title: "Quote Generator & Sharing Android App",
                description: "Built a motivational quote-sharing mobile app with daily refresh and offline support. Integrated ZenQuotes and Unsplash APIs via Retrofit and Glide for smooth content loading. Added Firebase Authentication and media-sharing via Android MediaStore.",
                tech: ["Java", "Android SDK", "Firebase", "Retrofit", "Glide", "Material Design"],
                image: "💬",
                githubUrl: "https://github.com/developer4949-code/refresh-quotation",
                highlights: [
                  "Motivational quote-sharing app with daily refresh and offline support",
                  "ZenQuotes and Unsplash API integration via Retrofit and Glide",
                  "Firebase Authentication and Android MediaStore integration",
                  "Optimized UI with Material Design and efficient image caching",
                  "Achieved 500+ downloads with 30% user retention boost"
                ],
                impact: "Promotes daily motivation, encourages sharing of positive content, and improves user engagement through thoughtful design and seamless performance."
              }
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-[#4285F4]/50 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-[#4285F4]/20 group w-full project-card faang-card"
              >
                <div className="h-48 bg-[#4285F4]/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#4285F4] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>
                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#4285F4] mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <span className="text-[#8847FD] mt-1">•</span>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Societal Impact */}
                  <div className="mb-6 p-4 bg-white/5 rounded-lg border border-[#4285F4]/20">
                    <h4 className="text-lg font-semibold text-[#4285F4] mb-2">Societal Impact</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-[#4285F4]/20 text-[#4285F4] rounded-full text-sm font-medium tech-pill tech-pill-animate relative overflow-hidden"
                        style={{
                          animationDelay: ${techIndex * 100}ms,
                          animation: techPillFloat ${5 + techIndex * 0.3}s ease-in-out infinite
                        }}
                      >
                        <span className="relative z-10">{tech}</span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#4285F4] hover:text-[#34A853] transition-colors duration-300 font-medium"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  </div>
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
                <div className={relative p-8 bg-gradient-to-br ${cert.gradient} rounded-2xl border ${cert.borderColor} backdrop-blur-sm overflow-hidden group faang-card}>
                  <div className="absolute inset-0 opacity-10">
                    <div className={absolute top-0 left-0 w-32 h-32 ${cert.bgColor1} rounded-full blur-3xl animate-pulse}></div>
                    <div className={absolute bottom-0 right-0 w-40 h-40 ${cert.bgColor2} rounded-full blur-3xl animate-pulse} style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={w-16 h-16 ${cert.gradient} border ${cert.borderColor} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0}>
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={text-xl font-semibold mb-2 text-white group-hover:${cert.textColor} transition-colors duration-300}>
                          {cert.title}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">{cert.subtitle}</p>
                        <div className={flex items-center justify-between pt-3 border-t ${cert.borderColor}}>
                          <span className={${cert.textColor} text-sm font-medium}>{cert.platform}</span>
                          <span className="text-gray-400 text-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Particles */}
                  <div className={absolute top-6 right-6 w-2 h-2 ${cert.particleColor1} rounded-full animate-float-particle} style={{ animationDelay: '0s' }}></div>
                  <div className={absolute top-12 left-12 w-1.5 h-1.5 ${cert.particleColor2} rounded-full animate-float-particle} style={{ animationDelay: '1.5s' }}></div>
                  <div className={absolute bottom-8 right-12 w-1 h-1 ${cert.particleColor1} rounded-full animate-float-particle} style={{ animationDelay: '3s' }}></div>
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
