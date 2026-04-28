import Image from 'next/image';
import { TeamSection } from '@/components/sections/TeamSection';

export default function TeamPage() {
  return (
    <div>
      <section className="relative h-72 sm:h-96 flex items-end overflow-hidden">
        <Image src="/assets/images/Our team.jpeg" alt="NerryLink Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
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
