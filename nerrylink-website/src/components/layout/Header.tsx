'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from '@/components/ui/ThemeProvider';

function NerryLinkLogo() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Nerrylink's Gadget Store home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Nerrylink's Gadget Store logo"
        width={52}
        height={52}
        className="flex-shrink-0 w-[52px] h-[52px]"
        style={{ filter: isLight ? 'none' : 'brightness(1.15) saturate(1.1)' }}
      />
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-black tracking-tight ${
          isLight
            ? 'text-[#1E40AF]'
            : 'bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent'
        }`}>
          Nerrylink's
        </span>
        <span className={`text-[9px] font-semibold uppercase tracking-widest ${
          isLight ? 'text-[#DC2626]' : 'text-red-400/80'
        }`}>
          Gadget Store
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = scrolled
    ? isLight
      ? 'bg-white/80 backdrop-blur-xl border-b border-blue-200/50 shadow-lg shadow-blue-100/30'
      : 'glass border-b border-white/10 shadow-lg'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative gap-3">
        <NerryLinkLogo />
        <div className="flex items-center gap-3">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
