'use client';
import { useTheme } from '@/components/ui/ThemeProvider';

const partners = [
  {
    name: 'MovingTech',
    abbr: 'MT',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.15)',
    tagline: 'Mobility Solutions',
  },
  {
    name: 'Dasalt 360',
    abbr: 'D3',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.15)',
    tagline: 'Full-Circle Services',
  },
  {
    name: 'Toko Academy',
    abbr: 'TA',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.15)',
    tagline: 'Education & Training',
  },
  {
    name: 'Horizontal Properties',
    abbr: 'HP',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.15)',
    tagline: 'Real Estate',
  },
  {
    name: 'Go Sharp-Sharp',
    abbr: 'GS',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.15)',
    tagline: 'Fast Logistics',
  },
  {
    name: 'Bentouch Africa',
    abbr: 'BA',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.15)',
    tagline: 'Digital Innovation',
  },
  {
    name: 'PC Klinic',
    abbr: 'PK',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.15)',
    tagline: 'Tech Repairs',
  },
  {
    name: 'City Oil',
    abbr: 'CO',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.15)',
    tagline: 'Energy & Fuel',
  },
  {
    name: 'Paddy Kitchen',
    abbr: 'PK',
    color: '#84CC16',
    bg: 'rgba(132,204,22,0.15)',
    tagline: 'Food & Hospitality',
  },
];

// Duplicate for seamless infinite scroll
const track = [...partners, ...partners];

function PartnerLogo({ partner }: { partner: typeof partners[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/10 mx-3 min-w-[140px]"
      style={{ background: partner.bg }}
      aria-label={partner.name}
    >
      {/* Mock logo mark */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg tracking-tight shadow-lg"
        style={{ background: partner.color, color: '#fff', letterSpacing: '-0.03em' }}
      >
        {partner.abbr}
      </div>
      <div className="text-center">
        <p className="text-[var(--text-primary)] font-bold text-xs leading-tight">{partner.name}</p>
        <p className="text-[var(--text-muted)] text-[10px] mt-0.5">{partner.tagline}</p>
      </div>
    </div>
  );
}

export function PartnersSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="py-16 overflow-hidden" aria-labelledby="partners-heading">
      <div className="text-center mb-10 px-4">
        <span className={`glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
          isLight ? 'text-[#6B21A8]' : 'text-violet-300'
        }`}>
          Our Partners
        </span>
        <h2
          id="partners-heading"
          className="mt-4 text-2xl sm:text-3xl font-black text-[var(--text-primary)]"
        >
          Trusted by Great Organisations
        </h2>
        <p className="mt-2 text-[var(--text-secondary)] text-sm max-w-lg mx-auto">
          We collaborate with leading businesses across Nigeria to deliver the best tech experience.
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        {/* Fade edges */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
          isLight
            ? 'bg-gradient-to-r from-[#f8f5ff] to-transparent'
            : 'bg-gradient-to-r from-[#05050f] to-transparent'
        }`} aria-hidden="true" />
        <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none ${
          isLight
            ? 'bg-gradient-to-l from-[#f8f5ff] to-transparent'
            : 'bg-gradient-to-l from-[#05050f] to-transparent'
        }`} aria-hidden="true" />

        <div
          className="flex partners-scroll"
          style={{ width: 'max-content' }}
          aria-hidden="false"
        >
          {track.map((partner, i) => (
            <PartnerLogo key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
