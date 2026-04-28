'use client';
import { GlassButton } from '@/components/ui/GlassButton';
import { CountdownTimer } from '@/components/fomo/CountdownTimer';
import { useFOMOStore } from '@/store/fomoStore';
import { useTheme } from '@/components/ui/ThemeProvider';

export function Hero() {
  const countdownTarget = useFOMOStore((s) => s.countdownTarget);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/Home Hero section.jpeg')" }} aria-hidden="true" />
      <div className={`absolute inset-0 ${
        isLight
          ? 'bg-gradient-to-br from-white/85 via-purple-50/80 to-red-50/70'
          : 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/80'
      }`} aria-hidden="true" />

      {/* Blobs — hidden on mobile to reduce paint */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" aria-hidden="true" />

      {/* CSS-animated SVG decorations — hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 text-sky-400/15 animate-spin-slow" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-32 left-10 text-emerald-400/15 animate-spin-slow-reverse" aria-hidden="true">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4">
          <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up py-24 sm:py-0">
        <span className={`inline-block glass px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
          isLight ? 'text-[#6B21A8]' : 'text-sky-300'
        }`}>
          Nigeria&apos;s Trusted Tech Store
        </span>
        <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3 ${
          isLight ? 'text-[#1a0533]' : 'text-white'
        }`}>
          NerryLink{' '}
          <span className={isLight
            ? 'bg-gradient-to-r from-[#6B21A8] to-[#DC2626] bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent'
          }>Computer</span>
          <br />&amp; Gadgets
        </h1>
        <p className={`text-xs sm:text-sm font-semibold mb-3 tracking-wide ${
          isLight ? 'text-[#DC2626]' : 'text-red-400/80'
        }`}>
          ✓ CAC Registered Business · NerryLink&apos;s Global Services
        </p>
        <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed px-2 ${
          isLight ? 'text-[#4a2080]/80' : 'text-white/70'
        }`}>
          Laptops · Phones · Luxury Cars · Expert Tech Services — retail &amp; wholesale.
          Serving individuals, businesses, government agencies, and NGOs across Nigeria.
        </p>

        <div className="flex flex-col xs:flex-row gap-3 justify-center mb-6 px-4 sm:px-0">
          <GlassButton href="/products" variant="primary" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Shop Now
          </GlassButton>
          <GlassButton href="/contact" variant="whatsapp" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Contact Us
          </GlassButton>
        </div>

        <div className="flex justify-center mb-5">
          <CountdownTimer targetDate={countdownTarget} />
        </div>

        {/* Client type badges — scroll horizontally on mobile */}
        <div className="flex gap-2 justify-start sm:justify-center overflow-x-auto pb-1 px-2 sm:px-0 scrollbar-hide">
          {[
            { label: 'B2C Retail', cls: 'text-sky-300 border-sky-500/30 bg-sky-500/10' },
            { label: 'B2B Wholesale', cls: 'text-amber-300 border-amber-500/30 bg-amber-500/10' },
            { label: 'B2G Government', cls: 'text-red-300 border-red-500/30 bg-red-500/10' },
            { label: 'B2NGO Non-Profit', cls: 'text-green-300 border-green-500/30 bg-green-500/10' },
            { label: 'Luxury Cars', cls: 'text-purple-300 border-purple-500/30 bg-purple-500/10' },
          ].map(({ label, cls }) => (
            <span key={label} className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${cls}`}>{label}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
