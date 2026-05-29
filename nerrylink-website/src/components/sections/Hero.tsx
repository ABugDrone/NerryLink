'use client';
import { GlassButton } from '@/components/ui/GlassButton';
import { useTheme } from '@/components/ui/ThemeProvider';
import { motion } from 'framer-motion';

export function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero section">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Branding */}
          <div className="space-y-6">
            <motion.span variants={itemVariants} className={`inline-block glass px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest ${
              isLight ? 'text-[#6B21A8]' : 'text-violet-300'
            }`}>
              CAC Registered Business &middot; NerryLink&apos;s Global Services
            </motion.span>

            <motion.h1 variants={itemVariants} className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight ${
              isLight ? 'text-[#1a0533]' : 'text-white'
            }`}>
              Nigeria&apos;s Trusted Tech Store
            </motion.h1>

            <motion.p variants={itemVariants} className={`text-base sm:text-lg leading-relaxed ${
              isLight ? 'text-[#4a2080]/80' : 'text-white/65'
            }`}>
              Laptops &middot; Phones &middot; Bags &middot; Expert Tech Services &mdash; retail &amp; wholesale.
              Serving individuals, businesses, government agencies, and NGOs across Nigeria.
            </motion.p>
          </div>

          {/* Right: Promo Video + Buttons */}
          <motion.div variants={containerVariants} className="space-y-5">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <span className={`glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block ${
                isLight ? 'text-[#DC2626]' : 'text-red-300'
              }`}>
                Watch
              </span>
              <h2 className="mt-3 text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                See NerryLink in Action
              </h2>
              <p className="mt-2 text-[var(--text-secondary)] text-sm">
                Experience Nigeria&apos;s trusted marketplace for computers and gadgets.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass rounded-3xl p-3 sm:p-4 overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://app.heygen.com/embeds/70d624a4b10241f28d94a92d9b00ef3a"
                  title="Nerrylink Marketplace Ad"
                  allow="encrypted-media; fullscreen;"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
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
          </motion.div>
        </div>
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