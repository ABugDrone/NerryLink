'use client';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggle}
      className="theme-toggle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      <span className="theme-toggle-knob">
        {isLight ? (
          // Sun icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
            <defs>
              <radialGradient id="sunGlass" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="60%" stopColor="rgba(255,220,80,0.7)" />
                <stop offset="100%" stopColor="rgba(255,160,0,0.5)" />
              </radialGradient>
              <filter id="sunBlur">
                <feGaussianBlur stdDeviation="0.4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Rays */}
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <line key={i}
                x1={12 + 5.5 * Math.cos((deg * Math.PI) / 180)}
                y1={12 + 5.5 * Math.sin((deg * Math.PI) / 180)}
                x2={12 + 7.5 * Math.cos((deg * Math.PI) / 180)}
                y2={12 + 7.5 * Math.sin((deg * Math.PI) / 180)}
                stroke="rgba(255,200,50,0.9)" strokeWidth="1.5" strokeLinecap="round"
              />
            ))}
            {/* Glass circle */}
            <circle cx="12" cy="12" r="4.5" fill="url(#sunGlass)" filter="url(#sunBlur)"
              stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" />
            {/* Gloss highlight */}
            <ellipse cx="10.8" cy="10.5" rx="1.4" ry="0.8"
              fill="rgba(255,255,255,0.55)" transform="rotate(-30 10.8 10.5)" />
          </svg>
        ) : (
          // Moon icon
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
            <defs>
              <radialGradient id="moonGlass" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                <stop offset="50%" stopColor="rgba(180,190,255,0.6)" />
                <stop offset="100%" stopColor="rgba(100,110,200,0.4)" />
              </radialGradient>
              <filter id="moonBlur">
                <feGaussianBlur stdDeviation="0.3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Moon crescent */}
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
              fill="url(#moonGlass)" filter="url(#moonBlur)"
              stroke="rgba(255,255,255,0.5)" strokeWidth="0.5"
            />
            {/* Gloss highlight */}
            <ellipse cx="10" cy="8.5" rx="1.8" ry="0.9"
              fill="rgba(255,255,255,0.5)" transform="rotate(-40 10 8.5)" />
          </svg>
        )}
      </span>
    </button>
  );
}
