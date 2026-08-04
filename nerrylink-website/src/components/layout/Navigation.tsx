'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/components/ui/ThemeProvider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
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
    ? `${linkBase} bg-blue-100 text-[#1E40AF] font-semibold`
    : `${linkBase} bg-white/15 text-white font-semibold`;
  const linkInactive = isLight
    ? `${linkBase} text-[#1E3A8A]/70 hover:text-[#1E40AF] hover:bg-blue-50`
    : `${linkBase} text-white/70 hover:text-white hover:bg-white/10`;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 300, damping: 30 },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.22, ease: 'easeIn' as const },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.08 + i * 0.05, duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    }),
  };

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
        className={`md:hidden p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] relative z-[9999] ${
          isLight ? 'text-[#1E40AF]/80 hover:bg-blue-50' : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <motion.svg
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          aria-hidden="true"
          animate={open ? 'open' : 'closed'}
        >
          {open
            ? <path d="M18 6L6 18M6 6l12 12" />
            : <path d="M3 6h18M3 12h18M3 18h18" />
          }
        </motion.svg>
      </button>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-[9999] w-[85vw] max-w-sm flex flex-col md:hidden"
              style={{
                background: isLight
                  ? 'rgb(240, 246, 255)'
                  : 'rgb(15,13,24)',
                borderLeft: isLight
                  ? '1px solid rgba(30, 64, 175,0.15)'
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Header */}
              <div className={`flex items-center justify-between px-5 py-5 border-b ${
                isLight ? 'border-blue-200/50' : 'border-white/10'
              }`}>
                <span className={`text-xl font-black ${
                  isLight
                    ? 'bg-gradient-to-r from-[#1E40AF] to-[#DC2626] bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent'
                }`}>
                  NerryLink
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className={`p-2 rounded-xl transition-colors ${
                    isLight
                      ? 'text-[#1E40AF]/70 hover:text-[#1E40AF] hover:bg-blue-50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col flex-1 px-4 pt-4 gap-1 overflow-y-auto">
                {links.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    custom={i}
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-150 ${
                        pathname === href
                          ? isLight
                            ? 'bg-gradient-to-r from-blue-100 to-pink-50 text-[#1E40AF] border border-blue-200/80'
                            : 'bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-300 border border-blue-500/30'
                          : isLight
                            ? 'text-[#1E3A8A]/80 hover:text-[#1E40AF] hover:bg-blue-50'
                            : 'text-white/80 hover:text-white hover:bg-white/8'
                      }`}
                    >
                      {label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={isLight ? 'text-blue-300' : 'text-white/25'} aria-hidden="true">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom contact strip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.3 } }}
                className={`px-5 py-5 border-t flex flex-col gap-3 ${
                  isLight ? 'border-blue-200/50' : 'border-white/10'
                }`}
              >
                <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#25D366] text-sm font-semibold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  +234 816 649 0440
                </a>
                <p className={`text-xs ${isLight ? 'text-blue-400/60' : 'text-white/30'}`}>
                  Mon–Sat · 9:00 AM – 7:30 PM
                </p>

                {/* Socials */}
                <div className={`pt-3 border-t ${isLight ? 'border-blue-200/40' : 'border-white/10'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isLight ? 'text-[#1E40AF]/60' : 'text-white/30'}`}>
                    Follow Us
                  </p>
                  <div className="flex items-center gap-2">
                    {/* Facebook */}
                    <a href="https://web.facebook.com/profile.php?id=100067730592515" target="_blank" rel="noopener noreferrer" aria-label="NerryLink on Facebook"
                      className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-150 ${
                        isLight
                          ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200'
                          : 'bg-white/8 text-blue-400 hover:bg-white/15 border border-white/10'
                      }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    {/* WhatsApp */}
                    <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
                      className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-150 ${
                        isLight
                          ? 'bg-green-50 text-[#25D366] hover:bg-green-100 border border-green-200'
                          : 'bg-white/8 text-[#25D366] hover:bg-white/15 border border-white/10'
                      }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    </a>
                    {/* Location */}
                    <a href="https://www.google.com/maps/search/?api=1&query=NERRYLINK'S+GLOBAL+SERVICES" target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps"
                      className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-150 ${
                        isLight
                          ? 'bg-red-50 text-red-500 hover:bg-red-100 border border-red-200'
                          : 'bg-white/8 text-red-400 hover:bg-white/15 border border-white/10'
                      }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </a>
                    {/* Phone */}
                    <a href="tel:+2348166490440" aria-label="Call NerryLink"
                      className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-150 ${
                        isLight
                          ? 'bg-blue-50 text-[#1E40AF] hover:bg-blue-100 border border-blue-200'
                          : 'bg-white/8 text-blue-400 hover:bg-white/15 border border-white/10'
                      }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
