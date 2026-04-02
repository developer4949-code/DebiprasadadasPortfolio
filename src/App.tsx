import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  Code,
  Database,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Server,
  X,
} from 'lucide-react';
import profileImage from './B123048_profile.png';
import iiitLogo from './iiit_logo_fevicon.png';
import logo from './logo-p.png';
import SkillIcon from './components/SkillIcon';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const resumeUrl =
  'https://drive.google.com/file/d/18_I3BP88IjjHfhc8vZGsSPsosixL64h6/view?usp=sharing';

const navItems = [
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
] as const;

const sectionIds = ['hero', 'education', 'skills', 'projects', 'certifications', 'contact'] as const;

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code,
    accentClass: 'text-[#8db7ff]',
    borderClass: 'border-[#8db7ff]/20',
    chipClass:
      'border-[#8db7ff]/25 bg-[#0e1730]/70 hover:border-[#8db7ff]/55 hover:bg-[#132044]/80',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material UI (Basics)'],
    reverse: false,
  },
  {
    title: 'Backend Development',
    icon: Server,
    accentClass: 'text-[#7fe0c9]',
    borderClass: 'border-[#7fe0c9]/20',
    chipClass:
      'border-[#7fe0c9]/25 bg-[#081d1c]/70 hover:border-[#7fe0c9]/55 hover:bg-[#0c2927]/80',
    items: ['Java (Spring Boot)', 'Node.js (Learning)', 'RESTful APIs', 'JWT', 'MVC Architecture'],
    reverse: true,
  },
  {
    title: 'Cloud and Database',
    icon: Database,
    accentClass: 'text-[#d5b172]',
    borderClass: 'border-[#d5b172]/20',
    chipClass:
      'border-[#d5b172]/25 bg-[#24190e]/70 hover:border-[#d5b172]/55 hover:bg-[#332415]/80',
    items: [
      'Firebase Firestore',
      'Realtime Database',
      'MySQL',
      'MongoDB (Learning)',
      'AWS (EC2, S3, Lambda, IAM)',
      'GitHub Actions',
      'Docker',
      'Kubernetes (Basics)',
      'Firebase Hosting',
    ],
    reverse: false,
  },
] as const;

const projects = [
  {
    title: 'News-Driven Stock Alert App - Cloud Financial Platform',
    description:
      'Real-time financial alert system with sentiment analysis and automated notifications using event-driven microservices.',
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Spring Boot',
      'AWS (SES, SNS, DynamoDB, Elastic Beanstalk, Pinpoint)',
      'Room DB',
      'WorkManager',
    ],
    image:
      'https://raw.githubusercontent.com/developer4949-code/stock-alert-app/refs/heads/ss-backend/Screenshot%202026-01-25%20104420.png',
    githubUrl: 'https://github.com/developer4949-code/stock-alert-app',
    impact: 'Empowers traders with real-time insights and automated decision support.',
  },
  {
    title: 'Fill It - Ride-Sharing for Tanker Fulfillment',
    description:
      'Scalable backend for real-time tanker ride-matching and lifecycle management with geolocation logic.',
    tech: ['Java 8+', 'Spring Boot', 'Gradle', 'Firebase', 'Google Groups', 'Docker'],
    image: 'https://raw.githubusercontent.com/developer4949-code/FILL-IT-App/refs/heads/main/4.png',
    githubUrl: 'https://github.com/developer4949-code/FILL-IT-App',
    impact: 'Improves gig economy efficiency and reduces logistics delays.',
  },
  {
    title: 'Institution Student Management System (ISMS)',
    description:
      'Comprehensive academic management platform with 50+ REST APIs, document handling and role-based access.',
    tech: ['Java 21', 'Spring Boot 3.4', 'Firebase', 'Gradle', 'Google Drive API', 'OpenCV'],
    image: 'https://portfolio-gules-seven-wbw6ip079v.vercel.app/2.png.jpg',
    githubUrl: 'https://github.com/developer4949-code/ISMS-Fullstack',
    impact: 'Reduces manual admin work and improves data accuracy in institutions.',
  },
  {
    title: 'SuchnaSangam - Government Grievance and Alert Portal',
    description:
      'Real-time citizen grievance and district-level alert system with secure role-based access.',
    tech: ['Java 17', 'Spring Boot 3.5.0', 'Firebase', 'Gradle', 'Google Cloud APIs', 'Docker', 'Lombok'],
    image: 'https://portfolio-gules-seven-wbw6ip079v.vercel.app/1.png',
    githubUrl: 'https://github.com/developer4949-code/Suchna-Sangam-Fullstack',
    impact: 'Promotes transparency and faster resolution of public complaints.',
  },
  {
    title: 'Quiz System - Android Quiz Application',
    description:
      'Interactive Android quiz app with admin/user modes and real-time content management.',
    tech: ['Java', 'Android SDK', 'Firebase', 'Material Design', 'ViewBinding', 'Lottie'],
    image:
      'https://raw.githubusercontent.com/developer4949-code/quizoo/refs/heads/master/Screenshot%202026-01-25%20102707.png',
    githubUrl: 'https://github.com/developer4949-code/quizoo',
    impact: 'Makes learning engaging and provides easy quiz management for educators.',
  },
  {
    title: 'MindWeave - AI-Ready Journaling App',
    description:
      'Modern Android journaling app built with Jetpack Compose, clean UI, secure auth, and future-ready architecture for AI-powered insights.',
    tech: ['Kotlin', 'Jetpack Compose', 'Jetpack Navigation', 'Gradle'],
    image:
      'https://raw.githubusercontent.com/developer4949-code/MindWeave/refs/heads/main/mindweave-preview.png',
    githubUrl: 'https://github.com/developer4949-code/MindWeave',
    impact:
      'Helps users build consistent self-reflection habits with a beautiful, privacy-focused experience, future AI features will deliver emotional insights and smart prompts.',
  },
] as const;

