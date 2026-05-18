import Image from 'next/image';
import type { Metadata } from 'next';
import { TeamSection } from '@/components/sections/TeamSection';

export const metadata: Metadata = {
  title: "Our Team — Nerrylink's Gadget Store",
  description: "Meet the passionate and certified team behind Nerrylink's Gadget Store — dedicated to delivering the best tech products and services in Nigeria.",
};

export default function TeamPage() {
  return (
    <div>
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/Our team.jpeg" alt="NerryLink Team" fill className="object-cover" priority />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/35 dark:block hidden" />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/50 dark:hidden block" />
        <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto w-full animate-fade-up">
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold text-purple-300 uppercase tracking-widest mb-3">Our Team</span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Meet the People Behind NerryLink</h1>
          <p className="mt-2 text-white/60">Passionate, certified, and dedicated to your tech needs</p>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}
