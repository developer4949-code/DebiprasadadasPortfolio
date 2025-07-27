// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server } from 'lucide-react';

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeSection, setActiveSection] = useState('hero');

//   useEffect(() => {
//     setIsLoaded(true);

//     const handleScroll = () => {
//       const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         activeSection !== 'hero' ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
//       }`}>
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className={`text-2xl font-bold transition-all duration-500 ${
//               isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
//             }`}>
//               <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Portfolio
//               </span>
//             </div>

//             <div className={`hidden md:flex space-x-8 transition-all duration-700 delay-300 ${
//               isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
//             }`}>
//               {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
//                     activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-gray-300'
//                   }`}
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   {item}
//                   <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-transform duration-300 ${
//                     activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'
//                   }`}></span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${2 + Math.random() * 2}s`
//               }}
//             />
//           ))}
//         </div>

//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <div className={`transition-all duration-1000 ${
//             isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
//               Debi Prasad Das
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
//               Full-stack Developer & Cloud Enthusiast
//             </p>
//             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
//               Full-stack developer and cloud enthusiast with experience building real-world apps in logistics, citizen services, and education. Skilled in Java, JavaScript, React.js, Spring Boot, and Android with Firebase. Comfortable designing RESTful APIs and integrating cloud tools like GitHub Actions, Docker, and Kubernetes. Passionate about clean code, usability, and solving real-world problems through tech.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
//               <button
//                 onClick={() => scrollToSection('projects')}
//                 className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
//               >
//                 View My Work
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="px-8 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transform hover:scale-105 transition-all duration-300"
//               >
//                 Get In Touch
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-6 h-6 text-purple-400" />
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 relative">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               About Me
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 Full-stack developer and cloud enthusiast with experience building real-world apps in logistics, citizen services, and education. Skilled in Java, JavaScript, React.js, Spring Boot, and Android with Firebase. Comfortable designing RESTful APIs and integrating cloud tools like GitHub Actions, Docker, and Kubernetes. Passionate about clean code, usability, and solving real-world problems through tech.
//               </p>
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 When I'm not coding, you can find me exploring the latest in cloud and mobile development, contributing to open-source projects, or sharing knowledge with the developer community.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <div className="flex items-center gap-2 text-purple-400">
//                   <Mail className="w-5 h-5" />
//                   <span>dddebiprasaddas2004@gmail.com</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-purple-400">
//                   <Phone className="w-5 h-5" />
//                   <span>+91-8260057716</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-purple-400">
//                   <MapPin className="w-5 h-5" />
//                   <span>Bhubaneswar, India</span>
//                 </div>
//               </div>
//               <div className="pt-6">
//                 <h3 className="text-xl font-semibold text-purple-400 mb-2">Education</h3>
//                 <p className="text-gray-300 mb-1">
//                   <span className="font-semibold">International Institute of Information Technology, Bhubaneswar</span><br />
//                   B.Tech in Computer Science and Engineering (2024)
//                 </p>
//                 <h3 className="text-xl font-semibold text-purple-400 mt-4 mb-2">Certifications & Courses</h3>
//                 <ul className="list-disc list-inside text-gray-300">
//                   <li>Android Development: The Complete Android Oreo Developer Course – Udemy (2023)</li>
//                   <li>Spring Boot: Spring Framework Essentials, REST API Development – Spring Academy (2024)</li>
//                   <li>Cloud Computing: AWS Cloud Practitioner Essentials – AWS Skill Builder (2025)</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="w-80 h-80 mx-auto relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-75"></div>
//                 <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
//                   <div className="text-6xl">👨‍💻</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-slate-800/50">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Skills & Technologies
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Code className="w-8 h-8" />,
//                 title: "Frontend Development",
//                 skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI (Basics)"]
//               },
//               {
//                 icon: <Server className="w-8 h-8" />,
//                 title: "Backend Development",
//                 skills: ["Java (Spring Boot)", "Node.js (Learning)", "RESTful APIs", "JWT", "MVC Architecture"]
//               },
//               {
//                 icon: <Database className="w-8 h-8" />,
//                 title: "Database & Cloud",
//                 skills: ["Firebase Firestore", "Realtime Database", "MySQL", "MongoDB (Learning)", "AWS (EC2, S3, Lambda, IAM)", "GitHub Actions", "Docker", "Kubernetes (Basics)", "Firebase Hosting"]
//               }
//             ].map((category, index) => (
//               <div
//                 key={category.title}
//                 className="bg-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="text-purple-400 mb-4">{category.icon}</div>
//                 <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
//                 <div className="space-y-3">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skill} className="flex items-center justify-between">
//                       <span className="text-gray-300">{skill}</span>
//                       <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
//                         <div
//                           className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-fill-bar"
//                           style={{
//                             animationDelay: `${(index * 200) + (skillIndex * 100)}ms`,
//                             width: `${85 + Math.random() * 15}%`
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Experience
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//           </div>
//           <div className="space-y-8">
//             {/* You can add work experience here if you want, or keep it focused on projects */}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-slate-800/50">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Featured Projects
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Fill It – Ride-Sharing for Tanker Fulfillment",
//                 description: "Engineered a scalable backend for real-time trip lifecycle: creation, matching, and completion using Spring Boot. Implemented geolocation-based trip matching with Haversine formula and real-time status tracking. Integrated Firebase Authentication for secure role-based access (customer and driver).",
//                 tech: ["Java", "Spring Boot", "Firebase", "Realtime Database"],
//                 image: "🚚"
//               },
//               {
//                 title: "Institution Student Management System (ISMS)",
//                 description: "Built 50+ RESTful APIs to manage academics, attendance, and fee records with robust validation and async processing. Integrated Google Drive API for dynamic document upload and OpenCV for student image preprocessing. Secured platform with Firebase Authentication and custom access control mapped to user roles.",
//                 tech: ["Java", "Spring Boot", "Firebase", "Google Drive API", "OpenCV"],
//                 image: "🏫"
//               },
//               {
//                 title: "SuchnaSangam – Government Grievance & Alert Portal",
//                 description: "Built a real-time grievance and alert portal for citizens and officials using Firebase Realtime Database. Implemented district-wise alert broadcasting and grievance tracking with role-based access controls. Enabled secure document sharing and status updates for grievances across citizens, officials, and admins.",
//                 tech: ["Java", "Spring Boot", "Firebase", "Realtime Database"],
//                 image: "📢"
//               },
//               {
//                 title: "Quiz System – Android Quiz Application",
//                 description: "Built an Android quiz app with Firebase Authentication supporting separate admin and user experiences. Managed dynamic quiz content, scores, and subjects using Firebase Realtime Database. Designed interactive UI using Material Design, ViewBinding, and Lottie animations for smooth UX.",
//                 tech: ["Java", "Android SDK", "Firebase", "Material Design"],
//                 image: "📱"
//               }
//             ].map((project, index) => (
//               <div
//                 key={project.title}
//                 className="bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group"
//               >
//                 <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
//                   {project.image}
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-3">
//                     <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
//                       <Github className="w-4 h-4" />
//                       Code
//                     </button>
//                     <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
//                       <ExternalLink className="w-4 h-4" />
//                       Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Let's Work Together
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
//             <p className="text-lg text-gray-300 mt-6">
//               I'm always interested in new opportunities and exciting projects.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                   <Mail className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p className="text-gray-300">dddebiprasaddas2004@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                   <Phone className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p className="text-gray-300">+91-8260057716</p>
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <a href="https://github.com/developer4949-code" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
//                   <Github className="w-6 h-6" />
//                 </a>
//                 <a href="https://www.linkedin.com/in/debi-prasad-das-458878292/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/50 rounded-full flex items-center justify-center border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>

