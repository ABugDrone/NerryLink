'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassModal } from '@/components/ui/GlassModal';
import { GlassButton } from '@/components/ui/GlassButton';
import { ProductCard } from './ProductCard';
import { useFOMOStore } from '@/store/fomoStore';
import { products, Product } from '@/lib/products';
import { buildWhatsAppURL } from '@/lib/whatsapp';
import { PHONE_PRIMARY } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const categories = [
  { id: 'pcs-laptops', label: 'Laptops & Desktops' },
  { id: 'mobile',      label: 'Mobile Devices'     },
  { id: 'gadgets',     label: 'Gadgets'             },
  { id: 'bags',        label: 'Bags'                },
] as const;

type CategoryId = typeof categories[number]['id'];

const productVideos: Record<string, string> = {
  iphone:          '/assets/images/iPhones.mp4',
  samsung:         '/assets/images/Samsung Phones.mp4',
  'bag-sets-existing': '/assets/images/bag sets.mp4',
  'bag-sets-new':  '/assets/images/bags/bag-video.mp4',
};

// Bag video cards shown before the regular bag products
const bagVideoCards = [
  { id: 'bag-sets-existing', src: '/assets/images/bag sets.mp4',      label: 'Bags Collection',          desc: 'Premium bags & accessories showcase' },
  { id: 'bag-sets-new',      src: '/assets/images/bags/bag-video.mp4', label: 'Bags Video',               desc: 'Featured bags & accessories'          },
];

function getCardVariants(isMobile: boolean) {
  return {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: (i: number) => {
      const cols = isMobile ? 2 : 4;
      const delay = isMobile ? Math.floor(i / cols) * 0.06 : i * 0.02;
      return { opacity: 1, y: 0, scale: 1, transition: { delay, duration: 0.3, ease: 'easeOut' } };
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  };
}

export function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('pcs-laptops');
  const [isMobile, setIsMobile]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [clientFilter, setClientFilter] = useState<string>('All');
  const tabListRef = useRef<HTMLDivElement>(null);
  const stockLevels = useFOMOStore((s) => s.stockLevels);
  const viewCounts  = useFOMOStore((s) => s.viewCounts);

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
    handleTabScroll();
    return () => el.removeEventListener('scroll', handleTabScroll);
  }, [handleTabScroll]);

  const filtered = products.filter((p) => {
    if (p.category !== activeCategory) return false;
    if (clientFilter !== 'All' && !(p.clientTypes ?? []).includes(clientFilter as any)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    }
    return true;
  });
  const cardVariants = getCardVariants(isMobile);

  const openWhatsApp = (product: Product) => {
    const url = buildWhatsAppURL(PHONE_PRIMARY, `Hello Nerrylink's! I am interested in the ${product.name}. ${product.whatsappInquiryText}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
        <span className="section-accent-line" aria-hidden="true" />
        <p className="mt-4 text-[var(--text-secondary)]">Click any product to enquire — we&apos;ll get back to you on WhatsApp</p>
      </motion.div>

      {/* Category tabs */}
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
              transition={{ delay: isMobile ? i * 0.08 : i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] ${
                activeCategory === id
                  ? 'tab-active bg-sky-500/30 border border-sky-400/50 text-sky-200 shadow-lg shadow-sky-500/10'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {isMobile && (
          <div className="mx-4 mt-2 h-[3px] rounded-full overflow-hidden sm:hidden bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
        )}
      </div>

      {/* Search & Client Type Filter */}
      <div className="px-4 sm:px-6 mb-6 space-y-3">
        <div className="relative">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="glass w-full pl-10 pr-4 py-2.5 rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['All', 'B2C', 'B2B', 'B2G', 'B2NGO'].map((type) => (
            <button
              key={type}
              onClick={() => setClientFilter(type)}
              className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                clientFilter === type
                  ? 'bg-sky-500/20 border-sky-400/50 text-sky-300'
                  : 'glass text-[var(--text-muted)] border-white/10 hover:border-white/20 hover:text-[var(--text-primary)]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {searchQuery && (
          <p className="text-xs text-[var(--text-muted)]">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      {/* Product grid */}
      <AnimatePresence mode="wait">
        {activeCategory === 'bags' ? (
          <motion.div
            key="bags"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 px-4 sm:px-6"
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Video preview cards */}
            {bagVideoCards.map((vc, i) => (
              <motion.div
                key={vc.id}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.02, duration: 0.3, ease: 'easeOut' } },
                  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <GlassCard
                  className="overflow-hidden cursor-pointer group hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 product-card h-full"
                  onClick={() => window.open(`https://wa.me/${PHONE_PRIMARY}`, '_blank', 'noopener,noreferrer')}
                >
                  <div className="product-card-media relative h-44 overflow-hidden rounded-t-2xl">
                    <video
                      src={vc.src}
                      autoPlay muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      aria-label={vc.label}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-end justify-center pb-3">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#25D366]/90 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <WhatsAppIcon width={12} height={12} />
                        Enquire Now
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-[var(--text-primary)] font-semibold text-sm">{vc.label}</h3>
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{vc.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {['B2C', 'B2B'].map((t) => (
                        <span key={t} className="client-badge text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-white/5 border-white/15 text-[var(--text-muted)]">{t}</span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Regular bag products */}
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i + bagVideoCards.length}
                videoSrc={productVideos[product.id]}
                isMobile={isMobile}
                stockLevel={stockLevels[product.id] ?? 10}
                viewCount={viewCounts[product.id] ?? 0}
                cardVariants={cardVariants}
                onClick={setSelectedProduct}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 px-4 sm:px-6"
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                videoSrc={productVideos[product.id]}
                isMobile={isMobile}
                stockLevel={stockLevels[product.id] ?? 10}
                viewCount={viewCounts[product.id] ?? 0}
                cardVariants={cardVariants}
                onClick={setSelectedProduct}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product detail modal */}
      <GlassModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name ?? ''}
      >
        {selectedProduct && (
          <div className="space-y-4">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {selectedProduct.description}
            </p>

            {selectedProduct.clientTypes && selectedProduct.clientTypes.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {selectedProduct.clientTypes.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-white/5 border-white/15 text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {selectedProduct.isRefurbished && (
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-xl">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Certified Refurbished — quality tested
              </div>
            )}

            <GlassButton
              variant="whatsapp"
              className="w-full justify-center"
              onClick={() => {
                openWhatsApp(selectedProduct);
                setSelectedProduct(null);
              }}
            >
              <WhatsAppIcon width={18} height={18} />
              {selectedProduct.isWholesale ? 'Enquire on WhatsApp' : 'Order via WhatsApp'}
            </GlassButton>
          </div>
        )}
      </GlassModal>
    </section>
  );
}
