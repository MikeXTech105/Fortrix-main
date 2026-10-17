import React from 'react';

interface FortrixLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'white' | 'brand';
  iconOnly?: boolean;
  className?: string;
}

export const FortrixLogo: React.FC<FortrixLogoProps> = ({
  size = 'md',
  iconOnly = false,
  className = '',
}) => {
  // Dimension tokens based on standard sizes
  const config = {
    sm: {
      iconSize: 'w-6 h-6',
      titleSize: 'text-sm tracking-[0.12em]',
      subSize: 'text-[8px] tracking-[0.28em]',
      gap: 'gap-2',
    },
    md: {
      iconSize: 'w-8 h-8 md:w-9 md:h-9',
      titleSize: 'text-base md:text-lg tracking-[0.14em]',
      subSize: 'text-[9px] md:text-[10px] tracking-[0.32em]',
      gap: 'gap-3',
    },
    lg: {
      iconSize: 'w-11 h-11 md:w-12 md:h-12',
      titleSize: 'text-xl md:text-2xl tracking-[0.14em]',
      subSize: 'text-[10px] md:text-[11px] tracking-[0.35em]',
      gap: 'gap-3.5',
    },
    xl: {
      iconSize: 'w-14 h-14 md:w-16 md:h-16',
      titleSize: 'text-2xl md:text-3xl tracking-[0.15em]',
      subSize: 'text-xs tracking-[0.38em]',
      gap: 'gap-4',
    },
  };

  const current = config[size];

  // Clean geometric diamond emblem with monogram F
  const emblem = (
    <div
      className={`${current.iconSize} shrink-0 relative flex items-center justify-center select-none`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
      >
        {/* Outer Rotated Rounded Diamond */}
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="12"
          transform="rotate(45 50 50)"
          fill="#FFFFFF"
        />
        {/* Architectural Cutout Sculpting Monogram 'F' */}
        <path
          d="M50 24 L68 42 L60 50 L52 42 V70 H42 V24 H50 Z"
          fill="#0c0e10"
        />
        <path
          d="M42 46 H58 V53 H42 Z"
          fill="#FFFFFF"
        />
        {/* High-tech apex accent dots */}
        <circle cx="50" cy="19" r="2.5" fill="#0c0e10" />
      </svg>
    </div>
  );

  if (iconOnly) {
    return <div className={`inline-flex items-center ${className}`}>{emblem}</div>;
  }

  return (
    <div className={`inline-flex items-center ${current.gap} select-none ${className}`}>
      {emblem}
      <div className="flex flex-col justify-center">
        <span
          className={`font-sans font-black text-white uppercase leading-none ${current.titleSize}`}
          style={{ letterSpacing: '0.14em' }}
        >
          FORTRIX
        </span>
        <span
          className={`font-mono font-bold text-[#b0f753] uppercase leading-tight mt-0.5 ${current.subSize}`}
          style={{ letterSpacing: '0.3em' }}
        >
          INFOTECH
        </span>
      </div>
    </div>
  );
};
