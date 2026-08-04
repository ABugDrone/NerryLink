'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products, type Product } from '@/lib/products';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { buildWhatsAppURL } from '@/lib/whatsapp';
import { PHONE_PRIMARY } from '@/lib/constants';
import { useTheme } from '@/components/ui/ThemeProvider';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imagePath];
  const [activeIndex, setActiveIndex] = useState(0);

  const openWhatsApp = () => {
    const url = buildWhatsAppURL(PHONE_PRIMARY, `Hello Nerrylink's! I am interested in the ${product.name}. ${product.whatsappInquiryText}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <a href="/products/" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to catalogue
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div>
          <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-3 ${isLight ? 'bg-blue-50' : 'glass-elevated'}`}>
            {images[activeIndex]?.startsWith('https') ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={images[activeIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <Image
                src={images[activeIndex]}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-300"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-shrink-0 relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeIndex
                      ? 'border-sky-400 shadow-lg shadow-sky-400/20'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {img.startsWith('https') ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)]">{product.name}</h1>
            <div className="flex flex-wrap gap-2 mt-3">
              {product.isRefurbished && (
                <span className="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  Certified Refurbished
                </span>
              )}
              {product.isWholesale && (
                <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                  Wholesale Available
                </span>
              )}
            </div>
          </div>

          <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
            {product.description}
          </p>

          {product.clientTypes && product.clientTypes.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">Available for</p>
              <div className="flex flex-wrap gap-1.5">
                {product.clientTypes.map((t) => (
                  <span key={t} className="client-badge text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-white/5 border-white/15 text-[var(--text-muted)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-green-500/20"
          >
            <WhatsAppIcon width={20} height={20} />
            {product.isWholesale ? 'Enquire on WhatsApp' : 'Order via WhatsApp'}
          </button>
        </div>
      </div>
    </div>
  );
}