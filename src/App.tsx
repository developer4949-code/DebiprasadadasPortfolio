import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server, FileText, Menu, X } from 'lucide-react';
import profileImage from './B123048_profile.png';
import logo from './logo-p.png';
 

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
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
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-gradient-to-br from-[#120945] via-[#371A5A] to-[#7A1378] text-white overflow-x-hidden relative">

      
      {/* Custom Cursor */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-[#8847FD] to-[#FE45CB] opacity-80 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transform: 'scale(1)',
        }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        activeSection !== 'hero' ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className={`flex items-center gap-3 transition-all duration-500 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {/* Logo */}
              <img 
                src={logo} 
                alt="Debi Prasad Das Portfolio Logo" 
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
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
            <div className={`hidden md:flex items-center space-x-8 transition-all duration-700 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}>
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#8847FD] ${
                    activeSection === item.toLowerCase() ? 'text-[#8847FD]' : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] transform transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </button>
              ))}
              
              {/* View Resume Button */}
              <a
                href="https://drive.google.com/file/d/14ldyTpDW_kMIjRM8fsTTCzhhIzyLAWk-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#8847FD]/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#8847FD] transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="py-4 space-y-4 border-t border-gray-700 mt-4">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-[#8847FD] hover:bg-[#8847FD]/10 rounded-lg ${
                    activeSection === item.toLowerCase() ? 'text-[#8847FD] bg-[#8847FD]/10' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile View Resume Button */}
              <a
                href="https://your-resume-url-here.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#8847FD]/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">


        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8847FD] via-[#FE45CB] to-[#EA53F8] bg-clip-text text-transparent animate-gradient">
              Debi Prasad Das
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Full-stack Developer & Cloud Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] rounded-full font-semibold hover:shadow-lg hover:shadow-[#8847FD]/25 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-[#8847FD] rounded-full font-semibold hover:bg-[#8847FD]/10 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#8847FD]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Full-stack developer and cloud enthusiast with experience building real-world apps in logistics, citizen services, and education. Skilled in Java, JavaScript, React.js, Spring Boot, and Android with Firebase. Comfortable designing RESTful APIs and integrating cloud tools like GitHub Actions, Docker, and Kubernetes. Passionate about clean code, usability, and solving real-world problems through tech.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring the latest in cloud and mobile development, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Mail className="w-5 h-5" />
                  <span>dddebiprasaddas2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-5 h-5" />
                  <span>+91-8260057716</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                  <span>Bhubaneswar, India</span>
                  <div className="flex gap-3 ml-4">
                    <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-[#8847FD]/20 hover:border-[#8847FD]/40 hover:bg-[#8847FD]/10 transition-all duration-300">
                      <Github className="w-6 h-6 text-[#8847FD]" />
                    </a>
                    <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-[#8847FD]/20 hover:border-[#8847FD]/40 hover:bg-[#8847FD]/10 transition-all duration-300">
                      <Linkedin className="w-6 h-6 text-[#8847FD]" />
                    </a>
                  </div>
                </div>
              </div>

             
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] rounded-full animate-spin-slow opacity-75"></div>
                <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Debi Prasad Das" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="text-6xl hidden">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Frontend Development",
                skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI (Basics)"]
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Backend Development",
                skills: ["Java (Spring Boot)", "Node.js (Learning)", "RESTful APIs", "JWT", "MVC Architecture"]
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Database & Cloud",
                skills: ["Firebase Firestore", "Realtime Database", "MySQL", "MongoDB (Learning)", "AWS (EC2, S3, Lambda, IAM)", "GitHub Actions", "Docker", "Kubernetes (Basics)", "Firebase Hosting"]
              }
            ].map((category, index) => (
              <div
                key={category.title}
                className="bg-slate-900/30 p-8 rounded-xl backdrop-blur-md border border-[#8847FD]/20 hover:border-[#8847FD]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#8847FD]/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-[#8847FD] mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                        {skill.toLowerCase().includes('react') && (
                          <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">⚛️</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('javascript') && (
                          <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
                            <span className="text-black text-xs font-bold">JS</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('html') && (
                          <div className="w-full h-full bg-orange-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">5</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('css') && (
                          <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('java') && (
                          <div className="w-full h-full bg-red-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">☕</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('node') && (
                          <div className="w-full h-full bg-green-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">⬢</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('firebase') && (
                          <div className="w-full h-full bg-orange-400 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🔥</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('mysql') && (
                          <div className="w-full h-full bg-blue-700 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🐬</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('mongodb') && (
                          <div className="w-full h-full bg-green-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🍃</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('aws') && (
                          <div className="w-full h-full bg-orange-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">☁️</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('docker') && (
                          <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🐳</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('kubernetes') && (
                          <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">⚓</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('github') && (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🐙</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('material') && (
                          <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🎨</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('rest') && (
                          <div className="w-full h-full bg-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🔗</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('jwt') && (
                          <div className="w-full h-full bg-purple-500 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🔐</span>
                          </div>
                        )}
                        {skill.toLowerCase().includes('mvc') && (
                          <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">🏗️</span>
                          </div>
                        )}
                        {!skill.toLowerCase().includes('react') && 
                         !skill.toLowerCase().includes('javascript') && 
                         !skill.toLowerCase().includes('html') && 
                         !skill.toLowerCase().includes('css') && 
                         !skill.toLowerCase().includes('java') && 
                         !skill.toLowerCase().includes('node') && 
                         !skill.toLowerCase().includes('firebase') && 
                         !skill.toLowerCase().includes('mysql') && 
                         !skill.toLowerCase().includes('mongodb') && 
                         !skill.toLowerCase().includes('aws') && 
                         !skill.toLowerCase().includes('docker') && 
                         !skill.toLowerCase().includes('kubernetes') && 
                         !skill.toLowerCase().includes('github') && 
                         !skill.toLowerCase().includes('material') && 
                         !skill.toLowerCase().includes('rest') && 
                         !skill.toLowerCase().includes('jwt') && 
                         !skill.toLowerCase().includes('mvc') && (
                          <div className="w-full h-full bg-gradient-to-r from-[#8847FD] to-[#FE45CB] flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{skill.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



     {/* Projects Section */}
<section id="projects" className="py-20 bg-slate-800/20 backdrop-blur-sm">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] mx-auto rounded-full"></div>
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
          className="bg-slate-900/30 rounded-xl overflow-hidden backdrop-blur-md border border-[#8847FD]/20 hover:border-[#8847FD]/40 transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:shadow-[#8847FD]/10 group w-full"
        >
          <div className="h-48 bg-gradient-to-br from-[#8847FD]/20 to-[#FE45CB]/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
            {project.image}
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#8847FD] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">{project.description}</p>

            {/* Key Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[#8847FD] mb-3">Key Highlights</h4>
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
            <div className="mb-6 p-4 bg-slate-800/30 rounded-lg border border-[#8847FD]/20">
              <h4 className="text-lg font-semibold text-[#8847FD] mb-2">Societal Impact</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#8847FD]/20 text-[#8847FD] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8847FD] hover:text-[#FE45CB] transition-colors duration-300 font-medium"
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


      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] bg-clip-text text-transparent">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8847FD] to-[#FE45CB] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Main Education */}
            <div className="bg-slate-900/30 rounded-xl overflow-hidden backdrop-blur-md border border-[#8847FD]/20 hover:border-[#8847FD]/40 transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:shadow-[#8847FD]/10 group">
              <div className="p-8">
                <div className="flex items-start gap-6">
                  {/* IIIT Bhubaneswar Logo */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8847FD]/20 to-[#FE45CB]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <div className="text-3xl font-bold text-[#8847FD]">IIIT</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#8847FD] transition-colors duration-300">
                      International Institute of Information Technology, Bhubaneswar
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">
                      B.Tech in Computer Science and Engineering
                    </p>
                    <p className="text-gray-400 mb-4">2023 - 2027</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#8847FD]">
                        <span className="text-sm font-medium">CGPA:</span>
                        <span className="text-gray-300">9.13/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Android Development",
                  subtitle: "The Complete Android Oreo Developer Course",
                  platform: "Udemy",
                  year: "2023",
                  icon: "📱"
                },
                {
                  title: "Spring Boot",
                  subtitle: "Spring Framework Essentials, REST API Development",
                  platform: "Spring Academy",
                  year: "2024",
                  icon: "☕"
                },
                {
                  title: "Cloud Computing",
                  subtitle: "AWS Cloud Practitioner Essentials",
                  platform: "AWS Skill Builder",
                  year: "2025",
                  icon: "☁️"
                }
           
              ].map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-slate-900/30 p-6 rounded-xl backdrop-blur-md border border-[#8847FD]/20 hover:border-[#8847FD]/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#8847FD]/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8847FD]/20 to-[#FE45CB]/20 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1 group-hover:text-[#8847FD] transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">{cert.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#8847FD] text-sm font-medium">{cert.platform}</span>
                        <span className="text-gray-400 text-sm">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">dddebiprasaddas2004@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91-8260057716</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
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
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300 resize-none"
                required
              ></textarea>
              <input type="hidden" name="_subject" value="New message from portfolio site" />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-cyan-500/20">
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