const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    subtitle: 'AWS Cloud Practitioner Essentials',
    platform: 'AWS Skill Builder',
    year: 'Dec 2025',
    mark: 'AWS',
    accentClass: 'text-[#8db7ff]',
    borderClass: 'border-[#8db7ff]/25',
    panelClass: 'from-[#0b1631] to-[#11192b]',
  },
  {
    title: 'AWS Cloud Quest: Cloud Practitioner',
    subtitle: 'AWS Cloud Quest: Cloud Practitioner',
    platform: 'AWS Training and Certification',
    year: 'Dec 2025',
    mark: 'AC',
    accentClass: 'text-[#7fe0c9]',
    borderClass: 'border-[#7fe0c9]/25',
    panelClass: 'from-[#081c1a] to-[#11192b]',
  },
  {
    title: 'Spring Boot REST API Development',
    subtitle: 'Spring Boot REST API Development',
    platform: 'Spring Academy',
    year: '2024',
    mark: 'SB',
    accentClass: 'text-[#d5b172]',
    borderClass: 'border-[#d5b172]/25',
    panelClass: 'from-[#24190e] to-[#11192b]',
  },
  {
    title: 'Android Development',
    subtitle: 'The Complete Android Oreo Developer Course',
    platform: 'Udemy',
    year: '2023',
    mark: 'AD',
    accentClass: 'text-[#f08d8d]',
    borderClass: 'border-[#f08d8d]/25',
    panelClass: 'from-[#261316] to-[#11192b]',
  },
] as const;

const quotes = [
  {
    body: '"The only way to do great work is to love what you do."',
    author: 'Steve Jobs',
    role: 'Co-founder of Apple',
    accentClass: 'text-[#d5b172]',
    borderClass: 'border-[#d5b172]/20',
  },
  {
    body:
      '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight."',
    author: 'Bill Gates',
    role: 'Co-founder of Microsoft',
    accentClass: 'text-[#8db7ff]',
    borderClass: 'border-[#8db7ff]/20',
  },
] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

