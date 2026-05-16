import Image from 'next/image';
import { ServiceGrid } from '@/components/sections/ServiceGrid';

export default function ServicesPage() {
  return (
    <div>
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/Tech Services 2.jpeg" alt="NerryLink Tech Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3">Services</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Expert Tech Services</h1>
          <p className="mt-2 text-white/60 max-w-xl">Repairs, upgrades, wholesale supply, government procurement &amp; bags</p>
        </div>
      </section>
      <div className="relative h-32 overflow-hidden">
        <Image src="/assets/images/Tech Services.jpeg" alt="Tech services" fill className="object-cover" />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>
      <ServiceGrid />
    </div>
  );
}
