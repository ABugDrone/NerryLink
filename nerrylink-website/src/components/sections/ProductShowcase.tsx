'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { StockIndicator } from '@/components/fomo/StockIndicator';
import { SocialProof } from '@/components/fomo/SocialProof';
import { useFOMOStore } from '@/store/fomoStore';
import { products } from '@/lib/products';

const categories = [
  { id: 'pcs-laptops', label: 'Laptops & Desktops' },
  { id: 'mobile', label: 'Mobile Devices' },
  { id: 'bags', label: 'Bags' },
] as const;

const productVideos: Record<string, string> = {
  iphone: '/assets/images/iPhones.mp4',
  samsung: '/assets/images/Samsung Phones.mp4',
  'bag-sets': '/assets/images/bag sets.mp4',
};

function getCardVariants(isMobile: boolean, cols: number) {
  return {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: (i: number) => {
      const delay = isMobile ? Math.floor(i / cols) * 0.12 : i * 0.05;
      return { opacity: 1, y: 0, scale: 1, transition: { delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] } };
    },
    exit: { opacity: 0, scale: 0.92, transition: { duration: 0.18 } },
  };
}

export function ProductShowcase() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<'pcs-laptops' | 'mobile' | 'bags'>('pcs-laptops');
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const stockLevels = useFOMOStore((s) => s.stockLevels);
  const viewCounts = useFOMOStore((s) => s.viewCounts);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleTabScroll = useCallback(() => {
    const el = tabListRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  useEffect(() => {
    const el = tabListRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleTabScroll, { passive: true });
    handleTabScroll(); // init
    return () => el.removeEventListener('scroll', handleTabScroll);
  }, [handleTabScroll]);

  const filtered = products.filter((p) => p.category === activeCategory);
  const cardVariants = getCardVariants(isMobile, 2);
  const handleProductClick = () => router.push('/contact');
  return (
    <section className="py-20 w-full max-w-7xl mx-auto overflow-x-hidden" aria-labelledby="products-heading">
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 uppercase tracking-widest">Our Products</span>
        <h2 id="products-heading" className="mt-4 text-3xl sm:text-4xl font-black text-[var(--text-primary)]">Browse Our Catalogue</h2>
        <p className="mt-2 text-[var(--text-secondary)]">Click any product to enquire — we&apos;ll get back to you on WhatsApp</p>
      </motion.div>

      {/* Category tabs — scrollable on mobile */}
      <div className="relative mb-8 sm:px-6">
        <div
          ref={tabListRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-4 sm:px-0 sm:justify-center sm:flex-wrap"
          role="tablist"
          aria-label="Product categories"
          style={{ WebkitOverflowScrolling: 'touch', paddingRight: '1rem' }}
        >
          {categories.map(({ id, label }, i) => (
            <motion.button
              key={id}
              role="tab"
              aria-selected={activeCategory === id}
              onClick={() => setActiveCategory(id)}
              initial={{ opacity: 0, y: isMobile ? 16 : 0, x: isMobile ? 0 : -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                delay: isMobile ? i * 0.08 : i * 0.04,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
                activeCategory === id
                  ? 'tab-active bg-sky-500/30 border border-sky-400/50 text-sky-200 shadow-lg shadow-sky-500/10'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Scroll progress bar — mobile only */}
        {isMobile && (
          <div className="mx-4 mt-2 h-[3px] rounded-full overflow-hidden sm:hidden bg-white/10 [data-theme='light']:bg-black/10"
            style={{ background: 'rgba(0,0,0,0.1)' }}>
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        )}
      </div>

      {/* Product grid / Bags video */}
      <AnimatePresence mode="wait">
        {activeCategory === 'bags' ? (
          /* ── Bags — full-width video showcase ── */
          <motion.div
            key="bags"
            className="px-4 sm:px-6"
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <GlassCard
              className="overflow-hidden cursor-pointer group hover:border-purple-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 product-card"
              onClick={handleProductClick}
            >
              {/* Video — tall on mobile, shorter on desktop */}
              <div className="product-card-media relative h-72 sm:h-96 overflow-hidden rounded-t-2xl">
                <video
                  src="/assets/images/bag sets.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  aria-label="NerryLink Bag Sets"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Centred enquire badge */}
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <span className="text-white text-sm font-bold flex items-center gap-2 bg-[#25D366]/90 px-5 py-2.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    Enquire Now
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-5 space-y-2">
                <h3 className="text-[var(--text-primary)] font-bold text-base">Bags &amp; Carry Sets</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Laptop bags, backpacks, leather work bags, skin totes, portable handbags and executive office bags — for professionals, students, and travellers. Retail &amp; wholesale available.
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {['B2C', 'B2B', 'B2G', 'B2NGO'].map((t) => (
                    <span key={t} className="client-badge text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-white/5 border-white/15 text-[var(--text-muted)]">{t}</span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          /* ── Laptops & Mobile — standard product grid ── */
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 px-4 sm:px-6"
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((product, i) => {
              const videoSrc = productVideos[product.id];
              const mobileX = isMobile ? (i % 2 === 0 ? -24 : 24) : 0;
              return (
                <motion.div
                  key={product.id}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 36, x: mobileX, scale: 0.96 },
                    visible: cardVariants.visible,
                    exit: cardVariants.exit,
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <GlassCard
                    className="overflow-hidden cursor-pointer group hover:border-sky-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 product-card"
                    onClick={handleProductClick}
                  >
                    {/* Media */}
                    <div className="product-card-media relative h-44 overflow-hidden rounded-t-2xl">
                      {videoSrc ? (
                        <video
                          src={videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          aria-label={product.name}
                        />
                      ) : product.imagePath.startsWith('https://') ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.imagePath}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/assets/icons/placeholder.svg'; }}
                          loading="lazy"
                        />
                      ) : (
                        <Image
                          src={product.imagePath}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/assets/icons/placeholder.svg'; }}
                        />
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                        <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#25D366]/90 px-3 py-1.5 rounded-full">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                          Enquire Now
                        </span>
                      </div>
                      {product.isRefurbished && (
                        <span className="absolute top-2 left-2 bg-amber-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Refurbished
                        </span>
                      )}
                      {product.isWholesale && (
                        <span className="absolute top-2 right-2 bg-purple-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Wholesale
                        </span>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-4 space-y-2">
                      <h3 className="text-[var(--text-primary)] font-semibold text-sm">{product.name}</h3>
                      {product.clientTypes && product.clientTypes.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {product.clientTypes.map((t) => (
                            <span key={t} className="client-badge text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-white/5 border-white/15 text-[var(--text-muted)]">{t}</span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <StockIndicator quantity={stockLevels[product.id] ?? 10} />
                      </div>
                      <SocialProof viewCount={viewCounts[product.id] ?? 0} />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
