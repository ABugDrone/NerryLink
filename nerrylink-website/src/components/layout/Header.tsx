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
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="NerryLink home">
      {/* Logo SVG from public/logo.svg */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="NerryLink logo"
        width={38}
        height={38}
        className="flex-shrink-0"
        style={{ filter: isLight ? 'none' : 'brightness(1.15) saturate(1.1)' }}
      />
      <div className="flex flex-col leading-none">
        <span className={`text-lg font-black tracking-tight ${
          isLight
            ? 'text-[#6B21A8]'
            : 'bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent'
        }`}>
          NerryLink
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
      ? 'bg-white/80 backdrop-blur-xl border-b border-purple-200/50 shadow-lg shadow-purple-100/30'
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