//             <form className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-all duration-300"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-all duration-300"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   rows={5}
//                   placeholder="Your Message"
//                   className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-xl focus:border-purple-500/40 focus:outline-none transition-all duration-300 resize-none"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 border-t border-purple-500/20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-gray-400">
//             © 2024 Debi Prasad Das. Built with React & Tailwind CSS.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Server } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120945] via-[#371A5A] to-[#7A1378] text-white overflow-x-hidden relative">
      {/* Cosmic Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 8}px`,
              height: `${Math.random() * 25 + 8}px`,
              background: `radial-gradient(circle, ${['#8847FD', '#A334BC', '#FE45CB', '#EA53F8', '#E79CA7'][Math.floor(Math.random() * 5)]}40, transparent)`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 16 + 16}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        

        
        {/* Pulsing cosmic orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute cosmic-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              background: `radial-gradient(circle, ${['#8847FD', '#A334BC', '#FE45CB', '#EA53F8'][Math.floor(Math.random() * 4)]}30, transparent)`,
              animationDelay: `${Math.random() * 10}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
      
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
            <div className={`text-2xl font-bold transition-all duration-500 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <span className="bg-gradient-to-r from-[#8847FD] to-[#FE45CB] bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            <div className={`hidden md:flex space-x-8 transition-all duration-700 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
            }`}>
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
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
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              Full-stack developer and cloud enthusiast with experience building real-world apps in logistics, citizen services, and education. Skilled in Java, JavaScript, React.js, Spring Boot, and Android with Firebase. Comfortable designing RESTful APIs and integrating cloud tools like GitHub Actions, Docker, and Kubernetes. Passionate about clean code, usability, and solving real-world problems through tech.
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
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Education</h3>
                <p className="text-gray-300 mb-1">
                  <span className="font-semibold">International Institute of Information Technology, Bhubaneswar</span><br />
                  B.Tech in Computer Science and Engineering (2024)
                </p>
                <h3 className="text-xl font-semibold text-cyan-400 mt-4 mb-2">Certifications & Courses</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Android Development: The Complete Android Oreo Developer Course – Udemy (2023)</li>
                  <li>Spring Boot: Spring Framework Essentials, REST API Development – Spring Academy (2024)</li>
                  <li>Cloud Computing: AWS Cloud Practitioner Essentials – AWS Skill Builder (2025)</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-spin-slow opacity-75"></div>
                <div className="absolute inset-2 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
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
                className="bg-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-cyan-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-fill-bar"
                          style={{
                            animationDelay: `${(index * 200) + (skillIndex * 100)}ms`,
                            width: `${85 + Math.random() * 15}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {/* You can add work experience here if you want, or keep it focused on projects */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fill It – Ride-Sharing for Tanker Fulfillment",
                description: "Engineered a scalable backend for real-time trip lifecycle: creation, matching, and completion using Spring Boot. Implemented geolocation-based trip matching with Haversine formula and real-time status tracking. Integrated Firebase Authentication for secure role-based access (customer and driver).",
                tech: ["Java", "Spring Boot", "Firebase", "Realtime Database"],
                image: "🚚"
              },
              {
                title: "Institution Student Management System (ISMS)",
                description: "Built 50+ RESTful APIs to manage academics, attendance, and fee records with robust validation and async processing. Integrated Google Drive API for dynamic document upload and OpenCV for student image preprocessing. Secured platform with Firebase Authentication and custom access control mapped to user roles.",
                tech: ["Java", "Spring Boot", "Firebase", "Google Drive API", "OpenCV"],
                image: "🏫"
              },
              {
                title: "SuchnaSangam – Government Grievance & Alert Portal",
                description: "Built a real-time grievance and alert portal for citizens and officials using Firebase Realtime Database. Implemented district-wise alert broadcasting and grievance tracking with role-based access controls. Enabled secure document sharing and status updates for grievances across citizens, officials, and admins.",
                tech: ["Java", "Spring Boot", "Firebase", "Realtime Database"],
                image: "📢"
              },
              {
                title: "Quiz System – Android Quiz Application",
                description: "Built an Android quiz app with Firebase Authentication supporting separate admin and user experiences. Managed dynamic quiz content, scores, and subjects using Firebase Realtime Database. Designed interactive UI using Material Design, ViewBinding, and Lottie animations for smooth UX.",
                tech: ["Java", "Android SDK", "Firebase", "Material Design"],
                image: "📱"
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                                          <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/20 rounded-xl focus:border-cyan-500/40 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
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