function Reveal({ children, className = '', threshold = 0.14 }: RevealProps) {
  const [ref, isVisible] = useScrollAnimation({
    threshold,
    rootMargin: '0px 0px -12% 0px',
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-[#a5afc4] md:text-lg">{description}</p> : null}
    </Reveal>
  );
}

type SkillRibbonProps = {
  items: readonly string[];
  chipClass: string;
  reverse?: boolean;
};

function SkillRibbon({ items, chipClass, reverse = false }: SkillRibbonProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="marquee-shell">
      <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`}>
        {duplicated.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium text-[#f4efe4] transition-all duration-300 ${chipClass}`}
          >
            <SkillIcon skill={skill} size="md" />
            <span className="whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Debi Prasad Das';

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.28;

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (!element) {
          continue;
        }

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedName(fullName);
      return;
    }

    let index = 0;
    let timeoutId: number | undefined;

    const typeNext = () => {
      setDisplayedName(fullName.slice(0, index + 1));
      index += 1;

      if (index < fullName.length) {
        timeoutId = window.setTimeout(typeNext, 90);
      }
    };

    timeoutId = window.setTimeout(typeNext, 240);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page-shell min-h-screen overflow-x-hidden text-[#f6f0e5]">
      <div className="page-background">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-left" />
        <div className="ambient-orb ambient-orb-right" />
        <div className="ambient-orb ambient-orb-center" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
          activeSection === 'hero'
            ? 'border-white/8 bg-[#07111f]/55'
            : 'border-white/10 bg-[#07111f]/82 shadow-[0_22px_60px_rgba(0,0,0,0.28)]'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 backdrop-blur-2xl sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className={`flex items-center gap-3 transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={logo} alt="Debi Prasad Das Portfolio Logo" className="h-9 w-auto object-contain" />
            </span>
            <span className="text-left">
              <span className="block text-[0.68rem] uppercase tracking-[0.35em] text-[#9da7bb]">
                Portfolio
              </span>
              <span className="block text-sm font-semibold text-[#f8f3ea] sm:text-base">Debi Prasad Das</span>
            </span>
          </button>

          <div
            className={`hidden items-center gap-2 md:flex ${
              isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
            } transition-all duration-700 delay-100`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-[#f6f0e5] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-[#99a4bb] hover:bg-white/6 hover:text-[#f6f0e5]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-[#d5b172]/35 bg-[#d5b172]/12 px-5 py-2.5 text-sm font-semibold text-[#f9f3e7] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d5b172]/60 hover:bg-[#d5b172]/20 hover:shadow-[0_14px_36px_rgba(213,177,114,0.18)]"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-[#f6f0e5] transition-all duration-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`mx-4 overflow-hidden rounded-[1.7rem] border border-white/8 bg-[#0b1527]/88 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-[#f6f0e5]'
                    : 'text-[#a5afc4] hover:bg-white/6 hover:text-[#f6f0e5]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d5b172]/35 bg-[#d5b172]/12 px-5 py-3 text-sm font-semibold text-[#f9f3e7] transition-all duration-300 hover:bg-[#d5b172]/18"
            >
              <FileText className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section id="hero" className="relative px-5 pb-4 pt-16 sm:px-6 lg:px-8 lg:pb-6 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:items-stretch lg:grid-cols-[1.08fr_0.82fr] lg:gap-8 lg:pt-2">
            <div
              className={`lg:h-full transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="hero-panel flex h-full flex-col rounded-[2rem] border border-white/10 px-5 py-4 shadow-[0_26px_90px_rgba(0,0,0,0.28)] sm:px-6 sm:py-5 lg:px-7 lg:py-5">
                <div className="hero-shimmer" />
                <p className="section-kicker relative z-10">Full-stack Developer and Cloud Enthusiast</p>
                <h1 className="title-serif relative z-10 mt-3 text-3xl leading-none text-[#f8f2e7] sm:text-4xl lg:text-5xl xl:text-[3.6rem]">
                  {displayedName}
                  <span className="ml-2 inline-block h-[0.9em] w-[2px] translate-y-1 bg-[#d5b172] align-middle animate-[blink_1.1s_steps(2,end)_infinite]" />
                </h1>
                <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#d5b172] via-[#8db7ff] to-transparent" />

                <div className="mt-5 space-y-4 text-base leading-7 text-[#b4bed1] sm:text-base">
                  <p>
                    Full-stack developer & cloud enthusiast. Experienced in building real-world apps using Java,
                    Spring Boot, React.js, Firebase, Android and RESTful APIs. Comfortable with Docker, GitHub
                    Actions, AWS basics and Kubernetes fundamentals.
                  </p>
                  <p>
                    Passionate about clean code and solving practical problems. I enjoy exploring new cloud/mobile
                    tools and contributing to open-source.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="mailto:dddebiprasaddas2004@gmail.com" className="hero-chip">
                    <Mail className="h-4 w-4" />
                    dddebiprasaddas2004@gmail.com
                  </a>
                  <a href="tel:+918260057716" className="hero-chip">
                    <Phone className="h-4 w-4" />
                    +91-8260057716
                  </a>
                  <div className="hero-chip">
                    <MapPin className="h-4 w-4" />
                    Bhubaneswar, India
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => scrollToSection('projects')} className="primary-cta">
                    Explore Projects
                  </button>
                  <button type="button" onClick={() => scrollToSection('contact')} className="secondary-cta">
                    Get In Touch
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://github.com/developer4949-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-orb"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/debi-prasad-das-458878292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-orb"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`lg:h-full transition-all duration-1000 delay-150 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="portrait-shell h-full">
                <div className="portrait-glow" />
                <div className="portrait-frame">
                  <img
                    src={profileImage}
                    alt="Debi Prasad Das"
                    className="h-full w-full rounded-[2rem] object-cover"
                  />
                </div>

                <div className="floating-note floating-note-right hidden sm:block">
                  <span className="floating-note-label">Location</span>
                  <p className="floating-note-value">Bhubaneswar, India</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('education')}
            className="mx-auto mt-5 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[#93a0ba] transition-colors duration-300 hover:text-[#f6f0e5]"
          >
            Scroll
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </section>

        <section id="education" className="section-space px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Academic Foundation"
              title="Education"
            />

            <Reveal className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="frost-card relative overflow-hidden rounded-[2rem] border border-[#d5b172]/18 p-7 sm:p-9">
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#d5b172]/55 to-transparent" />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-[#d5b172]/22 bg-[#0e1116] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
                    <img src={iiitLogo} alt="IIIT Bhubaneswar Logo" className="h-full w-full object-contain" />
                  </div>

                  <div className="flex-1">
                    <p className="section-kicker">International Institute of Information Technology, Bhubaneswar</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f7f2e7] sm:text-3xl">
                      B.Tech in Computer Science and Engineering
                    </h3>
                    <p className="mt-3 text-base text-[#aab5c9]">2023 - 2027</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="frost-card rounded-[2rem] border border-white/10 p-7">
                  <p className="section-kicker">Performance</p>
                  <p className="mt-4 text-4xl font-semibold text-[#f7f2e7]">8.86</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#96a3bb]">CGPA out of 10</p>
                </div>
                <div className="frost-card rounded-[2rem] border border-white/10 p-7">
                  <p className="section-kicker">Trajectory</p>
                  <p className="mt-4 text-lg leading-8 text-[#b7c1d2]">B.Tech in Computer Science and Engineering</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-space px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Capability Map"
              title="Skills and Technologies"
            />

            <div className="space-y-6">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <Reveal key={group.title}>
                    <div className={`frost-card rounded-[2rem] border p-6 sm:p-8 ${group.borderClass}`}>
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`rounded-2xl border border-white/10 bg-white/5 p-3 ${group.accentClass}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[#f6f0e5]">{group.title}</h3>
                        </div>
                      </div>
                      <SkillRibbon items={group.items} chipClass={group.chipClass} reverse={group.reverse} />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-space px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Selected Work"
              title="Featured Projects"
            />

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <Reveal key={project.title}>
                  <article className="project-card h-full">
                    <div className="flex h-full flex-col p-6 sm:p-7">
                      <h3 className="text-2xl font-semibold leading-snug text-[#f7f2e7]">{project.title}</h3>
                      <p className="mt-4 text-base leading-8 text-[#aeb8cb]">{project.description}</p>

                      <div className="impact-panel mt-6">
                        <p className="text-sm uppercase tracking-[0.28em] text-[#d5b172]">Impact</p>
                        <p className="mt-3 text-sm leading-7 text-[#d9e1f0]">{project.impact}</p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tag-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 pt-1">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f0e5] transition-all duration-300 hover:text-[#d5b172]"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section-space px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Proof of Practice"
              title="Certifications"
            />

            <div className="grid gap-7 md:grid-cols-2">
              {certifications.map((cert) => (
                <Reveal key={cert.title}>
                  <article
                    className={`cert-card rounded-[2rem] border bg-gradient-to-br p-7 sm:p-8 ${cert.borderClass} ${cert.panelClass}`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/5 text-lg font-semibold ${cert.accentClass}`}
                      >
                        {cert.mark}
                      </div>
                      <div className="flex-1">
                        <p className="section-kicker">Certification</p>
                        <h3 className="mt-2 text-2xl font-semibold text-[#f7f2e7]">{cert.title}</h3>
                        <p className="mt-3 text-base leading-7 text-[#adb7c9]">{cert.subtitle}</p>
                      </div>
                    </div>

                    <div className={`mt-8 flex items-center justify-between border-t pt-5 text-sm ${cert.borderClass}`}>
                      <span className={`${cert.accentClass} font-semibold`}>{cert.platform}</span>
                      <span className="uppercase tracking-[0.22em] text-[#97a4bc]">{cert.year}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="quotes" className="section-space px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Design Pause"
              title="Inspirational Tech Wisdom"
            />

            <div className="grid gap-7 lg:grid-cols-2">
              {quotes.map((quote) => (
                <Reveal key={quote.author}>
                  <article className={`quote-card rounded-[2rem] border p-8 sm:p-10 ${quote.borderClass}`}>
                    <Quote className={`h-12 w-12 ${quote.accentClass}`} />
                    <p className="mt-8 text-2xl leading-[1.6] text-[#f5efe2] md:text-[1.9rem]">{quote.body}</p>
                    <div className="mt-10 border-t border-white/10 pt-5">
                      <p className={`text-lg font-semibold ${quote.accentClass}`}>{quote.author}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[#98a5bd]">{quote.role}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-space px-5 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Open for Collaboration"
              title="Let's Work Together"
            />

            <div className="grid gap-7 lg:grid-cols-[0.88fr_1.12fr]">
              <Reveal>
                <div className="contact-panel h-full rounded-[2rem] border border-white/10 p-7 sm:p-8">
                  <p className="section-kicker">Reach Out</p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#f7f2e7]">Let's Work Together</h3>
                  <p className="mt-5 max-w-lg text-base leading-8 text-[#aab5c8]">
                    I'm always excited about new opportunities, challenging projects, and meaningful collaborations.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a href="mailto:dddebiprasaddas2004@gmail.com" className="contact-item">
                      <span className="contact-icon">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="contact-label">Email</span>
                        <span className="contact-value">dddebiprasaddas2004@gmail.com</span>
                      </span>
                    </a>

                    <a href="tel:+918260057716" className="contact-item">
                      <span className="contact-icon">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="contact-label">Phone</span>
                        <span className="contact-value">+91-8260057716</span>
                      </span>
                    </a>

                    <div className="contact-item">
                      <span className="contact-icon">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="contact-label">Location</span>
                        <span className="contact-value">Bhubaneswar, India</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href="https://github.com/developer4949-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-orb"
                      aria-label="GitHub profile"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/debi-prasad-das-458878292/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-orb"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <form
                  action="https://formspree.io/f/xovlwakw"
                  method="POST"
                  className="contact-panel rounded-[2rem] border border-white/10 p-7 sm:p-8"
                >
                  <div className="grid gap-5">
                    <label className="field-shell">
                      <span className="field-label">Your Name</span>
                      <input type="text" name="name" className="field-input" required />
                    </label>

                    <label className="field-shell">
                      <span className="field-label">Your Email</span>
                      <input type="email" name="email" className="field-input" required />
                    </label>

                    <label className="field-shell">
                      <span className="field-label">Your Message</span>
                      <textarea name="message" rows={6} className="field-input field-textarea" required />
                    </label>
                  </div>

                  <input type="hidden" name="_subject" value="New message from portfolio site" />

                  <button type="submit" className="primary-cta mt-7 w-full justify-center">
                    Send Message
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-5 py-8 text-center text-sm text-[#8f9ab1] sm:px-6 lg:px-8">
        <p>Copyright 2026 Debi Prasad Das. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
