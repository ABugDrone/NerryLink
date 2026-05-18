'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { GlassModal } from '@/components/ui/GlassModal';
import { services, Service } from '@/lib/services';
import { buildWhatsAppURL } from '@/lib/whatsapp';

const iconMap: Record<string, React.ReactNode> = {
  wrench: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  laptop: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  cpu: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  headset: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  chat: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  graduation: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  building: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  heart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  car: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>,
};

const categoryConfig = {
  technical: { label: 'Technical Services', color: 'sky', badge: 'bg-sky-500/20 text-sky-300 border-sky-500/30', hoverBorder: 'hover:border-sky-400/50', glow: 'hover:shadow-sky-500/10' },
  support: { label: 'Support Services', color: 'emerald', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', hoverBorder: 'hover:border-emerald-400/50', glow: 'hover:shadow-emerald-500/10' },
  wholesale: { label: 'Wholesale & Enterprise', color: 'purple', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30', hoverBorder: 'hover:border-purple-400/50', glow: 'hover:shadow-purple-500/10' },
};

const clientTypeBadge: Record<string, string> = {
  B2C: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  B2B: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  B2G: 'bg-red-500/15 text-red-300 border-red-500/25',
  B2NGO: 'bg-green-500/15 text-green-300 border-green-500/25',
};

export function ServiceGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const grouped = {
    technical: services.filter((s) => s.category === 'technical'),
    support: services.filter((s) => s.category === 'support'),
    wholesale: services.filter((s) => s.category === 'wholesale'),
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="services-heading">
      <div className="text-center mb-12">
        <span className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 uppercase tracking-widest">Services</span>
        <h2 id="services-heading" className="mt-4 text-3xl sm:text-4xl font-black text-white">Expert Tech Services</h2>
        <span className="section-accent-line" aria-hidden="true" />
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          From individual repairs to government-scale procurement — we serve everyone.
        </p>

        {/* Client type legend */}
        <div className="flex flex-wrap gap-2 justify-center mt-5">
          {Object.entries(clientTypeBadge).map(([type, cls]) => (
            <span key={type} className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${cls}`}>
              {type === 'B2C' && 'Retail (B2C)'}
              {type === 'B2B' && 'Business (B2B)'}
              {type === 'B2G' && 'Government (B2G)'}
              {type === 'B2NGO' && 'NGO (B2NGO)'}
            </span>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center gap-2 glass px-4 py-2 rounded-xl text-orange-300 text-sm font-semibold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          Book your service slot now — limited availability!
        </div>
      </div>

      <div className="space-y-12">
        {(Object.entries(grouped) as [keyof typeof grouped, Service[]][]).map(([cat, items]) => {
          const { label, color, badge } = categoryConfig[cat];
          return (
            <div key={cat}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full bg-${color}-400`} aria-hidden="true" />
                <h3 className={`text-lg font-bold text-${color}-300`}>{label}</h3>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${badge}`}>
                  {items.length} service{items.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <GlassCard
                      className={`flex flex-col gap-3 p-5 cursor-pointer ${categoryConfig[cat].hoverBorder} hover:-translate-y-1 hover:shadow-xl ${categoryConfig[cat].glow} transition-all duration-250 h-full`}
                      onClick={() => setSelectedService(service)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-${color}-500/25 to-${color}-600/10 border border-${color}-500/20 flex items-center justify-center text-${color}-300 shadow-inner`}>
                          {iconMap[service.iconName]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm leading-snug">{service.name}</h4>
                          <p className="text-white/50 text-xs mt-1 line-clamp-2">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${badge}`}>
                          {label}
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Service modal */}
      <GlassModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name ?? ''}
      >
        {selectedService && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-${categoryConfig[selectedService.category].color}-500/20 flex items-center justify-center text-${categoryConfig[selectedService.category].color}-300`}>
                {iconMap[selectedService.iconName]}
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryConfig[selectedService.category].badge}`}>
                {categoryConfig[selectedService.category].label}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{selectedService.description}</p>
            <GlassButton
              variant="whatsapp"
              className="w-full justify-center"
              onClick={() => {
                const url = buildWhatsAppURL('2348166490440', `Hello Nerrylink's! ${selectedService.whatsappBookingText}`);
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              {selectedService.category === 'wholesale' ? 'Enquire on WhatsApp' : 'Book via WhatsApp'}
            </GlassButton>
          </div>
        )}
      </GlassModal>
    </section>
  );
}
