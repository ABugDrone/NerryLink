'use client';
import Link from 'next/link';
import { useTheme } from '@/components/ui/ThemeProvider';

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const navLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/products', 'Products'],
  ['/services', 'Services'],
  ['/team', 'Team'],
  ['/contact', 'Contact'],
] as const;

export function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const textMuted = isLight ? 'text-[#4a2080]/60' : 'text-white/50';
  const textFaint = isLight ? 'text-[#4a2080]/40' : 'text-white/30';
  const border = isLight ? 'border-purple-200/50' : 'border-white/10';
  const heading = isLight ? 'text-[#6B21A8]' : 'text-white';
  const badge = isLight
    ? 'bg-purple-50 border-purple-200/80 text-[#6B21A8]'
    : 'bg-white/5 border-white/10 text-white/40';

  const socialBtnBase = `flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200`;
  const socialBtnDark = `${socialBtnBase} bg-white/6 border-white/10 hover:bg-white/12 hover:border-white/20`;
  const socialBtnLight = `${socialBtnBase} bg-white/80 border-purple-200/60 hover:border-purple-400/50 hover:bg-purple-50`;

  return (
    <footer className={`border-t ${border} mt-20`} style={{
      background: isLight ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">

          {/* Brand — wider col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" width={32} height={32} aria-hidden="true" />
              <span className={`text-xl font-black ${
                isLight
                  ? 'bg-gradient-to-r from-[#6B21A8] to-[#DC2626] bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent'
              }`}>
                Nerrylink&apos;s
              </span>
            </div>
            <p className={`text-sm mb-1 ${textMuted}`}>Gadget Store</p>
            <p className={`text-xs mb-4 ${textFaint}`}>CAC: Nerrylink&apos;s Global Services</p>

            {/* B2x badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['B2C', 'B2B', 'B2G', 'B2NGO'].map((t) => (
                <span key={t} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge}`}>{t}</span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a href="https://web.facebook.com/profile.php?id=100067730592515" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" className={isLight ? `${socialBtnLight} text-blue-600` : `${socialBtnDark} text-blue-400`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp" className={isLight ? `${socialBtnLight} text-[#25D366]` : `${socialBtnDark} text-[#25D366]`}>
                {WA_ICON}
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=NERRYLINK'S+GLOBAL+SERVICES" target="_blank" rel="noopener noreferrer"
                aria-label="Google Maps" className={isLight ? `${socialBtnLight} text-red-500` : `${socialBtnDark} text-red-400`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </a>
              <a href="tel:+2348166490440" aria-label="Call us"
                className={isLight ? `${socialBtnLight} text-[#6B21A8]` : `${socialBtnDark} text-violet-400`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className={`font-bold mb-4 text-xs uppercase tracking-widest ${heading}`}>Contact</h3>
            <div className="space-y-3">
              <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#25D366] hover:text-[#1ebe5d] transition-colors text-sm group">
                <span className="flex-shrink-0 opacity-80 group-hover:opacity-100">{WA_ICON}</span>
                <div>
                  <span className="font-semibold">+234 816 649 0440</span>
                  <span className={`ml-2 text-xs font-normal opacity-60`}>(Primary)</span>
                </div>
              </a>
              <a href="https://wa.me/2348149588574" target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2.5 transition-colors text-sm group ${
                  isLight ? 'text-[#25D366]/70 hover:text-[#25D366]' : 'text-[#25D366]/60 hover:text-[#25D366]'
                }`}>
                <span className="flex-shrink-0 opacity-70 group-hover:opacity-100">{WA_ICON}</span>
                <div>
                  <span>+234 814 958 8574</span>
                  <span className="ml-2 text-xs font-normal text-orange-500/80">(Slower)</span>
                </div>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100067730592515" target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2.5 transition-colors text-sm ${
                  isLight ? 'text-[#6B21A8]/70 hover:text-[#6B21A8]' : 'text-sky-400/80 hover:text-sky-300'
                }`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Nerrylink&apos;s Gadget Store
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="md:col-span-4">
            <h3 className={`font-bold mb-4 text-xs uppercase tracking-widest ${heading}`}>Hours</h3>
            <div className={`flex items-start gap-3 text-sm ${textMuted}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className={`mt-0.5 flex-shrink-0 ${isLight ? 'text-[#6B21A8]' : 'text-violet-400'}`} aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <p className={`font-semibold text-sm mb-0.5 ${isLight ? 'text-[#1a0533]' : 'text-white'}`}>
                  Monday – Saturday
                </p>
                <p className={`text-base font-bold ${isLight ? 'text-[#6B21A8]' : 'text-violet-300'}`}>
                  9:00 AM – 7:30 PM
                </p>
                <p className="text-red-500/80 text-xs mt-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500/70 rounded-full inline-block" />
                  Closed on Sundays
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-10 pt-6 border-t ${border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={`text-xs transition-colors ${
                    isLight ? 'text-[#4a2080]/50 hover:text-[#6B21A8]' : 'text-white/40 hover:text-white/80'
                  }`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={`text-xs ${textFaint} whitespace-nowrap`}>
            &copy; {new Date().getFullYear()} Nerrylink&apos;s Gadget Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
