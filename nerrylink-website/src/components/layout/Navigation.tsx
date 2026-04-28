'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ui/ThemeProvider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const linkBase = 'px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150';
  const linkActive = isLight
    ? `${linkBase} bg-purple-100 text-[#6B21A8]`
    : `${linkBase} bg-white/15 text-white`;
  const linkInactive = isLight
    ? `${linkBase} text-[#4a2080]/70 hover:text-[#6B21A8] hover:bg-purple-50`
    : `${linkBase} text-white/70 hover:text-white hover:bg-white/10`;

  return (
    <nav aria-label="Main navigation">
      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={pathname === href ? linkActive : linkInactive}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] ${
          isLight ? 'text-[#6B21A8]/80 hover:bg-purple-50' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open
            ? <path d="M18 6L6 18M6 6l12 12" />
            : <path d="M3 6h18M3 12h18M3 18h18" />
          }
        </svg>
      </button>

      {/* Mobile full-screen overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col"
          style={{
            background: isLight ? 'rgba(248,245,255,0.97)' : 'rgba(5,5,15,0.97)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Close button top-right */}
          <div className={`flex items-center justify-between px-5 py-4 border-b ${isLight ? 'border-purple-200/50' : 'border-white/10'}`}>
            <span className={`text-xl font-black ${isLight ? 'text-[#6B21A8]' : 'bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent'}`}>
              NerryLink
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <ul className="flex flex-col flex-1 justify-center px-6 gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-150 ${
                    pathname === href
                      ? isLight
                        ? 'bg-purple-100 text-[#6B21A8] border border-purple-200'
                        : 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                      : isLight
                        ? 'text-[#4a2080]/80 hover:text-[#6B21A8] hover:bg-purple-50'
                        : 'text-white/80 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={isLight ? 'text-purple-300' : 'text-white/30'} aria-hidden="true">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom contact strip */}
          <div className={`px-6 py-6 border-t flex flex-col gap-3 ${isLight ? 'border-purple-200/50' : 'border-white/10'}`}>
            <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#25D366] text-sm font-semibold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              +234 816 649 0440
            </a>
            <p className={`text-xs ${isLight ? 'text-purple-400/60' : 'text-white/30'}`}>Mon–Sat · 9:00 AM – 7:30 PM</p>
          </div>
        </div>
      )}
    </nav>
  );
}
