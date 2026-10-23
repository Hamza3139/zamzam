import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const LogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 42, className = '' }) => (
  <svg 
    viewBox="0 0 120 120" 
    width={size} 
    height={size} 
    className={`shrink-0 drop-shadow-sm ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Zamzam Blinds Logo"
  >
    <defs>
      {/* Metallic Gold Gradient */}
      <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBF2DB" />
        <stop offset="25%" stopColor="#E2C167" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="75%" stopColor="#B8860B" />
        <stop offset="100%" stopColor="#8F6209" />
      </linearGradient>

      {/* Deep Royal Navy Metallic Gradient */}
      <linearGradient id="logoNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0B2A59" />
        <stop offset="50%" stopColor="#001B44" />
        <stop offset="100%" stopColor="#00102B" />
      </linearGradient>

      {/* Soft Glow */}
      <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#D4AF37" floodOpacity="0.35" />
      </filter>
    </defs>

    {/* Luxury Squircle Base */}
    <rect 
      x="5" 
      y="5" 
      width="110" 
      height="110" 
      rx="28" 
      fill="url(#logoNavyGrad)" 
      stroke="url(#logoGoldGrad)" 
      strokeWidth="2.5" 
    />

    {/* Subtle Architectural Window Frame Border */}
    <path 
      d="M 22 42 C 22 26, 98 26, 98 42 L 98 94 C 98 97, 96 99, 93 99 L 27 99 C 24 99, 22 97, 22 94 Z" 
      fill="none" 
      stroke="url(#logoGoldGrad)" 
      strokeWidth="0.8" 
      strokeOpacity="0.3" 
      strokeDasharray="2 3" 
    />

    {/* Monogram "Z" Built from Architectural Blinds & Slats */}
    {/* 1. Top Blind Headrail */}
    <rect 
      x="25" 
      y="26" 
      width="70" 
      height="8" 
      rx="4" 
      fill="url(#logoGoldGrad)" 
      filter="url(#logoGlow)" 
    />

    {/* 2. Louvre Slat 1 */}
    <path 
      d="M 87 38.5 L 67 53 L 56 53 L 76 38.5 Z" 
      fill="url(#logoGoldGrad)" 
      opacity="0.95" 
    />
    
    {/* Louvre Slat 2 (Center Core) */}
    <path 
      d="M 72 52 L 48 70 L 37 70 L 61 52 Z" 
      fill="url(#logoGoldGrad)" 
      opacity="0.9" 
    />

    {/* Louvre Slat 3 (Base Connection) */}
    <path 
      d="M 52 69 L 33 83.5 L 24 83.5 L 43 69 Z" 
      fill="url(#logoGoldGrad)" 
      opacity="0.85" 
    />

    {/* 3. Bottom Weighted Louvre Bar */}
    <rect 
      x="25" 
      y="86" 
      width="70" 
      height="8" 
      rx="4" 
      fill="url(#logoGoldGrad)" 
      filter="url(#logoGlow)" 
    />

    {/* Central Luxury Diamond Accent */}
    <polygon 
      points="60,56 64,60 60,64 56,60" 
      fill="#FFFFFF" 
      opacity="0.95" 
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'light',
  showText = true 
}) => {
  const iconDimensions = {
    sm: 34,
    md: 42,
    lg: 52
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl md:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  }[size];

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs'
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <LogoIcon size={iconDimensions} />
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif ${titleSizes} font-bold tracking-tight leading-tight ${
            isLight ? 'text-primary' : 'text-white'
          }`}>
            معرض زمزم للستائر
          </span>
          <span className={`font-sans ${subtitleSizes} font-bold tracking-[0.2em] uppercase ${
            isLight ? 'text-secondary' : 'text-secondary/90'
          }`}>
            Zamzam Blinds • Buraydah
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
