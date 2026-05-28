'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { StockIndicator } from '@/components/fomo/StockIndicator';
import { SocialProof } from '@/components/fomo/SocialProof';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index: number;
  videoSrc?: string;
  isMobile?: boolean;
  stockLevel: number;
  viewCount: number;
  cardVariants: {
    hidden: object;
    visible: (i: number) => object;
    exit: object;
  };
  onClick: (product: Product) => void;
}

export function ProductCard({
  product,
  index,
  videoSrc,
  isMobile = false,
  stockLevel,
  viewCount,
  cardVariants,
  onClick,
}: ProductCardProps) {
  const mobileX = isMobile ? (index % 2 === 0 ? -24 : 24) : 0;

  return (
    <motion.div
      key={product.id}
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 36, x: mobileX, scale: 0.96 },
        visible: (i: number) => {
          const result = cardVariants.visible(i);
          return { ...result, x: 0 };
        },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <GlassCard
        className="overflow-hidden cursor-pointer group hover:border-sky-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 product-card h-full"
        onClick={() => onClick(product)}
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
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/icons/placeholder.svg';
              }}
              loading="lazy"
            />
          ) : (
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/icons/placeholder.svg';
              }}
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
            <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#25D366]/90 px-3 py-1.5 rounded-full">
              <WhatsAppIcon width={12} height={12} />
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
          <h3 className="text-[var(--text-primary)] font-semibold text-sm leading-snug">
            <Link href={`/products/${product.id}/`} className="hover:text-sky-400 transition-colors" onClick={(e) => e.stopPropagation()}>
              {product.name}
            </Link>
          </h3>
          <p className="text-[var(--text-secondary)] text-xs leading-relaxed line-clamp-2">
            {product.description}
          </p>
          {product.clientTypes && product.clientTypes.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.clientTypes.map((t) => (
                <span
                  key={t}
                  className="client-badge text-[10px] font-semibold px-1.5 py-0.5 rounded border bg-white/5 border-white/15 text-[var(--text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <StockIndicator quantity={stockLevel} />
          </div>
          <SocialProof viewCount={viewCount} />
          <Link
            href={`/products/${product.id}/`}
            className="text-[10px] font-semibold text-sky-400/70 hover:text-sky-400 transition-colors flex items-center gap-1 pt-1"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </Link>
        </div>
      </GlassCard>
    </motion.div>
  );
}
