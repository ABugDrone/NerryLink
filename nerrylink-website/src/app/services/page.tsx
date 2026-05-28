import Image from 'next/image';
import type { Metadata } from 'next';
import { ServiceGrid } from '@/components/sections/ServiceGrid';

export const metadata: Metadata = {
  title: "Tech Services — Repairs, Upgrades & Wholesale | Nerrylink's Gadget Store",
  description: "Expert tech services including repairs, software installs, hardware upgrades, B2B wholesale, government procurement (B2G), and NGO supply (B2NGO) in Nigeria.",
  openGraph: {
    title: "Tech Services — Repairs, Upgrades & Wholesale | Nerrylink's",
    description: 'Expert tech services: repairs, installs, upgrades, B2B, B2G, and B2NGO supply in Nigeria.',
    url: 'https://nerrylinks.web.app/services/',
    siteName: "Nerrylink's Gadget Store",
    images: [{ url: '/assets/images/Tech Services.jpeg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/Tech Services 2.jpeg" alt="NerryLink Tech Services" fill className="object-cover" priority />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/35 dark:block hidden" />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 dark:hidden block" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3">Services</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Expert Tech Services</h1>
          <p className="mt-2 text-white/60 max-w-xl">Repairs, upgrades, wholesale supply, government procurement &amp; bags</p>
        </div>
      </section>
      <div className="relative h-32 overflow-hidden">
        <Image src="/assets/images/Tech Services.jpeg" alt="Tech services" fill className="object-cover" />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>
      <ServiceGrid />
    </div>
  );
}
