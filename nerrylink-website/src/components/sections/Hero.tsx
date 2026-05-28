'use client';
import { GlassButton } from '@/components/ui/GlassButton';
import { useTheme } from '@/components/ui/ThemeProvider';
import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Scroll progress for B2x badges row on mobile
  const badgesRef = useRef<HTMLDivElement>(null);
  const [badgeScroll, setBadgeScroll] = useState(0);

  const handleBadgeScroll = useCallback(() => {
    const el = badgesRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setBadgeScroll(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = badgesRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleBadgeScroll, { passive: true });
    handleBadgeScroll();
    return () => el.removeEventListener('scroll', handleBadgeScroll);
  }, [handleBadgeScroll]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/Home Hero section.jpeg')" }} aria-hidden="true" />
      <div className={`absolute inset-0 ${
        isLight
          ? 'bg-gradient-to-br from-white/95 via-purple-50/92 to-red-50/88'
          : 'bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/80'
      }`} aria-hidden="true" />

      {/* Ambient glow blobs */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[80px]" aria-hidden="true" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/6 rounded-full blur-[80px]" aria-hidden="true" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[60px]" aria-hidden="true" />

      {/* CSS-animated SVG decorations — hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 text-violet-400/10 animate-spin-slow" aria-hidden="true">
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.35">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <div className="hidden md:block absolute bottom-32 left-10 text-red-400/10 animate-spin-slow-reverse" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.35">
          <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      </div>
      <div className="hidden lg:block absolute top-40 left-1/4 text-sky-400/8 animate-float" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center py-24"
      >
        <motion.span variants={itemVariants} className={`inline-block glass px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5 ${
          isLight ? 'text-[#6B21A8]' : 'text-violet-300'
        }`}>
          Nigeria&apos;s Trusted Tech Store
        </motion.span>

        <motion.h1 
          variants={itemVariants} 
          className={`relative text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4 ${
            isLight ? 'text-[#1a0533]' : 'text-white'
          }`}
        >
          <span className="inline-flex items-center gap-2">
            {/* Laptop Icon */}
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              className="text-sky-400/30 animate-star-converge-1 flex-shrink-0"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span className="animate-slide-from-left inline-block">NerryLink&apos;s</span>
          </span>{' '}
          <span className={`animate-slide-from-right inline-block ${isLight
            ? 'bg-gradient-to-r from-[#6B21A8] to-[#DC2626] bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent'
          }`}>Gadget</span>
          {/* Phone Icon */}
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-violet-400/30 animate-star-converge-2 inline-block ml-2"
            aria-hidden="true"
          >
            <rect x="5" y="2" width="14" height="20" rx="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
          <br />
          <span className="animate-slide-from-bottom inline-block">Store</span>
          {/* Headphone Icon */}
          <svg 
            width="30" 
            height="30" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-pink-400/30 animate-icon-converge-3 inline-block ml-2"
            aria-hidden="true"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
          </svg>
          {/* Bag Icon */}
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="text-amber-400/30 animate-icon-converge-4 inline-block ml-1"
            aria-hidden="true"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </motion.h1>

        <motion.p variants={itemVariants} className={`text-xs sm:text-sm font-bold mb-4 tracking-wide flex items-center justify-center gap-2 ${
          isLight ? 'text-[#DC2626]' : 'text-red-400/90'
        }`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
          CAC Registered Business · NerryLink&apos;s Global Services
        </motion.p>

        <motion.p variants={itemVariants} className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed px-2 ${
          isLight ? 'text-[#4a2080]/80' : 'text-white/65'
        }`}>
          Laptops · Phones · Bags · Expert Tech Services — retail &amp; wholesale.
          Serving individuals, businesses, government agencies, and NGOs across Nigeria.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-3 justify-center mb-6 px-4 sm:px-0">
          <GlassButton href="/products" variant="primary" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto shadow-lg shadow-violet-500/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Shop Now
          </GlassButton>
          <GlassButton href="/contact" variant="whatsapp" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full xs:w-auto shadow-lg shadow-green-500/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Contact Us
          </GlassButton>
        </motion.div>

        {/* Client type badges — scroll horizontally on mobile */}
        <motion.div variants={itemVariants} className="sm:hidden">
          <div
            ref={badgesRef}
            onScroll={handleBadgeScroll}
            className="flex gap-2 overflow-x-auto pb-1 px-2 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {isLight ? (
              <>
                <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-sky-100 border-sky-400 text-sky-800">B2C Retail</span>
                <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-amber-100 border-amber-500 text-amber-800">B2B Wholesale</span>
                <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-red-100 border-red-400 text-red-800">B2G Government</span>
                <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-green-100 border-green-500 text-green-800">B2NGO Non-Profit</span>
                <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-purple-100 border-purple-400 text-purple-800">Bags &amp; Accessories</span>
              </>
            ) : (
              <>
                {[
                  { label: 'B2C Retail', cls: 'text-sky-300 border-sky-500/30 bg-sky-500/10' },
                  { label: 'B2B Wholesale', cls: 'text-amber-300 border-amber-500/30 bg-amber-500/10' },
                  { label: 'B2G Government', cls: 'text-red-300 border-red-500/30 bg-red-500/10' },
                  { label: 'B2NGO Non-Profit', cls: 'text-green-300 border-green-500/30 bg-green-500/10' },
                  { label: 'Bags & Accessories', cls: 'text-purple-300 border-purple-500/30 bg-purple-500/10' },
                ].map(({ label, cls }) => (
                  <span key={label} className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${cls}`}>{label}</span>
                ))}
              </>
            )}
          </div>
          {/* Scroll progress bar — mobile only */}
          <div className="mx-2 mt-1.5 h-[3px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500"
              style={{ width: `${badgeScroll * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Desktop badges — centered, no scroll bar needed */}
        <motion.div variants={itemVariants} className="hidden sm:flex gap-2 justify-center flex-wrap px-0">
          {isLight ? (
            <>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-sky-100 border-sky-400 text-sky-800">B2C Retail</span>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-amber-100 border-amber-500 text-amber-800">B2B Wholesale</span>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-red-100 border-red-400 text-red-800">B2G Government</span>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-green-100 border-green-500 text-green-800">B2NGO Non-Profit</span>
              <span className="flex-shrink-0 text-xs font-bold px-3 py-1 rounded-full border bg-purple-100 border-purple-400 text-purple-800">Bags &amp; Accessories</span>
            </>
          ) : (
            <>
              {[
                { label: 'B2C Retail', cls: 'text-sky-300 border-sky-500/30 bg-sky-500/10' },
                { label: 'B2B Wholesale', cls: 'text-amber-300 border-amber-500/30 bg-amber-500/10' },
                { label: 'B2G Government', cls: 'text-red-300 border-red-500/30 bg-red-500/10' },
                { label: 'B2NGO Non-Profit', cls: 'text-green-300 border-green-500/30 bg-green-500/10' },
                { label: 'Bags & Accessories', cls: 'text-purple-300 border-purple-500/30 bg-purple-500/10' },
              ].map(({ label, cls }) => (
                <span key={label} className={`flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${cls}`}>{label}</span>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
