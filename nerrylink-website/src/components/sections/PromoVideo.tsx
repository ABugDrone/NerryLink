'use client';
import { useTheme } from '@/components/ui/ThemeProvider';

export function PromoVideo() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="py-16 px-4 sm:px-6" aria-labelledby="promo-video-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className={`glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
            isLight ? 'text-[#DC2626]' : 'text-red-300'
          }`}>
            Watch
          </span>
          <h2
            id="promo-video-heading"
            className="mt-4 text-2xl sm:text-3xl font-black text-[var(--text-primary)]"
          >
            See NerryLink in Action
          </h2>
          <span className="section-accent-line" aria-hidden="true" />
          <p className="mt-4 text-[var(--text-secondary)] text-sm">
            Experience Nigeria&apos;s trusted marketplace for computers and gadgets.
          </p>
        </div>

        <div className="glass rounded-3xl p-4 sm:p-6 overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src="https://app.heygen.com/embeds/70d624a4b10241f28d94a92d9b00ef3a"
              title="Nerrylink Marketplace Ad"
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}