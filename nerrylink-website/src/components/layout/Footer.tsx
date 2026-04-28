'use client';
import Link from 'next/link';
import { useTheme } from '@/components/ui/ThemeProvider';

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const text = isLight ? 'text-[#1a0533]' : 'text-white';
  const textMuted = isLight ? 'text-[#4a2080]/60' : 'text-white/60';
  const textFaint = isLight ? 'text-[#4a2080]/40' : 'text-white/40';
  const border = isLight ? 'border-purple-200/50' : 'border-white/10';
  const heading = isLight ? 'text-[#6B21A8]' : 'text-white';
  const badge = isLight ? 'bg-purple-50 border-purple-200 text-[#6B21A8]' : 'bg-white/5 border-white/10 text-white/40';

  return (
    <footer className={`glass border-t ${border} mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <span className={`text-2xl font-black ${isLight
              ? 'bg-gradient-to-r from-[#6B21A8] to-[#DC2626] bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent'
            }`}>
              NerryLink
            </span>
            <p className={`mt-2 text-sm ${textMuted}`}>Computer and Gadgets</p>
            <p className={`mt-1 text-xs ${textFaint}`}>CAC: NerryLink&apos;s Global Services</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {['B2C', 'B2B', 'B2G', 'B2NGO'].map((t) => (
                <span key={t} className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${badge}`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold mb-3 text-sm uppercase tracking-wider ${heading}`}>Contact</h3>
            <div className="space-y-2">
              <a href="https://wa.me/2348166490440" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#25D366]/80 transition-colors text-sm">
                {WA_ICON}
                <span>+234 816 649 0440 <span className="text-[#25D366]/50 text-xs font-normal">(Primary)</span></span>
              </a>
              <a href="https://wa.me/2348149588574" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366]/60 hover:text-[#25D366] transition-colors text-sm">
                {WA_ICON}
                <span>+234 814 958 8574 <span className="text-orange-500/70 text-xs font-normal">(Slower response)</span></span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61580632770804" target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors text-sm ${isLight ? 'text-[#6B21A8] hover:text-[#7C3AED]' : 'text-sky-400 hover:text-sky-300'}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Facebook Page
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className={`font-semibold mb-3 text-sm uppercase tracking-wider ${heading}`}>Hours</h3>
            <div className={`flex items-start gap-2 text-sm ${textMuted}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                className={`mt-0.5 flex-shrink-0 ${isLight ? 'text-[#6B21A8]' : 'text-sky-400'}`} aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <p>Monday – Saturday</p>
                <p className={`font-medium ${text}`}>9:00 AM – 7:30 PM</p>
                <p className="text-red-500/80 text-xs mt-1">Closed on Sundays</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t ${border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 justify-center">
              {[['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/services', 'Services'], ['/team', 'Team'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className={`text-xs transition-colors ${isLight ? 'text-[#4a2080]/50 hover:text-[#6B21A8]' : 'text-white/50 hover:text-white'}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className={`text-xs ${textFaint}`}>&copy; {new Date().getFullYear()} NerryLink Computer and Gadgets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
