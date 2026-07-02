import React from 'react';

interface SkillIconProps {
  skill: string;
  size?: 'sm' | 'md' | 'lg';
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const skillLower = skill.toLowerCase();

  // React Logo
  if (skillLower.includes('react')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(-60 12 12)"/>
      </svg>
    );
  }

  // JavaScript Logo
  if (skillLower.includes('javascript') || skillLower.includes('js')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
        <path d="M16.5 17c0 1.5-1 2-2.5 2s-2.5-.5-2.5-2v-6h1.5v6c0 .5.2.8.8.8s.7-.3.7-.8v-6h1.5v6zm-6 0c0 1.5-1 2-2.5 2-1.2 0-2-.5-2.2-1.5h1.5c.1.3.3.5.7.5.5 0 .7-.3.7-.8 0-.5-.3-.7-1-.7h-.5v-1h.5c.6 0 1-.2 1-.7 0-.4-.2-.6-.6-.6-.4 0-.6.2-.7.5H6.3c.2-1 1-1.5 2.2-1.5 1.4 0 2.3.6 2.3 1.8 0 .7-.3 1.2-.8 1.4.6.2 1 .7 1 1.4z" fill="#000"/>
      </svg>
    );
  }

  // TypeScript Logo
  if (skillLower.includes('typescript') || skillLower.includes('ts')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M13.5 16v1.5h4V16h-1.5v-5h-1v5h-1.5zm-3-5h-3V9.5h7.5V11h-3v6.5h-1.5V11z" fill="white"/>
      </svg>
    );
  }

  // HTML5 Logo
  if (skillLower.includes('html')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 2l1.5 17 7 2 7-2 1.5-17h-17z" fill="#E34F26"/>
        <path d="M12 20.5l5.5-1.5 1.3-14.5h-6.8v16z" fill="#EF652A"/>
        <path d="M12 10h3l.2-2h-3.2v-2h5.5l-.6 6.5h-4.9v-2.5zm0 5.5v-2.5h2.5l-.2 2.5-2.3.7v2.3l4.5-1.2.6-7.3h-7.1v2.5h4.5l-.2 2h-4.3z" fill="white"/>
      </svg>
    );
  }

  // CSS3 Logo
  if (skillLower.includes('css')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 2l1.5 17 7 2 7-2 1.5-17h-17z" fill="#1572B6"/>
        <path d="M12 20.5l5.5-1.5 1.3-14.5h-6.8v16z" fill="#33A9DC"/>
        <path d="M12 10h3l.2-2h-3.2v-2h5.5l-.6 6.5h-4.9v-2.5zm0 5.5v-2.5h2.5l-.2 2.5-2.3.7v2.3l4.5-1.2.6-7.3h-7.1v2.5h4.5l-.2 2h-4.3z" fill="white"/>
      </svg>
    );
  }

  // Java Logo
  if (skillLower.includes('java') && !skillLower.includes('javascript')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 14c0 .5-1 1-1 1s1.5.5 3 .5 3-.5 3-.5-1-.5-1-1c0 0-1.5.5-2.5.5s-1.5-.5-1.5-.5z" fill="#E76F00"/>
        <path d="M16 18c0 1-2 2-5.5 2s-5.5-1-5.5-2c0-.5.5-1 1.5-1.5.5 1 2 1.5 4 1.5s3.5-.5 4-1.5c1 .5 1.5 1 1.5 1.5z" fill="#5382A1"/>
        <path d="M9 11.5c-.5-.5-.5-1.5 0-2s1.5-1 2.5-1 2 .5 2.5 1 .5 1.5 0 2c-.5.5-1.5 1-2.5 1s-2-.5-2.5-1z" fill="#E76F00"/>
        <path d="M7 8c1-2 3-3 5-3s4 1 5 3c-1-1-2.5-1.5-5-1.5s-4 .5-5 1.5z" fill="#5382A1"/>
      </svg>
    );
  }

  // Node.js Logo
  if (skillLower.includes('node')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#339933"/>
        <path d="M12 2v20m9-15l-9 5m0 0l-9-5" stroke="#333" strokeWidth="0.5" opacity="0.2"/>
      </svg>
    );
  }

  // Firebase Logo
  if (skillLower.includes('firebase')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 19l7 3 7-3L12 4 5 19z" fill="#FFA611"/>
        <path d="M12 4L5 19l7-5 7 5-7-15z" fill="#F57C00"/>
        <path d="M12 14l-7 5 7-10 7 10-7-5z" fill="#FFCA28"/>
        <circle cx="12" cy="19" r="1.5" fill="#FFA000"/>
      </svg>
    );
  }

  // MySQL Logo
  if (skillLower.includes('mysql')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 6c2 0 3.5 1 4 2 .5-1.5 0-3-1.5-4s-3.5-1-5.5 0c-1 .5-2 1.5-2 2.5 0-1-1-2-2-2.5-2-1-4-.5-5.5 0s-2 2.5-1.5 4c.5-1 2-2 4-2 3 0 5 1.5 5 4v7c0 1 .5 2 1.5 2s1.5-1 1.5-2v-7c0-2.5 2-4 5-4z" fill="#00758F"/>
        <circle cx="8" cy="10" r="1" fill="#00758F"/>
        <circle cx="16" cy="10" r="1" fill="#00758F"/>
        <path d="M6 15c.5 1 1.5 2 3 2s2.5-1 3-2" stroke="#00758F" strokeWidth="0.5" fill="none"/>
      </svg>
    );
  }

  // MongoDB Logo
  if (skillLower.includes('mongodb') || skillLower.includes('mongo')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l3 8h-6l3-8z" fill="#4DB33D"/>
        <path d="M15 11c0 3-1.5 7-3 10-1.5-3-3-7-3-10h6z" fill="#3FA037"/>
        <path d="M11.5 21h1v1h-1v-1z" fill="#4DB33D"/>
      </svg>
    );
  }

  // AWS Logo
  if (skillLower.includes('aws')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14l6-3 6 3v4l-6 3-6-3v-4z" fill="#FF9900"/>
        <path d="M12 6l-6 3v2l6-3 6 3V9l-6-3z" fill="#FF9900"/>
        <path d="M4 15h16v1H4v-1z" fill="#232F3E"/>
      </svg>
    );
  }

  // Docker Logo
  if (skillLower.includes('docker')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="10" width="3" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="7" y="10" width="3" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="11" y="10" width="3" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="7" y="7" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
        <rect x="11" y="7" width="3" height="2.5" rx="0.5" fill="#2496ED"/>
        <path d="M15 11c1 0 2 0 3 1s2 2 3 3c-1 0-2 0-3-1s-2-2-3-3z" fill="#2496ED"/>
      </svg>
    );
  }

  // Kubernetes Logo
  if (skillLower.includes('kubernetes') || skillLower.includes('k8s')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l-2 7h7l-5.5 8 2-7h-7l5.5-8z" fill="none" stroke="#326CE5" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="9" fill="none" stroke="#326CE5" strokeWidth="1"/>
        <circle cx="12" cy="12" r="2" fill="#326CE5"/>
      </svg>
    );
  }

  // GitHub/Git Logo
  if (skillLower.includes('github') || skillLower.includes('git')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#181717"/>
      </svg>
    );
  }

  // Spring Boot Logo
  if (skillLower.includes('spring')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
        <path d="M8 12c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4-4-2-4-4z" fill="white"/>
        <path d="M12 8c-1 0-2 .5-2.5 1.5-.5-1-1.5-1.5-2.5-1.5" stroke="white" strokeWidth="0.8" fill="none"/>
      </svg>
    );
  }

  // Material UI Logo
  if (skillLower.includes('material')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#0081CB"/>
        <path d="M12 2v20M4 7l8 5m0 0l8-5" stroke="white" strokeWidth="0.5" opacity="0.5"/>
      </svg>
    );
  }

  // REST API Logo
  if (skillLower.includes('rest')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="6" height="4" rx="1" fill="#8B5CF6"/>
        <rect x="15" y="6" width="6" height="4" rx="1" fill="#8B5CF6"/>
        <rect x="9" y="14" width="6" height="4" rx="1" fill="#8B5CF6"/>
        <path d="M6 10v4m12-4v4m-6 0V10" stroke="#8B5CF6" strokeWidth="1.5"/>
      </svg>
    );
  }

  // JWT Logo
  if (skillLower.includes('jwt')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="16" height="8" rx="1" fill="#000000"/>
        <circle cx="12" cy="12" r="2" fill="#D63AFF"/>
        <path d="M8 12h2m4 0h2" stroke="#D63AFF" strokeWidth="1"/>
      </svg>
    );
  }

  // Gradle Logo
  if (skillLower.includes('gradle')) {
    return (
      <svg className={sizeClasses[size]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4l-8 8 8 8 8-8-8-8z" fill="#02303A"/>
        <path d="M12 4l-4 4 4 4 4-4-4-4z" fill="#00D488"/>
      </svg>
    );
  }

  // Default fallback with gradient and first letter
  return (
    <div className={`${sizeClasses[size]} rounded-lg flex items-center justify-center bg-gradient-to-br from-[#8847FD] to-[#FE45CB]`}>
      <span className="text-white text-xs font-bold">{skill.charAt(0).toUpperCase()}</span>
    </div>
  );
};

export default SkillIcon;
