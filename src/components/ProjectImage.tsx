import React, { useState } from 'react';

interface ProjectImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Robust image component that handles:
 * 1. Vite-bundled asset paths
 * 2. Stable public /images/... paths
 * 3. Automatic normalization of legacy `/src/assets/...` paths
 * 4. Fallback cascading so broken image icons never appear
 */
export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  loading = 'lazy',
}) => {
  // Normalize source if it inadvertently contains a dev-only '/src/assets/' path
  const normalizeSrc = (url: string) => {
    if (!url) return '';
    if (url.startsWith('/src/assets/images/')) {
      return url.replace('/src/assets/images/', '/images/');
    }
    if (url.startsWith('/src/assets/')) {
      return url.replace('/src/assets/', '/');
    }
    return url;
  };

  const initialSrc = normalizeSrc(src);
  const normalizedFallback = fallbackSrc ? normalizeSrc(fallbackSrc) : '';

  const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);
  const [errorState, setErrorState] = useState<'none' | 'triedFallback' | 'failed'>('none');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Sync if prop changes
  React.useEffect(() => {
    const next = normalizeSrc(src);
    setCurrentSrc(next);
    setErrorState('none');
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (errorState === 'none' && normalizedFallback && normalizedFallback !== currentSrc) {
      setErrorState('triedFallback');
      setCurrentSrc(normalizedFallback);
    } else {
      setErrorState('failed');
    }
  };

  if (errorState === 'failed') {
    // Elegant high-tech fallback container if neither primary nor fallback images could load
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1c1e] via-[#121416] to-[#0c0e10] p-6 text-center select-none border border-[#333537] ${className}`}
      >
        <div className="w-12 h-12 rounded-lg bg-[#282a2c] border border-[#333537] flex items-center justify-center mb-3 text-[#b0f753]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <span className="font-headline-sm text-sm text-white font-medium mb-1">{alt}</span>
        <span className="font-label-tech text-[10px] text-[#b0f753] tracking-widest uppercase">
          // SYSTEM INTERFACE TELEMETRY
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${!isLoaded ? 'opacity-80 blur-[1px]' : 'opacity-100 blur-0'} transition-all duration-300`}
    />
  );
};
